import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import "./styles.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Energy consumption in 2022 (Millons of Tons)',
    },
  },
};

const labels = ['USA', 'China', 'Russia', 'Japan', 'India', 'Germany'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Nuclear',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      borderColor: '#f50a0e',
      backgroundColor: '#f50a0e',
    },
    {
      label: 'Hydroelectric',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      borderColor: 'rgba(53, 162, 235, 0.5)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Oil',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      borderColor: '#f0b30c',
      backgroundColor: '#f0b30c',
    },
    {
      label: 'Coal',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      borderColor: 'black',
      backgroundColor: 'black',
    },
    {
      label: 'Biogas',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      borderColor: 'green',
      backgroundColor: 'green',
    }
  ],
};

function LineChart() {
    return(
        <div style={{width: "100%"}}>
            <Line options={options} data={data}/>
            <div className='graph-info'>
              <p>A line chart is a type of chart used to show information that changes over time. Line charts are created by plotting a series of several points and connecting them with a straight line. Line charts are used to track changes over short and long periods.</p>
            </div>
        </div>
    )
}

export default LineChart;