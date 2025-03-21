<template>
	<DropdownMenu>
		<DropdownMenuTrigger as-child>
			<Button
				variant="ghost"
				class="text-md h-full rounded-none font-semibold text-foreground"
				aria-label="Sort"
			>
				<ChevronDown :size="22" />
				Sort by
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-32">
			<DropdownMenuCheckboxItem v-model:model-value="showStatusBar">
				Top
			</DropdownMenuCheckboxItem>
			<DropdownMenuCheckboxItem v-model:model-value="showActivityBar">
				Newest
			</DropdownMenuCheckboxItem>
			<DropdownMenuCheckboxItem v-model:model-value="showPanel">
				Oldest
			</DropdownMenuCheckboxItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup>
import { ChevronDown } from "lucide-vue-next";
import type { DropdownMenuCheckboxItemProps } from "reka-ui";
type Checked = DropdownMenuCheckboxItemProps["modelValue"];

const showStatusBar = ref<Checked>(true);
const showActivityBar = ref<Checked>(false);
const showPanel = ref<Checked>(false);
</script>
