import React from 'react';
import './Dachboard.css'
import PieChart from './PieChart.js'
import BiaxialLineChart from './LineChart.js';
import './Dachboard.css'


const Dashboard = () => {
    return (

        <div className='color-card'>
            <h1 className='heading'>Dashboard</h1>
            <div className='div'>
        
                <BiaxialLineChart />
                <PieChart />
                
            </div>
        </div>
        

    );
};

export default Dashboard;