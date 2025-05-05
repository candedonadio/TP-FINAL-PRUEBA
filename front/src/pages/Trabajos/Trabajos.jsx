import { useEffect } from 'react'
import './trabajos.css'
import Header from '@componentes/Header/Header'
import Cta from '@componentes/Cta/Cta'
import Footer from '@componentes/Footer/Footer'

function Trabajos() {
  
    useEffect(() => {
    // Portfolio Filtering
    const filterButtons = document.querySelectorAll(".filter-btn")
    const portfolioItems = document.querySelectorAll(".portfolio-item")

    if (filterButtons.length > 0 && portfolioItems.length > 0) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => {
            btn.classList.remove("active")
          })

          // Add active class to clicked button
          this.classList.add("active")

          // Get filter value
          const filterValue = this.getAttribute("data-filter")

          // Filter items
          portfolioItems.forEach((item) => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
              item.style.display = "block"

              // Add animation
              setTimeout(() => {
                item.style.opacity = "1"
                item.style.transform = "scale(1)"
              }, 100)
            } else {
              item.style.opacity = "0"
              item.style.transform = "scale(0.8)"

              setTimeout(() => {
                item.style.display = "none"
              }, 300)
            }
          })
        })
      })
    }

    // Portfolio Modal
    const modal = document.getElementById("projectModal")
    const modalBody = document.querySelector(".modal-body")
    const closeModal = document.querySelector(".close-modal")
    const viewButtons = document.querySelectorAll(".portfolio-view")

    if (modal && modalBody && closeModal && viewButtons.length > 0) {
      // Open modal with project details
      viewButtons.forEach((button, index) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();

          if (index === 0) {
            window.location.href = "tqmqv.html";
            return;
          }
        })
      })

      // Close modal
      closeModal.addEventListener("click", () => {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      })

      // Close modal when clicking outside
      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none"
          document.body.style.overflow = "auto"
        }
      })
    }
  }, [])
  return (
    <>
      <Header/>

    <section className="page-banner">
        <div className="container">
            <h1>Nuestros Trabajos</h1>
            <div className="breadcrumbs">
                <a href="/index">Inicio</a> / <span>Trabajos</span>
            </div>
        </div>
    </section>

    <section className="portfolio-section">
        <div className="container">
            <div className="portfolio-intro" data-aos="fade-up">
                <h2>Proyectos Destacados</h2>
                <p>Explora nuestra selección de trabajos en diferentes categorías</p>
            </div>

            <div className="portfolio-filter" data-aos="fade-up">
                <button className="filter-btn active" data-filter="all">Todos</button>
                <button className="filter-btn" data-filter="videoclips">Videoclips</button>
                <button className="filter-btn" data-filter="moda">Moda</button>
                <button className="filter-btn" data-filter="eventos">Eventos</button>
                <button className="filter-btn" data-filter="redes">Redes Sociales</button>
                <button className="filter-btn" data-filter="animaciones">Animaciones</button>
            </div>

            <div className="portfolio-grid">
                <div className="portfolio-item" data-category="videoclips" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/tcmqv.jpg" alt="Videoclip Musical"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>"Te conozco más que vos"</h3>
                                <p>Dirección y producción</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project1">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="videoclips" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/bloodallover.png" alt="Videoclip Musical"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Blood All Over Me</h3>
                                <p>Serenna</p>
                                <p>Dirección y producción</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project6">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="eventos" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/baile.jpeg" alt="Videoclip Musical"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Muestra de Baile</h3>
                                <p>Fotografía</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project6">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="moda" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/dof.jpg" alt="Campaña de Moda"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Dreams of Freedom</h3>
                                <p>Fotografía y edición</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project2">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="moda" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/futuroenruinas.png" alt="Cobertura de Evento"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Futuro en Ruinas</h3>
                                <p>Fotografía y edición</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project3">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="redes" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/andre.png" alt="Contenido para Redes"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Tecnológicas</h3>
                                <p>Filmación y edición</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project4">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="redes" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/facu.png" alt="Contenido para Redes"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Facundo Ibarzabal</h3>
                                <p>Edición</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project4">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="redes" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/pablo.png" alt="Contenido para Redes"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Pablito Tecno</h3>
                                <p>Filmación y edición</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project4">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="redes" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/aime.png" alt="Contenido para Redes"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Aime Salomón</h3>
                                <p>Edición</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project4">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="redes" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/2.png" alt="Contenido para Redes"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Ka Wirth</h3>
                                <p>Gestión de redes</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project4">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="animaciones" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/enfrente.jpg" alt="Animación"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>En frente</h3>
                                <p>Créditos y títulos</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project5">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="animaciones" data-aos="fade-up">
                    <div className="portfolio-image">
                        <img src="./src/assets/eresparami.png" alt="Animación"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-info">
                                <h3>Eres para mi</h3>
                                <p>Créditos y títulos</p>
                                <a href="#" className="btn btn-sm portfolio-view" data-project="project5">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
    <div className="project-modal" id="projectModal">
        <div className="modal-content">
            <span className="close-modal">&times;</span>
            <div className="modal-body">
            </div>
        </div>
    </div>

    <div className="project-details" id="project1" style={{ display: 'none' }}>
        <div className="project-header">
            <h2>Videoclip "Tiempo"</h2>
            <p className="project-category">Videoclips</p>
        </div>
        <div className="project-gallery">
            <img src="./src/assets/tcmqv.jpg" alt="Videoclip Tiempo"/>
            <img src="./src/assets/tcmqv.jpg" alt="Videoclip Tiempo"/>
        </div>
        <div className="project-info">
            <div className="project-description">
                <h3>Descripción del Proyecto</h3>
                <p>Videoclip musical para la canción "Tiempo" del artista independiente Juan Pérez. El concepto explora la relación entre el tiempo y la memoria a través de una narrativa visual poética.</p>
                <p>Filmado en locaciones urbanas de Buenos Aires, el videoclip combina escenas narrativas con secuencias experimentales para crear una experiencia visual inmersiva que complementa la atmósfera de la canción.</p>
            </div>
            <div className="project-details-info">
                <h3>Detalles</h3>
                <ul>
                    <li><strong>Cliente:</strong> Juan Pérez</li>
                    <li><strong>Fecha:</strong> Marzo 2023</li>
                    <li><strong>Servicios:</strong> Dirección, Producción, Edición</li>
                    <li><strong>Equipo:</strong> Carolina Acevedo, Celeste Scravaglieri, Candela Donadio</li>
                </ul>
            </div>
        </div>
    </div>

   {/* <section className="cta">
        <div className="container">
            <div className="cta-content">
                <h2>¿Te gustaría un proyecto similar?</h2>
                <p>Contáctanos para discutir tus ideas</p>
                <a href="/" className="btn btn-light">Hablemos</a>
            </div>
        </div>
    </section> */}


        <Cta par={'¿Te gustaría un proyecto similar?'} cta={'Hablemos'}/>
      <Footer/>
    </>
  )
}

export default Trabajos
