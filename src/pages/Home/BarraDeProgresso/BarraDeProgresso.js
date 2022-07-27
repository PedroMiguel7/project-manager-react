import React, {  useEffect, useState } from "react";
import api from '../../../api';

function BarraProgresso (props) {

const [tasks, setTasks] = useState([]);
    const url = '/projetos/' + props.id_projeto + '/tasks';
    useEffect(() => {
        const fetchTask = async () => {
            const response = await api.get(url)
            setTasks(response.data) 
        }
        fetchTask()
    });

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
   

    return (
        <>
            <div class="progress mt-2" style={{ backgroundColor: "gray" }}>
                <div class="progress-bar" role="progressbar" style={{ backgroundColor: "#28AEF3", width:`${BarrinhaProgresso}%` }} aria-valuenow="25"  aria-valuemin="0" aria-valuemax="100">{Math.round(BarrinhaProgresso)}%</div>
            </div>
        </>
    )

}

export default BarraProgresso;