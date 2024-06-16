<script>
    import Sessions from '$lib/settings/Sessions.svelte';
    import { Button, Card, Heading, Table, TableHead, TableBodyRow, TableBodyCell, TableHeadCell, TableBody } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';
	import {ClipboardListSolid} from 'flowbite-svelte-icons';


    const headers = [
		'Database Name',
		'Region',
        'Size',
        'Type',
        'Address',
		'Queries per Second',
		'Active Connections',
		'Actions',
	];
	const data = [
		['Test Deploy Database', 'US-East', '2.7 GB', 'Graph' ,'test-deploy-database.myproject.creator.example.com', 41, 537],
		['Production Deploy Database', 'EU-West', '3.2 GB', 'Table' ,'production-deploy-database.myproject.creator.example.com', 56, 674],
		['Staging Deploy Database', 'Asia-Pacific', '1.9 GB', 'Document' ,'staging-deploy-database.myproject.creator.example.com', 32, 423],
		['Beta Deploy Database', 'US-Central', '2.4 GB', 'Graph' ,'beta-deploy-database.myproject.creator.example.com', 47, '592'],
		['Demo Deploy Database', 'South-America', '1.5 GB', 'Table' ,'demo-deploy-database.myproject.creator.example.com', 28, 366],
		['Backup Deploy Database', 'Africa', '1.0 GB', 'Document' ,'backup-deploy-database.myproject.creator.example.com', 19, 259],
		['Emergency Deploy Database', 'Australia', '3.9 GB', 'Graph' ,'emergency-deploy-database.myproject.creator.example.com', 68, 812],
		['Critical Deploy Database', 'US-East', '2.1 GB', 'Table' ,'critical-deploy-database.myproject.creator.example.com', 38, 485],
		['High-Priority Deploy Database', 'EU-West', '2.5 GB', 'Document' ,'high-priority-deploy-database.myproject.creator.example.com', 45, 556],
		['Low-Priority Deploy Database', 'Asia-Pacific', '1.6 GB', 'Graph' ,'low-priority-deploy-database.myproject.creator.example.com', 29, 378],
		['Nightly Deploy Database', 'US-Central', '2.3 GB', 'Table' ,'nightly-deploy-database.myproject.creator.example.com', 42, 546],
		['Weekly Deploy Database', 'South-America', '2.0 GB', 'Document' ,'weekly-deploy-database.myproject.creator.example.com', 36, 465],
		['Monthly Deploy Database', 'Africa', '2.7 GB', 'Graph' ,'monthly-deploy-database.myproject.creator.example.com', 49, 612],
		['Quarterly Deploy Database', 'Australia', '1.5 GB', 'Table' ,'quarterly-deploy-database.myproject.creator.example.com', 27, 352],
		['Biannual Deploy Database', 'US-East', '3.2 GB', 'Document' ,'biannual-deploy-database.myproject.creator.example.com', 54, 695],
		['Yearly Deploy Database', 'EU-West', '2.9 GB', 'Graph' ,'yearly-deploy-database.myproject.creator.example.com', 51, 631],
		['Random Deploy Database', 'Asia-Pacific', '2.3 GB', 'Table' ,'random-deploy-database.myproject.creator.example.com', 44, 564],
		['Experimental Deploy Database', 'US-Central', '2.0 GB', 'Document' ,'experimental-deploy-database.myproject.creator.example.com', 39, 498],
		['Parallel Deploy Database', 'South-America', '3.1 GB', 'Graph' ,'parallel-deploy-database.myproject.creator.example.com', 62, 746],
		['Sequential Deploy Database', 'Africa', '1.8 GB', 'Table' ,'sequential-deploy-database.myproject.creator.example.com', 33, 432]
	];
</script>
<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">



    <Card size="none">
        <Heading tag="h1" class="mb-4 text-xl font-semibold tracking-wide sm:text-2xl">
            Databases
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
			{#each data as [name, region, size, type, address, qps, connections]}
				<TableBodyRow>
					<TableBodyCell class="font-normal">{name}</TableBodyCell>
					<TableBodyCell class="font-normal">{region}</TableBodyCell>
					<TableBodyCell class="font-normal">{size}</TableBodyCell>
                    <TableBodyCell class="font-normal">{type}</TableBodyCell>
					<TableBodyCell class="font-normal" style="display: flex; flex-direction: row; align-items: center;">
						<div style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{address}</div>
						<Button color="alternative"  style="display: adbsolute margin-left: 100%; margin-right: 1px;" on:click={() => navigator.clipboard.writeText(address)}><ClipboardListSolid /></Button>
					</TableBodyCell>
					<TableBodyCell class="font-normal">{qps}</TableBodyCell>
					<TableBodyCell class="font-normal">{connections}</TableBodyCell>
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