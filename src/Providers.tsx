"use client";

import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

import store from "./redux/store";

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider className="flex-grow flex flex-col">
          {children}
        </NextUIProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default Providers;
