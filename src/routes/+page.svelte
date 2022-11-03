<script lang="ts">
	import { Grid } from '$lib';
	import * as Icon from '$lib/icon';
	import { LongPress, SearchText } from '$lib';

	const icon_names = Object.keys(Icon) as (keyof typeof Icon)[];

	let hello = '';
	let search = '';
	let search_reg: RegExp;
	let grid_ids = [];
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<SearchText
	name="search"
	delay={1000}
	size={10}
	placeholder="キーワードを入力"
	bind:value={search}
	bind:regexp={search_reg}
	data={[]}
	onFocus={() => {
		console.log('search focus.');
	}}
/>
{search_reg}

<hr />
<LongPress active={hello === 'world!'} disabled>Hello World!</LongPress>
<LongPress
	active={hello === 'world!'}
	onPress={() => (hello = 'world!')}
	onClick={() => (hello = 'stay.')}>Hello World!</LongPress
>
hello {hello}

<hr />

<Grid
	bind:value={grid_ids}
	x={[
		{ id: 'a', count: 1 },
		{ id: 'b', count: 2 }
	]}
	y={[
		{ id: 'A', count: 1 },
		{ id: 'B', count: 2 }
	]}
	data={{ aA: { count: 1 }, bB: { count: 2 } }}
/>

<p>{JSON.stringify(grid_ids)}</p>

<hr />
{#each icon_names as name}
	/ {name} <svelte:component this={Icon[name]} />
{/each}
