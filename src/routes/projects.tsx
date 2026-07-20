import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/content";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
	return (
		<div>
			<div className="mb-[14px] font-mono text-[13px] text-primary">
				$ ls projects/
			</div>
			<h1 className="mb-11 font-mono text-[32px] font-bold text-foreground">
				Projects
			</h1>
			<div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
				{projects.map((project) => (
					<div
						key={project.name}
						className="flex flex-col rounded-[12px] border border-border bg-card p-[28px]"
					>
						<div className="mb-[14px] flex items-center justify-between">
							<span className="font-mono text-[17px] font-semibold text-foreground">
								{project.name}
							</span>
							{project.status === "active" ? (
								<span className="rounded-[5px] bg-[#5FBF77]/[0.12] px-2 py-[3px] font-mono text-[10px] text-[#5FBF77]">
									active
								</span>
							) : (
								<span className="rounded-[5px] bg-secondary px-2 py-[3px] font-mono text-[10px] text-muted-foreground">
									archived
								</span>
							)}
						</div>
						<p className="mb-[18px] text-sm leading-[1.6] text-muted-foreground">
							{project.description}
						</p>
						<div className="mb-[18px] flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-[5px] border border-border px-[9px] py-1 font-mono text-[11px] text-muted-foreground"
								>
									{tag}
								</span>
							))}
						</div>
						<ProjectLinks project={project} />
					</div>
				))}
			</div>
		</div>
	);
}

function ProjectLinks({ project }: { project: Project }) {
	if (!project.href && !project.homepage) return null;

	return (
		<div className="mt-auto flex gap-4 border-t border-border pt-[14px]">
			{project.href ? (
				<a
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-[6px] font-mono text-[12px] text-muted-foreground transition-colors hover:text-primary"
				>
					<Github size={13} />
					code
				</a>
			) : null}
			{project.homepage ? (
				<a
					href={project.homepage}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-[6px] font-mono text-[12px] text-muted-foreground transition-colors hover:text-primary"
				>
					<ArrowUpRight size={13} />
					live
				</a>
			) : null}
		</div>
	);
}
