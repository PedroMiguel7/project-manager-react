import React, { Component } from "react";
import { Link } from "react-router-dom";
import aim from '../../../assets/icons/aim.svg'
import profile from '../../../assets/icons/Profile.svg'
//import PropTypes from 'prop-types';
import api from '../../../api';
import TagPessoas from "../../TagPessoas";

class CardPessoas extends Component {
    state = {
        pessoas: [],
    }
    async componentDidMount() {
        const response = await api.get('/pessoas/');

        this.setState({ pessoas: response.data });
    }

    render() {
        const { pessoas } = this.state;
        console.log(pessoas);

        return (
            <>
                {pessoas.map(p => (
                    <Link reloadDocument to={'/pessoas/' + p.id_pessoa} className="Link CardPessoas text-reset text-decoration-none col-lg-6 col-md-12 p-4">
                        <TagPessoas funcao={p.funcao_pessoa}/>
                        <div key={pessoas.id_pessoa} className=" ">
                            <div className="CardPessoas1 mb-3">
                                <h2 class="NomePessoa">{p.nome_pessoa}</h2>
                                
                                <div className="mb-3">
                                    <img src={aim} alt="" /> <span>{p.equipe_id}</span>
                                </div>
                            </div>
                            <div className="CardPessoas2">
                                <div>
                                    <div>15</div>
                                    <div>Projetos</div>
                                </div>
                                <div>
                                    <div>8</div>
                                    <div>Tarefas</div>
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