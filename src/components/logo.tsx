export function Logo({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 100 100"
			width="26"
			height="26"
			className={className}
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				fill="currentColor"
				d="M24 66 L24 48 L32 22 L44 43 L56 43 L68 22 L76 48 L76 66 Q76 79 50 79 Q24 79 24 66 Z M38 55 a5 5 0 1 0 0.01 0 Z M62 55 a5 5 0 1 0 0.01 0 Z M46 63 L54 63 L50 69 Z"
			/>
		</svg>
	);
}
