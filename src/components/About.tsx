import style from '../styles/about.module.css';
import { FaUniversity, FaCode, FaHiking, FaMusic, FaMapMarkedAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.3, 
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`${style.aboutContainer} ${inView ? style.visible : ''}`}
        >
            <div className={style.interestsContainer}>
                <ul className={style.interestsList}>
                    <li>
                        <FaUniversity style={{ fontSize: "2rem" }}/>
                        <div>
                            <strong>Estudios:</strong> Universidad Nacional de la Patagonia San Juan Bosco
                        </div>
                    </li>
                    <li>
                        <FaCode style={{ fontSize: "2rem" }}/>
                        <div>
                            <strong>Intereses:</strong> Desarrollo web, sistemas embebidos y tecnología.
                        </div>
                    </li>
                    <li>
                        <FaHiking style={{ fontSize: "2rem" }}/>
                        <div>
                            <strong>Hobbies:</strong> Futbol, Peliculas, Videojuegos, Coding.
                        </div>
                    </li>
                    <li>
                        <FaMusic style={{ fontSize: "2rem" }}/>
                        <div>
                            <strong>Música Favorita:</strong> Rock, cumbia, instrumental y electrónica.
                        </div>
                    </li>
                    <li>
                        <FaMapMarkedAlt style={{ fontSize: "2rem" }}/>
                        <div>
                            <strong>Ubicación:</strong> Trelew, Chubut, Argentina
                        </div>
                    </li>
                </ul>
            </div>
            <motion.div
            className={style.frameBox}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={style.mainContent}>
                <p className={style.aboutParagraph}>
                    Mi pasión por la tecnología se centra principalmente en los sistemas embebidos, 
                    solamente realice algunos proyectos como un semaforo hecho en arduino cual lo lleve a una maqueta
                    y software hecho con microchip technology inc para implementar en la materia de Arquitectura de computadoras un prototipo de foto multa.
                    <br />
                    En la universidad estoy profundizando en el desarrollo de sistemas de información especialmente alojados en servidores web. Me interesa aprender
                    sobre nuevas tecnologías y mantenerme actualizado en el campo.
                    <br />
                    Además, me gusta tocar la guitarra, jugar al futbol,
                    disfrutar de la lectura. En cuanto a mi rutina, prefiero hacer ejercicio
                    de forma individual, lo que me ayuda a mantenerme enfocado y equilibrado con mi ser.
                </p>
            </div>
        </motion.div>
        </div>
    );
};

const AboutSection = () => {
    return (
        <div className={style.aboutContainer}>
            <img
                src="/my-card-business/images/perfil_git_page.jpg"
                alt="foto mía"
                className={style.imagenAboutMe}
            />
            <About />
        </div>
    );
};
export default AboutSection;
