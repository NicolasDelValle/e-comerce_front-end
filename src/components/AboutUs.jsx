import React from "react";
import "./aboutUs.css";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function AboutUs() {
  return (
    <>
      <NavigationBar />
      <div className="h-100 about-main-container">
        <div className="about-main-header">
          <div className="about-main-title">
            <h1>SOBRE ESTE PROYECTO</h1>
          </div>
          <div className="about-main-options-div">
            <div className="about-main-option">EL PROYECTO</div>
            <div className="about-main-option">DESARROLLADORES</div>
          </div>
        </div>
        <div className="about-main-proyect">
          <p>
            LOSI SKATEBOARDS es una marca que nace Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Numquam, sequi maxime consequatur
            suscipit autem eos minima reprehenderit. Esse autem fugiat harum
            necessitatibus praesentium dolores, assumenda nostrum quibusdam
            sint.
          </p>
          <p>
            La creación del sitio web de LOSI SKATEBOARDS nace a raíz de la
            participación de uno de sus fundadores, Carlos García Arocena, en el
            Coding Bootcamp de Hack Academy en la edición comenzada en Enero de
            2022.
          </p>
          <p>
            El proyecto final del curso consiste en la creación de un sitio web
            de e-commerce, donde los estudiantes tienen la posibilidad de
            utilizar todos los conocimientos obtenidos durante la cursada,
            aplicándolos en la creación de una web que cuente con las
            características y funcionalidades que se esperan encontrar en
            cualquiera de las que visitamos a diario para realizar compras o ver
            productos.
          </p>
          <p>
            El equipo de estudiantes debió organizarse para cumplir con los
            features estipulados con los que debe contar este trabajo para el
            que se cuenta con tres semanas para su desarrollo, por lo que la
            comunicación, el orden y el trabajo en equipo fueron factores
            fundamentales.
          </p>
          <p>
            Para nuestro proyecto decidimos basarnos en el sitio web de Culto
            Café, tomando su diseño minimalista como la raíz de una página web
            simple y fácil de usar pero atractiva y con detalles que destaquen,
            propios de la identidad de la marca.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
{
  /* <div className="about-main-dev">
      <div className="about-main-dev-card">
        <div className="about-main-dev-avatar">
          <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Dummy" />
        </div>
        <div className="about-main-dev-info">
          <h3>CARLOS GARCÍA AROCENA</h3>
          <h6>Front End</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam fuga rerum possimus reiciendis vitae perferendis eius nulla eos hic est, animi saepe dolor maiores. Consectetur exercitationem facere inventore atque.</p>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-linkedin dev-icon"></i>
            <p>/carlosgarciaarocena</p>
          </div>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-github dev-icon"></i>
            <p>/carlosgarcia25</p>
          </div>
        </div>
      </div>
      <div className="about-main-dev-card">
        <div className="about-main-dev-avatar">
          <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Dummy" />
        </div>
        <div className="about-main-dev-info">
          <h3>NICOLAS DEL VALLE</h3>
          <h6>Back End</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam fuga rerum possimus reiciendis vitae perferendis eius nulla eos hic est, animi saepe dolor maiores. Consectetur exercitationem facere inventore atque.</p>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-linkedin dev-icon"></i>
            <p>/nicoDelValle</p>
          </div>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-github dev-icon"></i>
            <p>/DelValleNicolasAdrian</p>
          </div>
        </div>
      </div>
      <div className="about-main-dev-card">
        <div className="about-main-dev-avatar">
          <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Dummy" />
        </div>
        <div className="about-main-dev-info">
          <h3>LUIS ZUNINO</h3>
          <h6>Front End</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam fuga rerum possimus reiciendis vitae perferendis eius nulla eos hic est, animi saepe dolor maiores. Consectetur exercitationem facere inventore atque.</p>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-linkedin dev-icon"></i>
            <p>/LuisZunino</p>
          </div>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-github dev-icon"></i>
            <p>/LuisitoZuninhoPernambucano</p>
          </div>
        </div>
      </div>
      <div className="about-main-dev-card">
        <div className="about-main-dev-avatar">
          <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Dummy" />
        </div>
        <div className="about-main-dev-info">
          <h3>MAURO RAVIOLO</h3>
          <h6>Back End</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam fuga rerum possimus reiciendis vitae perferendis eius nulla eos hic est, animi saepe dolor maiores. Consectetur exercitationem facere inventore atque.</p>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-linkedin dev-icon"></i>
            <p>/mauroRaviolo</p>
          </div>
          <div className="about-main-dev-icon-div">
            <i className="bi bi-github dev-icon"></i>
            <p>/raviolo</p>
          </div>
        </div>
      </div>
    </div> */
}
