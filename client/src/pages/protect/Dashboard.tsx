import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarBlank,
  Clock,
  Coins,
  FileText,
  Plus,
  ShieldCheck,
} from "@phosphor-icons/react";

const STATS = [
  {
    title: "TOTAL PROPOSALS",
    value: "25",
    badge: "+12%",
    badgeType: "positive",
    icon: FileText,
  },
  {
    title: "THIS MONTH",
    value: "8",
    badge: "+2",
    badgeType: "positive",
    icon: CalendarBlank,
  },
  {
    title: "TOKENS USED",
    value: "31.2k",
    badge: "+5%",
    badgeType: "negative",
    icon: Coins,
  },
  {
    title: "AVG GENERATION TIME",
    value: "2.1s",
    badge: "-0.3s",
    badgeType: "positive",
    icon: Clock,
  },
];

const RECENT_PROPOSALS = [
  {
    title: "Acme Corp Q3 Strategy Refresh",
    tone: "Professional",
    date: "Oct 24, 2023",
  },
  {
    title: "Globex Marketing Initiative",
    tone: "Persuasive",
    date: "Oct 22, 2023",
  },
  {
    title: "Initech Software Vendor Bid",
    tone: "Direct",
    date: "Oct 18, 2023",
  },
];

// --- HELPER COMPONENTS ---

const ToneBadge = ({ tone }: { tone: string }) => {
  let dotColor = "bg-primary";
  if (tone === "Persuasive") dotColor = "bg-yellow-500";
  if (tone === "Direct") dotColor = "bg-emerald-500";

  return (
    <Badge
      variant="secondary"
      className="border-none bg-muted/50 font-medium text-foreground shadow-none"
    >
      <div className={`h-1.5 w-1.5 rounded-full ${dotColor} mr-2`} />
      {tone}
    </Badge>
  );
};

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl flex-1 px-8 pt-4 pb-8">
      {/* WELCOME SECTION */}
      <div className="mt-2 mb-8">
        <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight">
          Good morning, Brijesh <span className="text-3xl">👋</span>
        </h2>
        <p className="text-muted-foreground">
          Here's a quick overview of your proposal activity.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat, i) => (
          <Card key={i} className="border-border/50 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-6 pt-6 pb-2">
              <CardTitle className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                {stat.title}
              </CardTitle>
              <stat.icon
                className="h-5 w-5 text-muted-foreground/30"
                weight="fill"
              />
            </CardHeader>
            <CardContent className="px-6 pt-0 pb-6">
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-4xl font-bold">{stat.value}</span>
                <Badge
                  variant="secondary"
                  className={`rounded-md px-2 py-0.5 text-xs ${
                    stat.badgeType === "positive"
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {stat.badge}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* MIDDLE SECTION */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* CHART (Mocked) */}
        <Card className="flex flex-col border-border/50 bg-card/50 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border/10 px-6 py-5">
            <CardTitle className="text-xl font-semibold">
              Proposals over time
            </CardTitle>
            <Tabs defaultValue="week" className="w-[140px]">
              <TabsList className="grid h-8 w-full grid-cols-2 bg-muted/50 p-1">
                <TabsTrigger value="week" className="text-xs">
                  Week
                </TabsTrigger>
                <TabsTrigger value="month" className="text-xs">
                  Month
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="flex min-h-[250px] flex-1 items-end justify-between gap-2 px-6 pt-8 pb-6">
            {/* Mock Bars */}
            {[
              { label: "W1", height: "h-[20%]", active: false },
              { label: "W2", height: "h-[50%]", active: true },
              { label: "W3", height: "h-[30%]", active: false },
              { label: "W4", height: "h-[40%]", active: false },
              { label: "W5", height: "h-[70%]", active: true },
              { label: "W6", height: "h-[15%]", active: false },
            ].map((bar, i) => (
              <div
                key={i}
                className="group flex h-full w-full flex-col items-center justify-end gap-3"
              >
                <div
                  className={`w-10 rounded-t-sm transition-all ${
                    bar.active
                      ? "bg-primary"
                      : "bg-muted hover:bg-muted-foreground/30"
                  } ${bar.height}`}
                ></div>
                <span className="text-xs font-medium text-muted-foreground">
                  {bar.label}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* QUICK ACTIONS */}
        <Card className="flex flex-col justify-between border-border/50 bg-card/50">
          <div>
            <CardHeader className="px-6 py-5">
              <CardTitle className="text-xl font-semibold">
                Quick Actions
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Need something new? Start here.
              </p>
            </CardHeader>
            <CardContent className="px-6 pb-2">
              <Button className="w-full bg-primary py-6 font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90">
                <Plus className="mr-2" size={18} weight="bold" />
                Generate New Proposal
              </Button>

              <div className="mt-8">
                <h4 className="mb-3 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Most Used Tones
                </h4>
                <div className="flex flex-wrap gap-2">
                  <ToneBadge tone="Professional" />
                  <ToneBadge tone="Persuasive" />
                  <ToneBadge tone="Direct" />
                </div>
              </div>
            </CardContent>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/30 p-4">
              <div className="rounded-full bg-primary/20 p-2 text-primary">
                <ShieldCheck size={24} weight="fill" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold">Pro Plan Active</span>
                </div>
                <Progress value={60} className="h-1.5 bg-muted" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* RECENT PROPOSALS TABLE */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-5">
          <CardTitle className="text-xl font-semibold">
            Recent Proposals
          </CardTitle>
          <Button
            variant="link"
            className="h-auto p-0 font-medium text-primary"
          >
            View All
          </Button>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="px-6 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Title
                </TableHead>
                <TableHead className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Tone
                </TableHead>
                <TableHead className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Date
                </TableHead>
                <TableHead className="px-6 text-right text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RECENT_PROPOSALS.map((proposal, i) => (
                <TableRow
                  key={i}
                  className="border-b border-border/50 last:border-0 hover:bg-muted/20"
                >
                  <TableCell className="px-6 py-4 font-medium">
                    {proposal.title}
                  </TableCell>
                  <TableCell className="py-4">
                    <ToneBadge tone={proposal.tone} />
                  </TableCell>
                  <TableCell className="py-4 text-sm text-muted-foreground">
                    {proposal.date}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <span className="sr-only">Actions</span>
                      ...
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
