import SelectMenu from "../SelectMenu/SelectMenu.jsx";
import {coins, timeUnits} from '../../supported-chart-options.js';

export const ChartOptions = ({
                                 coin,
                                 setCoin,
                                 isDark,
                                 timeUnit,
                                 setTimeUnit,
                             }) => {
    return (
        <>
            <SelectMenu defaultValue={coin}
                        setCoin={setCoin}
                        isDark={isDark}
                        helperText='Choose a coin to show its price changes'
                        menuItems={coins}
            />
            <SelectMenu defaultValue={timeUnit}
                        setCoin={setTimeUnit}
                        isDark={isDark}
                        helperText='Choose a time unit'
                        menuItems={timeUnits}
            />
        </>
    )
}