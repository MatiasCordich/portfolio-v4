import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="section_page">
      <div className="home_window">
        <h3>Hola!</h3>
        <h2>Me llamo Matias</h2>
        <p>Desarrollador PeopleSoft</p>
      </div>
      <div className="home_window">
        <h2>Sobre Mi</h2>
        <p className="about_text">Mis primeros pasos en el mundo de la tecnología fueron en el desarrollo web, especializándome en el frontend, donde pude combinar mis dos pasiones, el diseño y la computación.</p>
        <p className="about_text">Hoy, me desempeño como trainee en el desarrollo de Oracle PeopleSoft, con el objetivo de adquirir nuevos conocimientos y habilidades que me permitan avanzar en mi carrera profesional y afrontar desafíos futuros en el ámbito de los sistemas empresariales.</p>
      </div>
    </section>
  );
};

export default Home;
