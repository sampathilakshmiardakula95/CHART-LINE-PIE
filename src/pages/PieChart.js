import * as React from 'react';
import './PieChart.css'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { IoMdInformationCircleOutline } from "react-icons/io";

const data = [
  { label: 'WooCommerceStore', value: 55.8,color: '#FA7E7E'  },
  { label: 'ShoppifyStore', value: 44.2,color: '#2CDED5'  }
];

const size = {
  margin: { right: 0 },
  width: 500,
  height: 350,
  legend: { hidden: true },
};
const TOTAL = 2659;

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(1)}%`;
};

export default function PieArcLabel() {
  return (
    <div className="pie-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border:"20px solid white",margin:"20px" }}>
<div className='card'>
        <h1 className='h1'>Portion of Sales</h1>
        <IoMdInformationCircleOutline className='icon' /> 
      </div>
      <PieChart
        series={[
          {
            arcLabel: (item) => ` (${item.value}%)`,
            arcLabelMinAngle: 45,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
          },
        }}
        {...size}

      />


      {/* Custom Legend */}
      <div style={{ marginLeft: '20px' ,display:'flex'}}>
        {data.map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: item.color, marginRight: '10px',borderRadius:"50%" }}></div>
            <span style={{ fontWeight: 'bold' ,margin:"8px"}}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
