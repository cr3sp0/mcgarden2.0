<script lang="ts">
    import { navState } from '$lib/navState.svelte';
    
    import WhiteMow from "$lib/img/white-mow.webp";
    import BlackMow from "$lib/img/black-mow.webp";
</script>

<div class="navbar {navState.theme}">
    <div class="nav-left nav-section"></div>
    
    <div class="logo">
        <img src={WhiteMow} alt="logo bianco" class="logo-white" />
        <img src={BlackMow} alt="logo nero" class="logo-black" />
    </div>
    
    <div class="nav-right nav-section">
        <a href="#chisiamo">Chi siamo</a>
        <a href="#gallery">Servizi</a>
        <a class="big-a" href="#footer">CONTATTACI</a>
    </div>
</div>

<style>
    .navbar {
        width: 100%;
        height: var(--nav-h);
        max-width: calc(100% - var(--side-padding)*2);
        
        display: flex;
        flex-direction: row;

        position: fixed;
        top: 0;
        z-index: 100;
        transition: background-color 0.4s ease;
    }

    .nav-section {
        flex: 1; 
    }

    .logo {
        width: 100px;
        flex-shrink: 0;
        margin: 10px 0; 
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .logo img {
        height: 100%;
        position: absolute;
        transition: opacity 0.4s ease-in-out;
    }

    .navbar.light .logo-white { opacity: 1; }
    .navbar.light .logo-black { opacity: 0; }
    
    .navbar.dark .logo-white { opacity: 0; }
    .navbar.dark .logo-black { opacity: 1; }

    .nav-right {
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: flex-end; 
        font-size: var(--text-m);
        gap: clamp(1.5rem, 4vw, 3rem);
    }
    
    .nav-right :hover {
        text-decoration: underline;
    }
    
    a {
        text-decoration: none;
        transition: color 0.4s ease-in-out;
    }

    .big-a {
        font-weight: 600;
    }

    .navbar.light a { color: white; }
    .navbar.dark a { color: #333333; }

    @media (max-width: 800px) {
        .navbar {
            height: var(--nav-h-mobile);
        }

        .nav-right a{
            display: none;
        }
    }
</style>