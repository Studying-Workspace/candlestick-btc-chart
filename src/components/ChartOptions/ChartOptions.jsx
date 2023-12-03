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
                        setValue={setCoin}
                        isDark={isDark}
                        helperText='Choose a coin to show its price changes'
                        menuItems={coins}
            />
            <SelectMenu defaultValue={timeUnit}
                        setValue={setTimeUnit}
                        isDark={isDark}
                        helperText='Choose a time unit'
                        menuItems={timeUnits}
            />
        </>
    )
}