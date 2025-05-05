
import Header from '@componentes/Header/Header'
import Cta from '@componentes/Cta/Cta'
import Footer from '@componentes/Footer/Footer'
import { useState, useEffect, useRef } from 'react'
import './index.css'

let style1 = {
    backgroundImage: "url('src/assets/banner.jpg')"
}

let style2 = {
    backgroundImage: "url('src/assets/nos.jpeg')"
}

let style3= {
    backgroundImage: "url('src/assets/tcmqv.jpg')"
}

function Index() {
    const [currSlide, setCurrSlide] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)

    const nextSlide = () => {
        if(currSlide >= 2){
            setCurrSlide(0)
        }else{
            setCurrSlide(currSlide => currSlide + 1)
        }
    }

    const prevSlide = () => {
        if(currSlide === 0){
            setCurrSlide(2)
        }else{
            setCurrSlide(currSlide => currSlide - 1)
        }
    }

    const setSlide = (i) => {
        document.querySelector('.slide.active').classList.remove('active')
        document.querySelectorAll('.hero-slider .slide')[i].classList.add('active')
        document.querySelector('.dot.active').classList.remove('active')
        document.querySelector(`.dot[data-slide="${i}"]`).classList.add('active')

    }

    useEffect(() => {
        setSlide(currSlide)
        const timer = setInterval(() => {
            nextSlide()
        }, 3000);

        return () => clearInterval(timer);
    })

  useEffect(() => {
    // Loader timeout
    const loaderTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Back to top visibility
    const handleScroll = () => {
      setIsBackToTopVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', handleScroll)

    // Animate on scroll
    const animatedElements = document.querySelectorAll('[data-aos]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate')
        }
      })
    }, { threshold: 0.85 })

    animatedElements.forEach(el => observer.observe(el))

    return () => {
      clearTimeout(loaderTimer)
      window.removeEventListener('scroll', handleScroll)
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
     {isLoading && (
       <div className="loader">
         <div className="loader-content">Loading...</div>
       </div>
     )}
     <Header />
     {/* Hero Principal */}
     <section className="hero">
        <div className="hero-slider">
            <div className="slide active">
                <div className="slide-content">
                    <h1 className="slide-title">Damos vida a tus ideas</h1>
                    <p className="slide-description">Productora audiovisual creativa y profesional</p>
                    <a href="/contacto" className="btn btn-primary">Contáctanos</a>
                </div>
                <div className="slide-bg" style={style3}></div>
            </div>
            <div className="slide">
                <div className="slide-content">
                    <h1 className="slide-title">Creatividad sin límites</h1>
                    <p className="slide-description">Transformamos tus sueños en proyectos visuales inolvidables</p>
                    <a href="/trabajos" className="btn btn-primary">Ver trabajos</a>
                </div>
                <div className="slide-bg" style={style1}></div>
            </div>
            <div className="slide">
                <div className="slide-content">
                    <h1 className="slide-title">Experiencia profesional</h1>
                    <p className="slide-description">Equipo de diseñadoras unidas por la pasión audiovisual</p>
                    <a href="/nosotras" className="btn btn-primary">Conócenos</a>
                </div>
                <div className="slide-bg" style={style2}></div>
            </div>
        </div>
        <div className="slider-controls bg-[lightgrey]">
            <button className="prev-slide"><i className="fas fa-chevron-left" onClick={prevSlide}></i></button>
            <div className="slider-dots">
                <span className="dot active" data-slide="0" onClick={ e => setCurrSlide(0)}></span>
                <span className="dot" data-slide="1" onClick={e => setCurrSlide(1)}></span>
                <span className="dot" data-slide="2" onClick={e => setCurrSlide(2)}></span>
            </div>
            <button className="next-slide"><i className="fas fa-chevron-right" onClick={nextSlide}></i></button>
        </div>
    </section>
    {/* Servicios */}
    <section className="services-preview">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Nuestros Servicios</h2>
                <p className="section-subtitle">Soluciones audiovisuales para cada necesidad</p>
            </div>
            <div className="services-grid">
                <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-icon">
                        <i className="fas fa-video"></i>
                    </div>
                    <h3>Videoclips</h3>
                    <p>Creamos videoclips profesionales que capturan la esencia de tu música.</p>
                </div>
                <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-icon">
                        <i className="fas fa-camera"></i>
                    </div>
                    <h3>Producción de Moda</h3>
                    <p>Sesiones fotográficas y videos para destacar tus colecciones y productos.</p>
                </div>
                <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-icon">
                        <i className="fas fa-calendar-check"></i>
                    </div>
                    <h3>Cobertura de Eventos</h3>
                    <p>Capturamos cada momento importante de tu evento con calidad profesional.</p>
                </div>
                <div className="service-card" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-icon">
                        <i className="fas fa-hashtag"></i>
                    </div>
                    <h3>Redes Sociales</h3>
                    <p>Contenido audiovisual optimizado para todas tus plataformas digitales.</p>
                </div>
            </div>
            <div className="section-footer">
                <a href="/servicios" className="btn btn-secondary">Ver todos los servicios</a>
            </div>
        </div>
    </section>

    {/* Trabajos Recientes */}
    <section className="recent-works">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Trabajos Recientes</h2>
                <p className="section-subtitle">Algunos de nuestros proyectos destacados</p>
            </div>
            <div className="works-grid">
                <div className="work-item" data-aos="zoom-in" data-aos-delay="100">
                    <div className="work-image">
                        <img src="./src/assets/tcmqv.jpg" alt="Videoclip"/>
                        <div className="work-overlay">
                            <div className="work-info">
                                <h3>Videoclip Musical</h3>
                                <p>Dirección y producción</p>
                                <a href="/trabajos" className="btn btn-sm">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-item" data-aos="zoom-in" data-aos-delay="200">
                    <div className="work-image">
                        <img src="./src/assets/dof.jpg" alt="Producción de Moda"/>
                        <div className="work-overlay">
                            <div className="work-info">
                                <h3>Campaña de Moda</h3>
                                <p>Fotografía y edición</p>
                                <a href="/trabajos" className="btn btn-sm">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-item" data-aos="zoom-in" data-aos-delay="300">
                    <div className="work-image">
                        <img src="./src/assets/enfrente.jpg" alt="Animación"/>
                        <div className="work-overlay">
                            <div className="work-info">
                                <h3>Animación Corporativa</h3>
                                <p>Diseño y animación</p>
                                <a href="/trabajos" className="btn btn-sm">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-footer">
                <a href="/trabajos" className="btn btn-secondary">Ver todos los trabajos</a>
            </div>
        </div>
    </section>

   {/* About */}
    <section className="about-preview">
        <div className="container">
            <div className="about-content">
                <div className="about-image" data-aos="fade-right">
                    <img src="./src/assets/nos.jpeg" alt="Equipo Septigo"/>
                </div>
                <div className="about-text" data-aos="fade-left">
                    <h2>SEPTIGO</h2>
                    <p>Somos una productora audiovisual creada por tres amigas diseñadoras, unidas por la pasión de dar vida a tus ideas y momentos más especiales.</p>
                    <p>Con una visión creativa, profesional y cercana, nuestra misión es transformar tus sueños en proyectos visuales inolvidables.</p>
                    <a href="/nosotras" className="btn btn-primary">Conoce más sobre nosotras</a>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
            <Cta par={'¿Tienes un proyecto en mente?'}/>
    

    {/* Footer */}
    <Footer/>

    {/* Boton volver arriba */}
    <a 
      href="#" 
      className={`back-to-top ${isBackToTopVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
        <i className="fas fa-chevron-up"></i>
    </a>

    <script src="./src/Index/index.js"></script>
    </>
  )
}

export default Index