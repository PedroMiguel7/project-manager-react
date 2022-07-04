import React, { Component } from "react";
//import Rout from "./routes";
import api from '../../api';
import ExibirEquipes from "./OneEquipe";



class PessoasEquipe extends Component {
    state = {
        pessoas: [],
    }
    async componentDidMount() {
        const pessoasEquipe = await api.get('/equipes/' + (ExibirEquipes).equipes.id_equipe + '/pessoas')
        console.log(pessoasEquipe.data);

        this.setState({ pessoas: pessoasEquipe.data });
    }

    render() {
        const { pessoas } = this.state;
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">NOME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pessoas.map(p => (
                            <tr>
                                <th scope="row">
                                    {p.id_pessoa}
                                </th>
                                <td>
                                    {p.nome_pessoa}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        );
    }

}

export default PessoasEquipe