<script setup lang="ts">
import { cn } from "@/lib/utils";
import { X } from "lucide-vue-next";
import {
	DialogClose,
	DialogContent,
	type DialogContentEmits,
	type DialogContentProps,
	DialogOverlay,
	DialogPortal,
	useForwardPropsEmits,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { type SheetVariants, sheetVariants } from ".";

interface SheetContentProps extends DialogContentProps {
	class?: HTMLAttributes["class"];
	side?: SheetVariants["side"];
}

defineOptions({
	inheritAttrs: false,
});

const props = defineProps<SheetContentProps>();

const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
	const { class: _, side, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
	<DialogPortal>
		<DialogOverlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
		/>
		<DialogContent
			:class="cn(sheetVariants({ side }), props.class)"
			v-bind="{ ...forwarded, ...$attrs }"
		>
			<slot />
		</DialogContent>
	</DialogPortal>
</template>
