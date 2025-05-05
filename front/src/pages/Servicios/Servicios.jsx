import './services.css'
import Header from '@componentes/Header/Header'
import Cta from '@componentes/Cta/Cta'
import Footer from '@componentes/Footer/Footer'

function Servicios() {
  return (
    <>
      <Header/>

    <section className="page-banner">
        <div className="container">
            <h1>Nuestros Servicios</h1>
            <div className="breadcrumbs">
                <a href="index.html">Inicio</a> / <span>Servicios</span>
            </div>
        </div>
    </section>

    <section className="services-intro">
        <div className="container">
            <div className="intro-content" data-aos="fade-up">
                <h2>Soluciones Audiovisuales Profesionales</h2>
                <p>En Septigo ofrecemos una amplia gama de servicios audiovisuales adaptados a tus necesidades. Desde la conceptualización hasta la producción final, nuestro equipo te acompaña en cada etapa del proceso creativo para asegurar resultados excepcionales.</p>
            </div>
        </div>
    </section>

    <section className="services-list">
        <div className="container">
            <div className="service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="fas fa-video"></i>
                </div>
                <div className="service-content">
                    <h3>Videoclips</h3>
                    <p>Creamos videoclips profesionales que capturan la esencia de tu música y potencian tu imagen artística. Desde la conceptualización hasta la postproducción, trabajamos para crear piezas audiovisuales que destaquen en el competitivo mundo musical.</p>
                    <ul className="service-features">
                        <li><i className="fas fa-check"></i> Dirección creativa y artística</li>
                        <li><i className="fas fa-check"></i> Filmación con equipos profesionales</li>
                        <li><i className="fas fa-check"></i> Edición y postproducción avanzada</li>
                        <li><i className="fas fa-check"></i> Corrección de color</li>
                        <li><i className="fas fa-check"></i> Efectos visuales</li>
                    </ul>
                </div>
            </div>

            <div className="service-item reverse" data-aos="fade-up">
                <div className="service-icon">
                    <i className="fas fa-camera"></i>
                </div>
                <div className="service-content">
                    <h3>Producción de Moda</h3>
                    <p>Destacamos tus colecciones y productos a través de sesiones fotográficas y videos de alta calidad. Creamos contenido visual que resalta las características de tus productos y conecta con tu público objetivo.</p>
                    <ul className="service-features">
                        <li><i className="fas fa-check"></i> Fotografía de producto y lookbook</li>
                        <li><i className="fas fa-check"></i> Videos promocionales</li>
                        <li><i className="fas fa-check"></i> Dirección de arte</li>
                        <li><i className="fas fa-check"></i> Styling profesional</li>
                        <li><i className="fas fa-check"></i> Retoque digital</li>
                    </ul>
                </div>
            </div>

            <div className="service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="fas fa-calendar-check"></i>
                </div>
                <div className="service-content">
                    <h3>Cobertura de Eventos</h3>
                    <p>Capturamos cada momento importante de tu evento con calidad profesional. Ya sea una boda, un concierto, una conferencia o un lanzamiento de producto, nuestro equipo documenta la experiencia para que puedas revivirla y compartirla.</p>
                    <ul className="service-features">
                        <li><i className="fas fa-check"></i> Fotografía de eventos</li>
                        <li><i className="fas fa-check"></i> Filmación multicámara</li>
                        <li><i className="fas fa-check"></i> Edición rápida para redes sociales</li>
                        <li><i className="fas fa-check"></i> Resúmenes audiovisuales</li>
                        <li><i className="fas fa-check"></i> Transmisiones en vivo</li>
                    </ul>
                </div>
            </div>

            <div className="service-item reverse" data-aos="fade-up">
                <div className="service-icon">
                    <i className="fas fa-hashtag"></i>
                </div>
                <div className="service-content">
                    <h3>Contenido para Redes Sociales</h3>
                    <p>Creamos contenido audiovisual optimizado para todas tus plataformas digitales. Diseñamos estrategias visuales que aumentan tu engagement y fortalecen tu presencia online con material de alta calidad adaptado a cada red social.</p>
                    <ul className="service-features">
                        <li><i className="fas fa-check"></i> Reels y TikToks</li>
                        <li><i className="fas fa-check"></i> Stories y contenido efímero</li>
                        <li><i className="fas fa-check"></i> Fotografía para feed</li>
                        <li><i className="fas fa-check"></i> Videos promocionales</li>
                        <li><i className="fas fa-check"></i> Animaciones para redes</li>
                    </ul>
                </div>
            </div>

            <div className="service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="fas fa-film"></i>
                </div>
                <div className="service-content">
                    <h3>Animaciones</h3>
                    <p>Damos vida a tus ideas a través de animaciones creativas y profesionales. Desde motion graphics hasta animaciones 2D, creamos piezas visuales dinámicas que comunican tu mensaje de forma efectiva y atractiva.</p>
                    <ul className="service-features">
                        <li><i className="fas fa-check"></i> Motion graphics</li>
                        <li><i className="fas fa-check"></i> Animación 2D</li>
                        <li><i className="fas fa-check"></i> Animación de logos</li>
                        <li><i className="fas fa-check"></i> Infografías animadas</li>
                        <li><i className="fas fa-check"></i> Títulos y créditos</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="process-section">
        <div className="container">
            <h2 className="section-title" data-aos="fade-up">Nuestro Proceso</h2>
            <p className="section-subtitle" data-aos="fade-up">Cómo trabajamos para hacer realidad tu proyecto</p>
            
            <div className="process-steps">
                <div className="process-step" data-aos="fade-up" data-aos-delay="100">
                    <div className="step-number">1</div>
                    <div className="step-content">
                        <h3>Consulta Inicial</h3>
                        <p>Nos reunimos para entender tus necesidades, objetivos y visión del proyecto.</p>
                    </div>
                </div>
                
                <div className="process-step" data-aos="fade-up" data-aos-delay="200">
                    <div className="step-number">2</div>
                    <div className="step-content">
                        <h3>Propuesta Creativa</h3>
                        <p>Desarrollamos un concepto creativo y plan de producción adaptado a tus objetivos.</p>
                    </div>
                </div>
                
                <div className="process-step" data-aos="fade-up" data-aos-delay="300">
                    <div className="step-number">3</div>
                    <div className="step-content">
                        <h3>Producción</h3>
                        <p>Ejecutamos el proyecto con nuestro equipo profesional y equipamiento de alta calidad.</p>
                    </div>
                </div>
                
                <div className="process-step" data-aos="fade-up" data-aos-delay="400">
                    <div className="step-number">4</div>
                    <div className="step-content">
                        <h3>Postproducción</h3>
                        <p>Editamos y refinamos el material para lograr un resultado profesional y atractivo.</p>
                    </div>
                </div>
                
                <div className="process-step" data-aos="fade-up" data-aos-delay="500">
                    <div className="step-number">5</div>
                    <div className="step-content">
                        <h3>Entrega Final</h3>
                        <p>Presentamos el proyecto finalizado y realizamos ajustes según tus comentarios.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <Cta par={'¿Listo para comenzar tu proyecto?'} cta={'Pedi el presupuesto'}/>
      <Footer/>
    </>
  )
}

export default Servicios
