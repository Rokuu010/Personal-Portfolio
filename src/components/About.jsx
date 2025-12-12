// src/components/About.jsx

// 1. Import React, your styles, the background, and icons
import styles from './About.module.css';
import BlueprintBackground from './BlueprintBackground';
import {
    FaPython, FaJava, FaJsSquare, FaReact, FaDatabase, FaGitAlt,
    FaGithub, FaHtml5, FaCss3Alt, FaVial, FaChartBar, FaCode, FaTerminal
} from 'react-icons/fa';
import {
    SiC, SiCplusplus, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas,
    SiNumpy, SiSelenium, SiStreamlit, SiIntellijidea, SiLua, SiAutodesk
} from 'react-icons/si';


// This is a small, reusable component for your skills list.
const SkillItem = ({ Icon, color, name }) => (
    <span className={styles.skillItem}>
        <Icon color={color} size={20} /> {name}
    </span>
);

function About() {
    // All style objects and responsive logic have been removed from here.
    // It's all handled by the CSS module now.

    return (
        <section className={styles.section}>
            {/* Background Component */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <BlueprintBackground />
            </div>

            <div className={styles.container}>
                {/* Column 1: Bio, Education, Experience */}
                <div className={styles.textColumn}>
                    <div className={styles.imageContainer}>
                        <img
                            src="/Headshot.jpg"
                            alt="Profile headshot"
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.heading}>About Me</h2>

                    <p className={styles.paragraph}>
                        I'm a second-year Computer Science student with a growing passion for Machine Learning and AI. Outside of my studies, I'm a boxer, a sport that has taught me discipline and focus. I apply that same focus to my code, building an end-to-end application that solves complex problems from the prediction logic in the back-end to the user experience on the front-end.
                    </p>

                    <h3 className={styles.subheading}>Education</h3>
                    <p className={styles.paragraph} style={{ marginBottom: '2rem' }}>
                        <strong>University of Leicester</strong> — BSc Computer Science
                        <br />
                        <span style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Sept 2024 — Present (expected 2028)</span>
                    </p>

                    <h3 className={styles.subheading}>Experience Highlights</h3>
                    <ul className={styles.paragraph} style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                        <li>
                            Tested and debugged automotive software in <strong>Python</strong> and <strong>Java</strong> during my internship.
                        </li>
                        <li>
                            Designed and deployed this portfolio project with <strong>React</strong> to effectively showcase my technical projects.
                        </li>
                        <li>
                            Built a <strong>stacked ML pipeline</strong> for a Boxing Match Predictor, achieving <strong>87% accuracy</strong>.
                        </li>
                    </ul>

                    <div className={styles.buttonContainer}>
                        <a
                            href="https://github.com/Rokuu010/Boxing-Match-Predictor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryButton}
                        >
                            View Project on GitHub
                        </a>
                        <a href="#contact" className={styles.button}>
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Column 2: Skills Card */}
                <div className={styles.skillsCard}>
                    <div>
                        <h3 className={styles.subheading}>Languages</h3>
                        <div className={styles.list}>
                            <SkillItem Icon={FaPython} color="#FFD700" name="Python" />
                            <SkillItem Icon={FaJava} color="#f89820" name="Java" />
                            <SkillItem Icon={FaJsSquare} color="#f7df1e" name="JavaScript" />
                            <SkillItem Icon={SiC} color="#A8B9CC" name="C" />
                            <SkillItem Icon={FaHtml5} color="#E34F26" name="HTML" />
                            <SkillItem Icon={FaCss3Alt} color="#1572B6" name="CSS" />
                            <SkillItem Icon={SiLua} color="#2C2D72" name="Lua" />
                            <SkillItem Icon={FaTerminal} color="#d1d5db" name="Bash/Shell" />
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.subheading}>ML/AI & Frameworks</h3>
                        <div className={styles.list}>
                            <SkillItem Icon={FaReact} color="#61dafb" name="React" />
                            <SkillItem Icon={SiScikitlearn} color="#F7931E" name="Scikit-learn" />
                            <SkillItem Icon={SiPytorch} color="#EE4C2C" name="PyTorch" />
                            <SkillItem Icon={SiTensorflow} color="#FF6F00" name="TensorFlow" />
                            <SkillItem Icon={SiStreamlit} color="#FF4B4B" name="Streamlit" />
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.subheading}>Databases & Libraries</h3>
                        <div className={styles.list}>
                            <SkillItem Icon={FaDatabase} color="#00BFFF" name="SQL" />
                            <SkillItem Icon={SiPandas} color="#150458" name="Pandas" />
                            <SkillItem Icon={SiNumpy} color="#013243" name="NumPy" />
                            <SkillItem Icon={FaChartBar} color="#004D80" name="Matplotlib" />
                            <SkillItem Icon={SiSelenium} color="#43B02A" name="Selenium" />
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.subheading}>Tools</h3>
                        <div className={styles.list}>
                            <SkillItem Icon={FaGitAlt} color="#F1502F" name="Git" />
                            <SkillItem Icon={FaGithub} color="#d1d5db" name="GitHub" />
                            <SkillItem Icon={FaCode} color="#007ACC" name="VS Code" />
                            <SkillItem Icon={SiIntellijidea} color="#000000" name="IntelliJ IDEA" />
                            <SkillItem Icon={FaVial} color="#B50101" name="JUnit" />
                            <SkillItem Icon={SiAutodesk} color="#0696D7" name="CAD" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

