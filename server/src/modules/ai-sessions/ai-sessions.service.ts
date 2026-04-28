import { prisma } from "../../lib/prisma";
import { NotFoundException } from "../../utils/error";
import { FindAISessionsQueryDto } from "./ai-sessions.schema";

export class AISessionsService {
  constructor() {}

  async findAll(userId: string, query: FindAISessionsQueryDto) {
    const skip = (query.page - 1) * query.limit;
    const take = query.limit;

    const aiSessions = await prisma.aiSession.findMany({
      where: { userId },
      skip,
      take,
      omit: {
        userId: true,
        aiResponse: true,
      },
    });
    const total = await prisma.aiSession.count({
      where: { userId },
      skip,
      take,
    });

    return {
      aiSessions,
      meta: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async findOne(userId: string, id: string) {
    const aiSession = await prisma.aiSession.findFirst({
      where: { id, userId },
      omit: {
        userId: true,
      },
    });

    if (!aiSession) {
      throw new NotFoundException("AI session not found");
    }

    return aiSession;
  }
}
