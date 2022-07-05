import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Rout from "./routes";
import api from '../../api';
//import PessoasEquipe from "./PeopleEquipe";

class ExibirEquipes extends Component {

    state = {
        equipes: [],
        //membros: [],
    }
    async componentDidMount() {

        const response = await api.get('/equipes/');
        //const ponse = await api.get('/equipes/membros');

        //console.log(response.data);

        this.setState({ equipes: response.data });
       // this.setState({ membros: ponse.data });
    }


    render() {
        const { equipes } = this.state;
        //const { membros } = this.state;


        return (
            <div>
                {equipes.map(p => (
                    <Link to={'/equipes/' + p.id_equipe} className="Link text-reset text-decoration-none ">
                        <div className="col-lg-3 col-md-12 Card p-4">
                            <div key={equipes.id_equipe}>
                                <div className="card-part1 mb-3">
                                    <h2 class="fs-4">
                                        {p.nome_equipe}
                                    </h2>
                                </div>
                                <div className="card-part2 d-flex justify-content-between">
                                    <div className="card-members">
                                        <h6>Membros</h6>
                                        <div><table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">NOME</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        a
                                                    </th>
                                                    <td>
                                                        a
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    <div className="card-progress">
                                        <h6>Total: { }</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div >

        );
    }

}

export default ExibirEquipes;