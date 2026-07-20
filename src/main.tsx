import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/lib/theme";
import { getRouter } from "./router";

import "./styles.css";

const router = getRouter();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
	<StrictMode>
		<QueryClientProvider client={router.options.context.queryClient}>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>,
);
