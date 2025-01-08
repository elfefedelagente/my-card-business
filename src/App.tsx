
import React from "react";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import CardBusiness from "./components/Body";
import style from './styles/menuNav.module.css'

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
      <body>
        <main>
          <section id="inicio">
            <h2>Inicio</h2>
            
          </section>

          <section id="acerca-de-mi">
            <h2>Acerca de mi</h2>          
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
      </body>     
      <footer>
        <p>© 2025 Business Card App</p>
      </footer>
    </div>
  );
};

export default App;
