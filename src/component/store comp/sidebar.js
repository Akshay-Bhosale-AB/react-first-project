import React from 'react';
import '../style/sidebar.css';
import {Sidebardata} from './sidebardata';



function Sidebar() {
    return (
        <div  className="container">
            <div className="bar1">
                <h1 className="head1">ACCESORIES</h1>
                <ul className="sidebarlist">
                    {Sidebardata.map((val, key) => {
                    return (
                        <li className="row" key={key}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                        <div id="title">{val.title}</div> <div id="total">{val.total}</div>
                        </li>
                    )
                    })}
                </ul>
            </div>
            
        </div>
                

                 


 
    );
}

export default Sidebar;
