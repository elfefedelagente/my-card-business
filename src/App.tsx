import AboutSection from "./components/About";
import Skills from "./components/Skills"
import ContactIcon from "./components/ContactIcon";
import Portfolio from "./components/Portfolio"
import NavBar from "./components/NavBar";
import Contact from "./components/Contact"
import style from './styles/menuNav.module.css'
import styleInit from "./styles/init.module.css";
import styleSkill from "./styles/skills.module.css"
import { motion } from 'framer-motion'

const BackgroundAnimation = () => {
  return (
    <motion.div
      //className={styleInit.background}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};


const App = () => {
  return (
    <div>  
      <header>                                     
          <NavBar/>  {/*  Menu de navegación */}
      </header>      
        <main className={styleInit.background}>                                    
          <section id="inicio" className={styleInit.inicio} >  {/* SECCIÓN DE INICIO */}
            <BackgroundAnimation />
            <div className={styleInit.container}>              
              <motion.h1 
              className={styleInit.title}
              color="#fff"              
              > 
                Soy Cabaña Federico
              </motion.h1>                             
              <p className={styleInit.description}>
                Me gusta la tecnología y como crece el día a día, hasta impresiona saber como puede cambiar la vida de las personas haciendo todo mas facil y a la vez más dificil para otras.
                <br />
                Soy estudiante de la <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>, donde curso las carreras de <strong>Analista Programador Universitario y Licenciatura en Sistemas</strong>.
                A lo largo de mi formación, he adquirido experiencia en diversas tecnologías como <strong>Arduino, Microchip, C, C#, Java, Python, React, y Django</strong>, además de trabajar con lenguajes de bajo nivel como Assembler. También he aprendido a interpretar y crear documentación técnica detallada, como diagramas de secuencia de estados de objetos, y a aplicar <strong>metodologías ágiles en el desarrollo de proyectos</strong>, lo que me permite adaptarme a equipos de trabajo dinámicos y enfocados en la entrega incremental de valor. 
                <br />
                Durante mi último año de Analista, participé un proyecto real llamado Red de Monitoreo Ambiental, en el cual colaboré con stakeholders para desarrollar un servidor web capaz de mostrar datos en tiempo real sobre el caudal y la altura de un río, entre otros parámetros. Esta experiencia fortaleció mis habilidades en desarrollo de software y trabajo en equipo, enfrentándome a desafíos técnicos y de comunicación en un entorno profesional.
              </p>
              <div className={styleInit.iconsContainer}>
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
            <h1 className={styleSkill.title}>Habilidades</h1>
            <Skills/>
          </section>
            
          <section id="mis-proyectos">
            <h2>Mis proyectos</h2>         
            <Portfolio/> 
          </section>

          <section id="contacto">
            <h2>Contacto</h2>          
            <Contact/>
          </section>
        </main>      
      <footer>
        <p>© 2025 Business Card App</p>
      </footer>
    </div>
  );
};

export default App;
