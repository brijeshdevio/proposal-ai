export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type AuthContext = {
  isPending: boolean;
  user: User | null;
  isAuthenticated: boolean;
};
