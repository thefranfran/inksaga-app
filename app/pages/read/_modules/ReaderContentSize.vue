<template>
	<div class="flex flex-col gap-1">
		<h2>Text size</h2>
		<ReaderSlider
			left-icon="AArrowDown"
			right-icon="AArrowUp"
			name="text-size-slider"
			:max="5"
			:min="0.75"
			:step="0.25"
			v-model="store.contentSize"
		/>
	</div>
</template>

<script setup lang="ts">
import ReaderSlider from "../_components/ReaderSlider.vue";

const store = useReaderStore();
</script>
