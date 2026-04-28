import { Request, Response } from "express";
import { apiResponse } from "../../utils/api-response";
import { UnauthorizedException } from "../../utils/error";
import { FindAISessionsQueryDto } from "./ai-sessions.schema";
import { AISessionsService } from "./ai-sessions.service";

export class AISessionsController {
  constructor(private readonly aiSessionsService: AISessionsService) {}

  findAll = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.id) throw new UnauthorizedException();
    const query = req.validatedQuery as unknown as FindAISessionsQueryDto;

    const { aiSessions, meta } = await this.aiSessionsService.findAll(
      user.id,
      query,
    );

    apiResponse(res, { data: aiSessions, meta });
  };

  findOne = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.id) throw new UnauthorizedException();
    const id = req.params.id as string;

    const aiSession = await this.aiSessionsService.findOne(user.id, id);

    apiResponse(res, { data: aiSession });
  };
}
