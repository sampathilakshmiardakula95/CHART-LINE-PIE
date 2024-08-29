import * as React from 'react';
import './PieChart.css'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 1483.722, color: '#FA7E7E' },
  { label: 'Group B', value:  1175.278, color: '#2CDED5' }
];

const sizing = {
  margin: { right: 0 },
  width: 500,
  height: 500,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(1)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <div className='pie'>
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
    </div>
  );
}
