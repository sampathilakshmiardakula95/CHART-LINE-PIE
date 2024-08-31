import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
   const toggle = () => setIsOpen (isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
           
        },
       
        {
            path:"/inventory",
            name:"Inventory",
            
        },
       
        {
            path:"/order",
            name:"Order",
            
        },
        {
            path:"/returns",
            name:"Returns",
           
        }, {
            path:"/customer",
            name:"Customer",

        },
        {
            path:"/shipping",
            name:"Shipping",

        },
        {
            path:"/channel",
            name:"Channel",

        },
        {
            path:"/integrations",
            name:"Integrations",

        },
        
       
    ]

    const menuItem1 =[
        {
            path:"/calculator",
            name:"Calculator",

        },
        {
            path:"/reports",
            name:"Reports",

        },
        {
            path:"/account",
            name:"Account",

        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               },
               {
                   menuItem1.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link box"  activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <select>
                           <option style={{display: isOpen ? "block" : "none", marginLeft:"10px"}} className="link_text">{item.name}

                           </option>
                           </select>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;