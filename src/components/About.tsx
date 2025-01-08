import style from '../styles/about.module.css';

const About = () => {
    return (
        <div > 
            <h1 className={style.title}> Soy Cabaña Federico </h1>
            <p > Analista programador universitario / Licenciatura en sistema </p>
            <br />
            <p>¡Hola! Soy Cabaña Federico, estudiante de Analista Programador Universitario y de la Licenciatura en Sistemas en la <strong>Universidad Nacional de la Patagonia San Juan Bosco</strong>. 
            El transcurso en la carrera y mi interes por la tecnología y el desarrollo de software me ha llevado a explorar diversas áreas de programación y desarrollo de proyectos.
            Durante mi formación, tuve la oportunidad de trabajar en un proyecto destacado: <strong>una red de monitoreo ambiental</strong> para el río Chubut, desarrollado como parte de una materia de nivel superior llamada Desarrollo de Software. 
            <br />            
            He trabajado con varios lenguajes de programación, como Java, Python, C, y C#, así como frameworks y herramientas como FastAPI, Django, y React. Estos conocimientos me han ayudado a construir soluciones innovadoras y a comprender la importancia de una buena documentación y un código limpio.

            Estoy en constante aprendizaje y busco crecer profesionalmente, combinando mi pasión por la tecnología con mi compromiso por aportar valor a cada proyecto en el que participo.</p>
        </div>
    );
};

export default About; 