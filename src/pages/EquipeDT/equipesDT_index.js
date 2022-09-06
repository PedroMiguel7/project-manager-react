import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProgressoCircular from './Components/CircularProgress/index.js';
import ProjetosSelect from "./Components/ProjetosSelect";
import TarefasSelect from "./Components/TarefasSelect";
import ProgressoProjetos from "./Components/ProgressoProjetos";
import BarChart from "./Components/BarChart/index.js";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ProjectNotFound from '../../assets/empty-states/project-not-found.svg';
import PeopleNotFound from '../../assets/empty-states/people-not-found.svg';
import TasksNotFound from '../../assets/empty-states/tasks-not-found.svg';
import { PageContainer, HeaderContainer, ContentContainer, FirstContentCol, SecondContentCol, MembrosContainer, MembrosUl, ProjetosContainer, HeaderProjetos, ProjetosUl, TarefasContainer, HeaderTarefas, TarefasUl, StatsCol, Top3, TarefasCircularProgress, ProjetosCircularProgress, TarefasLi, StatusTarefa, NomeTarefa, PrazoTarefa, EmptyStateContainer } from "./style";

import ImprimeMembros from "./Components/ImprimeMembros";
import AddMembro from "./Components/AddMembros";
import ImprimeTarefas from "./Components/ImprimeTarefas";
import ImprimeProjetos from "./Components/ImprimeProjetos";

class equipeDT_index extends Component {
    state = {
        equipe: [],
        statusProjeto: 0,
        statusTarefa: 0,
    }

    async componentDidMount() {
        var equipePath = window.location.pathname;
        const response = await api.get(equipePath);

        this.setState({
            equipe: response.data,
        });
    }

    DeletaEquipe(id_equipe) {
        api.delete("/equipes/" + id_equipe)
    }

    handleCallbackTarefa = (childData) => {
        this.setState({ statusTarefa: childData })
    }

    handleCallbackTarefa = (childData) => {
        this.setState({ statusTarefa: childData })
    }

    SelectStatusTarefa = (props) => {
        return (
            <>
                <TarefasSelect parentCallback={this.handleCallbackTarefa} />
            </>
        )
    }

    handleCallbackProjeto = (childData) => {
        this.setState({ statusProjeto: childData })
    }

    SelectStatusProjeto = (props) => {
        return (
            <>
                <ProjetosSelect parentCallback={this.handleCallbackProjeto} />
            </>
        )
    }

    ImprimeMembrosStats = (props) => {
        return (
            <BarChart tarefas={props.equipe.tasks} />
        )
    }

    ImprimeTarefasStats = (props) => {
        let TarefasEquipe = props.equipe.tasks;
        if (props.equipe.tasks === null) {
            return (
                <ProgressoCircular Total={0} StatsTitle="Tarefas" ValueAndamento={0} ValueConcluido={0} op="tarefas" />
            )

        } else {
            let TotalTarefas = TarefasEquipe?.length;
            console.log(TotalTarefas);

            const TarefasFazer = TarefasEquipe?.filter((tarefas) => tarefas.status === "A Fazer");
            let QtdFazer = TarefasFazer?.length;

            const TarefasAndamento = TarefasEquipe?.filter((tarefas) => tarefas.status === "Em Andamento");
            let QtdAndamento = TarefasAndamento?.length;

            const TarefasTeste = TarefasEquipe?.filter((tarefas) => tarefas.status === "Em Teste");
            let QtdTeste = TarefasTeste?.length;

            const TarefasConcluidos = TarefasEquipe?.filter((tarefas) => tarefas.status === "Concluido" || tarefas.status === "Concluído");
            let QtdConcluidos = TarefasConcluidos?.length;


            let PorcFazer = (QtdFazer / TotalTarefas) * 100;
            let PorcAndamento = (QtdAndamento / TotalTarefas) * 100;
            let PorcTeste = (QtdTeste / TotalTarefas) * 100;
            let PorcConcluidos = (QtdConcluidos / TotalTarefas) * 100;

            return (
                <>
                    <ProgressoCircular op="tarefas" Total={0} StatsTitle="Tarefas" ValueFazer={PorcFazer} ValueAndamento={PorcAndamento} ValueTeste={PorcTeste} ValueConcluido={PorcConcluidos} />
                </>

            )
        }
    }

    ImprimeProjetosStats = (props) => {
        if (props.projetos === null) {
            return (
                <ProgressoCircular Total={0} StatsTitle="Projetos" ValueAndamento={0} ValueConcluido={0} />
            )

        } else {
            var TotalProjetos = props.projetos?.length;

            const ProjetosFazer = props.projetos?.filter((projetos) => projetos.status === "A Fazer");
            let QtdFazer = ProjetosFazer?.length;

            const ProjetosAndamento = props.projetos?.filter((projetos) => projetos.status === "Em Andamento");
            let QtdAndamento = ProjetosAndamento?.length;

            const ProjetosConcluidos = props.projetos?.filter((projetos) => projetos.status === "Concluido" || projetos.status === "Concluído");
            let QtdConcluidos = ProjetosConcluidos?.length;

            let PorcFazer = (QtdFazer / TotalProjetos) * 100;

            let PorcAndamento = (QtdAndamento / TotalProjetos) * 100;

            let PorcConcluidos = (QtdConcluidos / TotalProjetos) * 100;

            return (
                <>
                    <ProgressoCircular Total={TotalProjetos} StatsTitle="Projetos" ValueFazer={PorcFazer}
                        ValueAndamento={PorcAndamento} ValueConcluido={PorcConcluidos} />
                </>

            )
        }
    }

    render() {
        const { equipe } = this.state;
        const { statusProjeto } = this.state;
        const { statusTarefa } = this.state;
        
        const pessoas =  equipe?.pessoas;
        const tarefas = equipe?.tasks;
        const projetos = equipe?.projetos;

        // console.log(equipe);
        // console.log(pessoas);
        // console.log(tarefas);
        // console.log(projetos);

        if (!equipe.nome_equipe) {
            document.title = "Equipe"
        } else {
            document.title = `Equipe ${equipe.nome_equipe}`
        }

        var TotalProjetos;
        if (projetos === null) {
            TotalProjetos = 0;
        } else {
            TotalProjetos = projetos?.length;
        }

        const TarefasProjeto = [];
        if (projetos !== null) {
            projetos?.map(f => (
                TarefasProjeto.push(f.id_projeto)
            ))
        }
        console.log(TarefasProjeto)

        return (
            <>
                <PageContainer>
                    <HeaderContainer>
                        <HeaderDt link="/equipes" pagina="Equipe" titulo={equipe.nome_equipe} Status='' />
                    </HeaderContainer>
                    <ContentContainer>
                        <FirstContentCol>
                            <MembrosContainer>
                                <h3>Membros</h3>
                                <MembrosUl>
                                    <ImprimeMembros pessoas={pessoas} />
                                    <AddMembro />
                                </MembrosUl>
                            </MembrosContainer>
                            <ProjetosContainer>
                                <HeaderProjetos>
                                    <h3>Projetos</h3>
                                    <this.SelectStatusProjeto status={statusProjeto} />
                                </HeaderProjetos>
                                <ProjetosUl>
                                    <ImprimeProjetos projetos={projetos} status={statusProjeto} />
                                </ProjetosUl>
                            </ProjetosContainer>
                        </FirstContentCol>
                        <SecondContentCol>
                            <TarefasContainer >
                                <HeaderTarefas>
                                    <h3>Tarefas</h3>
                                    <this.SelectStatusTarefa status={statusTarefa} />
                                </HeaderTarefas>
                                <TarefasUl>
                                    <ImprimeTarefas equipe={equipe} tarefas={tarefas} projetos={TarefasProjeto} status={statusTarefa} />
                                </TarefasUl>
                            </TarefasContainer>
                        </SecondContentCol>
                        <StatsCol>
                                <Top3>
                                    <h6>Membros mais produtivos</h6>
                                    <p>Por tarefas concluídas</p>
                                    <this.ImprimeMembrosStats equipe={equipe} />
                                </Top3>
                                <TarefasCircularProgress>
                                    <h5>Tarefas</h5>
                                    <this.ImprimeTarefasStats equipe={equipe} />
                                </TarefasCircularProgress>

                                <ProjetosCircularProgress>
                                    <h5>Projetos</h5>
                                    <this.ImprimeProjetosStats projetos={projetos} />
                                </ProjetosCircularProgress>
                        </StatsCol>
                    </ContentContainer>
                </PageContainer>
            </>
        )
    }
}

export default equipeDT_index;