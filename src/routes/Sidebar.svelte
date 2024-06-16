<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import {
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import {ClipboardListSolid,CogOutline,LifeSaverSolid,GridOutline,TagOutline,UserOutline,BriefcaseOutline,DatabaseOutline,FileZipOutline,ImageOutline,HomeOutline,LayersOutline,UserHeadsetOutline} from 'flowbite-svelte-icons';

	let drawerHidden: boolean = false;

	const closeDrawer = () => {
		drawerHidden = true;
	};

	let spanClass = 'ms-9';
	let childClass =
		'p-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 relative flex items-center flex-wrap font-medium';

	let nonActiveClass =
		childClass +
		' hover:text-gray-500 hover:cursor-pointer dark:text-gray-400 dark:hover:text-white';
	let activeClass = childClass + ' cursor-default dark:text-primary-700';

	$: mainSidebarUrl = $page.url.pathname;
	let activeMainSidebar: string;

	afterNavigate((navigation) => {
		// this fixes https://github.com/themesberg/flowbite-svelte/issues/364
		document.getElementById('svelte')?.scrollTo({ top: 0 });
		closeDrawer();

		activeMainSidebar = navigation.to?.url.pathname ?? '';

		// const key = fileDir(activeMainSidebar);
		// for (const k in dropdowns) dropdowns[k] = false;
		// dropdowns[key] = true;
	});


</script>

<Sidebar
	class={drawerHidden ? 'hidden' : ''}
	{nonActiveClass}
	{activeClass}
	activeUrl={mainSidebarUrl}
	asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-20 lg:-mt-2 lg:block"
>
	<SidebarWrapper
		divClass="overflow-y-auto px-4 pt-20 lg:pt-4 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-4.5rem)] lg:block dark:bg-gray-800 lg:me-0 lg:sticky top-2"
	>
		<nav class="divide-y text-base font-medium">
			<div style="background-color: red; color: white; text-align: center;"><h1>This is for demo purposes only</h1></div>
			<SidebarGroup ulClass="list-unstyled fw-normal small mb-4 space-y-2">
				<p style="color: white;">Overview</p>
				<SidebarItem label="Home" href="/" active>
					<HomeOutline slot="icon" />
				</SidebarItem>
			</SidebarGroup>

			<SidebarGroup ulClass="list-unstyled fw-normal small pt-4 space-y-2">
				<p style="color: white;">Manage</p>
				<SidebarItem label="Deployments" href="/deployments">
					<LayersOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="Project Settings" href="/project-settings">
					<CogOutline slot="icon" />
				</SidebarItem>
			</SidebarGroup>

			<SidebarGroup ulClass="list-unstyled fw-normal small pt-4 space-y-2">
				<p style="color: white;">Sales</p>
				<SidebarItem label="Products" href="/products">
					<TagOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="Cosmetics" href="/cosmetics">
					<UserOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="Real Estate" href="/real-estate">
					<BriefcaseOutline slot="icon" />
				</SidebarItem>
			</SidebarGroup>

			<SidebarGroup ulClass="list-unstyled fw-normal small pt-4 space-y-2">
				<p style="color: white;">Dev</p>
				<SidebarItem label="ADs" href="/ads">
					<GridOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="CDN" href="/cdn">
					<ImageOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="Large Files" href="/large-files">
					<FileZipOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="Databases" href="/databases">
					<DatabaseOutline slot="icon" />
				</SidebarItem>
			</SidebarGroup>

			<SidebarGroup ulClass="list-unstyled fw-normal small pt-4 space-y-2">
				<p style="color: white;">Let's Chat</p>
				<SidebarItem label="FAQ" href="#">
					<LifeSaverSolid slot="icon" />
				</SidebarItem>
				<SidebarItem label="Support" href="#">
					<UserHeadsetOutline slot="icon" />
				</SidebarItem>
				<SidebarItem label="Feedback" href="#">
					<ClipboardListSolid slot="icon" />
				</SidebarItem>
		</SidebarGroup>
		</nav>
	</SidebarWrapper>
</Sidebar>

<div
	hidden={drawerHidden}
	class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60"
	on:click={closeDrawer}
	on:keydown={closeDrawer}
	role="presentation"
/>
