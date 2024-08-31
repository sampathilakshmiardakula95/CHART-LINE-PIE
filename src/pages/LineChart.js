import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './LineChart.css';
import { IoMdInformationCircleOutline } from "react-icons/io";

const data = [
  {
    date: '6/30/2024 - 7/6/2024',
    orders: 4,
    sales: 1404 / 1000,
    avgOrderValue: 351.0,
  },
  {
    date: '7/7/2024 - 7/13/2024',
    orders: 2,
    sales: 800 / 1000,
    avgOrderValue: 351.0,
  },
  {
    date: '7/21/2024 - 7/27/2024',
    orders: 2,
    sales: 400 / 1000,
    avgOrderValue: 351.0,
  },
];

const SalesChart = () => {
  return (
    <div className='back-card'>
      <div className='card'>
        <h1 className='h1'>Sales vs Order</h1>
        <IoMdInformationCircleOutline className='icon' />
      </div>
      <ResponsiveContainer height={400}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          grid={{ vertical: true, horizontal: true }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
          <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#faa928" activeDot={{ r: 8 }} />
          <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
