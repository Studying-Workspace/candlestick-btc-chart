import SelectMenu from "../SelectMenu/SelectMenu.jsx";
import {coins} from '../../supported-coins';

export const ChartOptions = ({coin, setCoin, isDark}) => {
    return (
        <>
            <SelectMenu defaultValue={coin}
                        setCoin={setCoin}
                        isDark={isDark}
                        helperText='Choose a coin to show its price changes'
                        menuItems={coins}
            />
        </>
    )
}