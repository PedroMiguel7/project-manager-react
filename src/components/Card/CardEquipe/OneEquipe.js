import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamNotFound from "../../../assets/empty-states/team-not-found.svg";

export default function ExibirEquipes(props) {
    if (props.equipes !== null) {
        return (
            <>
                {props.equipes.map(p => (
                    <Link to={'/equipes/' + p.id_equipe} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">
                        <div key={props.equipes.id_equipe}>
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
    } else {
        return (
            <>
                <div className="EmptyStateContainer">
                    <img src={TeamNotFound} />
                    <h5>
                        Ainda não foi criada nenhuma equipe.
                    </h5>    
                </div>
            </>
        )
    }
}