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
                    <Link to={'/pessoas/' + p.id_pessoa} className="Link CardPessoas text-reset text-decoration-none col-lg-6 col-md-12 p-4">
                        <div key={pessoas.id_pessoa} className=" ">
                            <div className="CardPessoas1 mb-3">
                                <h2 class="fs-4">{p.nome_pessoa}</h2>
                                
                                <div className="mb-3">
                                    <img src={aim} alt="" /> <span>{p.id_equipe}</span>
                                </div>
                            </div>
                            <div className="CardPessoas2 d-flex justify-content-between">
                                <div className="CardResumo">

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