<svg
	class="icon"
	id="icon-sexy"
	preserveAspectRatio="xMidYMid slice"
	overflow="visible"
	viewBox="6 6 36 36"
>
	<g stroke-width="2">
		<path
			class="f"
			d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 0 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863Z"
		/>
		<path class="f" d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0Z" />
		<path class="f" d="M11 36a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" />
		<path
			class="m"
			d="m28.902 14.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 1 1 .791-1.837a7.001 7.001 0 1 0 4.673-13.165Z"
		/>
		<path
			class="m"
			d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0Z"
		/>
		<path
			class="m"
			d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 0 1-.026-2l6.026-.076l-.076 6.025a1 1 0 0 1-1.013.988Z"
		/>
	</g>
</svg>

<style lang="scss">
	.m {
		stroke: var(--accent);
		fill: var(--accent);
		animation: 1s infinite 0.25s cubic-bezier(0.5, 0, 1, 1) alternate forwards slide-m;
	}
	.f {
		stroke: var(--line);
		fill: var(--line);
		animation: 1s infinite -0.25s cubic-bezier(0.42, 0, 0.58, 1) alternate forwards slide-f;
	}
	@keyframes slide-m {
		0% {
			transform: translateX(-1%) translateY(7%);
		}
		100% {
			transform: translateX(7%) translateY(-1%);
		}
	}
	@keyframes slide-f {
		0% {
			transform: translateX(-1%) translateY(-1%);
		}
		100% {
			transform: translateX(10%) translateY(1%);
		}
	}
</style>
