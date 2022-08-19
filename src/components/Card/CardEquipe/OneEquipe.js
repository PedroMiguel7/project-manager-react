import React from "react";
import { Link } from "react-router-dom";
import TeamNotFound from "../../../assets/empty-states/team-not-found.svg";
import EditaEquipe from "../CardEquipe/EdiçãoEquipe/EditaEquipe";

export default function ExibirEquipes(props) {
    if (props.equipes !== null) {
        return (
            <>
                {props.equipes.map(p => (
                    <Link to={'/equipes/' + p.id_equipe} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">
                        <div key={p.id_equipe}>
                            <div className="card-part1 mb-3">
                                <div className="d-flex justify-content-between">
                                    <h2 className="fs-4">{p.nome_equipe}</h2>
                                    <Link to="/equipes">
                                            <EditaEquipe id_equipe={p.id_equipe} equipinha={p} atualiza={props.atualiza} />
                                    </Link>
                                </div>
                            </div>
                            <div className="card-part2 d-flex justify-content-between" style={{maxHeight:'100px', scroll:'auto'}}>
                                <table class="table" >
                                    <thead>
                                        <tr>
                                            <th scope="col">NOME</th>
                                            <th scope="col">FUNÇÃO</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {p.pessoas &&
                                            p.pessoas.map((r) => (
                                                <tr key={r.id_pessoa}>
                                                    <td scope="row">
                                                        {r.nome_pessoa}
                                                    </td>
                                                    <td style={{ color: "#fff" }}>
                                                        {r.funcao_pessoa}
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