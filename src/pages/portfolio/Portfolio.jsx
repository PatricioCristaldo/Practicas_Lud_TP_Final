import React from 'react'
import CV from '../../../public/images/CV.jpg'

export const Portfolio = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "4%"}}>
     <img src={CV} alt="Curriculum Vitae" />
    </div>
  )
}

