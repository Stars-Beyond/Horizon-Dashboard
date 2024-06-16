<script>
    import Sessions from '$lib/settings/Sessions.svelte';
    import { Button, Card, Heading, Table, TableHead, TableBodyRow, TableBodyCell, TableHeadCell, TableBody } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';
	import {ClipboardListSolid} from 'flowbite-svelte-icons';

    const headers = [
		'Media Name',
		'Category',
		'Tags',
		'Content URL',
        'Actions'
	];
	const data = [
        ['Test Image', 'General', "", 'https://cdn.project-name.creator.unrealkingdoms.com/media-name'],
	];
</script>
<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">



    <Card size="none">
        <Heading tag="h1" class="mb-4 text-xl font-semibold tracking-wide sm:text-2xl">
            CDN Content
        </Heading>
        <Table
		    hoverable={true}
		    noborder
		    striped
		    class="min-w-full divide-y divide-gray-200 font-normal dark:divide-gray-600"
    	>
		<TableHead class="bg-gray-50 dark:bg-gray-700">
			{#each headers as header}
				<TableHeadCell>{header}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each data as [name, category, tags, url]}
				<TableBodyRow>
					<TableBodyCell class="font-normal">{name}</TableBodyCell>
					<TableBodyCell class="font-normal">{category}</TableBodyCell>
					<TableBodyCell class="font-normal">{tags}</TableBodyCell>
					<TableBodyCell class="font-normal" style="display: flex; flex-direction: row; align-items: center;">
						<div style="maxwidth: 600px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{url}</div>
						<Button color="alternative"  style="display: adbsolute margin-left: 100%; margin-right: 1px;" on:click={() => navigator.clipboard.writeText(address)}><ClipboardListSolid /></Button>
					</TableBodyCell>
					<TableBodyCell class="font-normal"><Button color="alternative">...</Button></TableBodyCell>
                </TableBodyRow>
			{/each}
		</TableBody>
	</Table>
    </Card>

	<div class="mt-4 grid grid-cols-1 xl:grid-cols-2 xl:gap-4">
	</div>
	<Footer />
</main>