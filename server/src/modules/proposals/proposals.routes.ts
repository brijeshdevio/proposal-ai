import { Router } from "express";
import { ProposalsService } from "./proposals.service";
import { ProposalsController } from "./proposals.controller";
import { FindProposalsQuerySchema, JobSchema } from "./proposals.schema";
import { validate } from "../../middleware/validate";
import { rateLimit } from "../../middleware/rate-limit";

export const proposalsRoutes = Router();

const controllers = new ProposalsController(new ProposalsService());

proposalsRoutes.get(
  "/",
  validate(FindProposalsQuerySchema, "query"),
  controllers.findAll,
);
proposalsRoutes.post(
  "/generate",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many requests, please try again later.",
  }),
  validate(JobSchema),
  controllers.generateProposal,
);
proposalsRoutes.get("/:id", controllers.findOne);
proposalsRoutes.delete("/:id", controllers.deleteOne);
