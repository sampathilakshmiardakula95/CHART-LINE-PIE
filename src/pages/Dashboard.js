import React from 'react';
import './Dachboard.css'
import LineChart from './LineChart.js';
import PieChart from './PieChart.js'


const  Dashboard= () => {
    return (
        <div className='chart'>
            <h1>Dashboard</h1>
            <div className='line'>
            <LineChart />
            </div>
            <PieChart />
            
        
        </div>
    );
};

export default Dashboard;