import React, { Component } from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg'
import profile from '../../../assets/icons/Profile.svg'
//import PropTypes from 'prop-types';
import api from '../../../api';

class CardPessoas extends Component {
    state = {
        pessoas: [],
    }
    async componentDidMount() {
        const response = await api.get('/pessoas/');

        console.log(response.data);

        this.setState({ pessoas: response.data });
    }

    render() {
        const { pessoas } = this.state;

        return (
            <>
                {pessoas.map(p => (
                    <Link to={'/pessoas/' + p.id_pessoa} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">
                        <div key={pessoas.id_pessoa}>
                            <div className="card-part1 mb-3">
                                <h2 class="fs-4">{p.nome_pessoa}</h2>
                                <p className="description overflow-hidden">{p.funcao_pessoa}</p>
                                <div className="mb-3">
                                    <img src={aim} alt="" /> <span>{p.id_equipe}</span>
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
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        )
    }
}


export default CardPessoas;