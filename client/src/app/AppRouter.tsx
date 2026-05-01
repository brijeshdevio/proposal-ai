import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Spinner } from "@/components/ui/spinner";
import { PublicGuard } from "@/components/guards/PublicGuard";
import { ProtectGuard } from "@/components/guards/ProtectGuard";


const Home = lazy(() => import("@/pages/public/Home"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const Proposals = lazy(() => import("@/pages/proposal/Proposals"));
const GenerateProposal = lazy(() => import("@/pages/proposal/GenerateProposal"));
const ProposalDetails = lazy(() => import("@/pages/proposal/ProposalDetails"));
const ProfileSettings = lazy(() => import("@/pages/profile/ProfileSettings"));

export function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <div className="text-center">
            <Spinner className="mx-auto h-6 w-6" />
            <span>Loading</span>
          </div>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectGuard/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/generate" element={<GenerateProposal />} />
            <Route path="/proposals/:id" element={<ProposalDetails />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Route>
          <Route element={<PublicGuard/>}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
