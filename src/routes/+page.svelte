<script>
	import Chisiamomobile from "$lib/components/chisiamomobile.svelte";
	import Footer from "$lib/components/footer.svelte";
	import Gallery from "$lib/components/gallery.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import Chisiamo from "../lib/components/chisiamo.svelte";

    let screenWidth = $state(1024);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="container">
    <Navbar />
    <Hero />
    {#if screenWidth < 800}
	    <Chisiamomobile />
    {:else}
	    <Chisiamo />
    {/if}
    <Gallery/>
    <Footer/>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>