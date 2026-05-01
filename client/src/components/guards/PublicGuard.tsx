import { SparkleIcon } from "@phosphor-icons/react";
import {  Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";

const NAV_LINKS = [
  { label: "Features", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
  { label: "Contact Support", href: "#" },
];

export function PublicGuard() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-bold text-xl tracking-tight text-foreground flex items-center gap-x-2">
              <SparkleIcon size={30} className="text-primary" />
              PropelAI
            </Link>
            <nav className="hidden md:flex gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            </Link>
            <Link to={"/register"}>
            <Button>Get Started</Button></Link>
          </div>
        </div>
      </header>
      <Outlet />
       <footer className="bg-background border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-bold text-foreground">PropelAI</span>
            <span>© {new Date().getFullYear()} PropelAI Technologies. Built for professionals.</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
