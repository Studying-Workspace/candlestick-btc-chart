import SelectCoin from "../SelectCoin/SelectCoin.jsx";

export const ChartOptions = ({coin, setCoin, isDark}) => {
    return (
        <>
            <SelectCoin coin={coin} setCoin={setCoin} isDark={isDark}/>
        </>
    )
}