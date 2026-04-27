import {
  Sparkles,
  Briefcase,
  Zap,
  Smile,
  Copy,
  Save,
  ClipboardList,
  Clock,
  Banknote,
  HelpCircle,
  Code,
  PenTool,
  Pencil,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function GenerateProposal() {
  return (
    <div className="dark min-h-screen w-full flex-1 bg-background p-8 text-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        {/* LEFT COLUMN: Input Parameters */}
        <div className="flex max-w-md flex-1 flex-col gap-6">
          {/* Header */}
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight">
              Generate New Proposal
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Provide the job details and parameters to create a tailored,
              professional response.
            </p>
          </div>

          {/* Job Description */}
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                Job Description
              </Label>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                AI Assist
              </Button>
            </div>
            <Textarea
              placeholder="Paste the client's job description here. Include any specific requirements, deliverables, or background context..."
              className="min-h-[260px] resize-none border-border/50 bg-card/30 p-4 text-sm focus-visible:ring-1 focus-visible:ring-primary"
            />
            <div className="text-right text-xs font-medium text-muted-foreground">
              0 / 2500
            </div>
          </div>

          {/* Parameters Card */}
          <Card className="border-border/50 bg-card/30 shadow-sm">
            <CardContent className="space-y-6 p-5">
              {/* Tone Selection */}
              <div className="space-y-3">
                <Label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Response Tone
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="flex h-auto flex-col gap-1.5 border-border/50 bg-background/50 py-3 text-muted-foreground hover:bg-muted"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span className="text-xs">Professional</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex h-auto flex-col gap-1.5 border-primary bg-primary/10 py-3 text-primary hover:bg-primary/20 hover:text-primary"
                  >
                    <Zap className="h-4 w-4" />
                    <span className="text-xs font-semibold">Confident</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex h-auto flex-col gap-1.5 border-border/50 bg-background/50 py-3 text-muted-foreground hover:bg-muted"
                  >
                    <Smile className="h-4 w-4" />
                    <span className="text-xs">Friendly</span>
                  </Button>
                </div>
              </div>

              <div className="flex gap-6">
                {/* Currency */}
                <div className="flex-1 space-y-3">
                  <Label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    Currency
                  </Label>
                  <div className="flex items-center rounded-md border border-border/50 bg-background/50 p-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 flex-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      INR
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 flex-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      USD
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 flex-1 bg-muted text-xs font-medium text-foreground shadow-sm"
                    >
                      BOTH
                    </Button>
                  </div>
                </div>

                {/* Profile Context */}
                <div className="flex-[1.5] space-y-3">
                  <Label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    Profile Context
                  </Label>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="cursor-pointer gap-1.5 border-none bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/25"
                    >
                      <Code className="h-3 w-3" />
                      Full-Stack
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer gap-1.5 border-none bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/25"
                    >
                      <PenTool className="h-3 w-3" />
                      UI/UX
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground"
                    >
                      <Pencil className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generate Action */}
          <Button
            size="lg"
            className="mt-2 w-full bg-primary py-6 font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Masterpiece
          </Button>
        </div>

        {/* RIGHT COLUMN: Output Preview */}
        <Card className="flex min-h-[600px] flex-[1.5] flex-col border-border/50 bg-card/40 shadow-sm">
          {/* Output Header */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
              <span className="text-sm font-semibold text-muted-foreground">
                Generated Proposal
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-muted-foreground hover:text-foreground"
              >
                <Copy className="mr-1.5 h-3.5 w-3.5" />
                Copy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-muted-foreground hover:text-foreground"
              >
                <Save className="mr-1.5 h-3.5 w-3.5" />
                Save
              </Button>
            </div>
          </CardHeader>

          {/* Output Content */}
          <CardContent className="flex-1 space-y-8 overflow-y-auto p-8">
            {/* Greeting & Intro */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Hi there,
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I read through your project description regarding the new
                dashboard interface, and I'm confident my experience aligns
                perfectly with your goals. Having designed similar complex web
                applications, I understand the critical balance between dense
                data visualization and a clean, intuitive user experience.
              </p>
            </div>

            {/* Scope Box */}
            <Card className="border-border/50 bg-muted/30 shadow-none">
              <CardContent className="flex gap-4 p-5">
                <div className="h-fit rounded-lg bg-primary/20 p-2.5">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    Proposed Scope
                  </h4>
                  <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground marker:text-muted-foreground/50">
                    <li>Complete UI/UX design for 5 core dashboard views.</li>
                    <li>Creation of a scalable Figma design system.</li>
                    <li>Interactive prototyping for user flows.</li>
                    <li>Developer handoff documentation.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Timeline */}
              <Card className="border-border/50 bg-muted/30 shadow-none">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="mt-1 h-fit rounded-lg bg-orange-500/20 p-2.5">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      Timeline
                    </h4>
                    <p className="text-2xl font-bold text-foreground">
                      3-4{" "}
                      <span className="text-lg font-medium text-muted-foreground">
                        Weeks
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Budget */}
              <Card className="border-border/50 bg-muted/30 shadow-none">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="mt-1 h-fit rounded-lg bg-rose-500/20 p-2.5">
                    <Banknote className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      Est. Budget
                    </h4>
                    <p className="text-2xl font-bold text-foreground">
                      $2.5k - $3k
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clarifying Questions */}
            <Card className="border-border/50 bg-muted/30 shadow-none">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <h4 className="text-sm font-semibold text-foreground">
                    Clarifying Questions
                  </h4>
                </div>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground marker:text-muted-foreground/70">
                  <li className="pl-1">
                    Do you have an existing brand guideline or color palette we
                    must adhere to?
                  </li>
                  <li className="pl-1">
                    Will the development team be using a specific front-end
                    framework (e.g., React/Tailwind)?
                  </li>
                </ol>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
