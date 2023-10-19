"use client";

import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

import store from "../redux/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider className="flex-grow flex flex-col">
        {children}
      </NextUIProvider>
    </Provider>
  );
}

export default Providers;
