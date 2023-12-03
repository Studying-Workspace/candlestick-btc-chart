import {CountDown} from "../CountDown/CountDown";
import {CandlestickChart} from "../CandlestickChart/CandlestickChart";
import styles from "./ChartsBox.module.css";
import SelectCoin from "../SelectCoin/SelectCoin";
import DarkLightModeButton from "../DarkLightModeButton/DarkLightModeButton";
import {ChartOptions} from "../ChartOptions/ChartOptions.jsx";

const ChartsBox = ({
                       seriesData,
                       initialData,
                       isSeriesLoading,
                       isInitialLoading,
                       coin,
                       setCoin,
                       isDark,
                       setIsDark
                   }) => {
    return (
        <div className={styles.chartBox}>
            <DarkLightModeButton isDark={isDark} setIsDark={setIsDark}/>
            <CountDown seconds={60} coin={coin}/>
            <ChartOptions coin={coin} setCoin={setCoin} isDark={isDark}/>
            <CandlestickChart
                data={seriesData}
                initialData={initialData}
                isSeriesLoading={isSeriesLoading}
                isInitialLoading={isInitialLoading}
            />
        </div>
    );
}

export default ChartsBox;
