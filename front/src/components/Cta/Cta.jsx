function Cta({par, cta='Contáctanos'}) {
    return(
        <section className="cta">
        <div className="container">
            <div className="cta-content">
                <h2>{par}</h2>
                <p>Cuéntanos tu idea y hagámosla realidad juntos</p>
                <a href="/contacto" className="btn btn-light">{cta}</a>
            </div>
        </div>
    </section>
    )
}

export default Cta