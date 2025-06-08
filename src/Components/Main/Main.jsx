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
            text: "Modelador 3D profesional. Product Owner del evento, negociante experto con publishers. Emprendedor y responsable."
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
<br />
                         <Link to="/schedule" className="cta-button">
                        CRONOGRAMA DEL EVENTO
                    </Link> 
                    </div>
                    <div className="hero-image">
                        <img src="images/Fondo2.png" alt="Patricio Cristaldo"></img>
                    </div>
                </div>
            </section>
            <section className="clients" id="projects">
                <ul>
                    <li>Videojuegos</li>
                    <li>Realidad virtual</li>
                    <li>Esports</li>
                    <li>Desarrollo</li>
                </ul>
            </section>

            <section className="services-section" id="services">
                <h2>Algunas de las actividades</h2>
                <span>del evento</span>
                <div className="mainContainer">
                    <div className="services-cards">
                        <div className="service-card">
                            <h3>Diseño de videojuegos</h3>
                            <p>
                                Desarrollo y producción de videojuegos para personas con o sin conocimientos previos.
                            </p>
                           <Link to="/services" className="learn-more-button">
                                Saber más
                            </Link>
                        </div>
                        <div className="service-card">
                            <h3>Salón de juegos de Mesa</h3>
                            <p>
                                Juegos de rol, dungeon masters y demás juegos de mesa para principiantes y avanzados.
                            </p>
                           <Link to="/services" className="learn-more-button">
                                Saber más
                            </Link>
                        </div>
                        <div className="service-card">
                            <h3>Referentes del gaming</h3>
                            <p>
                                Algunos de los referentes más grandes de la industria nos acompañaran en este evento.
                            </p>
                            <Link to="/services" className="learn-more-button">
                                Saber más
                            </Link>
                        </div>
                    </div>
                    {/* <Link to="/portfolio" className="portfolio-button">
                        VER MI PORTFOLIO
                    </Link> */}
                </div>
            </section>

            <section className="about" id="about">
                <div className="mainContainer">
                    <div className="about-image">
                        <img src="images/videojuegos2.jpg" alt="Patricio Cristaldo"></img>
                    </div>
                    <div className="about-text">
                        <h2>Contanos que te pareció el evento</h2>
                        <p>
                            Llenando el siguiente formulario, podrás dejar tus comentarios sobre el evento. Tu opinión nos ayuda un montón a seguir mejorando y creciendo, además participas de un sorteo para ganar grandes premios!
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSen3q2M6yWesYWPu3xUZFC8DteRbMoUCuO0h314oz7FdSEP3g/viewform" target="_blank" className="cta-button"> 
                            Dejar opinión
                        </a>
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
