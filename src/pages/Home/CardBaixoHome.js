import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
import Button from '@mui/material/Button';
import BarraProgresso from "../../components/Card/CardProjetos/BarraDeProgresso";

class CardBaixoHome extends Component {
    state = {
        projetosHome: [],
    }
    async componentDidMount() {
        const response = await api.get('/projetos/');

        this.setState({ projetosHome: response.data });
    }

    DeletaProjeto = (id_projeto) => {
        fetch("https://golang-posgre-brisanet.herokuapp.com/projetos/"+id_projeto, {method: "DELETE"})
        .then(resposta => {
            if(resposta.ok){
                <CardBaixoHome/>
            }
        })
    }

    render() {
        const { projetosHome } = this.state;

        return (
            <>
                <div className="CardBaixoHome pt-1 ps-2 pe-2 ">
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
                                <th scope="col" style={{ width: '5%' }}></th>
                                <th scope="col" style={{ width: '5%' }}></th>
                            </tr>
                        </thead>
                        <tbody className="">
                                {projetosHome.map(p => (
                                    <tr key={projetosHome.id_projeto}>
                                        <th scope="row">{p.id_projeto}</th>
                                        <td className="">{p.nome_projeto}</td>
                                        <td>
                                            <BarraProgresso id_projeto={p.id_projeto}/>
                                        </td>
                                        <td>{p.status}</td>
                                        <td className="d-flex"><Link to={'/projetos/' + p.id_projeto} className="text-reset text-decoration-none"><Button className=" md-4" style={{
                                            color: "#F4F5FA",
                                            background: "#F46E27"
                                        }}
                                            variant="contained" >DETALHAR</Button></Link>
                                            </td>
                                            <td><Button  style={{color: "#F4F5FA", background: "red"}} variant="danger" onClick={() => this.DeletaProjeto(p.id_projeto)}>EXCLUIR</Button></td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>

                </div>
            </>
        )
    }
}


export default CardBaixoHome;