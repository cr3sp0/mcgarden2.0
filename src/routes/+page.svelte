<script>
	import Navbar from "$lib/components/navbar.svelte";

</script>
<div class="container">
    <div class="hero">
        <Navbar />
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    .hero {
        background-color: #429C48;
        width: 100%;
        height: 100vh;
        padding: 0 50px;
        box-sizing: border-box;
    }
</style>