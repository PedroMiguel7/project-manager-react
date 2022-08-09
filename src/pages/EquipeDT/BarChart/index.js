import React, {  useEffect, useState } from "react";
import api from '../../../api';

export default function BarChart() {
    
    return (
        <div className="BarContainer">
            <div className="VerticalBar" style={{height: "50%"}}></div>
            <div className="VerticalBar" style={{height: "90%"}}></div>
            <div className="VerticalBar" style={{height: "28%"}}></div>
        </div>
        
    )
}