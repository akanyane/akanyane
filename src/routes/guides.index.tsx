import { createFileRoute, Link } from "@tanstack/react-router";

import { guides } from "@/lib/content";

export const Route = createFileRoute("/guides/")({ component: Guides });

function Guides() {
	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ less guides/
			</div>
			<h1 className="mb-11 font-mono text-[32px] font-bold text-foreground">
				Guides
			</h1>
			<div className="flex flex-col gap-5">
				{guides.map((guide) => (
					<Link
						key={guide.slug}
						to="/guides/$slug"
						params={{ slug: guide.slug }}
						className="rounded-[12px] border border-border bg-card p-[30px] transition-colors hover:border-primary"
					>
						<div className="mb-[14px] flex gap-[10px]">
							<span className="rounded-[5px] border border-primary px-[9px] py-[3px] font-mono text-[11px] text-primary uppercase">
								{guide.difficulty}
							</span>
							<span className="font-mono text-[11px] text-muted-foreground">
								{guide.readTime}
							</span>
						</div>
						<div className="mb-[10px] font-mono text-xl font-semibold text-foreground">
							{guide.title}
						</div>
						<p className="max-w-[680px] text-sm leading-[1.65] text-muted-foreground">
							{guide.summary}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
}
