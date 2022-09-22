import React, {  useEffect, useState } from "react";
import api from '../../../../../services/api';
import { Progress, ProgressBar } from "./style"

function BarraProgresso (props) {

const [tasks, setTasks] = useState([]);
    const url = '/projetos/' + props.id_projeto + '/tasks';
    useEffect(() => {
        const fetchTask = async () => {
            const response = await api.get(url)
            setTasks(response.data) 
        }
        fetchTask()
    }, []);

    var TASKS = []
    var QtdTasksConcluidas = 0
    var BarrinhaProgresso = 0
    if((tasks != null)){
        let QtdTasks = tasks.length
        const tasksConcluidas = tasks?.filter((tasks) => tasks.status === "Concluido")
        if((tasksConcluidas != null)){
            QtdTasksConcluidas = tasksConcluidas.length
        }
        BarrinhaProgresso = (QtdTasksConcluidas*100)/QtdTasks

    } else setTasks(0)
    
    TASKS.push(tasks.length, QtdTasksConcluidas, Math.round(BarrinhaProgresso))
    
    if(props.op === 1){
        return(
            TASKS[2]
        )
    }

    return (
        <>
            <Progress>
                <ProgressBar width={`${BarrinhaProgresso}%`} aria-valuenow="25"  aria-valuemin="0" aria-valuemax="100">{BarrinhaProgresso ? `${Math.round(BarrinhaProgresso)}%` : ''}</ProgressBar>
            </Progress>
        </>
    )

}

export default BarraProgresso;