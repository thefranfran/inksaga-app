<template>
	<div class="flex items-center space-x-2">
		<Switch :id="id" v-model:model-value="model" />
		<Label :for="id">{{ label }}</Label>
	</div>
</template>

<script setup lang="ts">
const model = defineModel({
	default: false,
	type: Boolean,
	required: true,
});

defineProps({
	id: String,
	label: String,
});
</script>
