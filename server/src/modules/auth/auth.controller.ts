import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { type Request, type Response } from 'express';
import {
  ACCESS_COOKIE,
  ACCESS_TOKEN_COOKIE_TTL,
  REFRESH_COOKIE,
  REFRESH_TOKEN_COOKIE_TTL,
} from 'src/common/constants';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { apiResponse } from 'src/common/utils/api-response';
import { setCookie } from 'src/common/utils/cookie';

import { AuthService } from './auth.service';
import { LoginDto, LoginSchema } from './dto/login.dto';
import { RegisterDto, RegisterSchema } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(RegisterSchema))
  async register(@Body() dto: RegisterDto) {
    const data = await this.authService.register(dto);
    return apiResponse({ data, message: 'User registered successfully' });
  }

  @Post('login')
  @UsePipes(new ZodValidationPipe(LoginSchema))
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.authService.login(dto);
    setCookie(res, ACCESS_COOKIE, data.accessToken, {
      maxAge: ACCESS_TOKEN_COOKIE_TTL,
    });
    setCookie(res, REFRESH_COOKIE, data.refreshToken, {
      maxAge: REFRESH_TOKEN_COOKIE_TTL,
      path: '/api/auth/refresh',
    });
    return apiResponse({ message: 'User logged in successfully' });
  }

  @Post('refresh')
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const rawToken = req.cookies[REFRESH_COOKIE] as string;
    console.log(rawToken);
    if (!rawToken) throw new UnauthorizedException('Invalid refresh token');

    const data = await this.authService.refreshToken(rawToken);
    setCookie(res, ACCESS_COOKIE, data.accessToken, {
      maxAge: ACCESS_TOKEN_COOKIE_TTL,
    });
    setCookie(res, REFRESH_COOKIE, data.refreshToken, {
      maxAge: REFRESH_TOKEN_COOKIE_TTL,
      path: '/api/auth/refresh',
    });
    return apiResponse({ message: 'Refresh token rotated successfully' });
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(
    @CurrentUser('sessionId') sessionId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(sessionId);
    setCookie(res, ACCESS_COOKIE, '', { maxAge: 0 });
    setCookie(res, REFRESH_COOKIE, '', { maxAge: 0 });
    return apiResponse({ message: 'User logged out successfully' });
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getUserById(@CurrentUser('id') userId: string) {
    const data = await this.authService.getUserById(userId);
    return apiResponse({ data });
  }
}
