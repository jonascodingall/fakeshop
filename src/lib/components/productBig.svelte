<script lang="ts">
	import type { Product } from '$lib/types/product';
	import {
		Card,
		Center,
		Flex,
		Image,
		Space,
		Text,
		Divider,
		Title,
		ActionIcon,
		Stack,
		Group,
		Tooltip,
		ThemeIcon,
		Container,
		Button
	} from '@svelteuidev/core';

	import { StarFilled, Plus, AspectRatio } from 'radix-icons-svelte';

	export let data: Product;
</script>

<Card>
	<Group>
		<Image height={250} src={data.image} alt={''} />
		<Space w={30} />
		<Stack style="max-width: 15rem" align="flex-end" justify="space-between">
			<div>
				<Title weight="bold" order={3}>{data.title}</Title>
				<Space h={5} />
				<Group spacing={0}>
					{#each { length: parseInt(data.rating.rate.toFixed()) } as _, i}
						<ThemeIcon size="xs" variant="subtle" color="yellow">
							<StarFilled />
						</ThemeIcon>
					{/each}
					{#each { length: 5 - parseInt(data.rating.rate.toFixed()) } as _, i}
						<ThemeIcon size="xs" variant="subtle" color="gray">
							<StarFilled />
						</ThemeIcon>
					{/each}
					<Space w={5} />
					<Text style="margin-top:-3px">({data.rating.count} Views)</Text>
				</Group>
				<Space h="xs" />
				<Text weight="bold" color="cyan">Price ${data.price}</Text>
			</div>
			<div>
				<Text>{data.description}</Text>
			</div>
			<div>
				<Button color="cyan">Add to Cart</Button>
			</div>
		</Stack>
	</Group>
</Card>
