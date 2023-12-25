import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import {accumulateFromBatch, processDateRepresentation} from "../../utilities.js";
import styles from "./CandlestickChart.module.css";
import { useChart } from "../../context/ChartContext.jsx";

export const CandlestickChart = () => {
    const {initialData , Loading, seriesData} = useChart() ; 

    let processData = (rawData) => {
        const processedData = [];
        const DATA_PER_MINUTE = 1;
        for (let i = 0; i < rawData.length; i += DATA_PER_MINUTE) {
            processedData.push(accumulateFromBatch(rawData, i, DATA_PER_MINUTE));
        }
        const len = processedData.length;
        return processedData.reverse().slice(len - 60);
    }

    const getStateFormat = (givenData) => {
        return processData(givenData).map((item) => {
            return {
                x: processDateRepresentation(item[0]),
                y: [...item.slice(1)]
            }
        })
    }

    const [series, setSeries] = useState([
        {
            name: "series-1",
            // array of objects with x and y properties
            // {x: new Date(1991, 0, 1), y: [30, 40, 45, 50]},
            data: getStateFormat(initialData)
        }
    ]);

    // chart: open - high - low - close
    // api: timestamp - low - high - open - close - _volume
    useEffect(() => {
        if (Loading) {
            return;
        }
        setSeries([{
            name: "series-1",
            data: getStateFormat(seriesData)
        }]);
    }, [seriesData]);

    return (
        <div className={styles.chartBox}>
            <div className="row">
                <ReactApexChart
                    options={{
                        chart: {
                            id: "basic-bar",
                        },
                        xaxis: {
                            categories: [], // empty array
                        },
                    }}
                    series={series}
                    type="candlestick" // change type to candlestick
                    width="800"
                />
            </div>
        </div>
    );
};
