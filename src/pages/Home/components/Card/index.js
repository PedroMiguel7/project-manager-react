import React from "react";
import { CardContainer, CardTitle, CardDescription, TeamContainer, TeamName, TeamGroup, TasksContainer, TaskIcon, TasksCount, TotalTasksCount, DoneTasksCount, ProgressContainer, ProgressBar, ProgressPercent } from "./styles";
import Avatar from '@mui/material/Avatar';
import { AssignmentTurnedInRounded } from '@mui/icons-material';

export default function Card(props) {
    const projeto = props.projeto;

    return (
        <>
            <CardContainer>
                <CardTitle>Nome Projeto</CardTitle>
                <CardDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard has been the industry's standard
                </CardDescription>
                <TeamContainer>
                    <TeamName>Equipe Fulanos</TeamName>
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
                        50%
                    </ProgressPercent>
                </TasksContainer>
            </CardContainer>
        </>
    )
}