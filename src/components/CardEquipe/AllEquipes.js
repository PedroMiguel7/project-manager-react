import React, { Component } from "react";
//import Rout from "./routes";
import api from '../../api';

class AllEquipes extends Component {

    state = {
        equipes: [],
    }
    async componentDidMount() {
        const response = await api.get('/equipes/');

        this.setState({ equipes: response.data });
    }

    render() {
        const { equipes } = this.state;

        return (
            <div>
                {console.log(equipes)};
                {equipes.map(equipes => (
                    <li key={equipes.nome_equipe}>
                        {console.log(equipes)}
                    </li>
                ))};
            </div>
        );
    };
};

export default AllEquipes