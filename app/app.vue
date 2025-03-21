<template>
	<div class="dark">
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Toaster />
	</div>
</template>

<script setup>
import Lato from "~/assets/fonts/lato.woff2";
import Inter from "~/assets/fonts/inter.woff2";
import Montserrat from "~/assets/fonts/montserrat.woff2";
import Roboto from "~/assets/fonts/roboto.woff2";

useHead({
	link: [
		{
			rel: "preload",
			type: "font/woff2",
			href: Lato,
			as: "font",
			crossorigin: "",
		},
		{
			rel: "preload",
			type: "font/woff2",
			href: Inter,
			as: "font",
			crossorigin: "",
		},
		{
			rel: "preload",
			type: "font/woff2",
			href: Montserrat,
			as: "font",
			crossorigin: "",
		},
		{
			rel: "preload",
			type: "font/woff2",
			href: Roboto,
			as: "font",
			crossorigin: "",
		},
	],
});
</script>
