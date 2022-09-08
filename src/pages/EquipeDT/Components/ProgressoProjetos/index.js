import React, {  useEffect, useState } from "react";
import api from '../../../../services/api';
import { ProgressoContainer, HeaderProgresso, Status, Percentual, Progresso, ProgressoBar } from "./style.js"

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
        const tasksConcluidas = tasks?.filter((tasks) => tasks.status === "Concluido")
        if((tasksConcluidas != null)){
            QtdTasksConcluidas = tasksConcluidas.length
        }
        BarrinhaProgresso = (QtdTasksConcluidas*100)/QtdTasks
    }

    return (
        <>
            <ProgressoContainer>
                <HeaderProgresso>
                    <Status>{props.status}</Status>
                    <Percentual>{Math.round(BarrinhaProgresso)}%</Percentual>    
                </HeaderProgresso>
                
                <Progresso className="progress" >
                    <ProgressoBar className="progress-bar" 
                    style={{width:`${BarrinhaProgresso}%`}}
                    role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></ProgressoBar>
                </Progresso>
            </ProgressoContainer>
        </>
    )  
}

export default ProgressoProjetos;