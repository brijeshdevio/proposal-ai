import crypto from 'node:crypto';

import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { hash, verify } from 'argon2';
import {
  DUMMY_HASH,
  PRISMA_CODES,
  REFRESH_TOKEN_TTL,
  SESSION_TOKEN_TTL,
} from 'src/common/constants';
import { PrismaService } from 'src/database/prisma/prisma.service';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  private async generateTokens(
    userId: string,
    sessionId: string,
    role: string,
  ) {
    const rawToken = crypto.randomBytes(64).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');

    await this.prismaService.refreshToken.deleteMany({
      where: { sessionId },
    });

    await this.prismaService.refreshToken.create({
      data: {
        tokenHash: hashedToken,
        expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL),
        sessionId,
      },
    });

    const accessToken = await this.jwtService.signAsync({
      sub: userId,
      sessionId: sessionId,
      role,
    });

    return {
      accessToken,
      refreshToken: rawToken,
    };
  }

  async register(dto: RegisterDto) {
    const hashPassword = await hash(dto.password);
    try {
      return await this.prismaService.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          passwordHash: hashPassword,
          role: 'USER',
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PRISMA_CODES.CONFLICT
      ) {
        throw new ConflictException(
          `User with email ${dto.email} already exists`,
        );
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    const passwordToCheck: string = user?.passwordHash ?? DUMMY_HASH;
    const valid = await verify(passwordToCheck, dto.password);
    if (!valid || !user) throw new UnauthorizedException('Invalid credentials');

    const session = await this.prismaService.session.create({
      data: {
        userId: user.id,
        expiresAt: new Date(Date.now() + SESSION_TOKEN_TTL),
      },
    });

    return await this.generateTokens(user.id, session.id, user.role);
  }

  async refreshToken(rawToken: string) {
    const hashedToken = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');

    const token = await this.prismaService.refreshToken.findFirst({
      where: {
        tokenHash: hashedToken,
        isRevoked: false,
        expiresAt: { gt: new Date() },
        session: {
          expiresAt: { gt: new Date() },
        },
      },
      select: {
        id: true,
        sessionId: true,
        session: {
          select: {
            user: {
              select: {
                id: true,
                role: true,
              },
            },
          },
        },
      },
    });

    if (!token || !token?.sessionId || !token?.session?.user?.id) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    await this.prismaService.refreshToken.update({
      where: { id: token.id },
      data: { isRevoked: true },
    });

    return await this.generateTokens(
      token.session.user.id,
      token.sessionId,
      token.session.user.role,
    );
  }

  async logout(sessionId: string) {
    await this.prismaService.refreshToken.updateMany({
      where: { sessionId },
      data: { isRevoked: true },
    });

    await this.prismaService.session.delete({
      where: { id: sessionId },
    });
  }

  async getUserById(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    if (!user) {
      throw new UnauthorizedException("You're not logged in");
    }

    return user;
  }
}
