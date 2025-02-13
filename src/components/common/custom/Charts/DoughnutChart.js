// import React from 'react';
// import { Doughnut } from '@reactchartjs/react-chart.js';

// const data = {
//   labels: ['Spring', 'Summer', 'Fall', 'Winter'],
//   datasets: [
//     {
//       data: [1200, 1700, 800, 200],
//       backgroundColor: [
//         'rgba(255, 0, 0, 0.5)',
//         'rgba(100, 255, 0, 0.5)',
//         'rgba(200, 50, 255, 0.5)',
//         'rgba(0, 100, 255, 0.5)',
//       ],
//     },
//   ],
// };

// function DoughnutChart() {
//   return (
//     <div>
//       <Doughnut data={data} />
//     </div>
//   );
// }

// export default DoughnutChart;

import React from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Doughnut.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;
