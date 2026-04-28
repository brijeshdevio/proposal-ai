import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { prisma } from "../../lib/prisma";
import {
  InternalServerErrorException,
  NotFoundException,
} from "../../utils/error";
import { AIService } from "../ai/ai.service";
import { ProfileService } from "../profile/profile.service";
import { FindProposalsQueryDto, JobDto } from "./proposals.schema";
import { PRISMA_CODES } from "../../constants";

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

    await prisma.$transaction(async (tx) => {
      const proposal = await tx.proposal.create({
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
      await tx.aiSession.create({
        data: {
          userId,
          aiResponse: JSON.stringify(response.content),
          tokensUsed: response.tokensUsed,
          durationMs: response.durationMs,
          model: response.model,
          promptSent: JSON.stringify({
            role: "user",
            content: data.jobDescription,
          }),
          proposalId: proposal.id,
        },
      });
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

  async findOne(userId: string, proposalId: string) {
    const proposal = await prisma.proposal.findUnique({
      where: {
        id: proposalId,
        userId,
      },
      omit: {
        userId: true,
      },
    });
    if (!proposal) {
      throw new NotFoundException("Proposal not found");
    }
    return proposal;
  }

  async deleteOne(userId: string, proposalId: string) {
    try {
      await prisma.proposal.delete({
        where: {
          id: proposalId,
          userId,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PRISMA_CODES.NOT_FOUND
      ) {
        throw new NotFoundException("Proposal not found");
      }

      throw new InternalServerErrorException();
    }
  }
}
