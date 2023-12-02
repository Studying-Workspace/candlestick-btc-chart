import { CountDown } from "../CountDown/CountDown";
import { CandlestickChart } from "../CandlestickChart/CandlestickChart";
import styles from "./ChartsBox.module.css";
function ChartsBox({
  seriesData,
  initialData,
  isSeriesLoading,
  isInitialLoading,
}) {
  return (
    <div className={styles.chartBox}>
      <CountDown seconds={60} />
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
