<script>
    import Sessions from '$lib/settings/Sessions.svelte';
    import { Button, Card, Heading, Table, TableHead, TableBodyRow, TableBodyCell, TableHeadCell, TableBody } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';

    const headers = [
		'Deployment Name',
		'Region',
		'Avg Load',
		'Avg Latency',
		'Inbound Traffic',
		'Outbound Traffic',
        'Players',
        'Status',
        'Actions'
	];
	const data = [
        ['Test Deploy', 'US-East', 2.7931, '47.3 mb/s', '56.2 mb/s', 215, 'Online'],
        ['Production Deploy', 'EU-West', 3.512, '64.8 mb/s', '72.1 mb/s', 312, 'Offline'],
        ['Staging Deploy', 'Asia-Pacific', 2.112, '38.6 mb/s', '46.5 mb/s', 178, 'Online'],
        ['Beta Deploy', 'US-Central', 2.984, '51.2 mb/s', '60.3 mb/s', 231, 'Offline'],
        ['Demo Deploy', 'South-America', 1.876, '29.7 mb/s', '35.8 mb/s', 142, 'Online'],
        ['Backup Deploy', 'Africa', 1.239, '18.5 mb/s', '22.9 mb/s', 98, 'Offline'],
        ['Emergency Deploy', 'Australia', 3.765, '69.2 mb/s', '78.4 mb/s', 340, 'Online'],
        ['Critical Deploy', 'US-East', 2.124, '41.8 mb/s', '50.6 mb/s', 192, 'Offline'],
        ['High-Priority Deploy', 'EU-West', 2.498, '45.9 mb/s', '54.7 mb/s', 205, 'Online'],
        ['Low-Priority Deploy', 'Asia-Pacific', 1.673, '31.4 mb/s', '39.2 mb/s', 125, 'Offline'],
        ['Nightly Deploy', 'US-Central', 2.309, '40.2 mb/s', '49.1 mb/s', 198, 'Online'],
        ['Weekly Deploy', 'South-America', 1.987, '36.7 mb/s', '43.8 mb/s', 165, 'Offline'],
        ['Monthly Deploy', 'Africa', 2.654, '48.6 mb/s', '57.3 mb/s', 225, 'Online'],
        ['Quarterly Deploy', 'Australia', 1.542, '27.1 mb/s', '33.8 mb/s', 120, 'Offline'],
        ['Biannual Deploy', 'US-East', 3.201, '55.4 mb/s', '63.7 mb/s', 278, 'Online'],
        ['Yearly Deploy', 'EU-West', 2.876, '50.3 mb/s', '59.8 mb/s', 245, 'Offline'],
        ['Random Deploy', 'Asia-Pacific', 2.345, '43.1 mb/s', '52.6 mb/s', 211, 'Online'],
        ['Experimental Deploy', 'US-Central', 2.012, '37.8 mb/s', '45.6 mb/s', 185, 'Offline'],
        ['Parallel Deploy', 'South-America', 3.098, '58.7 mb/s', '67.2 mb/s', 263, 'Online'],
        ['Sequential Deploy', 'Africa', 1.765, '34.2 mb/s', '41.3 mb/s', 155, 'Offline']
	];
</script>
<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">

    <Card size="none">
        <Heading tag="h1" class="mb-4 text-xl font-semibold tracking-wide sm:text-2xl">
            Deployments
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
			{#each data as [name, region, load, ping, inbound, outbound, players, status]}
				<TableBodyRow>
					<TableBodyCell class="font-normal">{name}</TableBodyCell>
					<TableBodyCell class="font-normal">{region}</TableBodyCell>
					<TableBodyCell class="font-normal">{load}</TableBodyCell>
                    <TableBodyCell class="font-normal">{ping}</TableBodyCell>
					<TableBodyCell class="font-normal">{inbound}</TableBodyCell>
					<TableBodyCell class="font-normal">{outbound}</TableBodyCell>
					<TableBodyCell class="font-normal">{players}</TableBodyCell>
					<TableBodyCell class="font-normal">{status}</TableBodyCell>
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