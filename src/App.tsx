import AboutSection from "./components/About";
import Skills from "./components/Skills"
import ContactIcon from "./components/ContactIcon";
import style from './styles/menuNav.module.css'
import background from "./styles/background.module.css";

import { Link } from 'react-scroll';

const App = () => {
  return (
    <div>  
      <header>
        {/**
         * Menu de navegación
         */}
        <div >
            <nav className={style.nav}>
              <ul >
                <li>
                  <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
                </li>
                <li>
                  <Link to="acerca-de-mi" smooth={true} duration={500}>Acerca de mí</Link>                  
                </li>
                <li>
                  <Link to="habilidades" smooth={true} duration={500}>Habilidades</Link>
                  </li>
                <li>
                  <Link to="mis-proyectos" smooth={true} duration={500}>Mis proyectos</Link>
                </li>
                <li>
                  <Link to="contacto" smooth={true} duration={500}>Contacto</Link>
                </li>
              </ul>
            </nav>
        </div>
      </header>      
        <main className={style.main}>
          {/**
           * SECCIÓN DE INICIO
           */}
          <section id="inicio" >
            <div className={background.container}>
              <h1 className={style.title}> Soy Cabaña Federico </h1>
              <p className={background.description}>
                Me gusta la tecnología y como crece el día a día, hasta impresiona saber como puede cambiar la vida de las personas haciendo todo mas facil y a la vez más dificil para otras.
                <br />
                Soy estudiante de la <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>, donde curso las carreras de <strong>Analista Programador Universitario y Licenciatura en Sistemas</strong>.
                A lo largo de mi formación, he adquirido experiencia en diversas tecnologías como <strong>Arduino, Microchip, C, C#, Java, Python, React, y Django</strong>, además de trabajar con lenguajes de bajo nivel como Assembler. También he aprendido a interpretar y crear documentación técnica detallada, como diagramas de secuencia de estados de objetos, y a aplicar <strong>metodologías ágiles en el desarrollo de proyectos</strong>, lo que me permite adaptarme a equipos de trabajo dinámicos y enfocados en la entrega incremental de valor. 
                <br />
                Durante mi último año de Analista, participé un proyecto real llamado Red de Monitoreo Ambiental, en el cual colaboré con stakeholders para desarrollar un servidor web capaz de mostrar datos en tiempo real sobre el caudal y la altura de un río, entre otros parámetros. Esta experiencia fortaleció mis habilidades en desarrollo de software y trabajo en equipo, enfrentándome a desafíos técnicos y de comunicación en un entorno profesional.
              </p>
              <div className={background.iconsContainer}>
                <ContactIcon/>
              </div>
            </div>
          </section>
          {/**
           * SECCIÓN ACERCA DE MI
           */}
          <section id="acerca-de-mi">
            <h2>Acerca de mí</h2>
            <AboutSection />
          </section>
            {/**
           * SECCIÓN HABLIDADES
           */}
          <section id="habilidades">
            <h1>Habilidades</h1>
            <Skills/>
          </section>
            
          <section id="mis-proyectos">
            <h2>Mis proyectos</h2>          
          </section>

          <section id="contacto">
            <h2>Contacto</h2>          
          </section>
        </main>      
      <footer>
        <p>© 2025 Business Card App</p>
      </footer>
    </div>
  );
};

export default App;
