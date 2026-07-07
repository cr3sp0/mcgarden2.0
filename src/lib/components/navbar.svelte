<div class="navbar">
    <div class="nav-left nav-section"></div>
    <div class="logo"></div>
    <div class="nav-right nav-section">
        <a href="*">Chi siamo</a>
        <a href="*">Servizi</a>
        <a href="*">CONTATTACI</a>
    </div>
</div>

<style>

    .navbar {
        width: 100%;
        height: var(--nav-h, 70px);
        
        display: flex;
        flex-direction: row;

        position: sticky;
        top: 0;
        z-index: 100;
    }

    .nav-section {
        flex: 1; 
    }

    .nav-left {
        background-color: blue;
    }

    .logo {
        width: 100px;
        background-color: blueviolet;
        flex-shrink: 0; 
    }

    .nav-right {
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: flex-end; 
        gap: 5rem;
        background-color: red;
        padding-right: 2rem;
    }
    
    a {
        color: white;
        text-decoration: none;
    }
</style>