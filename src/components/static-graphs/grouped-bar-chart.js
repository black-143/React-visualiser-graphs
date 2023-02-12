import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import "./styles.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Coco-Cola sales in years',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
        stacked: false
    }
  },
};

const labels = ['USA', 'Brazil', 'Russia', 'Japan', 'Mexico', 'Germany', 'United Kindom'];

export const data = {
  labels,
  datasets: [
    {
      label: '2020',
      data: labels.map(() => faker.datatype.number({ min: 15, max: 100 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: '2021',
      data: labels.map(() => faker.datatype.number({ min: 5, max: 100 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 1',
    },
    {
      label: '2022',
      data: labels.map(() => faker.datatype.number({ min: 5, max: 100 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 2',
    },
  ],
};

function GroupedBarChart() {
    return(
        <div style={{width: "100%"}}>
            <Bar options={options} data={data}/>
            <div className='graph-info'>
              <p>A grouped bar chart (aka clustered bar chart, multi-series bar chart) extends the bar chart, plotting numeric values for levels of two categorical variables instead of one. Bars are grouped by position for levels of one categorical variable, with color indicating the secondary category level within each group.</p>
            </div>
        </div>
      )
}

export default GroupedBarChart;