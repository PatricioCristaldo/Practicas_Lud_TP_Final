import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <>
      <div className="servicesCards">
        <div className="serviceCard">
          <h3>Videojuegos</h3>
          <p>
            Durante el evento vas a poder probar una gran variedad de videojuegos independientes y comerciales. Habrá estaciones con consolas, PC y dispositivos móviles para que explores géneros como aventuras, estrategia, terror, plataformas, entre otros.
          </p>
        </div>
        <div className="serviceCard">
          <h3>Diseño </h3>
          <p>
            Esta actividad te introduce en el mundo del desarrollo y producción de videojuegos. No importa si no tenés experiencia previa: vas a conocer herramientas accesibles y cómo dar forma a tus ideas lúdicas a través de talleres introductorios.
          </p>
        </div>
        <div className="serviceCard">
          <h3>Salón de juegos de mesa</h3>
          <p>
            Espacio dedicado a los juegos de mesa y de rol. Podés participar en partidas abiertas o sumarte a campañas dirigidas por dungeon masters. Hay actividades tanto para principiantes como para jugadores experimentados.
          </p>
        </div>
      </div>
      <div className="servicesCards">
        <div className="serviceCard">
          <h3>Esports</h3>
          <p>
            Disfrutá de competencias amistosas y profesionales de videojuegos competitivos. También habrá charlas con jugadores de Esports, retos en vivo y posibilidad de enfrentarte a un equipo profesional invitado.
          </p>
        </div>
        <div className="serviceCard">
          <h3>Desarrollo</h3>
          <p>
            Si te interesa crear videojuegos, esta sección es para vos. Habrá mentorías técnicas, mini game jams, y charlas sobre motores de desarrollo como GDevelop, Unity y herramientas de modelado 3D. Ideal para estudiantes y autodidactas.
          </p>
        </div>
        <div className="serviceCard">
          <h3>Referentes del gaming</h3>
          <p>
            Durante el evento nos visitarán referentes reconocidos de la industria del videojuego. Compartirán sus experiencias, responderán preguntas del público y ofrecerán charlas inspiradoras sobre el presente y futuro del gaming.
          </p>
        </div>
      </div>
    </>
  );
};
