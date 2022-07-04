import React, { Component } from "react";
//import Rout from "./routes";
import api from '../../api';


class PessoasEquipe extends Component {
    state = {
        pessoas: [],
    }
    async componentDidMount() {
        const pessoasEquipe = await api.get('/equipes/' + p.id_equipe + '/pessoas')
        console.log(pessoasEquipe.data);

        this.setState({ pessoas: pessoasEquipe.data });
    }

    render() {
        const { pessoas } = this.state;
        return (
            <div>
                {pessoas.map(p => (
                    <ul className=''>
                        <li>{ }</li>
                    </ul>
                ))}
            </div>
        );

    };
}

export default PessoasEquipe