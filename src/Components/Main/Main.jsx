import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            image: "images/Offty.jpg",
            alt: "The Offty",
            name: "The Offty",
            text: "Artista destacado de la comunidad. Más de 10 años de experiencia en manejo de photoshop. Miembro de la incubadora de videojuegos."
        },
        {
            image: "images/Dreambox.png",
            alt: "Dreanox",
            name: "Dreanox",
            text: "Desarrollador altamente proactivo y efectivo. Productor de eventos. Director ejecutivo de ~Caja de sueños 3D~"
        },
        {
            image: "images/Chander.png",
            alt: "Chander",
            name: "Chander",
            text: "Modelador 3D profesional. Product Owner del evento, negociante directo con publishers. Emprendedor y responsable."
        }
    ];

    const showPrevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const showNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(showNextCard, 5000); // Cambia el testimonio cada 5 segundos
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <main>
            <section className="hero" id="hero">
                <div className="mainContainer">
                    <div className="hero-text">
                        <h2>Hola! Somos el equipo </h2>
                        <span>ALVAPA</span>
                        <span></span>
                        <p style={{ color: "#1b4b87" }}>
                            Nos dedicamos a organizar eventos lúdicos, este año tenemos algo muy especial preparado, te lo contamos abajo ⬇️
                        </p>
                        <a
                            href="mailto:patricio_cristaldo@outlook.com?subject=Consulta&body=Hola, me gustaría contarte acerca de mi proyecto..."
                            className="cta-button"
                        >
                            AGENDA DEL EVENTO
                        </a>
                    </div>
                    <div className="hero-image">
                        <img src="images/Fondo2.png" alt="Patricio Cristaldo"></img>
                    </div>
                </div>
            </section>
            <section className="clients" id="projects">
                <ul>
                    <li>UTN</li>
                    <li>RUNDO</li>
                    <li>SOFTWARE FACTORY</li>
                    <li>DIGITAL HOUSE</li>
                </ul>
            </section>

            <section className="services-section" id="services">
                <h2>Mis grandes </h2>
                <span>servicios</span>
                <div className="mainContainer">
                    <div className="services-cards">
                        <div className="service-card">
                            <h3>Diseño web</h3>
                            <p>
                                Diseño de páginas web de distinto tipo; ecommerce, portfolio,
                                landing, etc. Consultas en el botón debajo.
                            </p>
                           <Link to="/services" className="learn-more-button">
                                Saber más
                            </Link>
                        </div>
                        <div className="service-card">
                            <h3>UX/UI</h3>
                            <p>
                                Enfoque en una buena experiencia e interfaz de usuario, diseño
                                amigable, intuitivo y fácil de usar.
                            </p>
                           <Link to="/services" className="learn-more-button">
                                Saber más
                            </Link>
                        </div>
                        <div className="service-card">
                            <h3>Automatización</h3>
                            <p>
                                Desarrollo de funciones que automatizan procesos en tu web, en
                                base a ciertos disparadores personalizables.
                            </p>
                            <Link to="/services" className="learn-more-button">
                                Saber más
                            </Link>
                        </div>
                    </div>
                    <Link to="/portfolio" className="portfolio-button">
                        VER MI PORTFOLIO
                    </Link>
                </div>
            </section>

            <section className="about" id="about">
                <div className="mainContainer">
                    <div className="about-image">
                        <img src="images/Ejemplo2.png" alt="Patricio Cristaldo"></img>
                    </div>
                    <div className="about-text">
                        <h2>Un poco sobre nosotros</h2>
                        <p>
                            Soy desarrollador web full stack, actualmente me encuentro
                            realizando una diplomatura en desarrollo web con la Universidad
                            Tecnológica Nacional para potenciar mí conocimiento y habilidades.
                        </p>
                        <Link to="/about" className="cta-button">
                            MÁS INFORMACIÓN
                        </Link>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>Organizadores</h2>
                <div className="mainContainer">
                    <button className="nav-button prev-button" onClick={showPrevCard}>&#9664;</button>
                    {testimonials.map((testimonial, index) => (
                        <div
                            className={`testimonial-card ${index === currentIndex ? "active" : ""}`}
                            key={index}
                        >
                            <div className="testimonial-image">
                                <img src={testimonial.image} alt={testimonial.alt} />
                            </div>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.text}</p>
                        </div>
                    ))}
                    <button className="nav-button next-button" onClick={showNextCard}>&#9654;</button>
                </div>
            </section>
        </main>
    );
}
