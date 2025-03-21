<template>
	<div>
		<Cookies />
		<header class="shadow-reader sticky left-0 top-0 z-50 flex w-full bg-primary">
			<slot name="header">
				<div class="h-16 w-full">
					<div class="mx-auto flex h-full max-w-[1280px] flex-1 px-8 py-0 md:px-24">
						<div class="text-gray-t0 inline-flex items-center space-x-6"></div>
						<div class="md:ml-13 mr-8 flex flex-1 items-center pt-[8px] sm:pt-0">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
											New
										</NavigationMenuLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
											Popular
										</NavigationMenuLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul
												class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
											>
												<li v-for="component in components" :key="component.title">
													<NavigationMenuLink as-child>
														<a
															:href="component.href"
															class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														>
															<div class="text-sm font-medium leading-none">
																{{ component.title }}
															</div>
															<p
																class="line-clamp-2 text-sm leading-snug text-muted-foreground"
															>
																{{ component.description }}
															</p>
														</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
											Completed
										</NavigationMenuLink>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
						<div class="ml-auto flex flex-row items-center space-x-4">
							<div class="relative items-center">
								<Input
									autocomplete="off"
									id="search"
									type="text"
									placeholder="Search"
									class="w-[120px] rounded-xl bg-secondary pl-8 focus:w-[220px]"
								/>
								<span
									class="absolute inset-y-0 start-0 flex items-center justify-center px-2 transition-all duration-300 ease-in-out"
								>
									<Search class="size-5" />
								</span>
							</div>
							<Button variant="outline" size="icon" class="rounded-full" ripple>
								<User class="h-6 w-6" />
							</Button>
							<Button variant="outline" size="icon" class="rounded-full" ripple>
								<Settings class="h-6 w-6" />
							</Button>
						</div>
					</div>
				</div>
			</slot>
		</header>
		<main class="min-h-screen">
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
import { User, Search, Settings } from "lucide-vue-next";
import Cookies from "~/components/Cookies.vue";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/components/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/components/hover-card",
		description: "For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/components/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/components/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/components/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/components/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];
</script>
