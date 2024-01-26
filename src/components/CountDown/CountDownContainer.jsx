import {useEffect, useRef, useState} from "react";
import {useChartContext} from "../../context/ChartContext";
import {CountDown} from '.'
export const CountDownContainer = ({seconds}) => {
    const {coin, timeUnit} = useChartContext();
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
    }, [coin, seconds, timeUnit]);

    return (
        <CountDown countDown={countDown} />
    );
};
export default CountDownContainer;