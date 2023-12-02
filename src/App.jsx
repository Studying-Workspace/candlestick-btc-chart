import "./App.css";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./components/Spinner/Spinner.jsx";
import ChartsBox from "./components/ChartsBox/ChartsBox.jsx";

function App() {
  const { isLoading: isSeriesLoading, data: seriesData } = useQuery({
    queryKey: ["btc-price-1m"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.pro.coinbase.com/products/BTC-USD/candles/1m"
      );
      return await res.json();
    },
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
  });

  const { isLoading: isInitialLoading, data: initialData } = useQuery({
    queryKey: ["btc-initial-price"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.pro.coinbase.com/products/BTC-USD/candles/1m"
      );
      return await res.json();
    },
  });

  return (
    <>
      {isSeriesLoading || isInitialLoading ? (
        <Spinner />
      ) : (
        <ChartsBox
          seriesData={seriesData}
          initialData={initialData}
          isSeriesLoading={isSeriesLoading}
          isInitialLoading={isInitialLoading}
        />
      )}
    </>
  );
}

export default App;
