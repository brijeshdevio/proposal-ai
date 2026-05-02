
import { X } from "lucide-react";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// --- Mock Data & Constants ---
const INITIAL_SKILLS = ["Technical Writing", "RFP Management"];
const CURRENCIES = ["USD ($)", "EUR (€)", "GBP (£)", "CAD ($)", "AUD ($)"];

export default function SettingsMainContent() {
  return (
   <main className="flex-1 overflow-auto p-4 lg:p-8 bg-muted/20">
          <div className="max-w-6xl mx-auto space-y-8">
      {/* Page Header */}


         <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Settings
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
Manage your account settings and preferences.
              </p>
            </div>

      {/* Main Tabs Container */}
      <Tabs defaultValue="profile" className="w-full space-y-6">
        <TabsList className="bg-transparent border border-border rounded-md p-1 h-auto inline-flex">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm px-4 py-1.5 text-sm font-medium transition-colors"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm px-4 py-1.5 text-sm font-medium transition-colors"
          >
            Preferences
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab Content */}
        <TabsContent value="profile" className="space-y-6 focus-visible:outline-none focus-visible:ring-0 m-0">
          
          {/* Basic Info Card */}
          <Card className="border-border shadow-sm overflow-hidden">
            <CardHeader className="border-b border-border bg-card pb-5">
              <CardTitle className="text-lg font-medium text-card-foreground">
                Basic Info
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm mt-1">
                Update your personal details and public biography.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6 bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    defaultValue="Alex Morgan"
                    className="bg-muted/30 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="jobTitle" className="text-sm font-medium text-foreground">
                    Job Title
                  </label>
                  <Input
                    id="jobTitle"
                    defaultValue="Senior Proposal Strategist"
                    className="bg-muted/30 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium text-foreground">
                  Bio
                </label>
                <Textarea
                  id="bio"
                  defaultValue="Specializing in enterprise SaaS proposals and strategic vendor management."
                  className="min-h-[120px] resize-none bg-muted/30 border-border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Professional Info Card */}
          <Card className="border-border shadow-sm overflow-hidden">
            <CardHeader className="border-b border-border bg-card pb-5">
              <CardTitle className="text-lg font-medium text-card-foreground">
                Professional Info
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm mt-1">
                Configure your professional credentials and default billing parameters.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6 bg-card">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Skills
                </label>
                {/* Custom multi-select input visual simulation */}
                <div className="flex flex-wrap items-center gap-2 border border-border rounded-md px-3 py-2 bg-muted/30 min-h-[44px]">
                  {INITIAL_SKILLS.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-background border border-border text-foreground font-normal hover:bg-background rounded-sm py-1 px-2.5 flex items-center gap-1"
                    >
                      {skill}
                      <button className="text-muted-foreground hover:text-foreground outline-none">
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {skill}</span>
                      </button>
                    </Badge>
                  ))}
                  <input
                    type="text"
                    placeholder="Add a skill..."
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground min-w-[120px] h-6"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium text-foreground">
                    Experience (Years)
                  </label>
                  <Input
                    id="experience"
                    type="number"
                    defaultValue="8"
                    className="bg-muted/30 border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="rate" className="text-sm font-medium text-foreground">
                    Default Rate/Hr
                  </label>
                  <Input
                    id="rate"
                    type="text"
                    defaultValue="$ 150"
                    className="bg-muted/30 border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="currency" className="text-sm font-medium text-foreground">
                    Currency
                  </label>
                  <Select defaultValue={CURRENCIES[0]}>
                    <SelectTrigger id="currency" className="bg-muted/30 border-border">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {CURRENCIES.map((currency) => (
                        <SelectItem key={currency} value={currency}>
                          {currency}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

            </CardContent>
          </Card>

        </TabsContent>
        
        {/* Empty state for the second tab to ensure validity */}
        <TabsContent value="preferences" className="m-0">
            <div className="p-8 text-center text-muted-foreground border border-border rounded-md border-dashed">
                Preferences content would go here.
            </div>
        </TabsContent>
      </Tabs>
      </div>
        </main>
  );
}