import { ArrowUpRightIcon } from "raster-react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="section_page">
      <div className="experience_window">
        <h2 className="job_title">
          Ataway
          <a href="https://www.ataway.com/es-ar/" target="_blank">
            <ArrowUpRightIcon
              size={30}
              color="#000"
              strokeWidth={0.25}
              radius={1}
            />
          </a>
        </h2>
        <h4>Desarrollador PeopleSoft</h4>
        <p>Consultora</p>
        <ul className="stack">
          <li>PeopleSoft</li>
          <li>Application designer</li>
          <li>Oracle SQL</li>
         
        </ul>
        <p className="job_time">Posición actual</p>
      </div>
      <div className="experience_window">
        <h2 className="job_title">
          Ututo
          <a href="https://ututo.ar/" target="_blank">
            <ArrowUpRightIcon
              size={30}
              color="#000"
              strokeWidth={0.25}
              radius={1}
            />
          </a>
        </h2>
        <h4>Desarrollador Frontend</h4>
        <p>Proyecto Open source</p>
        <ul className="stack">
          <li>React</li>
          <li>Next js</li>
          <li>Tailwind</li>
          <li>Framer motion</li>
        </ul>
        <p className="job_time">Ene - Jun 2024</p>
      </div>
     
    </section>
  );
};

export default Experience;
