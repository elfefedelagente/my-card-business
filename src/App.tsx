import AboutSection from "./components/About";
import Skills from "./components/Skills"
import ContactIcon from "./components/ContactIcon";
import Portfolio from "./components/Portfolio"
import NavBar from "./components/NavBar";
import Contact from "./components/Contact"
import styleInit from "./styles/init.module.css";
import stylesSections from "./styles/sections.module.css";

const App = () => {

  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca-de-mi", label: "Acerca de mí" },
    { id: "habilidades", label: "Habilidades" },
    { id: "mis-proyectos", label: "Mis proyectos" },
    { id: "contacto", label: "Contacto" }
  ];

  return (
    <div>  
      {/*  Menu de navegación */}
      <header >                                     
        <NavBar sections={sections} /> 
      </header>      
      <main  className={stylesSections.main}>                

        {/* SECCIÓN DE INICIO */}                    
        <section id="inicio" className={`${stylesSections.section} ${stylesSections.init} ${stylesSections.backgroundAnimated}`}>  
            <div className={styleInit.container}>     

              <h1 className={styleInit.title}> Soy Cabaña Federico </h1>                             
              
              <p className={styleInit.description}>
                Me gusta la tecnología y como crece el día a día, hasta impresiona saber como puede cambiar la vida de las personas haciendo todo mas facil y a la vez más dificil para otras.
                <br />
                Soy estudiante de la <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>, donde curso las carreras de <strong>Analista Programador Universitario y Licenciatura en Sistemas</strong>.
                A lo largo de mi formación, he adquirido experiencia en diversas tecnologías como <strong>Arduino, Microchip, C, C#, Java, Python, React, y Django</strong>, además de trabajar con lenguajes de bajo nivel como Assembler. También he aprendido a interpretar y crear documentación técnica detallada, como diagramas de secuencia de estados de objetos, y a aplicar <strong>metodologías ágiles en el desarrollo de proyectos</strong>, lo que me permite adaptarme a equipos de trabajo dinámicos y enfocados en la entrega incremental de valor. 
                <br />
                Durante mi último año de Analista, participé un proyecto real llamado Red de Monitoreo Ambiental, en el cual colaboré con stakeholders reales para desarrollar un servidor web capaz de mostrar datos en tiempo real sobre el caudal y la altura de un río, entre otros parámetros. Esta experiencia fortaleció mis habilidades en desarrollo de software y trabajo en equipo, enfrentándome a desafíos técnicos y de comunicación en un entorno profesional.
              </p>
              <div className={styleInit.iconsContainer}>
                <ContactIcon/>
              </div>
              <a
                href="/CV-Cabaña-Federico.pdf"
                className={styleInit.downloadButton}
                download="Cabaña_Federico_CV.pdf"
               >
              Descargar CV
              </a>
            </div>
        </section>

        {/* SECCIÓN ACERCA DE MI */}
        <section id="acerca-de-mi" className={`${stylesSections.section} ${stylesSections.aboutMe}`}>
          <AboutSection />
        </section>
        
        {/* SECCIÓN HABLIDADES */}
        <section id="habilidades" className={`${stylesSections.section} ${stylesSections.skills}`}>
          <Skills/>
        </section>

        {/* SECCIÓN MIS PROYECTOS */}
        <section id="mis-proyectos" className={`${stylesSections.section} ${stylesSections.myProyect}`}>  
          <Portfolio/> 
        </section>
         
         {/* SECCIÓN CONTACTO */}
        <section id="contacto" className={`${stylesSections.section} ${stylesSections.contact}`}>        
          <Contact/>
        </section>
      </main>      
      <footer >        
        {/**
         
        <p>&copy; 2025 Cabaña Federico. Todos los derechos reservados.</p>
         */}
      </footer>
    </div>
  );
};

export default App;
