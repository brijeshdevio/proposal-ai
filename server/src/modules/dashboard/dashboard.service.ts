import { prisma } from "../../lib/prisma";

export class DashboardService {
  constructor() {}

  async stats(userId: string) {
    const [
      totalProposals,
      totalTokensUsed,
      proposalsThisMonth,
      avgGenerationTimeMs,
      mostUsedTone,
    ] = await prisma.$transaction([
      prisma.proposal.count({ where: { userId } }),
      prisma.proposal.aggregate({
        where: { userId },
        _sum: { tokensUsed: true },
      }),
      prisma.proposal.count({
        where: {
          userId,
          createdAt: {
            gte: new Date(new Date().setDate(new Date().getDate() - 30)),
          },
        },
      }),
      prisma.aiSession.aggregate({
        where: { userId },
        _avg: { durationMs: true },
      }),
      prisma.proposal.groupBy({
        by: ["tone"],
        where: { userId },
        _count: { tone: true },
        orderBy: { _count: { tone: "desc" } },
        take: 1,
      }),
    ]);

    return {
      totalProposals,
      totalTokensUsed,
      proposalsThisMonth,
      avgGenerationTimeMs,
      mostUsedTone,
    };
  }
}
