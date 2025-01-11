import styles from "../styles/skills.module.css"

const Skills = () => {
    return(
    <div className={styles.skillsContainer}>
        <div className={styles.leftColumn}>
        <h2>Lenguajes de programación y IDEs</h2>
        {/**
         * Python 80%
         */}
        <div className={styles.section}>
            <h3>Python</h3>
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "80%" }}></div>
            </div>
        </div>
        {/**
         * CSS 40%
         */}
        <div className={styles.section}>
            <h3>CSS</h3>
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "30%" }}></div>
            </div>
        </div>
        <div className={styles.section}>
            <h3>Java</h3>
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "68%" }}></div>
            </div>
        </div>

        <div className={styles.section}>
            <h3>C</h3>
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "78%" }}></div>
            </div>
        </div>
        
        <div className={styles.section}>
            <h3>C#</h3>
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "87%" }}></div>
            </div>
        </div>


        <div className={styles.section}>
            <h3>Arduino</h3>
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "30%" }}></div>
                </div>    
        </div>

        <div className={styles.section}>
        <h3>MicroChip</h3>
            <div className={styles.barContainer}>
                <div className={styles.progressBar} style={{ width: "60%" }}></div>
            </div>
        </div>
        
            <div className={styles.section}>
            <h3>Javascript</h3>
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "70%" }}></div>
                </div>
            </div>
        </div>
        {/**
         * FRAMEWORKS, LIBRERIAS Y HERRAMIENTAS
         */}
        <div className={styles.rightColumn}>
            <h2>Frameworks y librerias</h2>
            <div className={styles.section}>
            
                <h3>React</h3>
                    <div className={styles.barContainer}>
                        <div className={styles.progressBar} style={{ width: "80%" }}></div>
                    </div>
            </div>

            <div className={styles.section}>
                <h3>Django</h3>
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "47%" }}></div>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Docker</h3>
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "76%" }}></div>
                </div>
            </div>
            <div className={styles.section}>
                <h3>Next.js</h3>
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "80%" }}></div>
                </div>
            </div>
            
            <div className={styles.section}>
                <h3>FastApi</h3>
                <div className={styles.barContainer}>
                    <div className={styles.progressBar} style={{ width: "87%" }}></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Skills;