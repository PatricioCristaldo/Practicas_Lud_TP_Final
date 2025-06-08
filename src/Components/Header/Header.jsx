import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="headerContainer">
            <div className="logo">
               <a href="/"><h1>Weekly Game Fest</h1> </a> 
            </div>
            <nav>
                <ul>
                    
                    <li><Link to="/portfolio" >
                                                    Proyectos
                                                </Link></li>
                                                
                    <li><a href="#services">Actividades</a></li>
                    <li><a href="#about">Sobre nosotros</a></li>
                </ul>
            </nav>
            <a href="mailto:patricio_cristaldo@outlook.com?subject=Cotización&body=Hola, me gustaría pedir presupuesto para..." className="quote-button">Contacto</a>
        </div>
    </header>
  )
}

export default Header