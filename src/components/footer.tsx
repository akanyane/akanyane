import { Github, Mail, X } from "lucide-react";

const socialLinks = [
	{ label: "GitHub", href: "https://github.com/akanyane", icon: Github },
	{ label: "X", href: "#", icon: X },
	{ label: "Email", href: "mailto:hello@akanyane.dev", icon: Mail },
];

export function Footer() {
	return (
		<footer className="border-t border-border">
			<div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-7 sm:px-8">
				<span className="font-mono text-xs text-muted-foreground">
					© 2026 akanyane.dev
				</span>
				<div className="flex items-center gap-4">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							aria-label={link.label}
							className="text-muted-foreground transition-colors hover:text-primary"
						>
							<link.icon size={16} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
