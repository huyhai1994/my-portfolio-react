import React from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from "../../utils.js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (<nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img
                className={styles.menuBtn}
                src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
                onClick={() => setMenuOpen(!menuOpen)}
                alt="Logo"/>
            <ul className={`${styles.menuItems}
                            ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>)
}
export default Navbar
