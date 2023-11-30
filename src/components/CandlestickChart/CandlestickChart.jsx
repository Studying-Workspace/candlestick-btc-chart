import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import {updateCandlestick} from "../../../utilities.js";
export const CandlestickChart = ({data}) => {

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [
                // array of objects with x and y properties
                // {x: new Date(1991, 0, 1), y: [30, 40, 45, 50]},

            ]
        }
    ]);

    // chart: open - high - low - close
    // api: timestamp - low - high - open - close - _volume
    useEffect(() => {
        // let processed = [
        //     {
        //         name: "new-series",
        //         "data": data?.map(record => {
        //             return {
        //                 x: new Date(record[0]),
        //                 y: [record[3], record[2], record[1], record[4]]
        //             }
        //         })
        //     }
        // ];

        // to add a new candle -> check first if the state already contains 60 objects
        let newSeries = series;

        newSeries[0]?.data.push({x: new Date(), y: []});
        if(newSeries[0]?.data.length > 60) {
            newSeries[0].data.unshift();
        }
        setSeries(newSeries);
        updateCandlestick()
    }, [data, series]);

    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [] // empty array
        }
    });


    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="candlestick" // change type to candlestick
                        width="500"
                    />
                </div>
            </div>
        </div>
    );
}

