import React, {  useEffect, useState } from "react";
import api from "../../../../services/api";
import { CardContainer, CardTitle, CardDescription, TeamContainer, TeamName, TeamGroup, TasksContainer, TaskIcon, TasksCount, TotalTasksCount, DoneTasksCount, ProgressContainer, ProgressBar, ProgressPercent } from "./styles";
import Avatar from '@mui/material/Avatar';
import BarraProgresso from "../../../../components/Card/CardProjetos/Components/ProgressBar/BarraDeProgresso";
import { AssignmentTurnedInRounded } from '@mui/icons-material';

export default function Card(props) {
    const projeto = props.projeto;

   function BarraDeProgresso1 (PROPS) {
        const [tasks, setTasks] = useState([]);
        const url = '/projetos/' + PROPS.id_projeto + '/tasks';
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
    if ((tasks != null)) {
        let QtdTasks = tasks.length
        const tasksConcluidas = tasks?.filter((tasks) => tasks.status === "Concluido")
        if ((tasksConcluidas != null)) {
            QtdTasksConcluidas = tasksConcluidas.length
        }
        BarrinhaProgresso = (QtdTasksConcluidas * 100) / QtdTasks

    } else setTasks(0)

    TASKS.push(tasks.length, QtdTasksConcluidas, Math.round(BarrinhaProgresso))

    if (PROPS.op === 1) {
        return (
            TASKS[2]
        )
    }
}


return (
    <>
        {projeto ?
            <CardContainer key={projeto.id_projeto}>
                <CardTitle>{projeto.nome_projeto}</CardTitle>
                <CardDescription>
                    {projeto.descricao_projeto}
                </CardDescription>
                <TeamContainer>
                    <TeamName>{projeto.nome_equipe}</TeamName>
                    <TeamGroup max={3}
                        sx={{
                            '& .MuiAvatar-root': { width: 32, height: 32, fontSize: 15 },

                            '& .MuiAvatarGroup-avatar': {
                                border: "1px solid #21222D",
                                color: "#1E1F28",
                                background: "#87888C",
                            }
                        }}>
                        <Avatar>A</Avatar>
                        <Avatar>B</Avatar>
                        <Avatar>C</Avatar>
                        <Avatar>C</Avatar>
                        <Avatar>C</Avatar>
                    </TeamGroup>
                </TeamContainer>
                <TasksContainer>
                    <TaskIcon />
                    <TasksCount>
                        <DoneTasksCount>10</DoneTasksCount>/<TotalTasksCount>20</TotalTasksCount>
                    </TasksCount>
                    <ProgressContainer className="progress">
                        <ProgressBar className="progress-bar" role="progressbar" width={50}></ProgressBar>
                    </ProgressContainer>
                    <ProgressPercent percent={50}>
                        <BarraProgresso id_projeto={projeto.id_projeto} op={1} />
                    </ProgressPercent>
                </TasksContainer>
            </CardContainer>
            : <></>}
    </>
)
}