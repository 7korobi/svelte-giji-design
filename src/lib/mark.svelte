<script lang="ts">
	import { IconIn, Icon } from '$lib';
	export let ids = [] as MARK_ID[];
	let marks = ids.map(Marks.find);
	let icons = ids.map(assignIcon);

	export const MARKS = (function (a) {
		return {
			age_A: { label: '全年齢対象', icon: Icon.CeroA },
			age_B: { label: '12才以上', icon: Icon.CeroB },
			age_C: { label: '15才以上', icon: Icon.CeroC },
			age_D: { label: '17才以上', icon: Icon.CeroD },
			age_Z: { label: '18才以上', icon: Icon.CeroZ },
			age_trial: { label: '体験版', icon: 'CERO_age_trial.svg' },
			age_education: { label: '教育用', icon: 'CERO_age_education.svg' },
			age_reserve: { label: '予定', icon: 'CERO_age_reserve.svg' },
			crude: { enable: true, icon: Icon.TimelineRemove },
			crime: { enable: true, icon: Icon.Gun },
			drug: { enable: true, icon: Icon.Drug },
			drunk: { enable: true, icon: Icon.Tropical },
			fear: { enable: true, icon: Icon.Ghost },
			gamble: { enable: true, icon: Icon.Casino },
			love: { enable: true, icon: Icon.Love },
			sexy: { enable: true, icon: Icon.Sexy },
			violence: { enable: true, icon: Icon.Swords },
			biohazard: { enable: true, icon: Icon.Biohazard },
			cat: { enable: true, icon: Icon.Catwalk },
			music: { enable: true, icon: Icon.Music },
			test: { enable: true, icon: Icon.Github },
			quiz: { enable: true, icon: Icon.TimelineHelp },
			appare: { enable: false, icon: Icon.HandFan }
		};
	})(true);
</script>

<span class="mark">
	{#each ids as id, idx (id)}
		{#if icons[idx]}
			<svelte:component this={icons[idx]} />
		{:else}
			<img alt="" src="{$url.icon}{marks[idx]?.file}" />
		{/if}
	{/each}
</span>

<style lang="scss">
	.mark img {
		height: 2.5ex;
	}
	.mark :global(svg) {
		background-color: black;
		width: 2.5ex;
		height: 2.5ex;
	}
</style>
