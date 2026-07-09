<script lang="ts">
	import Pool from '$lib/img/pool.webp';
	import Mower from '$lib/img/mower2.webp';
    import { navTrigger } from '$lib/navState.svelte';
</script>


<div class="chisiamo-container section" use:navTrigger={'dark'}>
		<div class="title">Chi Siamo</div>
		<div class="text">MC Garden è un’azienda che da anni opera nel settore del giardinaggio. Specializzata nell’istallazione e manutenzione robot tagliaerba ed attrezzature a batteria.</div>
        
        <div class="image-container">
			<img src={Pool}	alt="Pool"/>
        </div>

        <div class="text">Vantiamo Collaborazioni con le migliori aziende del settore, come Husqvarna, Gardena, Volpi.</div>

        <div class="image-container">
			<img src={Mower} alt="Mower"/>
        </div>

        <div class="text">Effettuiamo potature, sistemazione e realizzazione aree verdi. Consulenze e preventivi gratuiti. Siamo attivi in Arezzo e prima periferia.</div>

</div>

<style>
	.chisiamo-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		background-color: white;
	}

	.title {
		font-size: var(--text-xl);
		font-weight: bold;
	}

	.text {
		font-size: var(--text-l);
		line-height: 1.2;
		color: black;
	}

	.image-container {
		width: 100%;
		height: 30vh;
		overflow: hidden;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>