import { useAuth } from "@/hooks/use-auth";
import { CheckCircleIcon, SparkleIcon } from "@phosphor-icons/react";
import { Suspense } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { Spinner } from "../ui/spinner";

const features = [
  {
    title: "Instant Generation",
    description: "Create professional proposals in seconds, not hours.",
  },
  {
    title: "Smart Templates",
    description: "Leverage industry-specific structures proven to convert.",
  },
  {
    title: "Client Analytics",
    description: "Track when and how clients interact with your proposals.",
  },
];

export function PublicOnlyRoute() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="hidden h-screen w-1/2 items-center justify-center bg-secondary lg:flex">
        <div className="w-md space-y-5">
          <div>
            <Link to="/" className="flex space-x-2 text-xl font-bold">
              <SparkleIcon size={32} className="text-primary" />
              <span className="text-primary">ProposalAI</span>
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Win More Clients with AI-Powered Proposals
            </h1>
            <p className="text-muted-foreground">
              Elevate your freelance studio with precision-crafted documents
              that close deals faster.
            </p>
          </div>
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start space-x-2">
                <CheckCircleIcon size={20} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="items-center justify-center p-3 lg:flex lg:w-1/2">
        <Suspense
          fallback={
            <div className="text-center">
              <Spinner className="mx-auto h-6 w-6" />
              <span>Loading</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}
