<script lang="ts">
	import * as Icon from '$lib/icon';
	import { LongPress, SearchText } from '$lib';

	const icon_names = Object.keys(Icon);

	let hello = '';
	let search = '';
	let search_reg;
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
{#each icon_names as name}
/ {name} <svelte:component this={Icon[name]} />　
{/each}
