import style from '../styles/about.module.css';
import { FaUniversity, FaCode, FaHiking, FaMusic} from 'react-icons/fa';

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <ul className={style.interestsList}>
        <li>
          <FaUniversity />
          <div>
            <strong>Estudios:</strong>Analista programador universitario / Licenciatura en Sistemas
            <br />
            <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>
          </div>
        </li>
        <li>
          <FaCode />
          <div>
            <strong>Intereses:</strong> Desarrollo web, inteligencia artificial y tecnología.
          </div>
        </li>
        <li>
          <FaHiking />
          <div>
            <strong>Hobbies:</strong> Senderismo, lectura y videojuegos.
          </div>
        </li>
        <li>
          <FaMusic />
          <div>
            <strong>Música Favorita:</strong> Rock, instrumental y electrónica.
          </div>
        </li>
      </ul>
      <p className={style.aboutParagraph}>
        ¡Hola! Soy Cabaña Federico, estudiante de Analista Programador Universitario y de la Licenciatura en Sistemas en la{' '}
        <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>. El transcurso en la carrera y mi interés por la
        tecnología y el desarrollo de software me ha llevado a explorar diversas áreas de programación y desarrollo de proyectos.
        Durante mi formación, tuve la oportunidad de trabajar en un proyecto destacado: <strong>una red de monitoreo ambiental</strong>{' '}
        para el río Chubut, desarrollado como parte de una materia de nivel superior llamada Desarrollo de Software.
        <br />
        He trabajado con varios lenguajes de programación, como Java, Python, C y C#, así como frameworks y herramientas como FastAPI,
        Django y React. Estos conocimientos me han ayudado a construir soluciones innovadoras y a comprender la importancia de una buena
        documentación y un código limpio.
        <br />
        Estoy en constante aprendizaje y busco crecer profesionalmente, combinando mi pasión por la tecnología con mi compromiso por
        aportar valor a cada proyecto en el que participo.
      </p>
    </div>
    );
};

const AboutSection = () => {
    return (
      <div>  
        <img src="images/perfil_git_page.jpg" alt="foto mía" className={style.imagenAboutMe} />
        <About />
      </div>
    );
  };

export default AboutSection; 