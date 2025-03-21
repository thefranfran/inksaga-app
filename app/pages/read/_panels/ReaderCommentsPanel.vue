<template>
	<SheetContent side="right" class="w-[400px] sm:w-[525px]">
		<VisuallyHidden>
			<SheetTitle> Comments for "From Baron to Lord" </SheetTitle>
			<SheetDescription> Comments for the novel "From Baron </SheetDescription>
		</VisuallyHidden>
		<SheetClose asChild class="absolute -left-10 top-0 bg-background">
			<Button variant="ghost" class="h-10 w-10 rounded-none" aria-label="Close" ripple>
				<X />
			</Button>
		</SheetClose>
		<SheetHeader>
			<SheetTitle class="flex items-center justify-between">
				<span>116 Comments</span>
				<ReaderSortComments />
			</SheetTitle>
		</SheetHeader>
	</SheetContent>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import ReaderSortComments from "./ReaderSortComments.vue";
import { VisuallyHidden } from "reka-ui";
</script>
