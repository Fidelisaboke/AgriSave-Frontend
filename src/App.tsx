import AppRoutes from "@/routes/AppRoutes";
import { QueryClientProvider } from "@/providers/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/providers/AuthProvider";

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <AuthProvider>
          <AppRoutes />
          <Toaster theme="light" position="top-right" richColors />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
