import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipe: [],
        PessoasEquipe: [],
    }
    async componentDidMount() {
        var equipePath = window.location.pathname;
        
        var url = equipePath;
        const response = await api.get('/projetos/');
        const response2 = await api.get(url+'/pessoas');
        const response3 = await api.get(equipePath);

        
        this.setState({ projetos: response.data });
        this.setState({ PessoasEquipe: response2.data });
        this.setState({ equipe: response3.data });
        
    }

    BuscarMembros = (props) => {
        const [pessoas, setPessoas] = useState([]);
        const url = '/equipes/' + props.equipe_id + '/pessoas';
        useEffect(() => {
            const fetchEquipe = async () => {
                const response2 = await api.get(url)
                setPessoas(response2.data)
            }
            fetchEquipe()
        });
        console.log(setPessoas)
        let totalMembros = pessoas.length;
        if(totalMembros === null){
            totalMembros = 0;
        }
        return (
            totalMembros
        );
    }
    
    ImprimeMembros = (props) => {
        var teste = props.PessoasEquipe;
        if( teste === null){
            return(
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            );
        } else{
            return(
            props.PessoasEquipe.map(p => (
                <tr key={teste.id_pessoa}>
                    <th scope="row">{p.id_pessoa}</th>
                    <td className="">{p.nome_pessoa}</td>
                    <td>{p.funcao_pessoa}</td>
                    <td></td>
                    <td><Link to={'/pessoas/' + p.id_pessoa} className="text-reset text-decoration-none"><Button style={{
                        color: "#F4F5FA",
                        background: "#F46E27"
                    }}
                        variant="contained" >DETALHAR</Button></Link></td>
                </tr>
            ))
            );
        }
    }
    render() {
        const { projetos } = this.state;
        const { equipe } = this.state;
        const { PessoasEquipe } = this.state;

        var totalMembros = 0;
        if(PessoasEquipe !== null){
            totalMembros =  PessoasEquipe.length;
        }

        var totalDetasks = 0;
        if(totalDetasks === null){
            totalDetasks = 0;
        }
        var TotalTaksConcluidas = 0;
        if(TotalTaksConcluidas === null){
            TotalTaksConcluidas = 0;
        }
        var TotalTasksAndamento = 0;
        if(TotalTasksAndamento === null){
            TotalTasksAndamento = 0;
        }


        return (
            <>v
                <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <div>
                        <HeaderDt pagina="EQUIPE" titulo={equipe.nome_equipe} Status='' />
                    </div>
                <div className="d-flex" style={{height: "650px"}}>
                    <div className="col-7" style = {{backgroundColor: "#21222D"}}>
                        <div className="LeftOptions col-lg-2 mt-sm-2">
                            <span className="me-2 ms-4 mt-3">Membros</span>
                        </div>
                        <table class="table" style={{ color: 'white' }}>
                            <thead>
                                <tr className="LeftOptions">
                                    <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                    <th scope="col" style={{ width: '20%' }}>Nome</th>
                                    <th scope="col" style={{ width: '35%' }}>função</th>
                                    <th scope="col" style={{ width: '40%' }}>ID - Tarefas</th>
                                    <th scope="col" style={{ width: '5%' }}></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <this.ImprimeMembros PessoasEquipe = {PessoasEquipe}/>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-5 ms-4" style={{background: "#21222D", }}>
                        <div className="Resumo col-md-12 col-lg-9 align-items-center justify-content-center">
                                            <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                                                <h6>{totalMembros}</h6>
                                                <strong>
                                                <p className="ms-4 ">Total de <br/>Colaboradores</p>    
                                                </strong>
                                            </div>
                                            <div className="row col-12">
                                                <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                                    <h6 className="col">{totalDetasks}</h6> 
                                                    <strong>
                                                    <p className="text-center col">Total de <br/> Tarefas</p>
                                                    </strong>
                                                </div>
                                                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                                    <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                                        <h6 className="col-4 md-5" style={{fontFamily: "'Roboto Mono', monospace"}}>{TotalTasksAndamento}</h6>
                                                        <strong>
                                                        <p className="ms-2">Tarefas em Andamento</p>
                                                        </strong>
                                                    </div>
                                                    <div className="TarefasConc d-flex align-items-center justify-content-center">
                                                        <h6 className="col-4 md-5" style={{fontFamily: "'Roboto Mono', monospace"}}>{TotalTaksConcluidas}</h6>
                                                        <strong>
                                                        <p className=" ms-2">Tarefas Concluídas</p>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 ">aa</div>
                    </div>
                </div>
                </main>
            </>
        )
    }
}


export default equipeDT_index;