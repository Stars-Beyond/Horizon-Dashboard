<script lang="ts">
	import { Card, type LinkType } from 'flowbite-svelte';
	import {
		DiscordSolid,
		DribbbleSolid,
		GithubSolid,
		XCompanySolid,
	} from 'flowbite-svelte-icons';
	import type { ComponentType } from 'svelte';

	const links: LinkType[] = [
		{ name: '© Far Beyond LLC 2024 - All rights reserved', href: 'https://www.unrealkingdoms.com' },
		{ name: 'Legal Information', href: 'https://www.unrealkingdoms.com/legal' }
	];

	const brands: [ComponentType, string][] = [
		[DiscordSolid, ''],
		[XCompanySolid, ''],
		[GithubSolid, ''],
	];
</script>

<Card
	size="none"
	horizontal
	class="my-4 w-full md:max-w-none md:items-center md:justify-between {$$props.class ?? ''}"
>
	<ul class="mb-6 flex flex-wrap items-center gap-4 space-y-1 md:mb-0 md:gap-6">
		{#each links as { name, href }}
			<li>
				<a {href} class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400" target="_blank">
					{name}
				</a>
			</li>
		{/each}
	</ul>
	<div class="flex space-x-6 sm:justify-center">
		{#each brands as [component, href]}
			<a {href} class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				<svelte:component this={component} size="sm" />
			</a>
		{/each}
	</div>
</Card>
