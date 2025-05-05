import './nosotras.css'
import Header from '@componentes/Header/Header'
import Cta from '@componentes/Cta/Cta'
import Footer from '@componentes/Footer/Footer'
function Nosotras() {
  return (
    <>
      <Header/>
      <section className="page-banner">
        <div className="container">
            <h1>Sobre Nosotras</h1>
            <div className="breadcrumbs">
                <a href="index.html">Inicio</a> / <span>Sobre Nosotras</span>
            </div>
        </div>
      </section>
      <section className="about-section">
          <div className="container">
              <div className="about-intro" data-aos="fade-up">
                  <h2>SEPTIGO</h2>
                  <p className="lead">Septigo es una productora audiovisual creada por tres amigas diseñadoras, unidas por la pasión de dar vida a tus ideas y momentos más especiales.</p>
                  <p>Con una visión creativa, profesional y cercana, nuestra misión es transformar tus sueños en proyectos visuales inolvidables. Combinamos nuestras habilidades técnicas con un enfoque artístico para crear contenido que destaque y conecte con tu audiencia.</p>
              </div>

              <div className="about-image-flip" data-aos="fade-up">
                  <div className="flip-container">
                      <div className="flipper">
                          <div className="front">
                              <img src="./src/assets/nos.jpeg" alt="Equipo Septigo"/>
                          </div>
                          <div className="back">
                              <img src="./src/assets/septigologo.jpeg" alt="Logo Septigo"/>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="team-section">
                  <h2 className="section-title" data-aos="fade-up">Nuestro Equipo</h2>
                  <p className="section-subtitle" data-aos="fade-up">Conoce a las profesionales detrás de Septigo</p>
                  
                  <div className="team-member" data-aos="fade-right">
                      <div className="member-image">
                          <img src="./src/assets/caro.jpeg" alt="Carolina Acevedo"/>
                      </div>
                      <div className="member-info">
                          <h3>Carolina Acevedo</h3>
                          <p className="member-role">Producción, Cámara y Filmaker en eventos</p>
                          <p className="member-bio">Especialista en capturar momentos únicos y transformarlos en historias visuales impactantes. Su ojo para el detalle y creatividad aportan una perspectiva única a cada proyecto.</p>
                          <a href="https://caroliace.my.canva.site/portfolio" target="_blank" className="btn btn-outline">Ver portfolio personal</a>
                      </div>
                  </div>
                  
                  <div className="team-member reverse" data-aos="fade-left">
                      <div className="member-image">
                          <img src="./src/assets/celes.png" alt="Celeste Scravaglieri"/>
                      </div>
                      <div className="member-info">
                          <h3>Celeste Scravaglieri</h3>
                          <p className="member-role">Producción, Montaje y Sonidista</p>
                          <p className="member-bio">Experta en dar forma a las historias a través del montaje y el sonido. Su habilidad técnica y sensibilidad artística elevan cada proyecto a un nivel profesional superior.</p>
                          <a href="https://celestescrava.myportfolio.com/" target="_blank" className="btn btn-outline">Ver portfolio personal</a>
                      </div>
                  </div>
                  
                  <div className="team-member" data-aos="fade-right">
                      <div className="member-image">
                          <img src="./src/assets/cande.jpeg" alt="Candela Donadio"/>
                      </div>
                      <div className="member-info">
                          <h3>Candela Donadio</h3>
                          <p className="member-role">Producción, Cámara y Filmaker en eventos</p>
                          <p className="member-bio">Creativa y versátil, aporta una mirada fresca y contemporánea a cada proyecto. Su pasión por la narrativa visual se refleja en cada trabajo que realiza.</p>
                          <a href="https://candeladonadio.myportfolio.com/" target="_blank" className="btn btn-outline">Ver portfolio personal</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="values-section">
          <div className="container">
              <h2 className="section-title" data-aos="fade-up">Nuestros Valores</h2>
              <div className="values-grid">
                  <div className="value-card" data-aos="fade-up" data-aos-delay="100">
                      <div className="value-icon">
                          <i className="fas fa-lightbulb"></i>
                      </div>
                      <h3>Creatividad</h3>
                      <p>Buscamos soluciones innovadoras y únicas para cada proyecto.</p>
                  </div>
                  <div className="value-card" data-aos="fade-up" data-aos-delay="200">
                      <div className="value-icon">
                          <i className="fas fa-handshake"></i>
                      </div>
                      <h3>Compromiso</h3>
                      <p>Nos involucramos completamente en cada proyecto como si fuera nuestro.</p>
                  </div>
                  <div className="value-card" data-aos="fade-up" data-aos-delay="300">
                      <div className="value-icon">
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Calidad</h3>
                      <p>Buscamos la excelencia en cada detalle de nuestro trabajo.</p>
                  </div>
                  <div className="value-card" data-aos="fade-up" data-aos-delay="400">
                      <div className="value-icon">
                          <i className="fas fa-heart"></i>
                      </div>
                      <h3>Pasión</h3>
                      <p>Amamos lo que hacemos y eso se refleja en cada proyecto.</p>
                  </div>
              </div>
          </div>
      </section>
        <Cta par={'¿Queres trabajar con nosotras?'}/>
        <Footer/>
      <a href="#" className="back-to-top">
        <i className="fas fa-chevron-up"></i>
    </a>
    </>
  )
}

export default Nosotras
