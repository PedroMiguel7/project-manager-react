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
    const QtdTasks = tasks.length

    const barrinha = tasks.filter((tasks) => tasks.status === "Em Andamento").length

    console.log(barrinha)
    console.log(QtdTasks)
    
    return (
        <>
            <div class="progress mt-2" style={{ backgroundColor: "gray" }}>
                <div class="progress-bar" role="progressbar" style={{ backgroundColor: "#28AEF3", width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
        </>
    )

}

export default BarraProgresso;