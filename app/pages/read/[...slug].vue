<template>
	<article aria-labelledby="chapter-title">
		<ReaderContent />
	</article>
	<Transition>
		<ReaderBottomTab v-if="showTabs" />
	</Transition>
</template>

<script setup lang="ts">
import ReaderBottomTab from "./_widgets/ReaderBottomTab.vue";
import ReaderContent from "./_widgets/ReaderContent.vue";

import useScrollReader from "~/composables/useScrollReader";

const { showTabs } = useScrollReader();

const route = useRoute();

const id = route.params.slug[0].split("-").pop();
const chapter = route.params.slug[1].split("-").pop();

const { data: novel } = await useFetch(`/api/novels?id=${id}&chapter=${chapter}`);

useContextMenu();

useHead({
	title: "From Baron to Lord - Chapter 2: Can You Speak Human Language?",
	meta: [
		{
			name: "description",
			content:
				'Read Chapter 2 of "From Baron to Lord" by Xian Yu: Can You Speak Human Language? Full chapter available on [Your Site Name].',
		},
		{ property: "og:type", content: "book" },
		{ property: "og:title", content: "From Baron to Lord - Chapter 2" },
		{
			property: "og:image",
			content: "https://www.fanmtl.com/d/file/cover123/pbzkfssfmqw.jpg",
		},
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "robots", content: "index, follow" },
	],
	link: [
		{
			rel: "canonical",
			href: "https://yourdomain.com/read/from-baron-to-lord/chapter-2",
		},
	],
});
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	transform: translateY(100%);
}
</style>
