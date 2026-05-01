import { cn } from "@/lib/utils";
import {
  FileText,
  Send,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Minus,
  MessageCircle,
  Trophy,
  MoreHorizontal
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";


// --- MOCK DATA ---
const OVERVIEW_STATS = [
  {
    title: "Total Proposals",
    value: "1,248",
    trend: "+12% from last month",
    trendUp: true,
    icon: FileText,
  },
  {
    title: "Sent",
    value: "854",
    trend: "+8% from last month",
    trendUp: true,
    icon: Send,
  },
  {
    title: "Replied",
    value: "412",
    trend: "No change",
    trendUp: false,
    icon: MessageSquare,
  },
  {
    title: "Hired",
    value: "156",
    trend: "+24% from last month",
    trendUp: true,
    icon: Briefcase,
  },
];

const RECENT_PROPOSALS = [
  {
    id: "1",
    title: "Enterprise SaaS Implementation Plan",
    client: "Acme Corp",
    status: "Hired",
    date: "Oct 24, 2023",
  },
  {
    id: "2",
    title: "Q4 Marketing Strategy Refresh",
    client: "Globex Inc",
    status: "Replied",
    date: "Oct 22, 2023",
  },
  {
    id: "3",
    title: "Cloud Migration Architecture",
    client: "Initech",
    status: "Sent",
    date: "Oct 20, 2023",
  },
  {
    id: "4",
    title: "Brand Identity Overhaul",
    client: "Stark Industries",
    status: "Draft",
    date: "Oct 18, 2023",
  },
  {
    id: "5",
    title: "E-commerce Platform Redevelopment",
    client: "Wayne Enterprises",
    status: "Sent",
    date: "Oct 15, 2023",
  },
];


// --- MAIN PAGE LAYOUT ---

export default function DashboardLayout() {
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "hired":
        return "default";
      case "replied":
        return "secondary";
      case "sent":
        return "outline";
      case "draft":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (

        <main className="flex-1 overflow-auto p-4 lg:p-8 bg-muted/20">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Dashboard Overview
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                High-level performance summary for all generated proposals.
              </p>
            </div>

            {/* Stats Grid 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {OVERVIEW_STATS.map((stat) => (
                <Card key={stat.title} className="shadow-sm border-border">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-foreground">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.trendUp ? (
                        <TrendingUp className="h-3 w-3 text-primary" />
                      ) : (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      )}
                      <p
                        className={cn(
                          "text-xs font-medium",
                          stat.trendUp ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {stat.trend}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Grid 2 (Conversion Rates) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <Card className="shadow-sm border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Average Reply Rate</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-foreground">48.2%</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                          +2.4%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2 max-w-[280px]">
                        Of all sent proposals, nearly half receive a response within 48 hours.
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Overall Win Rate</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-foreground">37.8%</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                          +5.1%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2 max-w-[280px]">
                        Conversion from initial reply to signed contract. Performing above industry average.
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Table Section */}
            <Card className="shadow-sm border-border overflow-hidden pt-0">
              <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-border/50 bg-background">
                <CardTitle className="text-lg font-semibold text-foreground">
                  Recent Proposals
                </CardTitle>
            <Link to="/proposals">
             <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  View All
                </Button>
            </Link>
              </CardHeader>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Title
                      </TableHead>
                      <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Client
                      </TableHead>
                      <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Status
                      </TableHead>
                      <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Created Date
                      </TableHead>
                      <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-right">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {RECENT_PROPOSALS.map((proposal) => (
                      <TableRow key={proposal.id} className="hover:bg-muted/50 border-border/50">
                        <TableCell className="font-medium text-foreground">
                          {proposal.title}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {proposal.client}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={getStatusBadgeVariant(proposal.status)}
                            className={cn(
                              "font-medium",
                              proposal.status === "Hired" && "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
                              proposal.status === "Replied" && "bg-secondary text-secondary-foreground",
                              proposal.status === "Sent" && "bg-muted text-muted-foreground",
                              proposal.status === "Draft" && "bg-muted text-muted-foreground border-dashed"
                            )}
                          >
                            {proposal.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {proposal.date}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

          </div>
        </main>
   
  );
}