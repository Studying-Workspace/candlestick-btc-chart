import {useEffect, useRef, useState} from "react";
import styles from "./CountDown.module.css";

export const CountDown = ({seconds, coin}) => {
    const [countDown, setCountDown] = useState(seconds);
    const timerId = useRef();

    useEffect(() => {
        if (timerId.current !== undefined) {
            clearInterval(timerId.current)
            setCountDown(seconds);
        }
        timerId.current = setInterval(() => {
            setCountDown((prev) => (prev === 1 ? seconds : prev - 1));
        }, 1000);
        return () => clearInterval(timerId.current);
    }, [coin]);

    return (
        <div className={styles.container}>
            <span>Until next update: </span>
            <span>{countDown === 60 ? "1m 00s" : `0m ${countDown}s`}</span>
        </div>
    );
};
