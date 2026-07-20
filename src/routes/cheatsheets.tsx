import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { CheatsheetTab } from "@/lib/content";
import { cheatsheets, cheatsheetTabs } from "@/lib/content";

export const Route = createFileRoute("/cheatsheets")({
	component: Cheatsheets,
});

function Cheatsheets() {
	const [activeTab, setActiveTab] = useState<CheatsheetTab>(cheatsheetTabs[0]);
	const [query, setQuery] = useState("");
	const [copied, setCopied] = useState<string | null>(null);

	const entries = useMemo(() => {
		const q = query.trim().toLowerCase();
		const all = cheatsheets[activeTab];
		if (!q) return all;
		return all.filter(
			(entry) =>
				entry.command.toLowerCase().includes(q) ||
				entry.description.toLowerCase().includes(q),
		);
	}, [activeTab, query]);

	async function copyCommand(command: string) {
		await navigator.clipboard.writeText(command);
		setCopied(command);
		setTimeout(
			() => setCopied((current) => (current === command ? null : current)),
			1500,
		);
	}

	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ man cheatsheets
			</div>
			<h1 className="mb-8 font-mono text-[32px] font-bold text-foreground">
				Cheat Sheets
			</h1>

			<div className="mb-8 flex flex-wrap gap-3">
				{cheatsheetTabs.map((tab) => (
					<button
						key={tab}
						type="button"
						onClick={() => setActiveTab(tab)}
						className={
							tab === activeTab
								? "cursor-pointer rounded-[8px] bg-primary px-4 py-[9px] font-mono text-[13px] text-primary-foreground"
								: "cursor-pointer rounded-[8px] border border-border px-4 py-[9px] font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
						}
					>
						{tab}
					</button>
				))}
			</div>

			<div className="mb-[18px] flex items-center gap-2 rounded-[8px] border border-border bg-card px-4 py-[10px]">
				<Search size={15} className="text-muted-foreground" />
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder={`Filter ${activeTab} commands…`}
					className="w-full bg-transparent font-mono text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
				/>
			</div>

			<div className="rounded-[12px] border border-border bg-card py-2">
				{entries.length === 0 ? (
					<div className="px-4 py-8 text-center text-[13px] text-muted-foreground sm:px-[26px]">
						No {activeTab} commands match "{query}".
					</div>
				) : (
					entries.map((entry) => (
						<div
							key={entry.command}
							className="flex items-center justify-between gap-4 border-b border-border px-4 py-4 last:border-b-0 sm:px-[26px]"
						>
							<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
								<code className="whitespace-nowrap font-mono text-sm text-primary">
									{entry.command}
								</code>
								<span className="text-[13px] text-muted-foreground">
									{entry.description}
								</span>
							</div>
							<button
								type="button"
								onClick={() => copyCommand(entry.command)}
								aria-label={`Copy ${entry.command}`}
								className="shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
							>
								{copied === entry.command ? (
									<Check size={15} className="text-primary" />
								) : (
									<Copy size={15} />
								)}
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
}
