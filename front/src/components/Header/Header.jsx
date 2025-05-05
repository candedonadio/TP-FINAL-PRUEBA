
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import './styles.css'

function Header () {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(()=> {
        let key = setTimeout(() => {
            setIsVisible(false)
        },2000)

        return () => clearTimeout(key); 
    }, [])

    useEffect(()=> {
       if(isVisible){

        document.querySelector('body')?.classList.add('loader-showing')
        document.querySelector('body')?.classList.remove('loader-finished')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });

       }else{
        document.querySelector('body')?.classList.remove('loader-showing')
        document.querySelector('body')?.classList.add('loader-finished')

       }
    }, [isVisible])

    useEffect(() => {
        const allSections = document.querySelectorAll("[data-aos]");
        let options = {
            rootMargin: "50px",
            threshold: 0.4
        }
        let animationobserver = new IntersectionObserver(callback, options);

        allSections.forEach(section => {
            animationobserver.observe(section);
        });
        function callback(entries, animationobserver) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aos-animate");
                    animationobserver.unobserve(entry.target);
                }
            });
        }
    })
    return(
        <>
         <header>
            <div className="container">
                <div className="header-content">
                    <a href="/" className="logo">
                        <img src="src/assets/septigologo.png" alt="Septigo Logo" />
                    </a>
                    <nav className="nav-links">
                        <NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to="/" end>
                        Home
                        </NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to="/nosotras" end>
                        Nosotras
                        </NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to="/servicios">
                        Servicios
                        </NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to="/trabajos">
                        Trabajos
                        </NavLink><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to="/contacto">
                        Contacto
                        </NavLink>
                    </nav>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
        <div>
            <div className={`${isVisible?'':'hidden'} loader`}>                
                <img src="./src/assets/septigologo.png" alt="Septigo Logo" className="loader-logo" />
            </div>
        </div>
        </>
    )
}

export default Header