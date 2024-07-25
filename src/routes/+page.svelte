<script lang="ts">
	import ProductBig from '$lib/components/productBig.svelte';
	import ProductSmall from './../lib/components/productSmall.svelte';
	import { Group, Space, Title, Skeleton } from '@svelteuidev/core';

	import type { Product, ProductList, ProductListSorted } from '$lib/types/product';
	import { currentProduct } from './stores';

	export let data: ProductListSorted;
</script>

{#if $currentProduct}
	<Title>{$currentProduct.category}</Title>
	<Space h={20} />
	<ProductBig data={$currentProduct} />
{:else}
	<Title>Choose a Product</Title>
	<Space h={20} />
	<Skeleton animate={false} height={300}></Skeleton>
{/if}
<Space h={80} />

{#each data.productsByCategory as category}
	<div class="container">
		{#each category.products as product}
			<div class="item">
				<Group>
					<Space w={5} />
					<ProductSmall data={product} />
					<Space w={5} />
				</Group>
			</div>
		{/each}
	</div>
	<Space h={100} />
{/each}

<style>
	.container {
		width: 100%;
		overflow-x: auto;
		white-space: nowrap;
	}

	.container .item {
		display: inline-block;
	}
</style>
