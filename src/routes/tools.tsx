import { createFileRoute } from "@tanstack/react-router";

import { toolGroups } from "@/lib/content";

export const Route = createFileRoute("/tools")({ component: Tools });

function Tools() {
	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ which -a
			</div>
			<h1 className="mb-11 font-mono text-[32px] font-bold text-foreground">
				Dev Tools
			</h1>

			{toolGroups.map((group, i) => (
				<div
					key={group.label}
					className={i < toolGroups.length - 1 ? "mb-11" : undefined}
				>
					<div className="mb-4 font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
						{group.label}
					</div>
					<div className="border-t border-border">
						{group.tools.map((tool) => (
							<div
								key={tool.name}
								className="flex flex-col gap-1 border-b border-border py-[18px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-5"
							>
								<span className="font-mono text-[15px] font-semibold text-foreground">
									{tool.name}
								</span>
								<span className="text-[13px] text-muted-foreground sm:text-right">
									{tool.description}
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
