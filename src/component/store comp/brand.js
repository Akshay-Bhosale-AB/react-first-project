import React from 'react';
import '../style/brand.css';
import {Branddata} from './branddata';



function Brand() {
    return (
        <div  className="container3">
            <div className="bar4">
                <h1 className="head3">BRAND</h1>
                <ul className="brandlist">
                    {Branddata.map((val, key) => {
                    return (
                        <li className="row1" key={key}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                        <div id="title1">{val.title}</div> <div id="total1">{val.total}</div>
                        </li>
                    )
                    })}
                </ul>
            </div>
            
        </div>
                

                 


 
    );
}

export default Brand;
