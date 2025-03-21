export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	srcDir: "app/",
	serverDir: "server/",
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
		"shadcn-nuxt",
		"@pinia/nuxt",
		"@pinia/colada-nuxt",
		"pinia-plugin-persistedstate/nuxt",
		"@nuxt/image",
	],
	css: ["~/assets/css/global.css"],
	site: {
		url: "http://localhost:3000",
		title: "Ink Saga",
	},
	components: [
		{
			path: "~/app/components",
			pathPrefix: false,
		},
	],
	typescript: {
		typeCheck: true,
		tsConfig: {
			compilerOptions: {
				types: ["node"],
			},
		},
	},
	colorMode: {
		preference: "dark",
		classSuffix: "",
	},
	shadcn: {
		prefix: "",
		componentDir: "./app/components/ui",
	},
	pinia: {
		storesDirs: ["app/stores/**"],
	},
	hooks: {
		"build:manifest": manifest => {
			const css = manifest["node_modules/nuxt/dist/app/entry.js"]?.css;
			if (css) {
				for (let i = css.length - 1; i >= 0; i--) {
					if (css[i].startsWith("entry")) css.splice(i, 1);
				}
			}
		},
	},
});
