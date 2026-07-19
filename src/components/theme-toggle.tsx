import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="cursor-pointer rounded-[7px] border border-border bg-secondary px-[11px] py-[7px] font-mono text-xs text-muted-foreground"
		>
			{theme === "dark" ? "☾ dark" : "☀ light"}
		</button>
	);
}
