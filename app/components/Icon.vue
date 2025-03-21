<script setup>
import { computed } from "vue";
import * as icons from "lucide-vue-next";

const { name } = defineProps({
	name: {
		type: String,
		required: true,
	},
	size: Number,
	color: String,
	strokeWidth: Number,
	defaultClass: String,
});

const icon = computed(() => icons[name]);
</script>

<template>
	<component
		:is="icon"
		:size="size"
		:color="color"
		:stroke-width="strokeWidth"
		:default-class="defaultClass"
	/>
</template>
