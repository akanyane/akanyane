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

export type GuideBlock =
	| { type: "paragraph"; text: string }
	| { type: "heading"; text: string }
	| { type: "code"; code: string; label?: string }
	| { type: "list"; items: string[] }
	| { type: "note"; text: string };

export interface Guide {
	slug: string;
	title: string;
	difficulty: "beginner" | "intermediate" | "advanced";
	readTime: string;
	summary: string;
	content?: GuideBlock[];
}

export const guides: Guide[] = [
	{
		slug: "nix-dev-environment",
		title: "Setting up a reproducible dev environment with Nix",
		difficulty: "intermediate",
		readTime: "12 min read",
		summary:
			'Pin every dependency, share one shell.nix, and stop hearing "works on my machine."',
	},
	{
		slug: "debugging-node-memory-leaks",
		title: "Debugging memory leaks in Node.js services",
		difficulty: "advanced",
		readTime: "18 min read",
		summary:
			"Heap snapshots, --inspect, and the three leaks I keep re-discovering in production.",
	},
	{
		slug: "writing-dockerfiles",
		title: "A pragmatic guide to writing Dockerfiles",
		difficulty: "beginner",
		readTime: "9 min read",
		summary:
			"Layer caching, multi-stage builds, and the handful of rules that matter most.",
	},
	{
		slug: "nginx-server-with-https",
		title: "Setting up an Nginx website on a server, then adding HTTPS",
		difficulty: "beginner",
		readTime: "11 min read",
		summary:
			"Point a domain at a fresh server, serve it with Nginx, and lock it down with a free Let's Encrypt certificate.",
		content: [
			{
				type: "paragraph",
				text: "This walks through serving a static site with Nginx on a fresh Ubuntu/Debian server, then upgrading it from plain HTTP to HTTPS with a free Let's Encrypt certificate. You'll need a server with a public IP and root or sudo access, plus a domain name you can point at it.",
			},
			{ type: "heading", text: "1. Point your domain at the server" },
			{
				type: "paragraph",
				text: "In your domain registrar's DNS settings, create an A record for your domain (and one for the www subdomain) pointing at your server's public IP address.",
			},
			{
				type: "code",
				label: "DNS records",
				code: "Type   Name   Value             TTL\nA      @      203.0.113.10      3600\nA      www    203.0.113.10      3600",
			},
			{
				type: "paragraph",
				text: "DNS propagation can take a few minutes to a few hours. Confirm it resolves before moving on:",
			},
			{ type: "code", code: "dig +short example.com" },
			{ type: "heading", text: "2. Install Nginx" },
			{
				type: "code",
				code: "sudo apt update\nsudo apt install nginx -y\nsudo systemctl enable --now nginx",
			},
			{
				type: "paragraph",
				text: "Check that it's running — you should see active (running):",
			},
			{ type: "code", code: "systemctl status nginx" },
			{ type: "heading", text: "3. Open the firewall" },
			{
				type: "paragraph",
				text: "If you're using ufw, allow both HTTP and HTTPS traffic through the Nginx profile:",
			},
			{
				type: "code",
				code: "sudo ufw allow 'Nginx Full'\nsudo ufw status",
			},
			{ type: "heading", text: "4. Create a server block for your site" },
			{
				type: "paragraph",
				text: "Create a directory for your site's files and drop in a placeholder page:",
			},
			{
				type: "code",
				code: 'sudo mkdir -p /var/www/example.com/html\nsudo chown -R $USER:$USER /var/www/example.com/html\necho "<h1>It works.</h1>" > /var/www/example.com/html/index.html',
			},
			{
				type: "paragraph",
				text: "Create /etc/nginx/sites-available/example.com with a server block:",
			},
			{
				type: "code",
				label: "/etc/nginx/sites-available/example.com",
				code: "server {\n    listen 80;\n    listen [::]:80;\n\n    server_name example.com www.example.com;\n    root /var/www/example.com/html;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}",
			},
			{
				type: "paragraph",
				text: "Enable the site by symlinking it into sites-enabled, then test and reload the config:",
			},
			{
				type: "code",
				code: "sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl reload nginx",
			},
			{
				type: "note",
				text: "sudo nginx -t validates the config before you reload — always run it after editing an Nginx config file.",
			},
			{ type: "heading", text: "5. Verify plain HTTP works" },
			{
				type: "paragraph",
				text: "Visit http://example.com in a browser. You should see the placeholder page. Once that works, it's safe to move on to HTTPS.",
			},
			{ type: "heading", text: "6. Install Certbot and get a certificate" },
			{
				type: "paragraph",
				text: "Certbot's Nginx plugin can request a certificate and edit your server block for you in one step:",
			},
			{
				type: "code",
				code: "sudo apt install certbot python3-certbot-nginx -y\nsudo certbot --nginx -d example.com -d www.example.com",
			},
			{
				type: "paragraph",
				text: "Certbot will ask for an email (for renewal/expiry notices) and whether to redirect HTTP traffic to HTTPS — choose the redirect option. It then rewrites your server block to listen on 443 with the new certificate and adds a redirect from port 80.",
			},
			{ type: "heading", text: "7. Confirm auto-renewal" },
			{
				type: "paragraph",
				text: "Let's Encrypt certificates expire every 90 days. The certbot package installs a systemd timer that renews them automatically — confirm it's active and do a dry run:",
			},
			{
				type: "code",
				code: "systemctl list-timers | grep certbot\nsudo certbot renew --dry-run",
			},
			{ type: "heading", text: "8. Done" },
			{
				type: "paragraph",
				text: "Visit https://example.com — you should get a valid certificate and a padlock in the browser, with http:// requests automatically redirected to https://.",
			},
		],
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
