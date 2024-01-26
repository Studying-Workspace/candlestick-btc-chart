import React, {useEffect, useState} from "react";
import {getStateFormat} from "../../utilities.js";
import {useChartContext} from "../../context/ChartContext.jsx";
import {CandlestickChart} from './'

export const CandlestickChartContainer = () => {
    const {initialData, loading, seriesData} = useChartContext();

    const [series, setSeries] = useState([
        {
            name: "series-1",
            // array of objects with x and y properties
            // {x: new Date(1991, 0, 1), y: [30, 40, 45, 50]},
            data: getStateFormat(initialData)
        }
    ]);

    useEffect(() => {
        if (loading) {
            return;
        }
        setSeries([{
            name: "series-1",
            data: getStateFormat(seriesData)
        }]);
    }, [loading, seriesData]);

    return (
        <CandlestickChart series={series}/>
    );
};

export default CandlestickChartContainer;