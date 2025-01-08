import About from "./components/About";
import style from './styles/menuNav.module.css'
import background from "./styles/background.module.css"
const App = () => {
  return (
    <div>
      
        {/**
         * Menu de navegación
         */}
      <header>
        <div >
            <nav className={style.nav}>
                <ul >
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca-de-mi">Acerca de mi</a></li>
                <li><a href="#educacion">Educación</a></li>
                <li><a href="#mis-proyectos">Mis proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
      </header>      
        <main>
          <section id="inicio"  className={background.cpu} />            
          <section id="acerca-de-mi" >
            <h2>Acerca de mi</h2>    
            <img src="/images/Egresado.png" alt="foto mia" className={background.imagenAboutMe}/>      
            <About/>
          </section>

          <section id="educacion">
            <h2>Educación</h2>        
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
