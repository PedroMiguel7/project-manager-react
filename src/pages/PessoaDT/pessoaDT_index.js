import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
import TagPessoas from "../../components/TagPessoas";

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
                    <h1>{pessoa.nome_pessoa}</h1>
                </div>
            </>
        )
    }
}


export default PessoasDT;