<template>
	<Button variant="ghost" class="h-full rounded-none" ripple>
		<span v-if="layout === 'right'">
			{{ label }}
		</span>
		<div class="relative">
			<Icon v-if="icon" :name="icon" :size="iconSize" :class="marginAdjustment" />
			<div v-if="pin" class="absolute -right-0.5 -top-0.5">
				<Pin />
			</div>
		</div>
		<span v-if="layout === 'left'">
			{{ label }}
		</span>
	</Button>
</template>

<script setup>
import Icon from "~/components/Icon.vue";
import Pin from "~/components/Pin.vue";

const {
	label,
	pin = false,
	layout,
	iconSize = 36,
} = defineProps({
	label: String,
	icon: String,
	iconSize: Number,
	pin: Boolean,
	layout: {
		type: String,
		default: "left",
	},
});

const marginAdjustment = computed(() => {
	if (!label) return;

	return layout === "right" ? "-ml-1.5" : "-mr-1.5";
});
</script>
