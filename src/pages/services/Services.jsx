import React from 'react'
import "./Services.css";

export const Services = () => {
  return (
    <>                   
     <div className="servicesCards">
    <div className="serviceCard">
        <h3>Diseño web</h3>
        <p>
            Diseño de páginas web de distinto tipo; ecommerce, portfolio,
            landing, etc. Manejo de lenguajes como HTML5, CSS3 y JavaScript.
        </p>
    </div>
    <div className="serviceCard">
        <h3>UX/UI</h3>
        <p>
            Enfoque en una buena experiencia e interfaz de usuario, diseño
            amigable, intuitivo y fácil de usar. Capacidad para crear sitios web que se adapten a diferentes dispositivos y tamaños de pantalla
        </p>
    </div>
    <div className="serviceCard">
        <h3>Automatización</h3>
        <p>
            Desarrollo de funciones que automatizan procesos en tu web, en
            base a ciertos disparadores personalizables. Conocimientos básicos de optimización para motores de búsqueda.
        </p>
    </div>
</div>
</>
  )
}
