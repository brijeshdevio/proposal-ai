import {
  ArrowLeft,
  Trash2,
  Copy,
  Sparkles,
  MessageSquareQuote,
  Layers,
  Clock,
  Wallet,
  Info,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProposalDetails() {
  return (
    <div className="min-h-screen w-full flex-1 p-8 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* TOP NAVIGATION / BACK */}
        <div>
          <Button variant="ghost">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        {/* HEADER SECTION */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            {/* Badges */}
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="border-transparent bg-indigo-500/10 font-medium text-indigo-400 hover:bg-indigo-500/20"
              >
                Professional
              </Badge>
              <Badge
                variant="secondary"
                className="border-transparent bg-emerald-500/10 font-medium text-emerald-400 hover:bg-emerald-500/20"
              >
                USD
              </Badge>
              <Badge
                variant="secondary"
                className="bg-muted font-medium text-muted-foreground hover:bg-muted"
              >
                Draft
              </Badge>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-border/50 bg-background/50 text-foreground transition-colors hover:border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
              <Button className="bg-indigo-500 font-medium text-white shadow-sm hover:bg-indigo-600">
                <Copy className="mr-2 h-4 w-4" />
                Copy Full Proposal
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            E-commerce Platform Redesign Proposal
          </h1>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* LEFT COLUMN: Main Content */}
          <div className="flex flex-[2] flex-col gap-6">
            {/* Generated Proposal Card */}
            <Card className="relative overflow-hidden border-border/50 bg-card/40">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-indigo-500" />

              <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/40 px-6 py-5">
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  <Sparkles className="h-5 w-5 text-indigo-400" />
                  Generated Proposal
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6 p-6 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Hi [Client Name],
                  <br />
                  Thank you for considering our team for your e-commerce
                  platform redesign. Based on our initial discussions, I've
                  outlined a comprehensive approach to modernize your digital
                  storefront, focusing on conversion rate optimization and
                  mobile-first architecture.
                </p>

                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">
                    Project Objectives
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 marker:text-muted-foreground/50">
                    <li>
                      Overhaul the user interface to align with modern design
                      standards.
                    </li>
                    <li>
                      Implement a streamlined checkout process to reduce cart
                      abandonment.
                    </li>
                    <li>
                      Migrate legacy backend systems to a scalable headless
                      architecture.
                    </li>
                  </ul>
                </div>

                <p>
                  We believe this approach will significantly improve user
                  engagement and ultimately drive higher revenue for your
                  business.
                </p>

                <p>
                  Best regards,
                  <br />
                  [Your Name]
                </p>
              </CardContent>
            </Card>

            {/* Suggested Questions Card */}
            <Card className="border-border/50 bg-card/40">
              <CardHeader className="border-b border-border/40 px-6 py-5">
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  <MessageSquareQuote className="h-5 w-5 text-orange-400" />
                  Suggested Questions for Client
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0 p-6">
                {[
                  "Do you have an existing brand style guide, or will we need to develop a new visual identity as part of the redesign?",
                  "What specific payment gateways are currently in use, and are there any plans to add new ones (e.g., Apple Pay, crypto)?",
                  "Are there any legacy third-party integrations (CRM, ERP) that absolutely must be maintained during the transition?",
                ].map((question, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start gap-4 py-5">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {question}
                      </p>
                    </div>
                    {i < 2 && <div className="h-px w-full bg-border/50" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN: Metadata & Summary */}
          <div className="flex flex-[1] flex-col gap-4">
            {/* Original Input Card */}
            <Card className="border-border/50 bg-card/40">
              <CardContent className="space-y-3 p-5">
                <h4 className="text-xs font-medium text-muted-foreground">
                  Original Input
                </h4>
                <div className="rounded-md border border-border/50 bg-background/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  Looking for an experienced agency to redesign our current
                  Magento e-commerce site. Needs to be migrated to...
                </div>
              </CardContent>
            </Card>

            {/* Scope */}
            <Card className="border-border/50 bg-card/40">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-400">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-medium text-muted-foreground">
                    Scope
                  </h4>
                  <p className="text-sm font-semibold text-foreground">
                    Full Redesign & Migration
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-border/50 bg-card/40">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-medium text-muted-foreground">
                    Timeline
                  </h4>
                  <p className="text-sm font-semibold text-foreground">
                    12 Weeks
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Estimated Price */}
            <Card className="border-border/50 bg-card/40">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="rounded-lg bg-amber-500/10 p-2.5 text-amber-400">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-medium text-muted-foreground">
                    Estimated Price
                  </h4>
                  <p className="text-sm font-semibold text-foreground">
                    $25,000 - $35,000
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Generation Details Toggle */}
            <Card className="cursor-pointer border-border/50 bg-card/40 transition-colors hover:bg-card/60">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    Generation Details
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
