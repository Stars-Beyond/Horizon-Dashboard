<script>
    import Sessions from '$lib/settings/Sessions.svelte';
    import { Button, Card, Heading, Table, TableHead, TableBodyRow, TableBodyCell, TableHeadCell, TableBody } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';

    const headers = [
		'Cosmetic Name',
		'Category',
		'Tags',
		'30 Day Sales',
		'Stock',
		'Price',
        'Actions'
	];
	const data = [
        ['Test Product', 'General', "", 375, 519, 4.99],
	];
</script>
<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">



    <Card size="none">
        <Heading tag="h1" class="mb-4 text-xl font-semibold tracking-wide sm:text-2xl">
            Cosmetics
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
			{#each data as [name, category, tags, sales, stock, price]}
				<TableBodyRow>
					<TableBodyCell class="font-normal">{name}</TableBodyCell>
					<TableBodyCell class="font-normal">{category}</TableBodyCell>
					<TableBodyCell class="font-normal">{tags}</TableBodyCell>
                    <TableBodyCell class="font-normal">{sales}</TableBodyCell>
					<TableBodyCell class="font-normal">{stock}</TableBodyCell>
					<TableBodyCell class="font-normal">${price}</TableBodyCell>
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