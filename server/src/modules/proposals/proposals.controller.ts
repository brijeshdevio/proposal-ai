import { Request, Response } from "express";
import { ProposalsService } from "./proposals.service";
import { UnauthorizedException } from "../../utils/error";
import { FindProposalsQueryDto } from "./proposals.schema";
import { apiResponse } from "../../utils/api-response";

export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  generateProposal = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.id) throw new UnauthorizedException();

    const data = await this.proposalsService.generateProposal(
      user.id,
      req.body,
    );

    apiResponse(res, { data });
  };

  findAll = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.id) throw new UnauthorizedException();
    const query = req.validatedQuery as unknown as FindProposalsQueryDto;

    const { proposals, meta } = await this.proposalsService.findAll(
      user.id,
      query,
    );

    apiResponse(res, {
      data: proposals,
      meta,
    });
  };
}
