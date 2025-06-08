import React from 'react'
import CV from '../../../public/images/Proyectos.png'

export const Portfolio = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "10px",
          flexWrap: "wrap",
    backgroundImage: 'url("public/images/Fondo3.jpg")'
}}
      >
        <h1>Algunos de nuestros eventos anteriores</h1>
     <img src={CV} alt="Curriculum Vitae" />
    </div>
  )
}

