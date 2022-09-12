import React from "react";
import { Link } from "react-router-dom";
import { Aaim } from "../../../assets/icons/ICONS lightThema/icones";
import ProjectNotFound from "../../../assets/empty-states/project-not-found.svg";
import EditaProjeto from "./Components/EdiçãoProjeto";
import BarraProgresso from "./Components/ProgressBar/BarraDeProgresso";
import CardSkeleton from "./Components/Skeleton";
import { EmptyStateContainer, EmptyStateImg, EmptyStateTitle, CardContainer, CardInformations, CardHeader, CardTitle, CardDescription, TeamContainer, TeamName, CardExtraInformations, ProgressContainer, ProgressTitle,  StatusContainer, StatusTitle, Status } from "./style";

export default function Cards(props) {
  if (props.Projetos === null) {
    return (
      <>
        <EmptyStateContainer>
          <EmptyStateImg src={ProjectNotFound} />
          <EmptyStateTitle>Nenhum projeto encontrado.</EmptyStateTitle>
        </EmptyStateContainer>
      </>
    );
  } else if (props.home === "home") {
    props.Projetos.reverse();
    return (
      props.Projetos?.map(p => (
        <CardContainer id='CardProjeto' key={p.id_projeto}
        to={"/projetos/" + p.id_projeto}
      >
        <CardInformations>
          <CardHeader>
            <CardTitle>{p.nome_projeto}</CardTitle>
            <Link to="/home" >
              <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
            </Link>
          </CardHeader>
          <CardDescription>
            {p.descricao_projeto}
          </CardDescription>
          <TeamContainer>
            <Aaim/>
            <TeamName>{p.nome_equipe}</TeamName>
          </TeamContainer>
        </CardInformations>
        <CardExtraInformations>
          <ProgressContainer>
            <ProgressTitle>Progresso</ProgressTitle>
            {<BarraProgresso id_projeto={p.id_projeto} op={1} />}%
          </ProgressContainer>
          <StatusContainer>
            <StatusTitle>Status</StatusTitle>
            <Status>{p.status}</Status>
          </StatusContainer>
        </CardExtraInformations>
      </CardContainer>
      ))
    )
  } else if (props.Projetos.length === 0) {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    )

  } else {
    props.Projetos.reverse();
    return (
      props.Projetos?.map(p => (
        <CardContainer id='CardProjeto' key={p.id_projeto}
          to={"/projetos/" + p.id_projeto}
        >
          <CardInformations>
            <CardHeader>
              <CardTitle>{p.nome_projeto}</CardTitle>
              <Link to="/projetos" >
                <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
              </Link>
            </CardHeader>
            <CardDescription>
              {p.descricao_projeto}
            </CardDescription>
            <TeamContainer>
              <Aaim/>
              <TeamName>{p.nome_equipe}</TeamName>
            </TeamContainer>
          </CardInformations>
          <CardExtraInformations>
            <ProgressContainer>
              <ProgressTitle>Progresso</ProgressTitle>
              {<BarraProgresso id_projeto={p.id_projeto} op={1} />}%
            </ProgressContainer>
            <StatusContainer>
              <StatusTitle>Status</StatusTitle>
              <Status>{p.status}</Status>
            </StatusContainer>
          </CardExtraInformations>
        </CardContainer>
      ))
    )
  }
};