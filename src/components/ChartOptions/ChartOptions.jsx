import React from 'react'
import styles from "./ChartOptions.module.css";
import SelectMenuContainer from "../SelectMenu";
import {coins, timeUnits} from "../../supported-chart-options.js";

const ChartOptions = ({coin, setCoin, timeUnit, setTimeUnit}) => {
    return (
        <div className={styles.optionsContainer}>
            <SelectMenuContainer
                defaultValue={coin}
                setValue={setCoin}
                helperText='Choose a coin to show its price changes'
                menuItems={coins}
            />
            <SelectMenuContainer
                defaultValue={timeUnit}
                setValue={setTimeUnit}
                helperText='Choose a time unit'
                menuItems={timeUnits}
            />
        </div>
    );
};

export default ChartOptions;