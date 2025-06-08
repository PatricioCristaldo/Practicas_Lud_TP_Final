import './Schedule.css';

export const Schedule = () => {
  const schedule = [
    {
      day: 'Lunes',
      events: [
        { time: '12:00 - 12:30', title: 'Inauguración oficial y bienvenida' },
        { time: '12:30 - 14:00', title: 'Zona VR: juegos y simuladores' },
        { time: '14:00 - 16:00', title: 'Muestra de prototipos de estudiantes' },
        { time: '16:00 - 17:30', title: 'Mentoría: Introducción a Scratch (nivel inicial)' },
        { time: '17:30 - 18:00', title: 'Concurso de adivinanzas sobre videojuegos' },
      ],
    },
    {
      day: 'Martes',
      events: [
        { time: '12:00 - 13:30', title: 'Mentoría: Uso de GDevelop (nivel inicial)' },
        { time: '13:30 - 15:00', title: 'Curso práctico de modelado 3D (Blender)' },
        { time: '15:00 - 16:30', title: 'Escape Room virtual cooperativo' },
        { time: '16:30 - 18:00', title: 'Zona de juegos de rol y mesa' },
      ],
    },
    {
      day: 'Miércoles',
      events: [
        { time: '12:00 - 14:00', title: 'Curso de impresión 3D aplicado a videojuegos' },
        { time: '14:00 - 15:30', title: 'Competencia en Beat Saber' },
        { time: '15:30 - 16:30', title: 'Mentoría avanzada de Scratch' },
        { time: '16:30 - 18:00', title: 'Demostración de demos y juegos por lanzarse' },
      ],
    },
    {
      day: 'Jueves',
      events: [
        { time: '12:00 - 13:30', title: 'Charla sobre el Game Design de Shigeru Miyamoto' },
        { time: '13:30 - 15:00', title: 'Inicio de la Mini Game Jam (día 1)' },
        { time: '15:00 - 16:30', title: 'Zona libre de juegos de mesa y VR' },
        { time: '16:30 - 18:00', title: 'Speech libre de proyectos en desarrollo' },
      ],
    },
    {
      day: 'Viernes',
      events: [
        { time: '12:00 - 13:30', title: 'Charla de Gabe Newell sobre negocios en videojuegos' },
        { time: '13:30 - 15:00', title: 'Mini Game Jam (día 2)' },
        { time: '15:00 - 16:30', title: 'Prueba de demos (exposición ampliada)' },
        { time: '16:30 - 18:00', title: 'Trivia gamer: concurso de preguntas' },
      ],
    },
    {
      day: 'Sábado',
      events: [
        { time: '12:00 - 13:00', title: 'Charla de Hideo Kojima sobre cinematografía en videojuegos' },
        { time: '13:00 - 14:00', title: 'Charla de Robert/Toby Fox sobre videojuegos indie' },
        { time: '14:00 - 16:00', title: 'Zona de rol / actividades lúdicas' },
        { time: '16:00 - 18:00', title: 'Cierre y entrega Mini Game Jam (día 3)' },
      ],
    },
    {
      day: 'Domingo',
      events: [
        { time: '12:00 - 13:30', title: 'Visita y charla de equipo profesional de Esports' },
        { time: '13:30 - 15:00', title: 'Competencia de Esports vs el equipo profesional (con premios)' },
        { time: '15:00 - 16:30', title: 'Presentación de los juegos de la Mini Game Jam' },
        { time: '16:30 - 17:30', title: 'Cierre del evento + entrega de premios y menciones' },
        { time: '17:30 - 18:00', title: 'Foto grupal y despedida' },
      ],
    },
  ];

  return (
    <section className="schedule">
    <section className="internal-schedule">
      <h2>Cronograma Semanal</h2>
      {schedule.map((day, index) => (
        <div key={index} className="day-block">
          <h3>{day.day}</h3>
          <ul>
            {day.events.map((event, i) => (
              <li key={i}>
                <strong>{event.time}:</strong> {event.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </section>
  );
};
