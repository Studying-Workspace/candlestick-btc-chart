import CountDownContainer from "../CountDown";
import {CandlestickChart} from "../CandlestickChart/CandlestickChart";
import styles from "./ChartsBox.module.css";
import DarkLightModeButton from "../DarkLightModeButton/DarkLightModeButton";
import {ChartOptions} from "../ChartOptions/ChartOptions.jsx";

const ChartsBox = () => {
    return (
        <div className={styles.chartBox}>
            <DarkLightModeButton/>
            <CountDownContainer seconds={60}/>
            <ChartOptions/>
            <CandlestickChart/>
        </div>
    );
}

export default ChartsBox;
