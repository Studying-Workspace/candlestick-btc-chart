import { createContext, useContext, useState } from "react";
import { useInitialData } from "../hooks/useinitialData";
import { useSeriesData } from "../hooks/useSeriesData";

const ChartContext = createContext();

function ChartContextProvider({ children }) {
  const [coin, setCoin] = useState("BTC");
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "light"
  );
  const [timeUnit, setTimeUnit] = useState("1m");

  const { isInitialDataLoading , initialData} = useInitialData(coin, timeUnit);
  const { isSeriesDataLoading , seriesData } = useSeriesData(coin, timeUnit);
  const Loading = isInitialDataLoading || isSeriesDataLoading;


  return (
    <ChartContext.Provider
      value={{
        coin,
        setCoin,
        isDark,
        setIsDark,
        timeUnit,
        setTimeUnit,
        initialData,
        seriesData,
        Loading
      }}
    >
      {children}
    </ChartContext.Provider>
  );
}

function useChart() {
  let context = useContext(ChartContext);
  if (context === undefined) throw new Error("Provider out!");
  return context;
}

export {useChart} ; 
export default ChartContextProvider;
