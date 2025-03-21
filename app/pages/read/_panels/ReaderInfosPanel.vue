<template>
	<SheetContent side="left" class="w-[400px] select-none sm:w-[400px]">
		<VisuallyHidden>
			<SheetTitle>
				<h1>From Baron to Lord</h1>
				<h2 class="truncate text-accent">从男爵开始做领主从</h2>
				<span>Author: Xian Yu</span>
			</SheetTitle>
			<SheetDescription>
				Novel "From Baron to Lord" is written by Xian Yu. It has 1450 chapters and is
				completed. It has 244 likes and 467 bookmarked.
			</SheetDescription>
		</VisuallyHidden>
		<div class="sheet__actions__container absolute top-0 flex flex-col bg-background">
			<SheetClose asChild>
				<Button variant="ghost" class="h-10 w-10 rounded-none" aria-label="Close">
					<X />
				</Button>
			</SheetClose>
			<Button
				variant="ghost"
				class="h-10 w-10 rounded-none bg-accent"
				aria-label="Add to bookmarks"
			>
				<Bookmark />
			</Button>
		</div>
		<SheetHeader class="mb-4 flex h-auto flex-row gap-2 pt-4">
			<NuxtImg
				src="https://www.fanmtl.com/d/file/cover123/pbzkfssfmqw.jpg"
				alt="Book cover of From Baron to Lord by Xian Yu"
				title="Book cover of From Baron to Lord by Xian Yu"
				itemprop="image"
				width="175"
				height="175"
				class="shadow-reader cursor-pointer rounded-lg"
			/>
			<div class="flex flex-col justify-between p-2">
				<div>
					<h1>From Baron to Lord</h1>
					<h2 class="truncate text-accent">从男爵开始做领主从</h2>
					<span>Author: Xian Yu</span>
				</div>
				<div class="flex h-8 items-center space-x-2">
					<div class="flex flex-col">
						<span>Chapters</span>
						<span>1450</span>
					</div>
					<Separator orientation="vertical" />
					<div class="flex flex-col">
						<span>Status</span>
						<span>Completed</span>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<div class="flex items-center space-x-2">
						<Heart class="stat-icon" />
						<span>244 likes</span>
					</div>
					<div class="flex items-center space-x-2">
						<Bookmark class="stat-icon" />
						<span>467 bookmarked</span>
					</div>
				</div>
			</div>
		</SheetHeader>
		<Tabs default-value="chapters">
			<TabsList class="grid w-full grid-cols-2">
				<TabsTrigger value="resume">Resume</TabsTrigger>
				<TabsTrigger value="chapters">Chapters</TabsTrigger>
			</TabsList>
			<TabsContent value="resume">
				<ScrollArea class="h-[600px] scroll-smooth pr-4">
					[Original rule-based weird stories, quality guaranteed, but those who want to
					read exciting stories please think twice before you act] In order to get a
					considerable bonus for experiencing college life, Lin Yi and his roommates
					signed up to go to a suburban university. The seemingly ordinary but slightly
					wrong student rules; the strange signs in front of the building and the
					seemingly normal building rules; the strange figures shuttling around the campus
					in abnormal weather... As the experience of life progresses, there are more and
					more strange people and things. In order to leave the campus alive, Lin Yi has
					to walk on the edge of the rules... [Note: The logical chain of this book has
					been deduced by the author to form a closed loop before the book is opened. All
					rules are clues. All strange things that do not conform to common sense will be
					explained scientifically (or relatively scientifically). There are no
					supernatural events or similar things (dog heads save your life). Welcome to
					read it! ] [Original rule-based weird stories, quality guaranteed, but those who
					want to read exciting stories please think twice before you act] In order to get
					a considerable bonus for experiencing college life, Lin Yi and his roommates
					signed up to go to a suburban university. The seemingly ordinary but slightly
					wrong student rules; the strange signs in front of the building and the
					seemingly normal building rules; the strange figures shuttling around the campus
					in abnormal weather... As the experience of life progresses, there are more and
					more strange people and things. In order to leave the campus alive, Lin Yi has
					to walk on the edge of the rules... [Note: The logical chain of this book has
					been deduced by the author to form a closed loop before the book is opened. All
					rules are clues. All strange things that do not conform to common sense will be
					explained scientifically (or relatively scientifically). There are no
					supernatural events or similar things (dog heads save your life). Welcome to
					read it! ]
				</ScrollArea>
			</TabsContent>
			<TabsContent value="chapters">
				<ScrollArea class="h-[615px] scroll-smooth pr-4" ref="chaptersList">
					<div class="flex flex-col gap-2">
						<template v-for="chapter in chapters">
							<div
								:id="'chapter-' + chapter"
								class="flex cursor-pointer items-center justify-between rounded-lg bg-secondary p-2"
							>
								<div class="flex flex-col">
									<span :class="{ 'font-bold text-accent': chapter === currentChapter }"
										>Chapter {{ chapter }}</span
									>
									<span class="text-sm">Can You Speak Human Language?</span>
									<span>2024.01.01</span>
								</div>
								<ArrowRight />
							</div>
						</template>
					</div>
				</ScrollArea>
			</TabsContent>
		</Tabs>
	</SheetContent>
</template>

<script setup lang="ts">
import { ArrowRight, Bookmark, Heart, X } from "lucide-vue-next";
import { VisuallyHidden } from "reka-ui";

const chapters = ref(Array.from({ length: 455 }, (_, i) => i + 1));
const chaptersList = ref<HTMLDivElement | null>(null);
const currentChapter = ref(130);

const { isPanelOpen } = defineProps({
	isPanelOpen: Boolean,
});

onUpdated(async () => {
	if (!isPanelOpen) return;

	const chapterElement = document.getElementById(`chapter-${currentChapter.value}`);

	if (chapterElement) {
		chapterElement.scrollIntoView({ behavior: "instant", block: "start" });
	}
});
</script>

<style scoped>
.stat-icon {
	color: var(--accent);
	fill: var(--accent);
}

.sheet__actions__container {
	right: -40px;
}
</style>
