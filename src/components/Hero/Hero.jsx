import React from 'react'
import {getImageUrl} from "../../utils.js";
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Hai</h1>
                <p className={styles.description}>I'm a full-stack web developer using React (as front-end) and Java (as
                    back-end)</p>
                <a href="mailto: nguyenhuyhai926@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}
export default Hero
