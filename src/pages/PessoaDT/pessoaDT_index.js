import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
import TagPessoas from "../../components/TagPessoas";
import aim from '../../assets/icons/aim.svg'
import Avatar from '@mui/material/Avatar';

const pessoaPath = window.location.pathname;
console.log(pessoaPath);

class PessoasDT extends Component {
    state = {
        pessoa: [],
    }
    async componentDidMount() {
        const response = await api.get(pessoaPath);

        this.setState({ pessoa: response.data });
    }

    render() {
        const { pessoa } = this.state;
        console.log(pessoa);

        return (
            <>
                <div className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <div className="col-lg-2 ProfilePessoa mt-5 d-flex flex-column align-items-center p-4">
                        <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                        <h6 className="text-center">{pessoa.funcao_pessoa}</h6>
                        <h1 className="text-center">{pessoa.nome_pessoa}</h1>
                        <div className="mb-3">
                            <img src={aim} alt="" /> <span>{pessoa.nome_equipe}</span>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default PessoasDT;