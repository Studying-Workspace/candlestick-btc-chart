import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { updateCandlestick, accumulateFromBatch } from "../../../utilities.js";
import styles from "./CandlestickChart.module.css";

export const CandlestickChart = ({
  data,
  initialData,
  isSeriesLoading,
  isInitialLoading,
}) => {
  let processData = (rawData) => {
    const processedData = [];
    const DATA_PER_MINUTE = 5;
    for (let i = 0; i < rawData.length; i += DATA_PER_MINUTE) {
      processedData.push(accumulateFromBatch(rawData, i, DATA_PER_MINUTE));
    }

    return processedData.reverse();
  };

  const [series, setSeries] = useState([
    {
      name: "series-1",
      // array of objects with x and y properties
      // {x: new Date(1991, 0, 1), y: [30, 40, 45, 50]},
      data: processData(initialData).map((item) => {
        return {
          x: new Date(item[0]),
          y: [...item.slice(1)],
        };
      }),
    },
  ]);

  // chart: open - high - low - close
  // api: timestamp - low - high - open - close - _volume
  useEffect(() => {
    if (isSeriesLoading) {
      return;
    }
    let newSeries = [...series];
    const initialCandlestickData = accumulateFromBatch(data, 0, 50);
    newSeries[0].data.push({
      x: new Date(initialCandlestickData[0]),
      y: [...initialCandlestickData.slice(1)],
    });
    if (newSeries[0]?.data.length > 60) {
      newSeries[0].data.unshift();
    }
    setSeries(newSeries);
    updateCandlestick([...series], setSeries, [...data]);
  }, [data]);

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
