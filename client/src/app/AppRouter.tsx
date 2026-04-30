import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicRoute } from "@/components/guards/PublicRoute";
import { PublicOnlyRoute } from "@/components/guards/PublicOnlyRoute";
import { ProtectedRoute } from "@/components/guards/ProtectedRoute";

const Home = lazy(() => import("@/pages/public/Home"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Dashboard = lazy(() => import("@/pages/protect/Dashboard"));
const Proposals = lazy(() => import("@/pages/protect/Proposals"));
const GenerateProposal = lazy(() => import("@/pages/protect/GenerateProposal"));
const ProposalDetails = lazy(() => import("@/pages/protect/ProposalDetails"));
const ProfileSettings = lazy(() => import("@/pages/protect/ProfileSettings"));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicOnlyRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/generate" element={<GenerateProposal />} />
          <Route path="/proposals/:id" element={<ProposalDetails />} />
          <Route path="/profile" element={<ProfileSettings />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
