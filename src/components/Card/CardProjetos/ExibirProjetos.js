import React from "react";
import { Link } from "react-router-dom";
import aim from "../../../assets/icons/aim.svg";
//import profile from "../../../assets/icons/Profile.svg";
import EditaProjeto from "../CardProjetos/EdiçãoProjeto";
import BarraProgresso from "../CardProjetos/BarraDeProgresso";
import CardSkeleton from "./Skeleton";

export default function Cards(props) {
  if (props.Projetos === null) {
    return (
      <div className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">
        <div>
          <div className="card-part1 mb-3">
            <div className="d-flex justify-content-between">
              <h2 className="fs-4">Cadastre um projeto</h2>
            </div>
            <p className="description overflow-hidden">
              não tem descrição se não tem projeto
            </p>
            <div className="mb-3">
              <img src={aim} alt="" />
              <span>sem equipe também, por motivos já ditos.</span>
            </div>
          </div>
          <div className="card-part2 d-flex justify-content-between">
            <div className="card-members">
              <h6>Progresso</h6>
              <div className="d-flex gap-1">
                irreal
              </div>
            </div>
            <div className="card-progress">
              <h6>Status</h6>
              inexistente
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.home === "home") {
    props.Projetos.reverse();
    return (
      props.Projetos.map(p => (
        <Link key={p.id_projeto}
          reloadDocument
          to={"/projetos/" + p.id_projeto}
          className="Link text-reset text-decoration-none col-lg-3 col-md-12 Cardh p-3"
        >
          <div >
            <div className="card-part1 mb-3">
              <div className="d-flex justify-content-between">
                <h2 className="fs-4">{p.nome_projeto}</h2>
                <Link to="/projetos">
                  <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
                </Link>
              </div>
              <p className="description overflow-hidden">
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
  } else if (props.Projetos.length === 0)  {
    return (
      props.Projetos.map(p => (
      <CardSkeleton />
      ))
    )
  } else {
    props.Projetos.reverse();
    
    return (
        props.Projetos.map(p => (
          <Link key={p.id_projeto}
            reloadDocument
            to={"/projetos/" + p.id_projeto}
            className="Link text-reset text-decoration-none col-lg-4 col-md-12 Card p-3"
          >
            <div >
              <div className="card-part1 mb-3">
                <div className="d-flex justify-content-between">
                  <h2 className="fs-4">{p.nome_projeto}</h2>
                  <Link to="/projetos">
                    <EditaProjeto id_projeto={p.id_projeto} projetinho={p} equipe_id={p.equipe_id} atualiza={props.atualiza} />
                  </Link>
                </div>
                <p className="DescricaoCardProjeto">
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
  }
};