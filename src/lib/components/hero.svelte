<script>
    import Landscape from "$lib/img/landscape1.webp";
    import Title from "$lib/img/M.C. Garden.webp";
    import { navTrigger } from '$lib/navState.svelte';
</script>

    <div class="hero section" use:navTrigger={'light'} id="hero">
        <div class="hero-image">
        <img src={Landscape} alt="landscape" srcset="">
        </div>
        <div class="hero-title">
        <img src={Title} alt="landscape" srcset="">
        </div>
        <div class="hero-sub-row">
            <div class="hero-sub-left">Robot tagliaerba, <br> giardinaggio</div>
            <div class="hero-sub-right">Con passione da più di 10 anni</div>
        </div>
    </div>

<style>

    .hero {
        background-color: #429C48;
        width: 100%;
    }

    .hero-image {
        width: 100%;
        height: 570px; 
        overflow: hidden;
    }

    .hero-image img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center; 
    }

    .hero-title {
        width: 100%;
        height: auto;
    }

    .hero-title img {
        width: 100%;
        height: auto;
    }

    .hero-sub-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        color: white;
        font-size: var(--text-l);
    }
    
    .hero-sub-left {
        width: 100%;
    }

    .hero-sub-right {
        text-align: right;
    }

    @media (max-width: 800px) {
        .hero-image {
            height: 60vh;
        }
    }
</style>