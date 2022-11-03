<svg
	class="icon"
	id="icon-love"
	preserveAspectRatio="xMidYMid slice"
	overflow="visible"
	viewBox="2 2 36 36"
>
	<defs>
		<g id="icon-heart-p">
			<path
				d="M11.8 1c-1.682 0-3.129 1.368-3.799 2.797C7.33 2.368 5.883 1 4.201 1a4.202 4.202 0 0 0-4.2 4.2c0 4.716 4.758 5.953 8 10.616c3.065-4.634 8-6.05 8-10.616c0-2.319-1.882-4.2-4.2-4.2z"
			/>
		</g>
	</defs>
	<use class="blink-1" xlink:href="#icon-heart-p" transform="translate(0,4) rotate(-20,0,0)" />
	<use class="blink-2" xlink:href="#icon-heart-p" transform="translate(32,6) rotate( 60,0,0)" />
	<use class="blink-3" xlink:href="#icon-heart-p" transform="translate(7,20) rotate( 20,0,0)" />
</svg>

<style lang="scss">
	.blink-1 {
		animation: 3s infinite 0s cubic-bezier(0.7, 0.1, 0.3, 1.3) alternate forwards blink;
		fill: var(--hide);
	}
	.blink-2 {
		animation: 3s infinite 2s cubic-bezier(0.7, 0.1, 0.3, 1.3) alternate forwards blink;
		fill: var(--hide);
	}
	.blink-3 {
		animation: 3s infinite 4s cubic-bezier(0.7, 0.1, 0.3, 1.3) alternate forwards blink;
		fill: var(--hide);
	}
</style>
