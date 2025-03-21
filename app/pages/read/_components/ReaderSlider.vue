<template>
	<div class="flex items-center gap-2">
		<Icon v-if="leftIcon" :name="leftIcon" :size="28" />
		<Slider v-model="model" :max="max" :min="min" :step="step" :name="name" />
		<Icon v-if="rightIcon" :name="rightIcon" :size="28" />
	</div>
</template>

<script setup lang="ts">
import Icon from "~/components/Icon.vue";

defineProps({
	leftIcon: String,
	name: String,
	max: Number,
	min: Number,
	step: Number,
	default: Number,
	rightIcon: String,
});

const model = defineModel({
	type: Object,
});
</script>
