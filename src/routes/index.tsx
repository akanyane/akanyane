import { createFileRoute, Link } from "@tanstack/react-router";

import { latestItems } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

const dashboardCards = [
	{
		index: "01",
		label: "projects",
		title: "Things I've built",
		description: "4 shipped · dotfiles to small APIs",
		to: "/projects" as const,
	},
	{
		index: "02",
		label: "tools",
		title: "The dev toolbox",
		description: "Editor, CLI, deploy, design",
		to: "/tools" as const,
	},
	{
		index: "03",
		label: "cheatsheets",
		title: "Commands I forget",
		description: "git, docker, tmux, regex, linux",
		to: "/cheatsheets" as const,
	},
	{
		index: "04",
		label: "guides",
		title: "Longer write-ups",
		description: "Setup, debugging, deep dives",
		to: "/guides" as const,
	},
	{
		index: "05",
		label: "posts",
		title: "The blog",
		description: "Short-form notes & opinions",
		to: "/posts" as const,
	},
];

function Home() {
	return (
		<div>
			<div className="mb-[18px] font-mono text-[13px] tracking-[0.08em] text-primary">
				$ whoami
			</div>
			<h1 className="mb-5 max-w-[680px] text-pretty font-mono text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-foreground sm:text-[44px]">
				systems, tools & notes from a developer's terminal.
			</h1>
			<p className="mb-10 max-w-[560px] text-base leading-[1.7] text-muted-foreground sm:mb-14">
				A personal hub for the projects I build, the tools I actually use, and
				the commands I always forget.
			</p>

			<div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mb-[72px] lg:grid-cols-3">
				{dashboardCards.map((card) => (
					<Link
						key={card.to}
						to={card.to}
						className="rounded-[12px] border border-border bg-card p-[26px]"
					>
						<div className="mb-[14px] font-mono text-xs text-primary">
							{card.index} · {card.label}
						</div>
						<div className="mb-2 font-mono text-lg font-semibold text-foreground">
							{card.title}
						</div>
						<div className="text-[13px] leading-[1.5] text-muted-foreground">
							{card.description}
						</div>
					</Link>
				))}
				<Link
					to="/about"
					className="rounded-[12px] border border-primary bg-primary p-[26px]"
				>
					<div className="mb-[14px] font-mono text-xs text-white/75">
						06 · about
					</div>
					<div className="mb-2 font-mono text-lg font-semibold text-white">
						Who's behind this
					</div>
					<div className="text-[13px] leading-[1.5] text-white/80">
						Bio, stack, contact
					</div>
				</Link>
			</div>

			<div className="mb-5 font-mono text-[13px] tracking-[0.08em] text-primary">
				$ latest
			</div>
			<div className="flex flex-col border-t border-border">
				{latestItems.map((item) => (
					<Link
						key={item.title}
						to={item.href}
						className="flex items-baseline justify-between gap-6 border-b border-border py-[22px]"
					>
						<div>
							<span className="mr-3 font-mono text-[11px] text-primary">
								{item.type}
							</span>
							<span className="text-[15px] text-foreground">{item.title}</span>
						</div>
						<span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
							{item.date}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}
