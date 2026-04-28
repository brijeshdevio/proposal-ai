import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { prisma } from "../../lib/prisma";
import {
  InternalServerErrorException,
  NotFoundException,
} from "../../utils/error";
import { ProfileUpdateDto } from "./profile.schema";
import { PRISMA_CODES } from "../../constants";

export class ProfileService {
  constructor() {}

  async findProfile(userId: string) {
    const profile = await prisma.profile.findFirst({
      where: {
        userId,
      },
      omit: { userId: true },
    });

    if (!profile) {
      throw new NotFoundException("Profile not found");
    }

    return profile;
  }

  async updateProfile(userId: string, data: ProfileUpdateDto) {
    try {
      return await prisma.profile.update({
        where: {
          userId,
        },
        data: {
          ...data,
        },
        omit: {
          userId: true,
          bio: true,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PRISMA_CODES.NOT_FOUND
      ) {
        throw new NotFoundException("Profile not found");
      }

      throw new InternalServerErrorException();
    }
  }
}
