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
        PessoasEquipe: [],
    }
    async componentDidMount() {
        var url = equipePath;
        const response3 = await api.get(equipePath);
        const response2 = await api.get(url+'/pessoas');
        const response = await api.get('/projetos/');

        
        this.setState({ projetos: response.data });
        this.setState({ equipesEsq: response3.data });
        this.setState({ PessoasEquipe: response2.data });
        
    }
    
    render() {
        const { projetos } = this.state;
        const { equipesEsq } = this.state;
        const { PessoasEquipe } = this.state;
        
        console.log(PessoasEquipe)

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
                                {PessoasEquipe.map(p => (
                                    <tr key={PessoasEquipe.id_pessoa}>
                                        <th scope="row">{p.id_pessoa}</th>
                                        <td className="">{p.nome_pessoa}</td>
                                        <td>{p.funcao_pessoa}</td>
                                        <td></td>
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