import { createContext } from "react";
import { type AuthContext as AC } from "@/types";

const initialContext: AC = {
  isPending: false,
  user: null,
  isAuthenticated: false,
};

export const AuthContext = createContext<AC>(initialContext);
