<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import { Button, Title, ActionIcon, Grid, Group, SvelteUIProvider } from '@svelteuidev/core';
	import { Avatar, Sun, Moon } from 'radix-icons-svelte';
	import { nightMode } from './stores';
</script>

<SvelteUIProvider withGlobalStyles themeObserver={$nightMode ? 'dark' : 'light'}>
	<Grid>
		<Grid.Col span={2}>
			<Sidebar />
		</Grid.Col>
		<Grid.Col span={8}>
			<slot></slot>
		</Grid.Col>
		<Grid.Col span={2}>
			<Group spacing={0} position="right">
				<ActionIcon
					on:click={() => ($nightMode = !$nightMode)}
					radius="lg"
					variant="hover"
					size="xl"
					color="cyan"
				>
					{#if $nightMode}
						<Moon size={25} />
					{:else}
						<Sun size={25} />
					{/if}
				</ActionIcon>
				<ActionIcon radius="lg" variant="hover" size="xl" color="cyan">
					<Avatar size={25} />
				</ActionIcon>
			</Group>
		</Grid.Col>
	</Grid>
</SvelteUIProvider>
