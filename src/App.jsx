import styles from './App.module.css'
import '@fontsource/outfit'
import '@fontsource/roboto'
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {

    return (<div className={styles.App}>
        <Navbar/>
    </div>)
}

export default App
