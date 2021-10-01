import React, { useRef, useEffect, useState } from "react";

import Chart from "chart.js/auto";

const CoinChart = ({ data }) => {
  const chartRef = useRef();
  const canvasRef = (useRef < HTMLCanvasElement) | (null > null);
  const { day, week, month, year, detail } = data;
  const [isRebuildingCanvas, setIsRebuildingCanvas] = useState(false);
  const [timeFormat, setTimeFormat] = useState("24h");

  // useEffect(() => {
  //   setIsRebuildingCanvas(true);
  // }, [timeFormat]);

  // useEffect(() => {
  //   if (isRebuildingCanvas) {
  //     setIsRebuildingCanvas(false);
  //   }
  // }, [isRebuildingCanvas]);

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      // const theCanvas = canvasRef.current;
      // if (isRebuildingCanvas || !theCanvas) {
      //   return;
      // }
      // console.log(1, "henlo");
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: day,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 2,
          },

          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: "time",
                distribution: "linear",
              },
            ],
          },
        },
      });

      chartInstance.destroy();
    }
  });

  return (
    <div>
      <div className="bg-white border mt-2 rounded p-3">
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
    </div>
  );
};

export default CoinChart;
