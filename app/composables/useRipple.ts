const useRipple = () => {
	const createRipple = (e: MouseEvent) => {
		const container = e.currentTarget as HTMLElement;
		if (!container) return;

		const rect = container.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const ripple = document.createElement("span");
		ripple.className = "ripple";

		const size = Math.max(rect.width, rect.height) * 2;
		ripple.style.width = ripple.style.height = `${size}px`;
		ripple.style.left = `${x - size / 2}px`;
		ripple.style.top = `${y - size / 2}px`;

		container.appendChild(ripple);

		setTimeout(() => ripple.remove(), 1000);
	};

	return { createRipple };
};

export default useRipple;
