import {useCallback, useEffect, useState} from "react";
import {useChartContext} from "../../context/ChartContext";
import DarkLightModeButton from './DarkLightModeButton'

const DarkLightModeButtonContainer = () => {
    const {setIsDark} = useChartContext();

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
        <DarkLightModeButton
            theme={theme}
            setTheme={setTheme}
            options={options}
        />
    );
};

export default DarkLightModeButtonContainer;