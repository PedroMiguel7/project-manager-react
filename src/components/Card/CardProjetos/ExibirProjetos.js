import React from "react";
import { Link } from "react-router-dom";
import aim from "../../../assets/icons/aim.svg";
import ProjectNotFound from "../../../assets/empty-states/project-not-found.svg";
import EditaProjeto from "../CardProjetos/EdiçãoProjeto";
import BarraProgresso from "../CardProjetos/BarraDeProgresso";
import CardSkeleton from "./Skeleton";
import { CardContainer, CardInformations, CardHeader, CardTitle, CardDescription, TeamContainer, Aim, TeamName, CardExtraInformations, ProgressContainer, ProgressPercentContainer, StatusContainer, Status } from "./style";

export default function Cards(props) {
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
        <Link key={p.id_projeto}
          reloadDocument
          to={"/projetos/" + p.id_projeto}
          className="Link text-reset text-decoration-none col-lg-3 col-md-12 Cardh p-3"
        >
          <div >
            <div className="card-part1 mb-3">
              <div className="d-flex justify-content-between">
                <h2 className="fs-4">{p.nome_projeto}</h2>
                <Link to="/home">
                  <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
                </Link>
              </div>
              <p className="DescricaoCardProjeto overflow-hidden">
                {p.descricao_projeto}
              </p>
              <div className="mb-3">
                <img src={aim} alt="" />
                <span>{p.nome_equipe}</span>
              </div>
            </div>
            <div className="card-part2 d-flex justify-content-between">
              <div className="card-members">
                <h6>Progresso</h6>
                <div className="d-flex gap-1">
                  {<BarraProgresso id_projeto={p.id_projeto} op={1} />}%
                </div>
              </div>
              <div className="card-progress">
                <h6>Status</h6>
                {p.status}
              </div>
            </div>
          </div>
        </Link>
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