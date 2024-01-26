import React from 'react';
import styles from "./DarkLightModeButton.module.css";

const DarkLightModeButton = ({options, setTheme, theme}) => {
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
};

export default DarkLightModeButton;
