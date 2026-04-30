import { Pencil, CheckCircle2, X } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// --- MOCK DATA ---
const USER_PROFILE = {
  initials: "JD",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  memberSince: "2023",
  stats: {
    totalProposals: "142",
    tokensUsed: "8.5k",
  },
  subscription: "Studio Plan",
  nextBilling: "Oct 24, 2024",
  skills: ["UI/UX Design", "Webflow", "React"],
  experience: "5",
  rateINR: "5000",
  rateUSD: "65",
  bio: "I am a senior UI/UX designer specializing in enterprise software and developer tools. I create high-performance, dark-mode first interfaces that prioritize clarity and user focus. Experienced in end-to-end product design from wireframes to high-fidelity prototypes.",
};

export default function ProfileSettings() {
  return (
    <div className="min-h-screen w-full flex-1 p-8">
      <div className="mx-auto max-w-5xl">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            Profile Settings
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage your professional details and platform preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* LEFT COLUMN: Profile & Status Cards */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Profile Card */}
            <Card className="border-border/50 bg-card/40 pt-8 text-center">
              <CardContent className="flex flex-col items-center pb-6">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24 bg-card ring-2 ring-primary ring-offset-4 ring-offset-card/40">
                    <AvatarFallback className="bg-muted text-2xl font-bold text-foreground">
                      {USER_PROFILE.initials}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute right-0 bottom-0 h-7 w-7 rounded-full border-2 border-card bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                </div>

                <h2 className="text-xl font-bold text-foreground">
                  {USER_PROFILE.firstName} {USER_PROFILE.lastName}
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  {USER_PROFILE.email}
                </p>

                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary/10 px-3 py-1 font-medium text-primary hover:bg-primary/20"
                >
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                  Pro Member Since {USER_PROFILE.memberSince}
                </Badge>

                <div className="mt-2 flex w-full items-center justify-around border-t border-border/50 pt-6">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-foreground">
                      {USER_PROFILE.stats.totalProposals}
                    </span>
                    <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Total Proposals
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-foreground">
                      {USER_PROFILE.stats.tokensUsed}
                    </span>
                    <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Tokens Used
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Status Card */}
            <Card className="border-border/50 bg-card/40">
              <CardHeader className="pb-4">
                <CardTitle className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Account Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Subscription
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {USER_PROFILE.subscription}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Next Billing
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {USER_PROFILE.nextBilling}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-border/50 bg-background/50 text-foreground hover:bg-muted"
                >
                  Manage Subscription
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN: Profile Details Form */}
          <Card className="flex flex-col border-border/50 bg-card/40 lg:col-span-2">
            <CardHeader className="mb-6 border-b border-border/40 px-8 pt-8 pb-6">
              <CardTitle className="text-xl font-semibold">
                Your Profile Details
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 px-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    First Name
                  </Label>
                  <Input
                    defaultValue={USER_PROFILE.firstName}
                    className="border-border/50 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Last Name
                  </Label>
                  <Input
                    defaultValue={USER_PROFILE.lastName}
                    className="border-border/50 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
              </div>

              {/* Core Skills */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  Core Skills
                </Label>
                <div className="flex min-h-[44px] flex-wrap items-center gap-2 rounded-md border border-border/50 bg-background/50 p-2">
                  {USER_PROFILE.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="gap-1.5 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary hover:bg-primary/20"
                    >
                      {skill}
                      <X className="h-3 w-3 cursor-pointer opacity-70 hover:opacity-100" />
                    </Badge>
                  ))}
                  <input
                    placeholder="Add a skill..."
                    className="min-w-[120px] flex-1 border-none bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Rates & Experience Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Experience (Years)
                  </Label>
                  <Input
                    defaultValue={USER_PROFILE.experience}
                    className="border-border/50 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Default Rate (INR)
                  </Label>
                  <div className="relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">
                      ₹
                    </span>
                    <Input
                      defaultValue={USER_PROFILE.rateINR}
                      className="border-border/50 bg-background/50 pr-8 pl-8 focus-visible:ring-1 focus-visible:ring-primary"
                    />
                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-muted-foreground opacity-50">
                      /hr
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Default Rate (USD)
                  </Label>
                  <div className="relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">
                      $
                    </span>
                    <Input
                      defaultValue={USER_PROFILE.rateUSD}
                      className="border-border/50 bg-background/50 pr-8 pl-8 focus-visible:ring-1 focus-visible:ring-primary"
                    />
                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-muted-foreground opacity-50">
                      /hr
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="relative space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium text-muted-foreground">
                    Professional Bio
                  </Label>
                  <span className="text-xs text-muted-foreground/60">
                    240/500
                  </span>
                </div>
                <Textarea
                  defaultValue={USER_PROFILE.bio}
                  className="min-h-[120px] resize-none border-border/50 bg-background/50 p-4 text-sm leading-relaxed focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </CardContent>

            <CardFooter className="mt-auto flex items-center justify-end gap-4 border-t border-border/40 px-8 py-6">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Cancel
              </Button>
              <Button className="bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90">
                Save Profile
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
