import React from "react";
import {
  FileText,
  Sparkles,
  BarChart3,
  PenTool,
  Eye,
  History,
  Layout,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- MOCK DATA ---

const HOW_IT_WORKS_STEPS = [
  {
    icon: FileText,
    title: "1. Input Details",
    description: "Briefly describe your project, client needs, and your proposed solution.",
  },
  {
    icon: Sparkles,
    title: "2. AI Generates",
    description: "Our AI crafts a professional, tailored proposal in seconds.",
  },
  {
    icon: BarChart3,
    title: "3. Track & Close",
    description: "Send to your client, track opens, and close deals efficiently.",
  },
];

const FEATURES = [
  {
    icon: PenTool,
    title: "AI Content Generation",
    description: "Leverage advanced AI to generate persuasive copy tailored to each specific client and project type.",
  },
  {
    icon: Eye,
    title: "Real-time Tracking",
    description: "Know exactly when your client opens the proposal and which sections they spend the most time reading.",
  },
  {
    icon: History,
    title: "Version Management",
    description: "Keep track of all proposal iterations and easily revert to previous versions if needed.",
  },
  {
    icon: Layout,
    title: "Professional Templates",
    description: "Start with high-converting, beautifully designed templates that you can customize to fit your brand.",
  },
];



// --- REUSABLE COMPONENTS ---

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <main>
        {/* HERO SECTION */}
        <Section className=" pt-24 pb-16 md:pt-32 md:pb-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Win more clients with AI-powered proposals
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate high-quality, personalized proposals in seconds. Track your success and close deals faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Start Generating for Free
              </Button>
            </div>
          </div>
        </Section>

        {/* VALUE PROP SECTION */}
        <Section className="bg-muted text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Focus on your craft.<br />We'll handle the paperwork.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ProposalAI was built specifically for freelancers and agencies who want to spend less time drafting documents and more time delivering exceptional work. Our AI engine understands your unique business model and crafts compelling, conversion-focused narratives that help you win clients and scale your business faster.
            </p>
          </div>
        </Section>

        {/* HOW IT WORKS SECTION */}
        <Section className=" text-center">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.title} className="flex flex-col items-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center mb-2">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FEATURES SECTION */}
        <Section className="bg-muted">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Features built for closing
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((feature) => (
                <Card key={feature.title} className="bg-card border-border shadow-sm">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <feature.icon className="h-6 w-6 text-foreground" />
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA SECTION */}
        <Section className="">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center space-y-8 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Join 10,000+ freelancers winning more work
              </h2>
              <Button size="lg" variant="secondary" className="px-8 text-secondary-foreground bg-secondary hover:bg-secondary/90">
                Create Your Account
              </Button>
            </div>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
     
    </div>
  );
}