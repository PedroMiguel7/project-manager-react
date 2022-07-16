import React, { Component } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const equipePath = window.location.pathname;
console.log(equipePath);

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipesEsq: [],
        equipe: [],
    }
    async componentDidMount() {
        const response3 = await api.get(equipePath);
        const response = await api.get('/projetos/');
        const response2 = await api.get(equipePath +'/pessoas/');

        this.setState({ projetos: response.data });
        this.setState({ equipesEsq: response2.data });
        this.setState({ equipe: response3.data });

    }

    render() {
        const { projetos } = this.state;
        const { equipesEsq } = this.state;
        const { equipe } = this.state;


        return (
            <>
                <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <div>
                        <HeaderDt pagina="EQUIPE" titulo="" Status='' />
                    </div>
                <div className="d-flex">
                    <div className="col-7" style = {{backgroundColor: "#21222D"}}>
                        <div className="LeftOptions col-lg-2 mt-sm-2">
                            <span className="me-2 ms-4 mt-3">Equipes</span>
                        </div>
                        <table class="table" style={{ color: 'white' }}>
                            <thead>
                                <tr className="LeftOptions">
                                    <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                    <th scope="col" style={{ width: '25%' }}>Nome</th>
                                    <th scope="col" style={{ width: '35%' }}>função</th>
                                    <th scope="col" style={{ width: '40%' }}>ID - Tarefas</th>
                                    <th scope="col" style={{ width: '5%' }}></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {projetos.map(p => (
                                    <tr key={projetos.id_projeto}>
                                        <th scope="row">{p.id_projeto}</th>
                                        <td className="">{p.nome_projeto}</td>
                                        <td>
                                            <div class="progress mt-2" style={{ backgroundColor: "gray" }}>
                                                <div class="progress-bar" role="progressbar" style={{ backgroundColor: "#28AEF3", width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
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
                    <div className="col-5 ms-4">
                        estatisticas
                    </div>
                </div>
                </main>
            </>
        )
    }
}


export default equipeDT_index;