
import {
  Calendar,
  AlignLeft,
  Copy,
  Mail,
  Briefcase,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// --- MOCK DATA ---
const PROPOSAL_META = {
  title: "Full Stack Developer at TechCorp",
  version: "V3 ACTIVE",
  createdAt: "Oct 24, 2023",
};

const PROPOSAL_PARAGRAPHS = [
  "Dear Hiring Manager,",
  "I am writing to express my strong interest in the Full Stack Developer position at TechCorp. With over 5 years of experience architecting and developing scalable web applications using React, Node.js, and PostgreSQL, I am confident in my ability to immediately contribute to your engineering team.",
  "In my recent role at InnovateWeb, I led the migration of a legacy monolithic architecture to a modern microservices approach, reducing system latency by 40% and improving developer deployment velocity. My expertise spans the entire stack, from crafting responsive, accessible user interfaces to designing robust RESTful APIs and optimizing database queries.",
  "I am particularly drawn to TechCorp's mission of building intuitive SaaS tools for creative professionals. The opportunity to tackle complex technical challenges while delivering exceptional user experiences aligns perfectly with my professional goals and skill set.",
  "I have attached my resume detailing my technical skills and project history. I welcome the opportunity to discuss how my background, technical proficiency, and problem-solving mindset make me an ideal fit for this role.",
  "Thank you for your time and consideration.",
  "Sincerely,",
];

const JOB_CONTEXT = {
  tone: "Professional",
  snippet:
    "We are seeking a highly skilled Full Stack Developer to join our core product team. You will be responsible for building and maintaining robust, scalable web applications using React...",
};

// --- MAIN COMPONENT ---
export default function ProposalDetailView() {
  return (
     <main className="flex-1 overflow-auto p-4 lg:p-8 bg-muted/20">
          <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="space-y-2">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {PROPOSAL_META.title}
            </h2>
            <Badge variant="secondary" className="font-semibold uppercase tracking-wider text-xs px-2.5 py-1">
              {PROPOSAL_META.version}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Created on {PROPOSAL_META.createdAt}</span>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Column: Proposal Document */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-sm pt-0">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border py-4 px-6 space-y-0">
                <div className="flex items-center gap-3">
                  <AlignLeft className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base font-semibold text-foreground">
                    Selected Proposal
                  </CardTitle>
                </div>
                <Button variant="outline" size="sm" className="h-8">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Text
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-base leading-relaxed text-foreground">
                  {PROPOSAL_PARAGRAPHS.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Tracking & Context Sidebar */}
          <div className="space-y-6">
            
            {/* Tracking & Status Card */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-4">
                    Tracking & Status
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Current Status</span>
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-3 py-1 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-background/50"></span>
                      Sent
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-border">
                  <Button variant="outline" className="w-full justify-center text-foreground font-medium">
                    <Mail className="mr-2 h-4 w-4" />
                    Mark as Replied
                  </Button>
                  <Button className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Mark as Hired
                  </Button>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="revenue" className="text-xs font-medium text-muted-foreground">
                    Expected Revenue (Optional)
                  </label>
                  <Input 
                    id="revenue" 
                    placeholder="$ 0.00" 
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Job Context Card */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    Job Context
                  </h3>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-muted-foreground">Generated Tone</span>
                  <div>
                    <Badge variant="outline" className="text-foreground border-border bg-background hover:bg-background">
                      {JOB_CONTEXT.tone}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-muted-foreground">Job Description Snippet</span>
                  <div className="p-4 rounded-md border border-border bg-muted/30 text-sm text-foreground leading-relaxed">
                    {JOB_CONTEXT.snippet}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
    </div>
      </main>
  );
}