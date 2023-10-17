"use client";

import { Provider } from "react-redux";
import store from "../redux/store";
import { NextUIProvider } from "@nextui-org/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}

export default Providers;
