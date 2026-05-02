import { Sparkles, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// --- MOCK DATA ---
const TONE_OPTIONS = [
  "Professional & Authoritative",
  "Friendly & Approachable",
  "Creative & Innovative",
  "Concise & Direct",
];

const PREVIEW_CONTENT = {
  title: "Proposal for Acme Corp Redesign",
  intro: "Dear Selection Committee,\n\nThank you for the opportunity to present this proposal for the Acme Corp comprehensive platform redesign. Based on the requirements outlined in your brief, we have developed a strategic approach focused on enhancing user engagement, modernizing the technological stack, and ensuring seamless scalability over the next five years.",
  sections: [
    {
      id: 1,
      title: "STRATEGIC OBJECTIVE",
      content: "Our primary goal is to transition your current legacy interface into a modern, responsive architecture utilizing a component-driven design system. This will not only improve the immediate user experience but significantly reduce technical debt and future development cycles."
    },
    {
      id: 2,
      title: "PROPOSED METHODOLOGY",
      bullets: [
        { title: "Phase 1: Discovery & Audit", text: "Comprehensive review of existing user flows and architecture." },
        { title: "Phase 2: Design System Architecture", text: "Establishing core visual tokens and shared components." },
        { title: "Phase 3: Iterative Implementation", text: "Agile rollout of high-priority modules to minimize disruption." }
      ]
    }
  ],
  outro: "We are confident that our team's expertise in enterprise-scale digital transformations aligns perfectly with Acme Corp's ambitious objectives for..."
};

export default function GenerateProposalMain() {
  return (
   <main className="flex-1 overflow-auto p-4 lg:p-8 bg-muted/20">
          <div className="max-w-6xl mx-auto space-y-8">
      
        {/* Page Header */}
         <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
         Generate Proposal
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
             Configure your inputs to generate targeted proposals instantly.
              </p>
            </div>
     

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Input Form */}
        <div className="lg:col-span-4 lg:col-start-1">
          <Card className="border-border shadow-sm pt-0">
            <CardContent className="p-6 space-y-6">
              
              <div className="space-y-2">
                <label 
                  htmlFor="client-details" 
                  className="text-sm text-foreground font-medium"
                >
                  Client & Project Details
                </label>
                <Input 
                  id="client-details"
                  placeholder="e.g., Acme Corp Redesign" 
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="job-requirements" 
                  className="text-sm text-foreground font-medium"
                >
                  Job Description / Requirements
                </label>
                <Textarea
                  id="job-requirements"
                  placeholder="Paste the job requirements or project brief here..."
                  className="min-h-[220px] resize-none bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="tone-select" 
                  className="text-sm text-foreground font-medium"
                >
                  Tone of Voice
                </label>
                <Select defaultValue={TONE_OPTIONS[0]}>
                  <SelectTrigger id="tone-select" className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {TONE_OPTIONS.map((tone) => (
                      <SelectItem key={tone} value={tone} className="focus:bg-accent focus:text-accent-foreground text-foreground">
                        {tone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 font-medium">
                <Sparkles className="mr-2 h-4 w-4" /> Generate Proposal
              </Button>

            </CardContent>
          </Card>
        </div>

        {/* Right Column: Document Preview */}
        <div className="lg:col-span-8 lg:col-start-5">
          <Card className="border-border shadow-sm h-full min-h-[650px] flex flex-col overflow-hidden bg-card pt-0">
            <Tabs defaultValue="v1" className="w-full flex-1 flex flex-col">
              
              {/* Tab Header & Actions */}
              <div className="flex flex-wrap items-center justify-between border-b border-border px-4 pt-2 bg-muted/20">
                <TabsList className="bg-transparent h-auto p-0 flex space-x-4">
                  <TabsTrigger
                    value="v1"
                 
                  >
                    Version 1 (Selected)
                  </TabsTrigger>
                  <TabsTrigger
                    value="v2"
                  
                  >
                    Version 2
                  </TabsTrigger>
                  <TabsTrigger
                    value="v3"
                   
                  >
                    Version 3
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center space-x-1 pb-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy text</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download file</span>
                  </Button>
                </div>
              </div>

              {/* Tab Content */}
              <TabsContent 
                value="v1" 
                className="flex-1 p-8 md:p-12 m-0 overflow-y-auto focus-visible:outline-none focus-visible:ring-0"
              >
                <article className="max-w-2xl mx-auto space-y-8 ">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {PREVIEW_CONTENT.title}
                  </h2>
                  
                  <div className="space-y-6 text-card-foreground text-[15px] leading-loose">
                    <p className="whitespace-pre-wrap">{PREVIEW_CONTENT.intro}</p>

                    {PREVIEW_CONTENT.sections.map((section) => (
                      <section key={section.id} className="space-y-4 pt-4">
                        <h3 className="uppercase text-[13px] tracking-widest font-semibold text-foreground">
                          {section.id}. {section.title}
                        </h3>
                        {section.content && <p>{section.content}</p>}
                        {section.bullets && (
                          <ul className="pl-5 space-y-3 list-disc marker:text-muted-foreground">
                            {section.bullets.map((bullet, idx) => (
                              <li key={idx} className="pl-1">
                                <span className="font-semibold text-foreground">{bullet.title}</span> - {bullet.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}

                    <p className="pt-4">{PREVIEW_CONTENT.outro}</p>
                  </div>
                </article>
              </TabsContent>

              {/* Empty States for other tabs */}
              <TabsContent value="v2" className="flex-1 p-8 m-0 flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-medium">Version 2 generation pending...</p>
              </TabsContent>
              <TabsContent value="v3" className="flex-1 p-8 m-0 flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-medium">Version 3 generation pending...</p>
              </TabsContent>

            </Tabs>
          </Card>
        </div>

      </div>
      </div>
      </main>
  );
}