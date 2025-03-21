<template>
	<div class="h-full">
		<Sheet>
			<SheetTrigger as-child>
				<ReaderNavigationButton
					icon="MessageCircle"
					:icon-size="24"
					pin
					aria-label="Comments"
				/>
			</SheetTrigger>
			<ReaderCommentsPanel />
		</Sheet>

		<Popover>
			<PopoverTrigger class="h-full" as-child>
				<ReaderNavigationButton
					icon="Pencil"
					:icon-size="24"
					aria-label="Text settings"
				/>
			</PopoverTrigger>
			<ReaderTypographyPanel />
		</Popover>

		<Popover>
			<PopoverTrigger class="h-full" as-child>
				<ReaderNavigationButton icon="Type" :icon-size="24" aria-label="Text settings" />
			</PopoverTrigger>
			<ReaderTypographyPanel />
		</Popover>

		<Popover>
			<PopoverTrigger class="h-full" as-child>
				<ReaderNavigationButton
					icon="SlidersHorizontal"
					:icon-size="24"
					aria-label="Global settings"
				/>
			</PopoverTrigger>
			<ReaderGlobalSettings />
		</Popover>
	</div>
</template>

<script setup lang="ts">
import ReaderNavigationButton from "../_components/ReaderNavigationButton.vue";
import ReaderCommentsPanel from "../_panels/ReaderCommentsPanel.vue";
import ReaderGlobalSettings from "../_panels/ReaderGlobalSettings.vue";
import ReaderTypographyPanel from "../_panels/ReaderTypographyPanel.vue";
</script>
