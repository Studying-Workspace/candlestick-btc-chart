import React from 'react';
import styles from "./DarkLightModeButton.module.css";

const DarkLightModeButton = ({options, setTheme, theme}) => {
    return (
        <div className={styles.container}>
            {
                options.map((op, index) => (
                    <button
                        onClick={() => setTheme(op.type)}
                        className={styles.btnFakeDarkMode}
                        style={{color: `${op.type === theme ? "#149eca" : ""}`}}
                        key={index}
                    >
                        <ion-icon name={op.icon}></ion-icon>
                    </button>
                ))
            }
        </div>
    );
};

export default DarkLightModeButton;
