import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import {getStateFormat} from "../../utilities.js";
import styles from "./CandlestickChart.module.css";
import {useChartContext} from "../../context/ChartContext.jsx";

export const CandlestickChart = () => {
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
