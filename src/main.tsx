import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./lib/theme/index.ts";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
export const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider cssVarsRoot="root" resetCSS theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
