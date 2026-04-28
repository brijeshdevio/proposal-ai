import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { profileRoutes } from "../modules/profile/profile.routes";
import { authGuard } from "../middleware/auth-guard";
import { proposalsRoutes } from "../modules/proposals/proposals.routes";

export const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/profile", authGuard, profileRoutes);
routes.use("/proposals", authGuard, proposalsRoutes);
