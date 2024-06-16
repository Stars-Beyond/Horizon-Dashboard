<script>
    import Sessions from '$lib/settings/Sessions.svelte';
    import {Card, Heading } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';

    const headers = [
		'Real Estate Name',
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
            Project Settings
        </Heading>
		Coming soon!
    </Card>

	<div class="mt-4 grid grid-cols-1 xl:grid-cols-2 xl:gap-4">
	</div>
	<Footer />
</main>