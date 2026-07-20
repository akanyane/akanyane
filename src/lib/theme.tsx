import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "akanyane-theme";

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		setTheme(
			document.documentElement.classList.contains("dark") ? "dark" : "light",
		);
	}, []);

	function toggleTheme() {
		setTheme((prev) => {
			const next: Theme = prev === "dark" ? "light" : "dark";
			document.documentElement.classList.toggle("dark", next === "dark");
			localStorage.setItem(STORAGE_KEY, next);
			return next;
		});
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
