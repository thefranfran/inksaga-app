<template>
	<div class="flex flex-col gap-1">
		<h2>Font</h2>
		<div class="grid grid-cols-2 gap-2">
			<template v-for="font in ReaderFonts" :key="font">
				<Button
					@click="store.updateFontFamily(font)"
					:class="{ 'bg-accent': store.fontFamily === font }"
					:aria-label="font"
					ripple
					>{{ font }}</Button
				>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ReaderFonts } from "~/types/reader";

const store = useReaderStore();
</script>
