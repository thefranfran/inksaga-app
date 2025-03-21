<template>
	<div v-show="!cookies" class="flex flex-row items-center justify-between bg-accent p-4">
		<div>
			<span class="flex flex-row items-center gap-1.5">
				<Cookie />
				<h2 class="text-white">Cookies</h2>
			</span>
			<p class="text-white">
				We use cookies to ensure you get the best experience on our website. By using our
				website you agree to our.
			</p>
		</div>
		<div class="flex gap-3">
			<Button @click="acceptCookies">Accept</Button>
			<Button @click="rejectCookies">Refuse</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Cookie } from "lucide-vue-next";

const cookies = useCookie("cookie_consent", {
	maxAge: 60 * 60 * 24 * 30,
	default: () => false,
});

const acceptCookies = () => {
	cookies.value = true;
};

const rejectCookies = () => {
	cookies.value = false;
};
</script>
