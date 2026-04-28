import { Router } from "express";
import { ProposalsService } from "./proposals.service";
import { ProposalsController } from "./proposals.controller";
import { FindProposalsQuerySchema, JobSchema } from "./proposals.schema";
import { validate } from "../../middleware/validate";

export const proposalsRoutes = Router();

const controllers = new ProposalsController(new ProposalsService());

proposalsRoutes.get(
  "/",
  validate(FindProposalsQuerySchema, "query"),
  controllers.findAll,
);
proposalsRoutes.post(
  "/generate",
  validate(JobSchema),
  controllers.generateProposal,
);
proposalsRoutes.get("/:id", controllers.findOne);
proposalsRoutes.delete("/:id", controllers.deleteOne);
