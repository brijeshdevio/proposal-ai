
// --- MOCK DATA ---

import { cn } from "@/lib/utils";
import { SparkleIcon } from "@phosphor-icons/react";
import { Bell, Files, HelpCircle, LayoutDashboard, LogOut, Plus, Search, Settings } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const SIDEBAR_LINKS = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Generate", icon: SparkleIcon, path: "/generate" },
  { label: "Proposals", icon: Files, path: "/proposals" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const BOTTOM_LINKS = [
  { label: "Help", icon: HelpCircle, path: "/help" },
  { label: "Logout", icon: LogOut, path: "/logout" },
];

export function ProtectGuard() {
    return <>
    <div className="min-h-screen bg-background text-foreground flex font-sans selection:bg-primary/20">
     <aside className="hidden md:flex w-64 flex-col border-r border-border bg-background h-screen sticky top-0">
      {/* Brand */}
      <div className="p-6 flex items-center gap-3">
        <div>
      <Link to="/" className="font-bold text-xl tracking-tight text-foreground flex items-center gap-x-2">
              <SparkleIcon  className="text-primary h-7 w-7" />
                <div>
                   <h4>
                PropelAI
             </h4>
          <span className="text-xs text-muted-foreground line-clamp-1">Free Plan</span>
               </div>
            </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )
            }
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-1">
        {BOTTOM_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </NavLink>
        ))}
      </div>
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
                 <header className="h-16 flex items-center justify-between border-b border-border bg-background px-4 lg:px-8 sticky top-0 z-10">
      {/* Mobile Menu Placeholder (Hidden on Desktop) */}
      <div className="md:hidden flex items-center mr-4">
        <Button variant="ghost" size="icon">
          <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search proposals, clients..."
            className="w-full bg-background pl-9 border-border shadow-sm"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-4 ml-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8 hidden sm:flex cursor-pointer border border-border">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-muted text-muted-foreground">
            US
          </AvatarFallback>
        </Avatar>
        <Button className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Create New
        </Button>
      </div>
                </header>
                <Outlet/>
             </div>
        </div>
    </>
}