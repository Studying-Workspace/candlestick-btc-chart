import { useRef, useState, useEffect } from "react";
import styles from "./CountDown.module.css";
export const CountDown = ({ seconds }) => {
  const [countDown, setCountDown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => (prev === 1 ? seconds : prev - 1));
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  return (
    <div className={styles.container}>
      <span>Until next update: </span>
      <span>{countDown === 60 ? "1m 00s" : `0m ${countDown}s`}</span>
    </div>
  );
};
