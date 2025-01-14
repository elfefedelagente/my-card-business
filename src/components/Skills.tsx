import styles from "../styles/skills.module.css";
import pythonIcon from "../assets/python-programming-language-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import javaIcon from "../assets/java-programming-language-icon.svg";
import cIcon from "../assets/c-program-icon.svg"
import cSharpIcon from "../assets/c-sharp-programming-language-icon.svg";
import arduinoIcon from "../assets/arduino.svg";
import microchipIcon from "../assets/MCHP.svg";
import javaScriptIcon from "../assets/javascript-programming-language-icon.svg";
import reactIcon from "../assets/react-js-icon.svg";
import djangoIcon from "../assets/django-icon.svg";
import dockerIcon from "../assets/docker-icon.svg";
import nextJsIcon from "../assets/nextjs-icon.svg";
import fastApiIcon from "../assets/fastapi-1.svg";
import nodeJsIcon from "../assets/node-js-icon.svg";
import bootstrapIcon from "../assets/bootstrap-4-icon.svg"

const Skills = () => {

    return(
    <div className={styles.skillsContainer}>
        <div className={styles.leftColumn}>
        {/* LENGUAJES DE PROGRAMACION Y IDEs */}
        <h2>Lenguajes de programación y IDEs</h2>
        {/* Python %80 */}
        <div className={styles.section}>
            <h3>Python</h3>
            <img src={pythonIcon} alt="Python icon" className={styles.icon} />

            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "80%" }}></div>
            </div>
        </div>
        {/* CSS %40 */}
        <div className={styles.section}>
            <h3>CSS</h3>
            <img src={cssIcon} alt="CSS Icon" className={styles.icon} />
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "30%" }}></div>
            </div>
        </div>
        {/* JAVA %68 */}
        <div className={styles.section}>
            <h3>Java</h3>
            <img src={javaIcon} alt="Java Icon" className={styles.icon} />
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "68%" }}></div>
            </div>
        </div>
        {/* C %78 */}
        <div className={styles.section}>
            <h3>C</h3>
            <img src={cIcon} alt="C Icon" className={styles.icon} />
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "78%" }}></div>
            </div>
        </div>
        {/* C# %87 */}
        <div className={styles.section}>
            <h3>C#</h3>
            <img src={cSharpIcon} alt="C Sharp Icon" className={styles.icon} />
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "87%" }}></div>
            </div>
        </div>
        {/* Arduino %30 */}
        <div className={styles.section}>
            <h3>Arduino</h3>
                <img src={arduinoIcon} alt="Arduino Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "30%" }}></div>
                </div>    
        </div>
        {/* Microchip %60 */}
        <div className={styles.section}>
        <h3>MicroChip</h3>
        <img src={microchipIcon} alt="Microchip technology inc Icon" className={styles.icon} />
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "60%" }}></div>
            </div>
        </div>
        
            <div className={styles.section}>
            <h3>Javascript</h3>
            <img src={javaScriptIcon} alt="JavaScript Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "70%" }}></div>
                </div>
            </div>
        </div>
        {/* FRAMEWORKS, LIBRERIAS Y HERRAMIENTAS */}
        <div className={styles.rightColumn}>
            {/* React %80 */}
            <h2>Frameworks y librerias</h2>
            <div className={styles.section}>
                <h3>React</h3>
                <img src={reactIcon} alt="React Icon" className={styles.icon} />
                    <div className={styles.barContainer}>
                        <div className={styles.progressBar} style={{ width: "80%" }}></div>
                    </div>
            </div>
            {/* Django %47 */}
            <div className={styles.section}>
                <h3>Django</h3>
                <img src={djangoIcon} alt="Django Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "47%" }}></div>
                </div>
            </div>
            {/* Docker %76 */}
            <div className={styles.section}>
                <h3>Docker</h3>
                <img src={dockerIcon} alt="Docker Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "76%" }}></div>
                </div>
            </div>
            {/* Next.js %80 */}
            <div className={styles.section}>
                <h3>Next.js</h3>
                <img src={nextJsIcon} alt="Next.js Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "80%" }}></div>
                </div>
            </div>
            {/* FastApi %87 */}
            <div className={styles.section}>
                <h3>FastApi</h3>
                <img src={fastApiIcon} alt="FastApi Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "87%" }}></div>
                </div>
            </div>
            {/* Node.js %77 */}
            <div className={styles.section}>
                <h3>Node.js</h3>
                <img src={nodeJsIcon} alt="Node.js Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "77%" }}></div>
                </div>
            </div>
            {/* Boostrap %60 */}
            <div className={styles.section}>
                <h3>Bootstrap</h3>
                <img src={bootstrapIcon} alt="Bootstrap Icon" className={styles.icon} />
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "60%" }}></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Skills;