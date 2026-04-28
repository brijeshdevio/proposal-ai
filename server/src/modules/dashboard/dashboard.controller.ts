import { Request, Response } from "express";
import { apiResponse } from "../../utils/api-response";
import { UnauthorizedException } from "../../utils/error";
import { DashboardService } from "./dashboard.service";

export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  stats = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.id) throw new UnauthorizedException();

    const stats = await this.dashboardService.stats(user.id);

    apiResponse(res, { data: stats });
  };
}
