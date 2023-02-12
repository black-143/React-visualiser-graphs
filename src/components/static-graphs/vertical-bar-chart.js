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
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Grade Point Average of Students',
    },
  }
};

const labels = ['FAIL', '6.1-7.0', '7.1-8.0', '8.1-9.0', '9.1-10.0'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Number of students',
      data: labels.map(() => faker.datatype.number({ min: 50, max: 500 })),
      backgroundColor: '#1d78b5',
    }
  ],
};

function VerticalBarChart() {
  return(
    <div style={{width: "100%"}}>
        <Bar options={options} data={data}/>
        <div className='graph-info'>
        <p>In a vertical bar graph, the bars are plotted vertically along the Y-axis. This type of bar graph is known as a vertical bar graph. These types of graphs are generally drawn for the discrete data types and quantitative comparison between items or observations.
        Here, the observation that is going to be compared is represented by the X-axis and the Y-axis represents the parameters on which this comparison is made. The bars of observation originate from the X-axis and are drawn vertically upwards towards the Y-axis.</p>
        </div>
    </div>
  )
}

export default VerticalBarChart;