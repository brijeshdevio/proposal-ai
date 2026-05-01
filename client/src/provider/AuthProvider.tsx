import { AuthContext } from "@/context/auth-context";
import { useGetMeQuery } from "@/features/users/users.hooks";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isPending, data, isSuccess } = useGetMeQuery();

  return (
    <AuthContext.Provider
      value={{ isPending, user: data, isAuthenticated: isSuccess }}
    >
      {children}
    </AuthContext.Provider>
  );
};
