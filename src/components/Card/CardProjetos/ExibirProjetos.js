import React, { Component } from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg'
import profile from '../../../assets/icons/Profile.svg'
import api from '../../../api';

class Cards extends Component {
    state = {
        projetos: [],
        equipesEsq: [],
    }
    async componentDidMount() {
        const response = await api.get('/projetos/');
        const response2 = await api.get('/equipes/');

        this.setState({ projetos: response.data });
        this.setState({ equipesEsq: response2.data });


    }

    render() {
        const { projetos } = this.state;
        const { equipesEsq } = this.state;


        return (
            <>
                {projetos.map(p => (
                    <Link to={'/projetos/' + p.id_projeto} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">

                        <div key={projetos.id_projeto}>
                            <div className="card-part1 mb-3">
                                <h2 class="fs-4">{p.nome_projeto}</h2>
                                <p className="description overflow-hidden">{p.descricao_projeto}</p>
                                <div className="mb-3">
                                    <img src={aim} alt="" />
                                    <span>
                                        {p.equipe_id}
                                    </span>
                                </div>
                            </div>
                            <div className="card-part2 d-flex justify-content-between">
                                <div className="card-members">
                                    <h6>Membros</h6>
                                    <div className='d-flex gap-1'>
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
                ))}
            </>
        )
    }
}


export default Cards;