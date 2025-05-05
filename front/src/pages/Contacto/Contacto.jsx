"use client"

import { useRef, useState } from "react"
import "./contacto.css"
import Header from "@componentes/Header/Header"
import Cta from "@componentes/Cta/Cta.jsx"
import Footer from "@componentes/Footer/Footer"

function Contacto() {
  const formSuccessRef = useRef(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, subject, message } = formData

    // Validaciones
    if (!name || !email || !subject || !message) {
      alert("Por favor, completa todos los campos del formulario.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:3000/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // Incluye cookies si es necesario
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      if (data.success) {
        if (formSuccessRef.current) {
          formSuccessRef.current.classList.add("active")
          setFormData({ name: "", email: "", subject: "", message: "" })
          setTimeout(() => formSuccessRef.current.classList.remove("active"), 5000)
        }
      } else {
        throw new Error(data.error || "Hubo un error al enviar el mensaje.")
      }
    } catch (err) {
      console.error(err)
      setError(err.message || "Error al conectar con el servidor.")
      alert(err.message || "Error al conectar con el servidor.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />

      <section className="page-banner">
        <div className="container">
          <h1>Contacto</h1>
          <div className="breadcrumbs">
            <a href="index.html">Inicio</a> / <span>Contacto</span>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-intro" data-aos="fade-up">
            <h2>¡Hablemos de tu proyecto!</h2>
            <p>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible. También puedes contactarnos
              directamente a través de nuestras redes sociales.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-form-container" data-aos="fade-right">
              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="" disabled>
                      Selecciona un asunto
                    </option>
                    <option value="presupuesto">Solicitud de presupuesto</option>
                    <option value="info">Información general</option>
                    <option value="colaboracion">Propuesta de colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </button>
                {error && <div className="error-message">{error}</div>}
              </form>
              <div ref={formSuccessRef} className="form-success">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
              </div>
            </div>

            <div className="contact-info" data-aos="fade-left">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>septigoproducciones@gmail.com</p>
              </div>

              <div className="info-card cel">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Teléfono</h3>
                <p>+54 11 3272 5928</p>
                <p>+54 11 5312 8627</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Ubicación</h3>
                <p>Buenos Aires, Argentina</p>
              </div>
              <div className="social-section">
                <h3>Síguenos en redes</h3>
                <div className="social-icons">
                  <a
                    href="https://api.whatsapp.com/send?phone=541153128627"
                    className="social-icon"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/septigo.films/" className="social-icon" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@septigo.films" className="social-icon" aria-label="TikTok">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta par={"¿Quieres trabajar con nosotras?"} />
      <Footer />
    </>
  )
}

export default Contacto


/* import { useRef, useState } from 'react'
import './contacto.css'
import Header from '@componentes/Header/Header'
import Cta from '@componentes/Cta/Cta.jsx'
import Footer from '@componentes/Footer/Footer'




function Contacto() {
  const formSuccessRef = useRef(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const { name, email, subject, message } = formData;
      
        // Validaciones
        if (!name || !email || !subject || !message) {
          alert("Por favor, completa todos los campos del formulario.");
          return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Por favor, ingresa un correo electrónico válido.");
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3000/contacto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
      
          const data = await response.json();
          if (data.success) {
            if (formSuccessRef.current) {
              formSuccessRef.current.classList.add("active");
              setFormData({ name: '', email: '', subject: '', message: '' });
              setTimeout(() => formSuccessRef.current.classList.remove("active"), 5000);
            }
          } else {
            alert("Hubo un error al enviar el mensaje.");
          }
        } catch (err) {
          console.error(err);
          alert("Error al conectar con el servidor.");
        }
    }      
  return (
    <>

      <Header/>
      
        <section className="page-banner">
            <div className="container">
                <h1>Contacto</h1>
                <div className="breadcrumbs">
                    <a href="index.html">Inicio</a> / <span>Contacto</span>
                </div>
            </div>
        </section>
    { /*<form action='http://localhost:3000/admin/login'>
    <input name="query" />
    <button type="submit" id='pepe'>Search</button>
    </form>*/
        /*<section className="contact-section">
            <div className="container">
                <div className="contact-intro" data-aos="fade-up">
              
                    <h2>¡Hablemos de tu proyecto!</h2>
                    <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible. También puedes contactarnos directamente a través de nuestras redes sociales.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-form-container" data-aos="fade-right">
                        <form id="contactForm" className="contact-form"  onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Tu nombre"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />


                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="nombre@ejemplo.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />

                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Asunto</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                    <option value="" disabled>Selecciona un asunto</option>
                                    <option value="presupuesto">Solicitud de presupuesto</option>
                                    <option value="info">Información general</option>
                                    <option value="colaboracion">Propuesta de colaboración</option>
                                    <option value="otro">Otro</option>
                                    </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />

                            </div>
                            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                        </form >
                        <div ref={formSuccessRef} className="form-success" >
                            <div className="success-icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>¡Mensaje enviado!</h3>
                            <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
                        </div>
                    </div>

                    <div className="contact-info" data-aos="fade-left">
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>Email</h3>
                            <p>septigoproducciones@gmail.com</p>
                        </div>
                        
                        <div className="info-card cel">
                            <div className="info-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <h3>Teléfono</h3>
                            <p>+54 11 3272 5928</p>
                            <p>+54 11 5312 8627</p>
                        </div>
                        
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Ubicación</h3>
                            <p>Buenos Aires, Argentina</p>
                        </div>
                        <div className="social-section">
                            <h3>Síguenos en redes</h3>
                            <div className="social-icons">
                                <a href="https://api.whatsapp.com/send?phone=541153128627" className="social-icon" aria-label="WhatsApp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/septigo.films/" className="social-icon" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.tiktok.com/@septigo.films" className="social-icon" aria-label="TikTok">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        
        <Cta par={'¿Quieres trabajar con nosotras?'}/>
      <Footer/>
    </>
  )
};
export default Contacto */
