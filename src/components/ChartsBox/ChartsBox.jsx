import CountDownContainer from "../CountDown";
import CandlestickChartContainer from "../CandlestickChart";
import DarkLightModeButton from "../DarkLightModeButton/DarkLightModeButton";
import ChartOptionsContainer from "../ChartOptions";
import styles from "./ChartsBox.module.css";

const ChartsBox = () => {
    return (
        <div className={styles.chartBox}>
            <DarkLightModeButton />
            <CountDownContainer seconds={60}/>
            <ChartOptionsContainer/>
            <CandlestickChartContainer/>
        </div>
    );
}

export default ChartsBox;
