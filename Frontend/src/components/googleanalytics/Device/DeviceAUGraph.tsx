import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DeviceAUProps {
  deviceCategory: string;
  dauPerMau: string;
  dauPerWau: string;
  wauPerMau: string;
}

interface DeviceAUGraphProps {
  data: DeviceAUProps[];
}

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DeviceAUGraph: React.FC<DeviceAUGraphProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.deviceCategory),
    datasets: [
      {
        label: "DAU/MAU",
        data: data.map((d) => d.dauPerMau),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "DAU/WAU",
        data: data.map((d) => d.dauPerWau),
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "WAU/MAU",
        data: data.map((d) => d.wauPerMau),
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return (
    <Container>
      <Bar data={chartData} options={options} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export default DeviceAUGraph;