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

export interface CheatsheetEntry {
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

export type CheatsheetTab = (typeof cheatsheetTabs)[number];

export const cheatsheets: Record<CheatsheetTab, CheatsheetEntry[]> = {
	git: [
		{ command: "git add -p", description: "Stage changes hunk by hunk" },
		{
			command: "git commit --amend --no-edit",
			description: "Add staged changes to the last commit",
		},
		{
			command: "git rebase -i HEAD~3",
			description: "Interactively edit the last 3 commits",
		},
		{
			command: 'git stash push -m "wip"',
			description: "Stash with a message",
		},
		{
			command: "git switch -c branch",
			description: "Create and switch to a new branch",
		},
		{
			command: "git restore --staged file",
			description: "Unstage a file, keep the changes",
		},
		{
			command: "git log --oneline --graph --all",
			description: "Compact branch history as a graph",
		},
		{
			command: "git bisect start",
			description: "Binary search commits for the one that broke things",
		},
	],
	docker: [
		{
			command: "docker ps -a",
			description: "List all containers, including stopped ones",
		},
		{
			command: "docker exec -it <container> sh",
			description: "Open a shell inside a running container",
		},
		{
			command: "docker logs -f <container>",
			description: "Stream logs from a container",
		},
		{
			command: "docker build -t name .",
			description: "Build an image from the Dockerfile in the current dir",
		},
		{
			command: "docker compose up -d",
			description: "Start services in the background",
		},
		{
			command: "docker system prune -a",
			description: "Remove unused containers, networks, and images",
		},
		{
			command: "docker inspect <container>",
			description: "Show low-level container details as JSON",
		},
		{
			command: "docker cp <container>:/path ./local",
			description: "Copy a file out of a container",
		},
	],
	tmux: [
		{ command: "tmux new -s name", description: "Start a new named session" },
		{
			command: "tmux attach -t name",
			description: "Reattach to a running session",
		},
		{ command: "tmux ls", description: "List running sessions" },
		{
			command: "Ctrl-b d",
			description: "Detach from the current session",
		},
		{
			command: 'Ctrl-b % / Ctrl-b "',
			description: "Split the pane vertically / horizontally",
		},
		{
			command: "Ctrl-b <arrow>",
			description: "Move focus between panes",
		},
		{ command: "Ctrl-b c", description: "Create a new window" },
		{
			command: "Ctrl-b [",
			description: "Enter scroll/copy mode",
		},
	],
	regex: [
		{ command: "^abc", description: "Match abc at the start of a line" },
		{ command: "abc$", description: "Match abc at the end of a line" },
		{ command: ".*", description: "Match any characters, greedily" },
		{ command: "\\d+", description: "One or more digits" },
		{ command: "(foo|bar)", description: "Match foo or bar" },
		{
			command: "(?<=foo)bar",
			description: "Match bar only when preceded by foo",
		},
		{
			command: "[^abc]",
			description: "Match any character except a, b, or c",
		},
		{ command: "\\b", description: "Word boundary" },
	],
	"linux perms": [
		{
			command: "chmod 755 file",
			description: "rwxr-xr-x — owner full, group/others read + execute",
		},
		{
			command: "chmod +x script.sh",
			description: "Add execute permission for everyone",
		},
		{
			command: "chmod u+x,g-w file",
			description: "Symbolic form: add exec for owner, remove write for group",
		},
		{
			command: "chown user:group file",
			description: "Change a file's owner and group",
		},
		{
			command: "ls -l",
			description: "Show permissions, owner, and group for files",
		},
		{
			command: "umask 022",
			description: "Set the default permission mask for new files",
		},
		{
			command: "sudo chmod -R 755 dir",
			description: "Recursively set permissions on a directory",
		},
		{ command: "stat file", description: "Show detailed permission metadata" },
	],
};

export type GuideBlock =
	| { type: "paragraph"; text: string }
	| { type: "heading"; text: string }
	| { type: "code"; code: string; label?: string }
	| { type: "list"; items: string[] }
	| { type: "note"; text: string }
	| { type: "link"; text: string; slug: string };

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
			{ type: "heading", text: "4. Point Nginx at your site" },
			{
				type: "paragraph",
				text: "There are two common setups. If Nginx should serve static files directly, follow 4a. If your site is actually a running app — a Node, Bun, or Python process kept alive by PM2, a systemd service, or Supervisor — it's already listening on a local port, and Nginx just needs to forward requests to it; follow 4b instead.",
			},
			{ type: "heading", text: "4a. Serving static files directly" },
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
				type: "heading",
				text: "4b. Reverse proxying to an app on a port",
			},
			{
				type: "paragraph",
				text: "Whatever keeps your app running — PM2, a systemd unit, or Supervisor — it should already be bound to a local port (say, 3000) and restarted automatically if it crashes or the server reboots. Nginx doesn't care which of those you used; it only needs the port. Point the server block at it with proxy_pass instead of root:",
			},
			{
				type: "code",
				label: "/etc/nginx/sites-available/example.com",
				code: "server {\n    listen 80;\n    listen [::]:80;\n\n    server_name example.com www.example.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_cache_bypass $http_upgrade;\n    }\n}",
			},
			{
				type: "note",
				text: "The Upgrade/Connection headers let WebSocket connections pass through the proxy — drop them if your app doesn't use WebSockets.",
			},
			{
				type: "link",
				text: "Need to get the app running and staying up first? See the PM2 guide for Node, Bun, pnpm, and Yarn apps.",
				slug: "running-apps-with-pm2",
			},
			{
				type: "paragraph",
				text: "Whichever server block you wrote, enable the site by symlinking it into sites-enabled, then test and reload the config:",
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
				text: "Visit http://example.com in a browser. You should see the placeholder page, or your app's response if you're reverse proxying. Once that works, it's safe to move on to HTTPS.",
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
	{
		slug: "running-apps-with-pm2",
		title: "Running Node, Bun, pnpm, or Yarn apps with PM2",
		difficulty: "intermediate",
		readTime: "10 min read",
		summary:
			"Keep a long-running app alive on a server — auto-restarts on crash, survives reboots, and stays up whichever package manager you use.",
		content: [
			{
				type: "paragraph",
				text: "PM2 is a process manager: it starts your app, restarts it if it crashes, keeps logs, and can bring it back up after a server reboot. This covers starting apps run with Node, Bun, pnpm, or Yarn, and getting PM2 itself to survive a reboot.",
			},
			{ type: "heading", text: "1. Install PM2" },
			{
				type: "paragraph",
				text: "PM2 itself is a global CLI tool — install it with whichever package manager you have on the server:",
			},
			{
				type: "code",
				code: "npm install -g pm2\n# or\nbun add -g pm2\n# or\npnpm add -g pm2\n# or\nyarn global add pm2",
			},
			{ type: "heading", text: "2. Start your app" },
			{
				type: "paragraph",
				text: "For a plain Node entry file, PM2 can run it directly:",
			},
			{ type: "code", code: "pm2 start server.js --name my-app" },
			{
				type: "paragraph",
				text: "If your app is started through a package.json script instead — the common case with Bun, pnpm, or Yarn — quote the whole command and PM2 will run it through a shell:",
			},
			{
				type: "code",
				code: 'pm2 start "bun run start" --name my-app\n# or\npm2 start "pnpm start" --name my-app\n# or\npm2 start "yarn start" --name my-app',
			},
			{
				type: "note",
				text: "--name sets the label you'll see in pm2 list and pm2 logs. Without it PM2 falls back to the entry filename, which gets confusing once you're running more than one app.",
			},
			{ type: "heading", text: "3. Or define it in an ecosystem file" },
			{
				type: "paragraph",
				text: "For anything you'll redeploy more than once, an ecosystem file beats remembering CLI flags — it's checked into the repo and specifies the working directory, environment variables, and how the app is launched:",
			},
			{
				type: "code",
				label: "ecosystem.config.js",
				code: 'module.exports = {\n  apps: [\n    {\n      name: "my-app",\n      script: "pnpm",\n      args: "start",\n      cwd: "/var/www/my-app",\n      env: {\n        NODE_ENV: "production",\n        PORT: 3000,\n      },\n    },\n  ],\n};',
			},
			{ type: "code", code: "pm2 start ecosystem.config.js" },
			{
				type: "note",
				text: 'script is the binary PM2 runs and args is what gets passed to it — set script to "bun" or "yarn" the same way to run those instead of pnpm.',
			},
			{ type: "heading", text: "4. Everyday commands" },
			{
				type: "list",
				items: [
					"pm2 list — see every app PM2 is managing, and whether it's up",
					"pm2 logs my-app — tail stdout/stderr for one app",
					"pm2 restart my-app — full restart",
					"pm2 reload my-app — zero-downtime restart, for apps started in cluster mode",
					"pm2 stop my-app / pm2 delete my-app — stop, or stop and remove from the list",
					"pm2 monit — live CPU/memory dashboard for all apps",
				],
			},
			{ type: "heading", text: "5. Survive a reboot" },
			{
				type: "paragraph",
				text: "By default, PM2's process list only lives in memory — a server reboot loses it. Save the current list, then generate and run the startup script for your OS's init system:",
			},
			{ type: "code", code: "pm2 save\npm2 startup" },
			{
				type: "note",
				text: "pm2 startup prints a command starting with sudo env PATH=... — copy and run that exact line. It registers a systemd (or equivalent) service that restores your saved process list on boot. Run pm2 save again any time you start or stop an app, so the saved list stays current.",
			},
			{
				type: "link",
				text: "Once the app is up on its port, see the Nginx + HTTPS guide's reverse proxy section to put a domain in front of it.",
				slug: "nginx-server-with-https",
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
