import React from 'react'
import {getImageUrl} from "../../utils.js";
import styles from './About.module.css'

const About = () => {
    return (<section className={styles.container} id="about">
        <h2 className={styles.title}>
            About Me
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with the laptop"
                 className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Front end developer</h3>
                        <p>I'm a front end developer</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Back end developer</h3>
                        <p>I'm a back end developer</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>)
}
export default About
