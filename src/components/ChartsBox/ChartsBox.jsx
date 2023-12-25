import {CountDown} from "../CountDown/CountDown";
import {CandlestickChart} from "../CandlestickChart/CandlestickChart";
import styles from "./ChartsBox.module.css";
import DarkLightModeButton from "../DarkLightModeButton/DarkLightModeButton";
import {ChartOptions} from "../ChartOptions/ChartOptions.jsx";

const ChartsBox = ({
                       coin,
                       setCoin,
                       isDark,
                       setIsDark,
                       timeUnit,
                       setTimeUnit,
                   }) => {
    return (
        <div className={styles.chartBox}>
            <DarkLightModeButton isDark={isDark} setIsDark={setIsDark}/>
            <CountDown seconds={60} coin={coin} timeUnit={timeUnit}/>
            <ChartOptions
                coin={coin}
                setCoin={setCoin}
                isDark={isDark}
                timeUnit={timeUnit}
                setTimeUnit={setTimeUnit}
            />
            <CandlestickChart coin={coin} timeUnit={timeUnit}/>
        </div>
    );
}

export default ChartsBox;
