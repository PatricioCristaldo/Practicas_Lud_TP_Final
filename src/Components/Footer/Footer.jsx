import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias por suscribirte a mi newsletter ${email}!`);
        setEmail(''); // Limpiar el campo de email después de enviar el formulario.
    };

    return (
        <footer>
            <h2>Equipo Alvapa</h2>
            <div className="social-links">
                <a href="https://www.facebook.com/patricionicolas.cristaldo"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/patricio.n.c"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/patricio-cristaldo-programador-web-fullstack/"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/PatricioCristaldo"><i className="bi bi-github"></i></a>
                <a href="https://www.messenger.com/t/100000561522072"><i className="bi bi-messenger"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=5491173686874&text&type=phone_number&app_absent=0"><i className="bi bi-whatsapp"></i></a>
            </div>
            <h5>SUSCRÍBETE</h5>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Escribe tu email"
                    required
                />
                <button type="submit" style={{ cursor: "pointer" }}>ENVIAR</button>
            </form>
            <p>&copy; 2024 All rights reserved. <strong>P. CRISTALDO</strong></p>
        </footer>
    );
}

export default Footer;
