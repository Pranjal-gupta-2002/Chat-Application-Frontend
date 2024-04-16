import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  plugins,
  scales,
} from "chart.js";
import { getLastSevenDays } from "../../lib/features";
import { orange } from "../../Constants/color";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = getLastSevenDays();

const LineChart = ({ value = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(75,12,192,0.31)",
        borderColor: "rgba(75,12,192,1)",
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};
const dognutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 120,
};
const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        label: "Total Chats Vs Group Chats",
        backgroundColor: ["rgba(75,12,192,0.31)", orange],
        borderColor: ["rgba(75,12,192,1)", orange],
        offset: 20,
      },
    ],
  };
  return (
    <Doughnut
      style={{
        zIndex: 10,
      }}
      data={data}
      options={dognutChartOptions}
    />
  );
};

export { LineChart, DoughnutChart };
