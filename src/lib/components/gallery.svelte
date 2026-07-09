<script lang="ts">
	import { fade } from 'svelte/transition';
	import { navTrigger } from '$lib/navState.svelte';

	import Foto1 from '$lib/img/gard-1.webp';
	import Foto2 from '$lib/img/stac.webp';
	import Foto3 from '$lib/img/mower3.webp';
    import Foto4 from '$lib/img/centro-1.webp'

	type Slide = {
		image: string;
		title: string;
		description: string;
	};

	const slides: Slide[] = [
		{
			image: Foto1,
			title: 'Giardinaggio',
			description: 'Manutenzione di parchi, giardini e aiuole. Realizzazione di prati con erba a rotolo.'
		},
		{
			image: Foto2,
			title: 'Recinzioni',
			description: 'Realizzazione recinzioni con legno e reti metalliche. Creazione palificate per contenimento terreno con pali  di castagno e tufo'
		},
		{
			image: Foto3,
			title: 'Robot Tagliaerba',
			description: 'Installazione e manutenzione Robot Gardena e Husqvarna.'
		},
        {
			image: Foto4,
			title: 'Centro Assistenza',
			description: 'Centro assistenza Qualificato per robot Gardena e prodotti Volpi.'
		}
	];

	let currentIndex = $state(0);
	let mouseX = $state(0);
	let mouseY = $state(0);
	let isHovering = $state(false);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
	}

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
</script>

<div
	class="gallery-container section"
	use:navTrigger={'light'}
	role="button"
	tabindex="0"
	onclick={nextSlide}
	onmousemove={handleMouseMove}
	onmouseenter={() => (isHovering = true)}
	onmouseleave={() => (isHovering = false)}
	onkeydown={(e) => e.key === 'Enter' && nextSlide()}
>
	{#each slides as slide, i}
		<img
			src={slide.image}
			alt="Sfondo {slide.title}"
			class="bg-image"
			class:active={currentIndex === i}
		/>
	{/each}

	<div class="overlay"></div>

	<div class="text-wrapper">
		{#key currentIndex}
			<div
				class="slide-content"
				in:fade={{ duration: 400 }}
				out:fade={{ duration: 400 }}
			>
				<div class="gallery-title">{slides[currentIndex].title}</div>
				<div class="gallery-description">{slides[currentIndex].description}</div>
			</div>
		{/key}
	</div>

	{#if isHovering}
		<div
			class="custom-cursor"
			style="left: {mouseX}px; top: {mouseY}px;"
		>
			[CLICK!]
		</div>
	{/if}
</div>

<style>
	.gallery-container {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		cursor: none; 
		
		user-select: none;
		-webkit-user-select: none;
	}

	.bg-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 0.8s ease-in-out;
		z-index: 1;
	}

	.bg-image.active {
		opacity: 1;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
	}

	.text-wrapper {
		position: relative;
		z-index: 3;
		display: grid;
		place-items: center;
	}

	.slide-content {
		grid-area: 1 / 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		padding: 0 2rem;
	}

	.gallery-title {
		font-size: var(--text-xl, 4rem);
		font-weight: bold;
		text-align: center;
		margin: 0;
	}

	.gallery-description {
		text-align: center;
		font-size: clamp(1.2rem, 2vw, 1.8rem);
		max-width: 800px;
		line-height: 1.4;
	}

	.custom-cursor {
		position: fixed;
		pointer-events: none;
		z-index: 9999;
		
		color: white;
		font-size: 1.2rem;
		
		font-family: inherit;
		
		white-space: nowrap;
		
		transform: translate(-50%, -50%);
	}

	@media (max-width: 800px) {
        .custom-cursor{
            display: none;
        }
    }
</style>