import {useCallback, useEffect, useState} from "react";
import styles from './DarkLightModeButton.module.css'
import { useChart } from "../../context/ChartContext";

const DarkLightModeButton = () => {
    const {setIsDark} = useChart() ; 
    
    const options = [
        {
            type: "light",
            icon: "sunny"
        },
        {
            type: "dark",
            icon: "moon"
        },
        {
            type: "system",
            icon: "desktop-outline"
        }
    ];

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                setIsDark(false);
                document.querySelector("body").setAttribute("data-theme", "dark");
            } else {
                setIsDark(true);
                document.querySelector("body").setAttribute("data-theme", "light");
            }
        }
    })

    const onSystemTheme = useCallback(() => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            setIsDark(false);
            document.querySelector("body").setAttribute("data-theme", "dark");
        } else {
            setIsDark(true);
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    }, [darkQuery.matches, setIsDark])

    useEffect(function () {
        switch (theme) {
            case "dark":
                setIsDark(false);
                localStorage.setItem("theme", "dark");
                document.querySelector("body").setAttribute("data-theme", "dark");
                break;
            case "light":
                setIsDark(true);
                localStorage.setItem("theme", "light");
                document.querySelector("body").setAttribute("data-theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                onSystemTheme();
                break;

        }
    }, [onSystemTheme, setIsDark, theme]);


    return (
        <div className={styles.container}>
            {
                options.map((op) => (
                    <button
                        onClick={() => setTheme(op.type)}
                        className={styles.btnFakeDarkMode}
                        style={{color: `${op.type === theme ? "#149eca" : ""}`}}
                    >
                        <ion-icon name={op.icon}></ion-icon>
                    </button>
                ))
            }
        </div>
    );
}

export default DarkLightModeButton;