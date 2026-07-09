<footer class="site-footer" id="footer">
    <div class="footer-container section">
        <div class="footer-title">Contatti</div>
        <div class="footer-element">
            <div class="footer-el-title">email e telefono</div>
            <div class="footer-el-content">mcgardenservice.com</div>
            <div class="footer-el-content">3476543423</div>
        </div>
        <div class="footer-element">
            <div class="footer-el-title">info</div>
            <div class="footer-el-content">Partita IVA: 02250960511</div>
            <div class="footer-el-content">Codice Fiscale: CRSMRC73L11A390U</div>
        </div>
        <div class="footer-element">
            <div class="footer-el-title">dove trovarci</div>
            <div class="footer-el-content">Via IV Novembre 10 Arezzo</div>
            <div class="footer-el-content">Lun - Ven 08:00 - 18:00</div>
            <div class="footer-el-content">Sab 08:00 - 12:00</div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>
            Designed & Built by 
            <a href="https://github.com/cr3sp0" target="_blank" rel="noopener noreferrer">cr3sp0</a>
        </p>
    </div>
</footer>

<style>
    .site-footer {
        width: 100%;
        background-color: #1E1E1E;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .footer-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        gap: clamp(50px, 7vw, 150px);
        
        padding-bottom: 3rem; 
    }

    .footer-title {
        font-size: var(--text-l);
    }

    .footer-el-title {
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 2rem;
    }

    .footer-el-content {
        margin-bottom: 0.5rem;
    }

    .footer-bottom {
        width: 100%;
        text-align: center;
        padding: 1.5rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1); 
    }

    .footer-bottom p {
        margin: 0;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
    }

    .footer-bottom a {
        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .footer-bottom a:hover {
        color: #429C48; 
        text-decoration: underline;
    }

    @media (max-width: 800px) {
        .footer-container {
            flex-direction: column ;
        }
    }
</style>