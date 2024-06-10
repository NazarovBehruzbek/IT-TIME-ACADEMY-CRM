// PieChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart3 = () => {
  const data = {
    labels: [
      "Banner orqali",
      "Flayer orqali",
      "Instagramdan",
      "Qiziqib kirganlar",
      "Tanish orqali",
    ],
    datasets: [
      {
        label: "Directions",
        data: [9, 44, 0, 114, 39],
        backgroundColor: [
          "#66c2a5",
          "#8da0cb",
          "#fc8d62",
          "#e78ac3",
          "#a6d854",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} ta`,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart3;
