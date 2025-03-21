<template>
	<div class="flex flex-col gap-1">
		<h2>Line height</h2>
		<ReaderSlider
			left-icon="AArrowDown"
			right-icon="AArrowUp"
			name="line-height-slider"
			:max="3"
			:min="1"
			:step="0.1"
			v-model="store.contentLineHeight"
		/>
	</div>
</template>

<script setup lang="ts">
import ReaderSlider from "../_components/ReaderSlider.vue";

const store = useReaderStore();
</script>
