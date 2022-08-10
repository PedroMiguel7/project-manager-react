import React, {  useEffect, useState } from "react";
import api from '../../../api';

export default function BarChart() {
    
    return (
        <div className="Container">
            <div className="BarContainer">
                <div className="VerticalBar" style={{height: "90%"}}>
                    <span>10</span>
                </div>
                <span>Fulano</span>
            </div>
            
            <div className="BarContainer">
                <div className="VerticalBar" style={{height: "51%"}}>
                    <span>5</span>
                </div>
                <span>Fulana</span>
            </div>

            <div className="BarContainer">
                <div className="VerticalBar" style={{height: "28%"}}>
                    <span>3</span>
                </div>
                <span>Fulanin</span>
            </div>
        </div>
        
    )
}