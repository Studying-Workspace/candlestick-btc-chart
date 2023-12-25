import Spinner from "./components/Spinner/Spinner.jsx";
import ChartsBox from "./components/ChartsBox/ChartsBox.jsx";
import { useState } from "react";
import { useInitialData } from "./hooks/useinitialData.js";
import { useSeriesData } from "./hooks/useSeriesData.js";

function App() {
  const [coin, setCoin] = useState("BTC");
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "light"
  );
  const [timeUnit, setTimeUnit] = useState("1m");

  const { isInitialDataLoading } = useInitialData(coin , timeUnit);
  const {isSeriesDataLoading} = useSeriesData(coin , timeUnit) ;  

  const Loading = isInitialDataLoading || isSeriesDataLoading;

  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        <ChartsBox
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
