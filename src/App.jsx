import {useState} from 'react'
import './App.css'
import {CandlestickChart} from "./components/CandlestickChart/CandlestickChart.jsx";
import {useQuery} from "@tanstack/react-query";
import Spinner from "./components/Spinner/Spinner.jsx";

function App() {

    const {isLoading, data} = useQuery({
        queryKey: ['btc-price-1m'],
        queryFn: async () => {
            const res = await fetch('https://api.pro.coinbase.com/products/BTC-USD/candles/1m');
            return await res.json();
        },
        refetchInterval: 60 * 1000,
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: true,
    });

    return (
        <>
            {isLoading
                ? <Spinner/>
                : <CandlestickChart data={data}/>}
        </>
    )
}

export default App
