import {useEffect} from "react";
import styles from './DarkLightModeButton.module.css'

const DarkLightModeButton = ({isDark, setIsDark}) => {
    useEffect(function () {
        if (isDark) {
            document.querySelector("body").setAttribute("data-theme", "dark");
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    }, [isDark])
    return (
        <button
            onClick={() => setIsDark((isFakeDark) => !isFakeDark)}
            className={styles.btnFakeDarkMode}
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
}

export default DarkLightModeButton;