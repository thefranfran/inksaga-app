<script setup lang="ts">
import ReaderNavigationButton from "../_components/ReaderNavigationButton.vue";
import ReaderNavigationState from "../_components/ReaderNavigationState.vue";

const totalChapters = ref(56);
const currentChapter = ref(1);
</script>

<template>
	<div class="flex h-full items-center gap-4">
		<ReaderNavigationButton
			label="Prev"
			icon="ChevronLeft"
			layout="left"
			aria-label="Previous chapter"
		/>
		<ReaderNavigationState
			:currentChapter="currentChapter"
			:totalChapters="totalChapters"
		/>
		<ReaderNavigationButton
			label="Next"
			icon="ChevronRight"
			layout="right"
			aria-label="Next chapter"
		/>
	</div>
</template>
