import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: RootLayout,
});

function RootLayout() {
	return (
		<>
			<Nav />
			<main className="mx-auto max-w-[1160px] px-4 pt-10 pb-20 sm:px-8 sm:pt-16 sm:pb-[120px]">
				<Outlet />
			</main>
			<Footer />
			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
					TanStackQueryDevtools,
				]}
			/>
		</>
	);
}
