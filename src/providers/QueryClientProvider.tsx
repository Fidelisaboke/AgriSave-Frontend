import React from "react";
import { QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider client={queryClient}>
      {children}
    </Provider>
  );
};
