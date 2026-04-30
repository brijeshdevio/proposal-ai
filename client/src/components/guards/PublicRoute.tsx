import { Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { SparkleIcon } from "@phosphor-icons/react";

export function PublicRoute() {
  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between bg-muted px-4 py-3">
        <div>
          <Link to="/" className="flex space-x-2 text-xl font-bold">
            <SparkleIcon size={32} className="text-primary" />
            <span>ProposalAI</span>
          </Link>
        </div>
        <ul className="hidden space-x-5 md:flex">
          <li>
            <a href="/#" className="text-muted-foreground hover:text-primary">
              How it works
            </a>
          </li>
          <li>
            <a href="/#" className="text-muted-foreground hover:text-primary">
              Features
            </a>
          </li>
          <li>
            <a href="/#" className="text-muted-foreground hover:text-primary">
              Pricing
            </a>
          </li>
        </ul>
        <div className="space-x-2">
          <Button variant={"outline"} className="hidden sm:inline">
            Log in
          </Button>
          <Button>Get started free</Button>
        </div>
      </nav>
      <Outlet />
      <footer className="flex items-center justify-center border-t border-muted/40 py-4 text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} ProposalAI. All rights reserved.
        </p>
      </footer>
    </>
  );
}
