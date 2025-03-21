import type { Color } from "~/types/colors";
import { ReaderFonts, ReaderContentAlignment, ReaderContentLayout } from "~/types/reader";

export const useReaderStore = defineStore(
	"reader",
	() => {
		const contentSize = ref<number[]>([1]);
		const contentLineHeight = ref<number[]>([1.5]);
		const contentLayout = ref<ReaderContentLayout>(ReaderContentLayout.MAXIMIZE);
		const contentAlignment = ref<ReaderContentAlignment>(ReaderContentAlignment.LEFT);
		const fontColor = ref<Color>("var(--foreground)");
		const fontFamily = ref<ReaderFonts>(ReaderFonts.Inter);
		const backgroundColor = ref<Color>("var(--background)");
		const contentIntentEnabled = ref<boolean>(false);
		const infiniteScrollEnabled = ref<boolean>(false);

		const updateFontFamily = (font: ReaderFonts) => {
			fontFamily.value = font;
		};

		const updateContentAlignment = (alignment: ReaderContentAlignment) => {
			contentAlignment.value = alignment;
		};

		const reset = () => {
			contentSize.value = [1];
			contentLineHeight.value = [1.5];
			fontColor.value = "var(--foreground)";
			fontFamily.value = ReaderFonts.Inter;
			contentLayout.value = ReaderContentLayout.MAXIMIZE;
			contentAlignment.value = ReaderContentAlignment.LEFT;
			backgroundColor.value = "var(--background)";
			contentIntentEnabled.value = false;
			infiniteScrollEnabled.value = false;
		};

		return {
			contentSize,
			fontColor,
			fontFamily,
			contentLayout,
			contentAlignment,
			contentLineHeight,
			backgroundColor,
			contentIntentEnabled,
			infiniteScrollEnabled,
			updateFontFamily,
			updateContentAlignment,
			reset,
		};
	},
	{ persist: true },
);

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useReaderStore, import.meta.hot));
}
