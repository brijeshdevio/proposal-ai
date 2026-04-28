import { prisma } from "../../lib/prisma";
import { FindProposalsQueryDto } from "./proposals.schema";

export class ProposalsService {
  constructor() {}

  async findAll(userId: string, query: FindProposalsQueryDto) {
    const where: Record<string, unknown> = { userId };

    if (query.search) {
      where["title"] = {
        contains: query.search,
        mode: "insensitive",
      };
      where["bio"] = {
        contains: query.search,
        mode: "insensitive",
      };
    }

    const skip = (query.page - 1) * query.limit;
    const take = query.limit;

    const proposals = await prisma.proposal.findMany({
      where,
      skip,
      take,
      select: {
        id: true,
        title: true,
        jobDescription: true,
        tone: true,
        createdAt: true,
      },
    });
    const total = await prisma.proposal.count({ where, skip, take });

    return {
      proposals,
      meta: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }
}
