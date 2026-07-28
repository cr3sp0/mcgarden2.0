<script lang="ts">
	import Pool from '$lib/img/pool.webp';
	import Mower from '$lib/img/mower2.webp';
	import Field from '$lib/img/field.webp';
    import { navTrigger } from '$lib/navState.svelte';

	const sections = [
		{
			text: "MC Garden è un’azienda che da anni opera nel settore del giardinaggio. Specializzata nell’installazione e manutenzione robot tagliaerba ed attrezzature a batteria.",
			image: Pool
		},
		{
			text: "Vantiamo Collaborazioni con le migliori aziende del settore, come Husqvarna, Gardena, Volpi.",
			image: Mower
		},
		{
			text: "Effettuiamo potature, sistemazione e realizzazione aree verdi. Consulenze e preventivi gratuiti. Siamo attivi in Arezzo e prima periferia.",
			image: Field
		}
	];

	let textNodes: HTMLDivElement[] = [];
	
	let activeStates = $state(sections.map(() => false));
	let activeIndex = $state(0);

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = textNodes.indexOf(entry.target as HTMLDivElement);
					if (index !== -1) {
						activeStates[index] = entry.isIntersecting;
						
						if (entry.isIntersecting) {
							activeIndex = index;
						}
					}
				});
			},
			{ rootMargin: '-35% 0px -35% 0px' }
		);

		textNodes.forEach((node) => node && observer.observe(node));

		return () => observer.disconnect();
	});
</script>

<div class="chisiamo-container section" use:navTrigger={'dark'} id="chisiamo">
	<div class="text-column">
		<div class="title">Chi Siamo</div>

		{#each sections as section, i}
			<div
				bind:this={textNodes[i]}
				class="text"
				class:active={activeStates[i]}
			>
				{section.text}
			</div>
		{/each}
	</div>

	<div class="image-container">
		{#each sections as section, i}
			<img 
				src={section.image} 
				alt="Dettaglio sezione {i}" 
				class:visible={activeIndex === i} 
			/>
		{/each}
	</div>
</div>

<style>
	.chisiamo-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: start;
		background-color: white;
		position: relative;
	}

	.text-column {
		width: 45%;
		display: flex;
		flex-direction: column;
		padding-left: 2rem;
		padding-right: 4rem;
	}

	.title {
		font-size: var(--text-xl);
		font-weight: bold;
		margin-bottom: 10vh;
        
	}

	.text {
		font-size: var(--text-l);
		line-height: 1.2;
		color: rgba(0, 0, 0, 0.2);
		transition: color 0.5s ease-in-out;
        margin-bottom: 30vh;
	}

	.text.active {
		color: rgba(0, 0, 0, 1) !important;
	}

	.image-container {
		width: 55%;
		height: 80vh;
		position: sticky;
		top: 10vh;
		background-color: #f5f5f5;
		overflow: hidden;
	}

	.image-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 0.6s ease-in-out;
	}

	.image-container img.visible {
		opacity: 1;
		z-index: 2;
	}
</style>