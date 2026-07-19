import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: About });

const contactLinks = [
	{ label: "hello@akanyane.dev", href: "mailto:hello@akanyane.dev" },
	{ label: "github.com/akanyane", href: "https://github.com/akanyane" },
	{ label: "@akanyane", href: "#" },
];

function About() {
	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ cat about.md
			</div>
			<h1 className="mb-7 font-mono text-[32px] font-bold text-foreground">
				About
			</h1>
			<p className="mb-5 max-w-[620px] text-base leading-[1.75] text-foreground">
				I'm a developer documenting the tools, systems, and small projects I
				build. akanyane.dev is my personal corner of the internet — part
				portfolio, part notebook, mostly for future-me.
			</p>
			<p className="mb-12 max-w-[620px] text-base leading-[1.75] text-muted-foreground">
				No newsletter, no analytics, no comments section. If something here is
				useful, that's the whole point.
			</p>
			<div className="mb-4 font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
				Contact
			</div>
			<div className="flex flex-wrap gap-[22px]">
				{contactLinks.map((link) => (
					<a
						key={link.label}
						href={link.href}
						className="font-mono text-sm text-primary hover:underline"
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
}
