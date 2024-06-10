// PieChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: [
      "Abyturientlar uchun",
      "Arab tili",
      "Bolalar uchun",
      "Bolalar uchun qo'shimcha",
      "Informations T",
      "Mental arifmetika",
      "Prezident maktabi",
    ],
    datasets: [
      {
        label: "Directions",
        data: [27, 25, 25, 25, 25, 25, 25],
        backgroundColor: [
          "#66c2a5",
          "#8da0cb",
          "#fc8d62",
          "#e78ac3",
          "#a6d854",
          "#ffd92f",
          "#e5c494",
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

export default PieChart;
