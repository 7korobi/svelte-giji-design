<script lang="ts">
	export let tag = 'sup';
	export let value: number;
	export let min = 0;
	export let prefix = '';
</script>

{#if min < value}
	<svelte:element this={tag} class="badge {$$props.class}"
		><span>{prefix}</span>{value}</svelte:element
	>
{/if}

<style>
	.badge {
		color: var(--bg);
		background-color: var(--emboss);
		box-shadow: 0 0 2px 2px var(--emboss);
	}
	span {
		color: var(--line);
	}
</style>
