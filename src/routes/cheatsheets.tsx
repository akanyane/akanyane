import { createFileRoute } from "@tanstack/react-router";

import { cheatsheetTabs, gitCommands } from "@/lib/content";

export const Route = createFileRoute("/cheatsheets")({
	component: Cheatsheets,
});

function Cheatsheets() {
	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ man cheatsheets
			</div>
			<h1 className="mb-8 font-mono text-[32px] font-bold text-foreground">
				Cheat Sheets
			</h1>

			<div className="mb-[52px] flex flex-wrap gap-3">
				{cheatsheetTabs.map((tab) =>
					tab === "git" ? (
						<span
							key={tab}
							className="rounded-[8px] bg-primary px-4 py-[9px] font-mono text-[13px] text-primary-foreground"
						>
							{tab}
						</span>
					) : (
						<span
							key={tab}
							className="rounded-[8px] border border-border px-4 py-[9px] font-mono text-[13px] text-muted-foreground"
						>
							{tab}
						</span>
					),
				)}
			</div>

			<div className="mb-[18px] font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
				Featured — Git
			</div>
			<div className="rounded-[12px] border border-border bg-card py-2">
				{gitCommands.map((entry) => (
					<div
						key={entry.command}
						className="flex flex-col gap-1 border-b border-border px-4 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-5 sm:px-[26px]"
					>
						<code className="whitespace-nowrap font-mono text-sm text-primary">
							{entry.command}
						</code>
						<span className="text-[13px] text-muted-foreground">
							{entry.description}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
