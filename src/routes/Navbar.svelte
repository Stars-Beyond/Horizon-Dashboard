<script>
	import AppsMenu from '$lib/widgets/AppsMenu.svelte';
	import UserMenu from '$lib/widgets/UserMenu.svelte';
	import { DarkMode, NavBrand, NavHamburger, Navbar, Search, ToolbarButton } from 'flowbite-svelte';
	import { BellSolid } from 'flowbite-svelte-icons';
	import '../app.pcss';
	import Users from './data/users.json';

	export let fluid = true;
</script>

<Navbar {fluid} color="default">
	<div class="flex w-fit items-center justify-start">
		<NavHamburger />
		<NavBrand href="https://stars-beyond.com/" class="ms-2 md:me-24">
			<img
				src="https://stars-beyond.com/wp-content/uploads/2024/05/169021527-150x150.png"
				class="me-3 h-6 sm:h-8"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
				Stars beyond
			</span>
		</NavBrand>
		<div class="w-96">
			<Search size="md" />
		</div>
	</div>

	<div class="ms-auto flex items-center gap-2 p-1">
		<ToolbarButton size="lg"><BellSolid /></ToolbarButton>
		<AppsMenu />
		<DarkMode />
		<UserMenu {...Users[4]} />
	</div>
</Navbar>
