<template>
	<div class="flex flex-col gap-1">
		<h2>Text alignment</h2>
		<div class="flex gap-2">
			<template v-for="alignment in ReaderContentAlignment" :key="alignment">
				<Button
					@click="store.updateContentAlignment(alignment)"
					:class="{
						'bg-accent': store.contentAlignment === alignment,
						'hover:bg-accent': store.contentAlignment === alignment,
					}"
					:aria-label="alignment"
					ripple
				>
					<Icon :name="alignment" />
				</Button>
			</template>
		</div>
	</div>
</template>

<script setup>
import Icon from "~/components/Icon.vue";
import { ReaderContentAlignment } from "~/types/reader";

const store = useReaderStore();
</script>
