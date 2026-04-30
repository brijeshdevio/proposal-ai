import { Outlet } from "react-router-dom";
import {
  SquaresFour,
  Sparkle,
  FileText,
  User,
  Gear,
  Bell,
} from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "../ui/sidebar";
import { Button } from "../ui/button";

// --- MOCK DATA ---
const NAV_ITEMS = [
  { label: "Dashboard", icon: SquaresFour, active: true },
  { label: "Generate Proposal", icon: Sparkle, active: false },
  { label: "My Proposals", icon: FileText, active: false },
  { label: "Profile", icon: User, active: false },
];

export function ProtectedRoute() {
  return (
    <SidebarProvider>
      {/* SIDEBAR */}
      <Sidebar>
        <SidebarHeader className="p-6">
          <h1 className="text-xl font-bold tracking-tight text-primary">
            ProposalAI
          </h1>
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            Premium Studio
          </p>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ITEMS.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={item.active}
                      className={`gap-3 px-6 py-5 ${
                        item.active
                          ? "bg-primary/10 text-primary hover:bg-primary/15"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <item.icon
                        size={20}
                        weight={item.active ? "fill" : "regular"}
                      />
                      <span className="font-medium">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="gap-3 px-4 py-5 text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                <Gear size={20} />
                <span className="font-medium">Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarTrigger className="md:hidden" />
      {/* MAIN CONTENT */}
      <main className="mx-auto w-full">
        {/* TOP HEADER */}
        <header className="mb-4 flex items-center justify-end border-b bg-card px-8 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Bell size={24} />
            </Button>
            <Avatar className="h-9 w-9 border border-border">
              <AvatarImage src="https://placehold.co/100x100" alt="User" />
              <AvatarFallback>BR</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
