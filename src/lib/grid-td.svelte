<script lang="ts">
	import { chkActive, tap } from '$lib';
	import { Operations } from 'svelte-pointer-tracker';

	const tracker = new Operations({
		start() {
			press = !disabled;
			return true;
		},
		end() {
			if (press) {
				doClick();
			}
			press = false;
		}
	});

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
		const css = [press ? 'press' : as.length ? (chkActive(type, as, value) ? 'active' : '') : ''];
		if (xid === x || yid === y) css.push('near');
		if (xid === x && yid === y) css.push('focus');
		if (disabled) css.push('disabled');
		return css.join(' ');
	}
</script>

<svelte:element
  this={ x && y ? "td" : "th"}
	class={focusClass(x, y, focus_at, [press, type, as, value])}
	use:tracker.listener
	on:mouseenter={focusOn}
>
	<slot />
</svelte:element>
