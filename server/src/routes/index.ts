import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { profileRoutes } from "../modules/profile/profile.routes";
import { proposalsRoutes } from "../modules/proposals/proposals.routes";
import { aiSessionsRoutes } from "../modules/ai-sessions/ai-sessions.routes";
import { authGuard } from "../middleware/auth-guard";

export const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/profile", authGuard, profileRoutes);
routes.use("/proposals", authGuard, proposalsRoutes);
routes.use("/sessions", authGuard, aiSessionsRoutes);
