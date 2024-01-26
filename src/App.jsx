import Spinner from "./components/Spinner/Spinner.jsx";
import ChartsBox from "./components/ChartsBox/ChartsBox.jsx";

import {useChart} from "./context/ChartContext.jsx";

function App() {
    const {loading} = useChart();

    return <>{loading ? <Spinner/> : <ChartsBox/>}</>;
}

export default App;
