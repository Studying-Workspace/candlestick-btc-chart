import React from "react";
import styles from "./CandlestickChart.module.css";
import ReactApexChart from "react-apexcharts";

const CandlestickChart = ({ series }) => {
  return (
    <div data-testid="candlestick-chart" className={styles.chartBox}>
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

export default CandlestickChart;
