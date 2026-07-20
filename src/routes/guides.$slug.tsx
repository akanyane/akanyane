import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { GuideBlock } from "@/lib/content";
import { guides } from "@/lib/content";

export const Route = createFileRoute("/guides/$slug")({
	loader: ({ params }) => {
		const guide = guides.find((g) => g.slug === params.slug);
		if (!guide) throw notFound();
		return guide;
	},
	component: GuideDetail,
});

function GuideDetail() {
	const guide = Route.useLoaderData();

	return (
		<div>
			<Link
				to="/guides"
				className="mb-[14px] inline-block font-mono text-[13px] text-primary"
			>
				$ cd ../guides
			</Link>
			<div className="mb-[14px] flex gap-[10px]">
				<span className="rounded-[5px] border border-primary px-[9px] py-[3px] font-mono text-[11px] text-primary uppercase">
					{guide.difficulty}
				</span>
				<span className="font-mono text-[11px] text-muted-foreground">
					{guide.readTime}
				</span>
			</div>
			<h1 className="mb-4 max-w-[760px] font-mono text-[32px] font-bold leading-[1.2] text-foreground">
				{guide.title}
			</h1>
			<p className="mb-11 max-w-[680px] text-base leading-[1.65] text-muted-foreground">
				{guide.summary}
			</p>

			{guide.content ? (
				<div className="flex max-w-[720px] flex-col gap-5">
					{guide.content.map((block) => (
						<GuideBlockView key={blockKey(block)} block={block} />
					))}
				</div>
			) : null}
		</div>
	);
}

function blockKey(block: GuideBlock): string {
	switch (block.type) {
		case "list":
			return block.items[0];
		case "code":
			return block.code;
		default:
			return block.text;
	}
}

function GuideBlockView({ block }: { block: GuideBlock }) {
	switch (block.type) {
		case "heading":
			return (
				<h2 className="mt-4 font-mono text-lg font-semibold text-foreground">
					{block.text}
				</h2>
			);
		case "paragraph":
			return (
				<p className="text-sm leading-[1.75] text-muted-foreground">
					{block.text}
				</p>
			);
		case "note":
			return (
				<p className="rounded-[10px] border border-primary/30 bg-primary/[0.06] px-4 py-3 text-[13px] leading-[1.6] text-foreground">
					{block.text}
				</p>
			);
		case "link":
			return (
				<Link
					to="/guides/$slug"
					params={{ slug: block.slug }}
					className="flex items-center gap-2 font-mono text-[13px] text-primary underline-offset-4 hover:underline"
				>
					<span aria-hidden="true">→</span>
					{block.text}
				</Link>
			);
		case "list":
			return (
				<ul className="flex list-disc flex-col gap-[6px] pl-5 text-sm leading-[1.7] text-muted-foreground">
					{block.items.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			);
		case "code":
			return (
				<div className="overflow-hidden rounded-[10px] border border-border bg-card">
					{block.label ? (
						<div className="border-b border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
							{block.label}
						</div>
					) : null}
					<pre className="overflow-x-auto px-4 py-[14px]">
						<code className="font-mono text-[13px] leading-[1.6] text-primary">
							{block.code}
						</code>
					</pre>
				</div>
			);
	}
}
