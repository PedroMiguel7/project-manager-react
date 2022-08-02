import React, { Component } from "react";
import { Link } from "react-router-dom";
import aim from "../../../assets/icons/aim.svg";
import profile from "../../../assets/icons/Profile.svg";
import api from "../../../api";
import CardDelete from "../../CardDelete";

class Cards extends Component {
  state = {
    projetos: [],
  };
  async componentDidMount() {
    const response = await api.get("/projetos/");
    this.setState({ projetos: response.data });
  }

  exibeprojeto = (props) => {
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
                <h6>Membros</h6>
                <div className="d-flex gap-1">
                  <img src={profile} alt="" />
                  <img src={profile} alt="" />
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
    } else {
      return (
        props.Projetos.map(p => (
        <Link key={p.id_projeto}
          reloadDocument
          to={"/projetos/" + p.id_projeto}
          className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4"
        >
          <div >
            <div className="card-part1 mb-3">
              <div className="d-flex justify-content-between">
                <h2 className="fs-4">{p.nome_projeto}</h2>
                <Link to="/projetos">
                  
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
                <h6>Membros</h6>
                <div className="d-flex gap-1">
                  <img src={profile} alt="" />
                  <img src={profile} alt="" />
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

  render() {
    const { projetos } = this.state;
    return (
      <>
        <this.exibeprojeto Projetos={projetos} />
      </>
    );
  }
}

export default Cards;
