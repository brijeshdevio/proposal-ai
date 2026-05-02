
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// --- MOCK DATA ---
const TABS = ["All", "Draft", "Sent", "Replied", "Hired"];

const PROPOSALS_DATA = [
  {
    id: "PRP-2049",
    title: "Full Stack Developer at TechCorp",
    status: "Hired",
    date: "Oct 24, 2023",
  },
  {
    id: "PRP-2050",
    title: "UI/UX Design Project",
    status: "Sent",
    date: "Oct 26, 2023",
  },
  {
    id: "PRP-2051",
    title: "Mobile App MVP Development",
    status: "Replied",
    date: "Oct 27, 2023",
  },
  {
    id: "PRP-2052",
    title: "E-commerce Website Redesign",
    status: "Draft",
    date: "Oct 28, 2023",
  },
  {
    id: "PRP-2053",
    title: "Backend API Integration",
    status: "Sent",
    date: "Oct 29, 2023",
  },
];

// --- HELPER FUNCTION ---
// Maps status to ShadCN theme tokens strictly avoiding raw Tailwind colors
const getStatusClasses = (status: string) => {
  switch (status.toLowerCase()) {
    case "hired":
      return "bg-muted text-muted-foreground border-transparent hover:bg-muted/80";
    case "sent":
      return "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80";
    case "replied":
      return "bg-accent text-accent-foreground border-transparent hover:bg-accent/80";
    case "draft":
      return "bg-transparent text-muted-foreground border border-border";
    default:
      return "bg-secondary text-secondary-foreground border-transparent";
  }
};

export default function Proposals() {
  return (
        <main className="flex-1 overflow-auto p-4 lg:p-8 bg-muted/20">
          <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header Section */}
        <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Proposals
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
           Manage, track, and review your generated proposals.
              </p>
            </div>
     

      {/* Tabs Navigation */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0 h-auto">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase()}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Data Table Container */}
      <div className="rounded-md border border-border bg-card">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[40%] text-xs font-semibold uppercase tracking-wider text-muted-foreground py-5">
                  Title
                </TableHead>
                <TableHead className="w-[20%] text-xs font-semibold uppercase tracking-wider text-muted-foreground py-5">
                  Status
                </TableHead>
                <TableHead className="w-[25%] text-xs font-semibold uppercase tracking-wider text-muted-foreground py-5">
                  Created Date
                </TableHead>
                <TableHead className="w-[15%] text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground py-5 pr-6">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROPOSALS_DATA.map((proposal) => (
                <TableRow key={proposal.id} className="group">
                  <TableCell className="py-4">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-card-foreground">
                        {proposal.title}
                      </span>
                     
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge
                      className={cn(
                        "rounded-sm px-2.5 py-0.5 text-xs font-medium",
                        getStatusClasses(proposal.status)
                      )}
                    >
                      {proposal.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 text-sm text-card-foreground">
                    {proposal.date}
                  </TableCell>
                  <TableCell className="py-4 text-right pr-6">
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
                      View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <div className="text-sm text-muted-foreground">
            Showing 1 to 5 of 24 entries
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-sm">
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-sm">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>

      </div>
      </main>
  );
}