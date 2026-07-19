import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
	{ to: "/projects", label: "projects" },
	{ to: "/tools", label: "tools" },
	{ to: "/posts", label: "posts" },
	{ to: "/cheatsheets", label: "cheatsheets" },
	{ to: "/guides", label: "guides" },
	{ to: "/about", label: "about" },
] as const;

export function Nav() {
	return (
		<header className="sticky top-0 z-10 border-b border-border bg-background">
			<div className="mx-auto flex max-w-[1160px] items-center justify-between gap-6 px-8 py-5">
				<Link to="/" className="flex items-center gap-3">
					<Logo className="text-primary" />
					<span className="font-mono text-base font-bold tracking-tight text-foreground">
						akanyane<span className="text-primary">.dev</span>
					</span>
				</Link>
				<nav className="flex flex-wrap items-center gap-6">
					{navItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className="border-b-2 border-transparent pb-[3px] font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
							activeProps={{
								className: "border-primary text-primary hover:text-primary",
							}}
						>
							{item.label}
						</Link>
					))}
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
