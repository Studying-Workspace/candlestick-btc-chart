import { CountDown } from "../CountDown/CountDown";
import { CandlestickChart } from "../CandlestickChart/CandlestickChart";
function ChartsBox({
  seriesData,
  initialData,
  isSeriesLoading,
  isInitialLoading,
}) {
  return (
    <div>
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
