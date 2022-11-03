<script lang="ts">
	import { chkActive, tap } from '$lib';

	export let focus_at;
	export let x;
	export let y;
	export let press = false;
	export let disabled = false;
	export let type = 'toggle';
	export let as;
	export let value;

	function doClick() {
		if (disabled) return;
		value = tap(type, as, value);
	}

	function focusOn() {
		focus_at = { x, y };
	}

	function focusClass(xid: string, yid: string, { x, y }: { x: string; y: string }) {
		if (disabled) return ['disabled'];
		const css = [press ? 'press' : as.length ? (chkActive(type, as, value) ? 'active' : '') : ''];
		if (xid === x || yid === y) css.push('near');
		if (xid === x && yid === y) css.push('focus');
		return css.join(' ');
	}
</script>

<td
	class={focusClass(x, y, focus_at, type, as, value)}
	on:pointerdown={() => (press = true)}
	on:pointerup={() => (press = false)}
	on:mouseleave={() => (press = false)}
	on:mouseenter={focusOn}
	on:click={doClick}
>
	<slot />
</td>
