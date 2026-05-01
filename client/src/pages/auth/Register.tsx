import { SparkleIcon } from "@phosphor-icons/react";
import {  Timer, Activity, TrendingUp,  } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// --- MOCK DATA ---
const MARKETING_FEATURES = [
  {
    id: "time",
    icon: Timer,
    label: "Save time",
  },
  {
    id: "performance",
    icon: Activity,
    label: "Track performance",
  },
  {
    id: "response",
    icon: TrendingUp,
    label: "Improve response rates",
  },
];

export default function Register() {
  return (
    <div className="min-h-screen bg-background text-foreground grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT PANEL - Marketing / Value Prop (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between bg-muted p-12 lg:p-16">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl tracking-tight text-foreground flex items-center gap-x-2">
              <SparkleIcon  className="text-primary h-7 w-7" />
              PropelAI
            </Link>

        {/* Hero Content */}
        <div className="space-y-10 max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Generate high-converting proposals with AI
          </h1>
          
          <ul className="space-y-6">
            {MARKETING_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <li key={feature.id} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-muted-foreground font-medium">
                    {feature.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PropelAI Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT PANEL - Auth Form */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-[400px] space-y-8">
          
          {/* Header */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Create your account
            </h2>
            <p className="text-muted-foreground">
          Join high performance freelancer today.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email Address" type="email" placeholder="m@example.com" />
            <Input label="Password" type="password" placeholder="*********" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Sign Up
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="space-y-6 text-center">
            <Link to="/login">
            <Button variant="ghost" className="text-foreground hover:text-foreground/80 font-medium">
              Log in to existing account
            </Button>
            </Link>

            <p className="px-4 text-xs text-muted-foreground leading-relaxed">
              By clicking continue, you agree to our{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </a>
              .
            </p>
          </div>

        </div>
      </div>
      
    </div>
  );
}