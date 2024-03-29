import {createContext, useContext, useState} from "react";

import {useInitialData} from "../hooks/useInitialData";
import {useSeriesData} from "../hooks/useSeriesData";

const ChartContext = createContext(undefined);

function ChartContextProvider({children}) {
    const [coin, setCoin] = useState("BTC");
    const [isDark, setIsDark] = useState(
        localStorage.getItem("theme") === "light"
    );
    const [timeUnit, setTimeUnit] = useState("1m");

    const {isInitialDataLoading, initialData} = useInitialData(coin, timeUnit);
    const {isSeriesDataLoading, seriesData} = useSeriesData(coin, timeUnit);
    const loading = isInitialDataLoading || isSeriesDataLoading;

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
                loading
            }}
        >
            {children}
        </ChartContext.Provider>
    );
}

function useChartContext() {
    let context = useContext(ChartContext);
    if (context === undefined) {
        throw new Error("Provider out!");
    }
    return context;
}

export {useChartContext} ;
export default ChartContextProvider;
