<script lang="ts">
	import { imagesPath } from '$lib/variables';
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	export let name: string = ''; // "Neil Sims",
	export let avatar: string = ''; // "neil-sims.png",
	export let email: string = ''; // "neil.sims@flowbite.com",

</script>

<button class="mr-2 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={imagesPath(avatar, 'users')} tabindex="0" />
</button>
<Dropdown>
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{email}</span>
	</DropdownHeader>
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem><a href="/settings">Settings</a></DropdownItem>
	<DropdownDivider />
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>
