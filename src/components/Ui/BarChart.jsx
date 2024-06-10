import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Dush', 'Se', 'Chor', 'Pay', 'Juma', 'Shan', 'Yak'],
    datasets: [
      {
        label: 'Telegram',
        data: [15, 20, 25, 22, 27, 20, 18],
        backgroundColor: 'rgba(123, 104, 238, 0.7)', // Medium Slate Blue
        borderColor: 'rgba(123, 104, 238, 1)',
        borderWidth: 1,
      },
      {
        label: 'Instagram',
        data: [10, 15, 18, 17, 24, 15, 16],
        backgroundColor: 'rgba(255, 182, 193, 0.7)', // Light Pink
        borderColor: 'rgba(255, 182, 193, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + 'k';
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
