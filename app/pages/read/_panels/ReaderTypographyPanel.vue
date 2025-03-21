<template>
	<PopoverContent :side-offset="8" class="flex flex-col gap-3">
		<ReaderPickUpFont />
		<ReaderContentSize />
		<ReaderContentLine />
		<ReaderAlignments />
		<Button @click="store.reset" ripple aria-label="Reset settings">Reset</Button>
	</PopoverContent>
</template>

<script setup lang="ts">
import ReaderAlignments from "../_modules/ReaderAlignments.vue";
import ReaderContentLine from "../_modules/ReaderContentLine.vue";
import ReaderContentSize from "../_modules/ReaderContentSize.vue";
import ReaderPickUpFont from "../_modules/ReaderPickUpFont.vue";

const store = useReaderStore();
</script>
