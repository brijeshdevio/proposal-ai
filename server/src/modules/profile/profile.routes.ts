import { Router } from "express";
import { ProfileService } from "./profile.service";
import { ProfileController } from "./profile.controller";
import { validate } from "../../middleware/validate";
import { ProfileUpdateSchema } from "./profile.schema";

export const profileRoutes = Router();

const controllers = new ProfileController(new ProfileService());

profileRoutes.get("/", controllers.findProfile);
profileRoutes.put(
  "/",
  validate(ProfileUpdateSchema),
  controllers.updateProfile,
);
