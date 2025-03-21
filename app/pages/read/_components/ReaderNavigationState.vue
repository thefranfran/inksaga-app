<template>
	<div class="shadow-reader flex items-center justify-around rounded-sm bg-primary">
		<span
			class="flex items-center justify-center rounded-md text-lg font-medium text-accent"
			:class="adjustmentSize(currentChapter)"
			>{{ currentChapter }}</span
		>
		<span class="text-lg font-medium">/</span>
		<span
			class="flex min-w-10 items-center justify-center rounded-md text-lg font-medium text-foreground"
			:class="adjustmentSize(totalChapters)"
			>{{ totalChapters }}</span
		>
	</div>
</template>

<script setup lang="ts">
defineProps({
	currentChapter: {
		type: Number,
		required: true,
	},
	totalChapters: {
		type: Number,
		required: true,
	},
});

const adjustmentSize = (value: number) => {
	return value < 10 ? "min-w-7" : value < 100 ? "min-w-10" : "min-w-12";
};
</script>
