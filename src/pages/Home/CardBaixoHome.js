import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
import Button from '@mui/material/Button';

class CardBaixoHome extends Component {
    state = {
        projetosHome: [],
    }
    async componentDidMount() {
        const response = await api.get('/projetos/');

        console.log(response.data);

        this.setState({ projetosHome: response.data });
    }

    render() {
        const { projetosHome } = this.state;

        return (
            <div>
                <div className="CardBaixoHome pt-1 ps-2 pe-2">
                    <div className="LeftOptions col-lg-2 mt-sm-2">
                        <span className="me-2 ms-4 mt-3">Projetos</span>
                    </div>
                    <table class="table" style={{ color: 'white' }}>
                        <thead>
                            <tr className="LeftOptions">
                                <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                <th scope="col" style={{ width: '20%' }}>Titulo</th>
                                <th scope="col" style={{ width: '40%' }}>Progresso</th>
                                <th scope="col" style={{ width: '20%' }}>Status</th>
                                <th scope="col" style={{ width: '10%' }}></th>
                            </tr>
                        </thead>
                        <tbody className="">
                                {projetosHome.map(p => (
                                    <tr key={projetosHome.id_projeto}>
                                        <th scope="row">{p.id_projeto}</th>
                                        <td>{p.nome_projeto}</td>
                                        <td>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                            </div>
                                        </td>
                                        <td>{p.status}</td>
                                        <td><Link to={'/projeto/' + p.id_projeto} className="text-reset text-decoration-none"><Button style={{
                                            color: "#F4F5FA",
                                            background: "#F46E27"
                                        }}
                                            variant="contained" >DETALHAR</Button></Link></td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>

                </div>
            </div>
        )
    }
}


export default CardBaixoHome;