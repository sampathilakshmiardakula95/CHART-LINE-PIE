import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';




const uData = [1600,1400,1200,1000];
const pData = [400,500,700,800];  
const xLabels = [
  '30/6/2024-7/6/2024',
  '7/7/2024-7/13/2024',
  '7/21/2024-7/24/2024'
 
];

export default function BiaxialLineChart() {
  const menuItem=[
    {
        path:"/",
        name:"Dashboard",
       
    }]
  return (
    <LineChart
      width={500}
      height={400}
      series={[
        { data: pData, yAxisId: 'leftAxisId', label: 'pv' },
        { data: uData, yAxisId: 'rightAxisId',label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      grid={{ vertical: true, horizontal: true }}
      rightAxis="rightAxisId"
    />
  );
}
