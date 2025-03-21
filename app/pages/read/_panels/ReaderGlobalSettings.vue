<template>
	<PopoverContent :side-offset="8" class="flex flex-col gap-3">
		<h2>Global settings</h2>
		<p>
			Here you can change the global settings for the reader. You can change the
			notifications settings, language, and more.
		</p>
		<Accordion type="single" class="w-full" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Langues</AccordionTrigger>
				<AccordionContent> sd </AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Notifications</AccordionTrigger>
				<AccordionContent> sd </AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Themes</AccordionTrigger>
				<AccordionContent> sd </AccordionContent>
			</AccordionItem>
		</Accordion>
	</PopoverContent>
</template>

<script setup lang="ts"></script>
