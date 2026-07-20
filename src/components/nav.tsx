import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-10 border-b border-border bg-background">
			<div className="mx-auto flex max-w-[1160px] items-center justify-between gap-6 px-4 py-5 sm:px-8">
				<Link
					to="/"
					className="flex items-center gap-3"
					onClick={() => setOpen(false)}
				>
					<Logo className="text-primary" />
					<span className="font-mono text-base font-bold tracking-tight text-foreground">
						akanyane<span className="text-primary">.dev</span>
					</span>
				</Link>

				<nav className="hidden flex-wrap items-center gap-6 sm:flex">
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

				<div className="flex items-center gap-3 sm:hidden">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						aria-label={open ? "Close menu" : "Open menu"}
						className="cursor-pointer text-muted-foreground"
					>
						{open ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			{open && (
				<nav className="flex flex-col gap-1 border-t border-border px-4 py-3 sm:hidden">
					{navItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							onClick={() => setOpen(false)}
							className="rounded-[8px] px-2 py-3 font-mono text-sm text-muted-foreground"
							activeProps={{ className: "text-primary" }}
						>
							{item.label}
						</Link>
					))}
				</nav>
			)}
		</header>
	);
}
