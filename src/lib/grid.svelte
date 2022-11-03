<script lang="ts">
	import GridItem from './grid-item.svelte';
	import type { TYPE } from '$lib';
	import { Erase } from '$lib/icon';
	import { Btn } from '$lib';

	export let value: string[] = [];
	export let x: { id: string; count: number }[] = [];
	export let y: { id: string; count: number }[] = [];
	export let data: { [key: string]: { count: number } } = {};
	export let find = (xid: string, yid: string) => `${xid}${yid}`;
	let focus_at = { x: '', y: '' };
	function focusOn(x, y) {
		focus_at = { x, y };
	}

	function xall(yid: string) {
		const ids = [];
		for (const xo of x) {
			const id = find(xo.id, yid);
			if (id && data[id]) ids.push(id);
		}
		return ids;
	}

	function yall(xid: string) {
		const ids = [];
		for (const yo of y) {
			const id = find(xid, yo.id);
			if (id && data[id]) ids.push(id);
		}
		return ids;
	}
</script>

{JSON.stringify(focus_at)}

<table on:mouseleave={focusOn(null, null)}>
	{#if x && y}
		<tbody>
			<tr>
				<GridItem bind:focus_at bind:value type="set" as={[]}>
					<Erase />
				</GridItem>
				{#each x as xo, xi (xo.id)}
					<GridItem bind:focus_at bind:value type="toggle" as={yall(xo.id)} x={xo.id}>
						{#if 0 < xo.count}<sub>{xo.count}</sub><br />{/if}
						{xo.id}
					</GridItem>
				{/each}
			</tr>
			{#each y as yo, yi (yo.id)}
				<tr>
					<GridItem bind:focus_at bind:value type="toggle" as={xall(yo.id)} y={yo.id}>
						{#if 0 < yo.count}<sub>{yo.count}</sub><br />{/if}
						{yo.id}
					</GridItem>
					{#each x as xo, xi (xo.id)}
						{@const idx = find(xo.id, yo.id)}
						{@const item = data[idx]}
						{@const enable = item && 0 < item.count}
						<GridItem
							bind:focus_at
							bind:value
							type="toggle"
							as={[idx]}
							x={xo.id}
							y={yo.id}
							disabled={!enable}
						>
							{#if enable}{item.count}{/if}
						</GridItem>
					{/each}
				</tr>
			{/each}
		</tbody>
	{/if}
</table>
