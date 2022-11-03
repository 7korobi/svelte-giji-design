<script lang="ts">
	export let open = false;
	export let modal = false;

	function close() {
		if (modal) open = false;
	}
</script>

{#if open}
	{#if modal}
		<div class="backdrop" on:click|self={close}>
			<div class="dialog">
				<slot />
			</div>
		</div>
	{:else}
		<div class="dialog">
			<slot />
		</div>
	{/if}
{/if}

<style>
	.backdrop .dialog {
		display: block;
		position: absolute;
		inset-inline-start: 0px;
		inset-inline-end: 0px;
		width: fit-content;
		height: fit-content;
		margin: auto;
		padding: 1em;
		border: none;
		box-shadow: 0 0 20px 0px var(--shadow);
	}
	.dialog {
		position: fixed;
		inset-block-start: 0px;
		inset-block-end: 0px;
		max-width: calc(100vw - 3em);
		max-height: calc(100vh - 3em);
		overflow: auto;
	}
	.backdrop {
		content: ' ';
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		backdrop-filter: blur(5px);
		background: rgba(0, 0, 0, 0.1);
	}
</style>
