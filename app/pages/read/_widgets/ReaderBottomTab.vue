<script setup lang="ts">
import ReaderNavigation from "./ReaderNavigation.vue";
import ReaderSettings from "./ReaderSettings.vue";
import ReaderInfos from "./ReaderInfos.vue";
</script>

<template>
	<div class="shadow-reader fixed bottom-0 flex min-h-16 w-full select-none bg-secondary">
		<div class="flex w-full items-center justify-around">
			<ReaderInfos />
			<ReaderNavigation />
			<ReaderSettings />
		</div>
	</div>
</template>
