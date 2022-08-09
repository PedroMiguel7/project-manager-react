import React, {  useEffect, useState } from "react";
import api from '../../../api';

function ProgressoProjetos (props) {
    const [tasks, setTasks] = useState([]);
    const url = '/projetos/' + props.id_projeto + '/tasks';
    useEffect(() => {
        const fetchTask = async () => {
            const response = await api.get(url)
            setTasks(response.data) 
        }
        fetchTask()
    }, []);

    var QtdTasksConcluidas = 0
    var BarrinhaProgresso = 0
    if((tasks != null)){
        let QtdTasks = tasks.length
        const tasksConcluidas = tasks.filter((tasks) => tasks.status === "Concluido")
        if((tasksConcluidas != null)){
            QtdTasksConcluidas = tasksConcluidas.length
        }
        BarrinhaProgresso = (QtdTasksConcluidas*100)/QtdTasks
    }

    if (Math.round(BarrinhaProgresso) === 100) {
        return (
            <>
                <div className="progress ProgressProjeto" >
                    <div className="ProgressBarProjeto progress-bar" 
                    style={{ backgroundColor: "#66F540" ,width:`${BarrinhaProgresso}%`}}
                    role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>{Math.round(BarrinhaProgresso)}%</span>
            </>
        )
    } else {
        return (
            <>
                <div className="progress ProgressProjeto" >
                    <div className="ProgressBarProjeto progress-bar" 
                    style={{width:`${BarrinhaProgresso}%`}}
                    role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>{Math.round(BarrinhaProgresso)}%</span>
            </>
        )    
    }

    

}

export default ProgressoProjetos;