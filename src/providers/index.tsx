"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { LeagueContextProvider } from "../context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <LeagueContextProvider>{children}</LeagueContextProvider>
    </QueryClientProvider>
  );
};

export default Provider;
