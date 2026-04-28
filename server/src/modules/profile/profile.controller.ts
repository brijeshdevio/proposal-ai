import { Request, Response } from "express";
import { ProfileService } from "./profile.service";
import { UnauthorizedException } from "../../utils/error";
import { apiResponse } from "../../utils/api-response";

export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  findProfile = async (req: Request, res: Response) => {
    if (!req.user?.id) throw new UnauthorizedException();
    const profile = await this.profileService.findProfile(req.user.id);

    apiResponse(res, { data: profile });
  };

  updateProfile = async (req: Request, res: Response) => {
    if (!req.user?.id) throw new UnauthorizedException();
    const updatedProfile = await this.profileService.updateProfile(
      req.user.id,
      req.body,
    );

    apiResponse(res, {
      message: "Profile updated successfully",
      data: updatedProfile,
    });
  };
}
