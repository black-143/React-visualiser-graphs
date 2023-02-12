import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
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
      text: 'Sales projection in coming months',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Amount in Crores',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

function AreaChart() {
    return(
        <div style={{width: "100%"}}>
            <Line options={options} data={data}/>
            <div className='graph-info'>
              <p>An area chart is a graph that combines a line chart and a bar chart to show changes in quantities over time. It's similar to a line graph in that data points are plotted and connected by line segments.</p>
            </div>
        </div>
      )
}

export default AreaChart;