<script lang="ts">
	import { inRange } from 'svelte-petit-utils';
	export let width = 5;
	export let min = 0;
	export let max = 100;
	export let value = 50;
	$: boxOffset = -0.5 * width;
	$: boxSize = 32 + 1 * width;
	$: at = inRange(min, value, max);
	$: dash = (at * 100) / (max - min);
</script>

<svg preserveAspectRatio="xMidYMid meet" viewBox="{boxOffset} {boxOffset} {boxSize} {boxSize}">
	<path
		d="M 16.16 32 A 16 16 0 0 1 16 0 A 16 16 0 0 1 15.84 32 "
		fill="none"
		stroke-linecap="butt"
		stroke-width={width}
		stroke="var(--disabled)"
	/>
	<path
		d="M 16.16 32 A 16 16 0 0 1 16 0 A 16 16 0 0 1 15.84 32 "
		fill="none"
		stroke-linecap="butt"
		stroke-width={width}
		stroke="var(--near)"
		stroke-dasharray="101 101"
		stroke-dashoffset={101 - dash}
	/>
</svg>

<style>
	svg {
		pointer-events: none;
		user-select: none;
		speak: none;

		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
</style>
