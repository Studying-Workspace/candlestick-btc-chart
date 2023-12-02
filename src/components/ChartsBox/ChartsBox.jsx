import {CountDown} from "../CountDown/CountDown";
import {CandlestickChart} from "../CandlestickChart/CandlestickChart";
import styles from "./ChartsBox.module.css";
import SelectCoin from "../SelectCoin/SelectCoin";

const ChartsBox = ({
                       seriesData,
                       initialData,
                       isSeriesLoading,
                       isInitialLoading,
                       coin,
                       setCoin
                   }) => {
    return (
        <div className={styles.chartBox}>
            <CountDown seconds={60} coin={coin}/>
            <SelectCoin coin={coin} setCoin={setCoin}/>
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
