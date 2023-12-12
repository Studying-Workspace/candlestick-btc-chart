import {useQuery} from "@tanstack/react-query";
import Spinner from "./components/Spinner/Spinner.jsx";
import ChartsBox from "./components/ChartsBox/ChartsBox.jsx";
import {useState} from "react";
import {fetchCandlestickData} from "./services.js";

function App() {
    const [coin, setCoin] = useState('BTC');
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "light");
    const [timeUnit, setTimeUnit] = useState('1m');

    const {isLoading: isSeriesLoading, data: seriesData} = useQuery({
        queryKey: ["price-1m", coin, timeUnit],
        queryFn: async () => {
            return await fetchCandlestickData(coin, timeUnit);
        },
        refetchInterval: 60 * 1000,
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: true,
    });

    const {isLoading: isInitialLoading, data: initialData} = useQuery({
        queryKey: ["initial-price", coin, timeUnit],
        queryFn: async () => {
            return await fetchCandlestickData(coin, timeUnit);
        },
    });

    return (
        <>
            {isSeriesLoading || isInitialLoading ? (
                <Spinner/>
            ) : (
                <ChartsBox
                    seriesData={seriesData}
                    initialData={initialData}
                    isSeriesLoading={isSeriesLoading}
                    isInitialLoading={isInitialLoading}
                    coin={coin}
                    setCoin={setCoin}
                    isDark={isDark}
                    setIsDark={setIsDark}
                    timeUnit={timeUnit}
                    setTimeUnit={setTimeUnit}
                />
            )}
        </>
    );
}

export default App;
