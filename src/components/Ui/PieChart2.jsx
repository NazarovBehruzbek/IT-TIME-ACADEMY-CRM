// PieChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart2 = () => {
  const data = {
    labels: [
      "To'lov qildi",
      "To'lov qilmadi",
      "Hali ulgurmaganlar",
      "Tekin o'qiydiganlar",
    ],
    datasets: [
      {
        label: "Directions",
        data: [100, 25, 2, 25],
        backgroundColor: [
          "#66c2a5",
          "#8da0cb",
          "#fc8d62",
          "#e78ac3",
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

export default PieChart2;
