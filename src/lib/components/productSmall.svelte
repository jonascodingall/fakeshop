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
		UnstyledButton
	} from '@svelteuidev/core';

	import { StarFilled, Plus } from 'radix-icons-svelte';
	import { currentProduct } from '../../routes/stores';

	export let data: Product;
</script>

<UnstyledButton on:click={() => ($currentProduct = data)}>
	<Card>
		<Card.Section>
			<Center>
				<Image height={200} src={data.image} alt={''} />
			</Center>
		</Card.Section>
		<Divider color="cyan" />
		<Group>
			<div style="max-width:15rem; white-space: wrap;">
				<Text size="sm" weight="bold">{data.title}</Text>
				<Text>${data.price}</Text>
			</div>
		</Group>
		<Space h="xs" />
		<Group position="apart">
			<Center inline>
				<Text>{data.rating.rate}</Text>
				<ThemeIcon style="margin-left:0.2rem" size="xs" color="cyan" radius="lg">
					<StarFilled size={14} />
				</ThemeIcon>
			</Center>
			<Tooltip withArrow label="Add to Cart">
				<ActionIcon variant="filled" color="cyan" radius="lg">
					<Plus />
				</ActionIcon>
			</Tooltip>
		</Group>
	</Card>
</UnstyledButton>
