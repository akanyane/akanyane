import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/lib/content";

export const Route = createFileRoute("/posts")({ component: Posts });

function Posts() {
	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ cat posts/*.md
			</div>
			<h1 className="mb-11 font-mono text-[32px] font-bold text-foreground">
				Posts
			</h1>
			<div className="flex flex-col border-t border-border">
				{posts.map((post) => (
					<div
						key={post.title}
						className="border-b border-border py-[26px] last:border-b-0"
					>
						<div className="mb-2 font-mono text-xs text-muted-foreground">
							{post.date} · {post.readTime}
						</div>
						<div className="mb-2 font-mono text-[19px] font-semibold text-foreground">
							{post.title}
						</div>
						<p className="mb-3 max-w-[640px] text-sm leading-[1.6] text-muted-foreground">
							{post.excerpt}
						</p>
						<div className="flex gap-2">
							{post.tags.map((tag) => (
								<span key={tag} className="font-mono text-[11px] text-primary">
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
