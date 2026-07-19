export interface Project {
	name: string;
	status: "active" | "archived";
	description: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		name: "dotfiles",
		status: "active",
		description:
			"My personal shell, editor, and terminal configuration — reproducible across machines.",
		tags: ["Shell", "Neovim", "tmux"],
	},
	{
		name: "reflow",
		status: "active",
		description:
			"A small CLI that reformats messy terminal/log output into clean, aligned tables.",
		tags: ["Go", "CLI"],
	},
	{
		name: "night-owl-api",
		status: "archived",
		description:
			"A tiny self-hosted API for tracking sleep and coding hours side by side.",
		tags: ["Node", "SQLite"],
	},
	{
		name: "akanyane.dev",
		status: "active",
		description:
			"This site — a single hand-built page listing everything else I make.",
		tags: ["HTML", "Design"],
	},
];

export interface Tool {
	name: string;
	description: string;
}

export interface ToolGroup {
	label: string;
	tools: Tool[];
}

export const toolGroups: ToolGroup[] = [
	{
		label: "Editor & Terminal",
		tools: [
			{ name: "Neovim", description: "Modal editor, configured with Lua" },
			{
				name: "tmux",
				description: "Terminal multiplexer, sessions that survive reboots",
			},
			{
				name: "Zsh + Starship",
				description: "Shell and a fast, minimal prompt",
			},
		],
	},
	{
		label: "CLI Utilities",
		tools: [
			{
				name: "ripgrep",
				description: "Fast recursive search, respects .gitignore",
			},
			{
				name: "fzf",
				description: "Fuzzy finder for files, history, everything",
			},
			{
				name: "bat",
				description: "cat with syntax highlighting and line numbers",
			},
			{ name: "jq", description: "JSON slicing and filtering from the shell" },
		],
	},
	{
		label: "Deploy & Infra",
		tools: [
			{ name: "Fly.io", description: "Deploys small apps close to users" },
			{ name: "Caddy", description: "Reverse proxy with automatic HTTPS" },
			{
				name: "Docker Compose",
				description: "Local multi-container development",
			},
		],
	},
];

export interface Post {
	title: string;
	date: string;
	readTime: string;
	excerpt: string;
	tags: string[];
}

export const posts: Post[] = [
	{
		title: "The tools I actually use daily (2026 edition)",
		date: "Jul 14, 2026",
		readTime: "4 min",
		excerpt:
			"An honest, unsponsored list of what's actually in my toolbox this year — and what I dropped.",
		tags: ["#tools", "#workflow"],
	},
	{
		title: "Notes on self-hosting: two years in",
		date: "Jun 30, 2026",
		readTime: "6 min",
		excerpt:
			"What broke, what I'd redo, and why I still run my own mail and metrics stack.",
		tags: ["#self-hosting", "#infra"],
	},
	{
		title: "Terminal workflow: from bash to zsh to fish and back",
		date: "Jun 9, 2026",
		readTime: "3 min",
		excerpt: "A short history of shell-hopping, and why I settled where I did.",
		tags: ["#shell"],
	},
	{
		title: "Why I moved my blog to a single HTML file",
		date: "May 22, 2026",
		readTime: "2 min",
		excerpt:
			"No build step, no dependencies, no breakage. Just one file I understand completely.",
		tags: ["#meta"],
	},
];

export interface GitCommand {
	command: string;
	description: string;
}

export const cheatsheetTabs = [
	"git",
	"docker",
	"tmux",
	"regex",
	"linux perms",
] as const;

export const gitCommands: GitCommand[] = [
	{ command: "git add -p", description: "Stage changes hunk by hunk" },
	{
		command: "git commit --amend --no-edit",
		description: "Add staged changes to the last commit",
	},
	{
		command: "git rebase -i HEAD~3",
		description: "Interactively edit the last 3 commits",
	},
	{ command: 'git stash push -m "wip"', description: "Stash with a message" },
	{
		command: "git switch -c branch",
		description: "Create and switch to a new branch",
	},
	{
		command: "git restore --staged file",
		description: "Unstage a file, keep the changes",
	},
];

export interface Guide {
	title: string;
	difficulty: "beginner" | "intermediate" | "advanced";
	readTime: string;
	summary: string;
}

export const guides: Guide[] = [
	{
		title: "Setting up a reproducible dev environment with Nix",
		difficulty: "intermediate",
		readTime: "12 min read",
		summary:
			'Pin every dependency, share one shell.nix, and stop hearing "works on my machine."',
	},
	{
		title: "Debugging memory leaks in Node.js services",
		difficulty: "advanced",
		readTime: "18 min read",
		summary:
			"Heap snapshots, --inspect, and the three leaks I keep re-discovering in production.",
	},
	{
		title: "A pragmatic guide to writing Dockerfiles",
		difficulty: "beginner",
		readTime: "9 min read",
		summary:
			"Layer caching, multi-stage builds, and the handful of rules that matter most.",
	},
];

export interface LatestItem {
	type: "POST" | "GUIDE" | "PROJECT";
	title: string;
	date: string;
	href: "/posts" | "/guides" | "/projects";
}

export const latestItems: LatestItem[] = [
	{
		type: "POST",
		title: "The tools I actually use daily (2026 edition)",
		date: "Jul 14",
		href: "/posts",
	},
	{
		type: "GUIDE",
		title: "A pragmatic guide to writing Dockerfiles",
		date: "Jul 02",
		href: "/guides",
	},
	{
		type: "PROJECT",
		title: "reflow — a CLI that reformats terminal output into tables",
		date: "Jun 21",
		href: "/projects",
	},
];
