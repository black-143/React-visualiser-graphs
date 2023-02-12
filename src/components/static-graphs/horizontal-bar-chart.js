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
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Profit of company over the months',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = labels.map(() => faker.datatype.number({ min: -500, max: 1000 }))
const colours = datasets.map((value) => value < 0 ? '#fa0202' : '#50cc27');

export const data = {
  labels,
  datasets: [
    {
      label: 'Profit in crores',
      data: datasets,
      borderColor: '#0d0303',
      backgroundColor: colours,
    }
  ],
};
console.log(data)
function HorizontalBarChart() {
    return(
        <div style={{width: "100%"}}>
            <Bar options={options} data={data}/>
            <div className='graph-info'>
              <p>Horizontal bar graphs represent the data horizontally. It is a graph whose bars are drawn horizontally. A horizontal bar chart is useful because names are often long and are easier to display horizontally than squeeze them in vertically on a vertical bar chart.</p>
            </div>
        </div>
    )
}

export default HorizontalBarChart;