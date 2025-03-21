<template>
	<div class="flex h-full flex-row items-center">
		<Sheet v-on:update:open="status => (open = status)">
			<SheetTrigger as-child>
				<ReaderNavigationButton icon="Library" :icon-size="24" aria-label="Novel infos" />
			</SheetTrigger>
			<h1 class="max-w-48">Chapter 2: Can You Speak Human Language?</h1>
			<ReaderInfosPanel :isPanelOpen="open" />
		</Sheet>
	</div>
</template>

<script setup lang="ts">
import ReaderNavigationButton from "../_components/ReaderNavigationButton.vue";
import ReaderInfosPanel from "../_panels/ReaderInfosPanel.vue";

const open = ref(false);
</script>
