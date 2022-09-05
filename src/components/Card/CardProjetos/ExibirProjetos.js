import React from "react";
import { Link } from "react-router-dom";
import aim from "../../../assets/icons/aim.svg";
import ProjectNotFound from "../../../assets/empty-states/project-not-found.svg";
import EditaProjeto from "../CardProjetos/EdiçãoProjeto";
import BarraProgresso from "../CardProjetos/BarraDeProgresso";
import CardSkeleton from "./Skeleton";
import { CardContainer, CardInformations, CardHeader, CardTitle, CardDescription, TeamContainer, Aim, TeamName, CardExtraInformations, ProgressContainer, ProgressPercentContainer, StatusContainer, Status } from "./style";

export default function Cards(props) {
  console.log(props.Projetos.length);
  if (props.Projetos === null) {
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={ProjectNotFound} style={{ width: '10vw' }} />
          <h3 style={{ color: "#454756", textAlign: "center" }}>Nenhum projeto encontrado.</h3>
        </div>
      </>
    );
  } else if (props.home === "home") {
    props.Projetos.reverse();
    return (
      props.Projetos?.map(p => (
        <CardContainer key={p.id_projeto}
        to={"/projetos/" + p.id_projeto}
      >
        <CardInformations>
          <CardHeader>
            <CardTitle>{p.nome_projeto}</CardTitle>
            <Link to="/home">
              <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
            </Link>
          </CardHeader>
          <CardDescription>
            {p.descricao_projeto}
          </CardDescription>
          <TeamContainer>
            <Aim src={aim} alt="" />
            <TeamName>{p.nome_equipe}</TeamName>
          </TeamContainer>
        </CardInformations>
        <CardExtraInformations>
          <ProgressContainer>
            <h6>Progresso</h6>
            {<BarraProgresso id_projeto={p.id_projeto} op={1} />}%
          </ProgressContainer>
          <StatusContainer>
            <h6>Status</h6>
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
        <CardContainer key={p.id_projeto}
          to={"/projetos/" + p.id_projeto}
        >
          <CardInformations>
            <CardHeader>
              <CardTitle>{p.nome_projeto}</CardTitle>
              <Link to="/projetos">
                <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
              </Link>
            </CardHeader>
            <CardDescription>
              {p.descricao_projeto}
            </CardDescription>
            <TeamContainer>
              <Aim src={aim} alt="" />
              <TeamName>{p.nome_equipe}</TeamName>
            </TeamContainer>
          </CardInformations>
          <CardExtraInformations>
            <ProgressContainer>
              <h6>Progresso</h6>
              {<BarraProgresso id_projeto={p.id_projeto} op={1} />}%
            </ProgressContainer>
            <StatusContainer>
              <h6>Status</h6>
              <Status>{p.status}</Status>
            </StatusContainer>
          </CardExtraInformations>
        </CardContainer>
      ))
    )
  }
};