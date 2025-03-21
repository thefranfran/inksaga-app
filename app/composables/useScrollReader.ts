const useScrollReader = () => {
	const { wheelDirection, handleWheel } = useWheelDirection();
	const scrollY = ref(0);

	const onScroll = () => {
		scrollY.value = window.scrollY;
	};

	onMounted(() => {
		window.addEventListener("scroll", onScroll);
		window.addEventListener("wheel", handleWheel);
	});

	onUnmounted(() => {
		window.removeEventListener("scroll", onScroll);
		window.removeEventListener("wheel", handleWheel);
	});

	const showTabs = computed(() => {
		if (wheelDirection.value === "up") {
			return true;
		}

		return scrollY.value < 100;
	});

	return { showTabs };
};

export default useScrollReader;
