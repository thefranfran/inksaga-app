const useContextMenu = () => {
	onMounted(() => {
		window.addEventListener(
			"contextmenu",
			function (e) {
				e.preventDefault();
			},
			false,
		);
	});

	onUnmounted(() => {
		window.removeEventListener(
			"contextmenu",
			function (e) {
				e.preventDefault();
			},
			false,
		);
	});
};

export default useContextMenu;
