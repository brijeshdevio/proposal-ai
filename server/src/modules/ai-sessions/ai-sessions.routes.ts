import { Router } from "express";
import { AISessionsController } from "./ai-sessions.controller";
import { AISessionsService } from "./ai-sessions.service";

export const aiSessionsRoutes = Router();

const controllers = new AISessionsController(new AISessionsService());

aiSessionsRoutes.get("/", controllers.findAll);
aiSessionsRoutes.get("/:id", controllers.findOne);
