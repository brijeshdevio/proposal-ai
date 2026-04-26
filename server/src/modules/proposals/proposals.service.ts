import { prisma } from "../../lib/prisma";
import { AIService } from "../ai/ai.service";
import { ProfileService } from "../profile/profile.service";
import { FindProposalsQueryDto, JobDto } from "./proposals.schema";

export class ProposalsService {
  profileService: ProfileService;
  aiService: AIService;

  constructor() {
    this.profileService = new ProfileService();
    this.aiService = new AIService();
  }

  async generateProposal(userId: string, data: JobDto) {
    const profile = await this.profileService.findProfile(userId);
    const response = await this.aiService.generate(profile, data);

    await prisma.proposal.create({
      data: {
        userId,
        title: response.content?.title || "Untitled Proposal",
        jobDescription: data.jobDescription,
        tone: data.tone,
        aiResponse: response.content,
        tokensUsed: response.tokensUsed,
        currency: data.currency,
      },
    });
    return response;
  }

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
