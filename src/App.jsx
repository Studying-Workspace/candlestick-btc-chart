import Spinner from "./components/Spinner/Spinner.jsx";
import ChartsBox from "./components/ChartsBox/ChartsBox.jsx";

import {useChartContext} from "./context/ChartContext.jsx";

function App() {
    const {loading} = useChartContext();

    return <>{loading ? <Spinner/> : <ChartsBox/>}</>;
}

export default App;
