import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./AppRouter";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
