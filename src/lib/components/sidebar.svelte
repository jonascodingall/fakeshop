<script>
	import { Button, Title } from '@svelteuidev/core';
	import { SketchLogo } from 'radix-icons-svelte';
</script>

<Button radius="lg" color="cyan" variant="subtle">
	<SketchLogo slot="leftIcon" />
	<Title size="lg" weight="bold" color="cyan">Fake Shop</Title>
</Button>
