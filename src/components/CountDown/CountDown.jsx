import React from 'react'
import styles from "./CountDown.module.css";

const CountDown = ({countDown}) => {
    return (
        <div className={styles.container}>
            <span>Until next update: </span>
            <span>{countDown === 60 ? "1m 00s" : `0m ${countDown}s`}</span>
        </div>
    )
};

export default CountDown;