import SelectMenuContainer from "../SelectMenu/SelectMenuContainer.jsx";
import {coins, timeUnits} from '../../supported-chart-options.js';
import styles from './ChartOptions.module.css';
import {useChartContext} from "../../context/ChartContext.jsx";

export const ChartOptions = () => {

    const {coin, setCoin, timeUnit, setTimeUnit} = useChartContext();

    return (
        <div className={styles.optionsContainer}>

            <SelectMenuContainer defaultValue={coin}
                                 setValue={setCoin}
                                 helperText='Choose a coin to show its price changes'
                                 menuItems={coins}
            />

            <SelectMenuContainer defaultValue={timeUnit}
                                 setValue={setTimeUnit}
                                 helperText='Choose a time unit'
                                 menuItems={timeUnits}
            />

        </div>
    )
}