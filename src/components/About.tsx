import style from '../styles/about.module.css';
import { FaUniversity, FaCode, FaHiking, FaMusic} from 'react-icons/fa';

const About = () => {
    return (
    <div className={style.aboutContainer}>
        <div className={style.interestsContainer}>
            <ul className={style.interestsList}>
                <li>
                <FaUniversity />
                <div>
                    <strong>Estudios: </strong>Analista programador universitario / Licenciatura en Sistemas
                    <br />
                    <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>
                </div>
                </li>
                <li>
                <FaCode />
                <div>
                    <strong>Intereses:</strong> Desarrollo web, sistemas embebidos y tecnología.
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
        </div>
        <div className={style.mainContent}>
            <p className={style.aboutParagraph}>
            Mi pasión por la tecnología se centra principalmente en los sistemas embebidos, 
            aunque en la universidad estoy profundizando en el desarrollo de sistemas de información. Me interesa aprender sobre nuevas tecnologías y mantenerme actualizado en el campo. 
            Además, me gusta tocar la guitarra, disfrutar de la lectura y estar rodeado de animales. En cuanto a mi rutina, prefiero hacer ejercicio de forma individual,
            lo que me ayuda a mantenerme enfocado y equilibrado.
            </p>        
        </div>
    </div>
    );
};

const AboutSection = () => {
    return (
      <div>  
        <img src="/my-card-business/images/perfil_git_page.jpg" alt="foto mía" className={style.imagenAboutMe} />
        <About />
      </div>
    );
  };

export default AboutSection; 