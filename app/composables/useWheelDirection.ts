const useWheelDirection = () => {
	const wheelDirection = ref<"up" | "down">("up");

	const handleWheel = (e: WheelEvent) => {
		if (e.deltaY > 0) {
			wheelDirection.value = "down";
		} else {
			wheelDirection.value = "up";
		}
	};

	return { wheelDirection, handleWheel };
};

export default useWheelDirection;
