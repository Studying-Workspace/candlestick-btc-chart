import SelectMenu from "../SelectMenu/SelectMenu.jsx";
import {coins, timeUnits} from '../../supported-chart-options.js';
import styles from './ChartOptions.module.css';
import {useChart} from "../../context/ChartContext.jsx";

export const ChartOptions = () => {

    const {coin, setCoin, timeUnit, setTimeUnit} = useChart();

    return (
        <div className={styles.optionsContainer}>

            <SelectMenu defaultValue={coin}
                        setValue={setCoin}
                        helperText='Choose a coin to show its price changes'
                        menuItems={coins}
            />

            <SelectMenu defaultValue={timeUnit}
                        setValue={setTimeUnit}
                        helperText='Choose a time unit'
                        menuItems={timeUnits}
            />

        </div>
    )
}