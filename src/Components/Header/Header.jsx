import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div className="headerContainer">
            <div className="logo">
                <h1>Equipo Alvapa</h1>
            </div>
            <nav>
                <ul>
                    
                    <li><a href="https://github.com/PatricioCristaldo?tab=repositories">Projectos</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Sobre nosotros</a></li>
                </ul>
            </nav>
            <a href="mailto:patricio_cristaldo@outlook.com?subject=Cotización&body=Hola, me gustaría pedir presupuesto para..." className="quote-button">Cotización</a>
        </div>
    </header>
  )
}

export default Header