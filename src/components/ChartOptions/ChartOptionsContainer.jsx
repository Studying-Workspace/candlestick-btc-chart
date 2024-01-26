import {useChartContext} from "../../context/ChartContext.jsx";
import {ChartOptions} from './'

export const ChartOptionsContainer = () => {

    const {coin, setCoin, timeUnit, setTimeUnit} = useChartContext();

    return (
        <ChartOptions
            coin={coin}
            setCoin={setCoin}
            timeUnit={timeUnit}
            setTimeUnit={setTimeUnit}
        />
    )
}

export default ChartOptionsContainer;