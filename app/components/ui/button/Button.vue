<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type ButtonVariants, buttonVariants } from ".";
import useRipple from "~/composables/useRipple";

interface Props extends PrimitiveProps {
	variant?: ButtonVariants["variant"];
	size?: ButtonVariants["size"];
	class?: HTMLAttributes["class"];
	ripple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	as: "button",
	ripple: false,
});

const { createRipple } = useRipple();

const handleRipple = (e: MouseEvent) => {
	if (!props.ripple) return;
	createRipple(e);
};
</script>

<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="
			cn(buttonVariants({ variant, size }), 'relative overflow-hidden', props.class)
		"
		@click="handleRipple"
	>
		<slot />
	</Primitive>
</template>

<style>
.ripple {
	position: absolute;
	border-radius: 50%;
	transform: scale(0);
	animation: ripple-animation 1s linear;
	background-color: rgba(0, 0, 0, 0.3);
}

@keyframes ripple-animation {
	to {
		transform: scale(4);
		opacity: 0;
	}
}
</style>
