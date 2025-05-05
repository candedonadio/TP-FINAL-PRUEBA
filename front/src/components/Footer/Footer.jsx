function Footer () {
    return (
        <>
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                    <img src="src/assets/septigologo.png" alt="Septigo Logo" />
                        <p>Productora Audiovisual</p>
                    </div>
                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li><a href="/index">Inicio</a></li>
                            <li><a href="/nosotras">Sobre Nosotras</a></li>
                            <li><a href="/servicios">Servicios</a></li>
                            <li><a href="/trabajos">Trabajos</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contacto</h3>
                        <p><i className="fas fa-envelope"></i> septigoproducciones@gmail.com</p>
                        <p><i className="fas fa-phone"></i> +54 11 1234 5678</p>
                        <p><i className="fas fa-map-marker-alt"></i> Buenos Aires, Argentina</p>
                    </div>
                    <div className="footer-social">
                        <h3>Síguenos</h3>
                        <div className="social-icons">
                            <a href="https://api.whatsapp.com/send?phone=541153128627" aria-label="WhatsApp" target="_blank"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com/septigo.films/" aria-label="Instagram" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.tiktok.com/@septigo.films" aria-label="TikTok" target="_blank"><i className="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Septigo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer;