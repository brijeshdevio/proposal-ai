import { Router } from "express";
import { AISessionsController } from "../ai-sessions/ai-sessions.controller";
import { DashboardController } from "./dashboard.controller";
import { DashboardService } from "./dashboard.service";

export const dashboardRoutes = Router();

const controllers = new DashboardController(new DashboardService());

dashboardRoutes.get("/stats", controllers.stats);
