import styles from './App.module.css'
import '@fontsource/outfit'
import '@fontsource/roboto'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";

function App() {

    return (<div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
    </div>)
}

export default App
