import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
//import Rout from "./routes";
import api from '../../api';
//import PessoasEquipe from "./PeopleEquipe";
import BuscarMembros from "./PeopleEquipe";



class ExibirEquipes extends Component {
    state = {
        equipes: [],
    }

    async componentDidMount() {
        const response = await api.get('/equipes/');
        this.setState({ equipes: response.data })
    }


    render() {
        const { equipes } = this.state;

        return (
            <>
                {equipes.map(p => (
                    <Link to={'/equipes/' + p.id_equipe} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">

                        <div key={equipes.id_equipe}>
                            <div className="card-part1 mb-3">
                                <h2 class="fs-4">
                                    {p.nome_equipe}
                                </h2>
                            </div>
                            <div className="card-part2 d-flex justify-content-between">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">NOME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {p.pessoas &&
                                            p.pessoas.map((r) => (
                                                <tr key={r.id_pessoa}>
                                                    <th scope="row">
                                                        {r.id_pessoa}
                                                    </th>
                                                    <td style={{ color: "#fff" }}>
                                                        {r.nome_pessoa}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </Link>
                ))
                }
            </>

        );
    }

}

export default ExibirEquipes;