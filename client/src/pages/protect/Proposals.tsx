import {
  MagnifyingGlass,
  Plus,
  Briefcase,
  HandWaving,
  Lightning,
  CalendarBlank,
  Trash,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- MOCK DATA ---
const PROPOSALS = [
  {
    title: "Acme Corp",
    tone: "Professional",
    toneIcon: Briefcase,
    toneColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    description:
      "Comprehensive proposal for the overhaul of Acme Corp's main corporate site, including user...",
    date: "Oct 24, 2023",
  },
  {
    title: "Startup Branding Redesign for Acme Corp",
    tone: "Friendly",
    toneIcon: HandWaving,
    toneColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    description:
      "A warm, approachable design strategy for a new consumer fintech app aiming to demystify investing f...",
    date: "Oct 20, 2023",
  },
  {
    title: "Global Logistics",
    tone: "Confident",
    toneIcon: Lightning,
    toneColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    description:
      "Bold and data-driven proposal for a complex logistics platform. Focuses on rapid deployment, high-...",
    date: "Oct 15, 2023",
  },
  {
    title: "E-comme",
    tone: "Professional",
    toneIcon: Briefcase,
    toneColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    description:
      "Detailed migration plan ensuring zero downtime, SEO preservation, and custom theme development tailored...",
    date: "Oct 12, 2023",
  },
];

// --- MAIN COMPONENT ---

export default function Proposals() {
  return (
    <div className="mx-auto max-w-7xl flex-1 px-8 pt-4 pb-8">
      {/* PAGE HEADER */}
      <div className="mt-2 mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">My Proposals</h1>
          <Badge
            variant="secondary"
            className="bg-muted px-3 py-0.5 font-semibold text-muted-foreground hover:bg-muted"
          >
            12 TOTAL
          </Badge>
        </div>
        <Button className="font-medium">
          <Plus className="mr-2" size={16} weight="bold" />
          New Proposal
        </Button>
      </div>

      {/* FILTER BAR */}
      <div className="mb-8 flex flex-col items-center gap-4 rounded-lg border border-border/40 p-4 md:flex-row">
        <div className="relative w-full flex-1 md:max-w-md">
          <MagnifyingGlass
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            placeholder="Search proposals..."
            className="border-border/50 bg-background/50 pl-9 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="ml-auto flex w-full items-center gap-4 md:w-auto">
          <Select defaultValue="all-tones">
            <SelectTrigger className="w-full border-border/50 md:w-[140px]">
              <SelectValue placeholder="Tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-tones">All Tones</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="confident">Confident</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="newest">
            <SelectTrigger className="w-full border-border/50 md:w-[150px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="a-z">A-Z</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            className="text-muted-foreground transition-colors"
          >
            Clear filters
          </Button>
        </div>
      </div>

      {/* PROPOSAL CARDS GRID */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROPOSALS.map((proposal, i) => (
          <Card
            key={i}
            className="flex flex-col border-border/40 transition-colors hover:border-border/80"
          >
            <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
              <CardTitle className="line-clamp-2 flex-1 text-xl leading-tight font-semibold">
                {proposal.title}
              </CardTitle>
              <Badge
                variant="outline"
                className={`gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${proposal.toneColor}`}
              >
                <proposal.toneIcon size={12} weight="fill" />
                {proposal.tone}
              </Badge>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {proposal.description}
              </p>
            </CardContent>
            <div className="w-full border-t border-border/40" />
            <CardFooter className="flex items-center justify-between px-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarBlank size={16} />
                {proposal.date}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash size={16} />
                  <span className="sr-only">Delete</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-8 border-border/50 bg-transparent px-4 font-medium hover:bg-muted/50"
                >
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">4</span> of{" "}
          <span className="font-medium">12</span> proposals
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="hover: h-9 w-9 border-border/50 bg-transparent text-muted-foreground"
            disabled
          >
            <CaretLeft size={16} />
          </Button>
          <Button variant="outline" className="h-9 w-9 font-medium">
            1
          </Button>
          <Button
            variant="outline"
            className="hover: h-9 w-9 border-border/50 bg-transparent font-medium text-muted-foreground"
          >
            2
          </Button>
          <Button
            variant="outline"
            className="hover: h-9 w-9 border-border/50 bg-transparent font-medium text-muted-foreground"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover: h-9 w-9 border-border/50 bg-transparent text-muted-foreground"
          >
            <CaretRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
