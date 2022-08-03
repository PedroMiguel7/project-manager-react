import HeaderDt from "../../components/HeaderDt"
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel'
import Table from "../../components/Table";
import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import BasicModalTarefa from "../Tarefas/NewTarefa/AddTarefa";
import { breakpoints } from "@mui/system";
import TarefasMenu from "../../components/TarefasMenu";


const projetoPath = window.location.pathname;

class ProjetoDT extends Component {
    state = {
        projetos: [],
        PessoasEquipe: [],
        tarefasPJ: [],

    }
    async componentDidMount() {
        const response = await api.get(projetoPath);
        const response3 = await api.get(projetoPath + "/tasks");

        this.setState({ projetos: response.data });
        this.setState({ tarefasPJ: response3.data })
    }

    BuscarMembrosFunc = (props) => {
        const [pessoas, setPessoas] = useState([]);
        useEffect(() => {
            const fetchEquipe = async () => {
                const response2 = await api.get('/equipes/' + props.equipe_id + '/pessoas')
                setPessoas(response2.data)
            }
            fetchEquipe()
        }, []);
        let totalMembros = 0;
        if (pessoas.filter(pessoas => pessoas.funcao_pessoa === `${props.funcao_pessoa}`) === null) {
            return (
                <li>sem pessoa</li>
            );
        } else {
            return (
                pessoas.filter(pessoas => pessoas.funcao_pessoa === `${props.funcao_pessoa}`).map(f => (
                    <li>{f.nome_pessoa}</li>
                ))
            );
        }
    }

    MostraTarefas = (props) => {
        if (props.tarefasPJ !== null) {
            return (
                props.tarefasPJ.map(p => (
                    <tr key={p.id_task}>
                        <th scope="row">{p.id_task}</th>
                        <td className="">{p.descricao_task}</td>
                        <td>{p.nome_pessoa}</td>
                        <td>{p.prioridade}</td>
                        <td>{p.status}</td>
                        <td></td>
                    </tr>
                ))
            )
        } else {
            return (
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }
    }

    MostraTarefasCard = (props) => {
        if (props.tarefasPJ !== null) {
            var tarefas = props.tarefasPJ
            if (tarefas.filter(tarefas => tarefas.status === `${props.status}`) === null) {
                return (
                    <div></div>
                )
            } else {
                return (
                    tarefas.filter(tarefas => tarefas.status === `${props.status}`).map(f => (
                        <div className="card mt-3" key={f.id_task} style={{ width: "14rem", backgroundColor: "var(--preto-medio)", borderTop: "13px solid", borderColor: f.prioridade === 0 ? "#49b675" : f.prioridade === 1 ? "#ffbf40" : f.prioridade === 2 ? "#ed5269" : "gray" }}>
                            <div className="card-body" style={{}}>
                                <div className="d-flex justify-content-between" style={{}}>
                                    <h5 className="card-title" style={{ color: "" }}>{f.descricao_task}</h5>
                                    <TarefasMenu id_task={f.id_task} equipe_id={props.equipe_id}/>
                                </div>
                                <p className="card-text" style={{ color: "" }}>{f.nome_pessoa}</p>
                            </div>
                        </div>
                    ))
                )
            }
        }
    }


    render() {
        const { projetos } = this.state;
        const { tarefasPJ } = this.state;

        var totalDetasks = 0;
        var TotalTaksConcluidas = 0;
        var TotalTasksAndamento = 0;
        if (tarefasPJ !== null) {
            totalDetasks = tarefasPJ.length;
            if (tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Concluido") !== null) {
                TotalTaksConcluidas = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Concluido").length
            }

            if (tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Andamento") !== null) {
                TotalTasksAndamento = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Andamento").length;
            }
        }

        return (
            <>
                {projetos.map(p => (
                    <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5' key={p.id_projeto}>
                        <HeaderDt pagina="Projeto" titulo={p.nome_projeto} status={p.status} />

                        <div className="d-flex row">
                            <div className="col-9 d-flex justify-content-between">
                                <div className="col-2 TPtrello">
                                    <h4 className="text-center mt-2">A fazer</h4>
                                    <div className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                                        <this.MostraTarefasCard tarefasPJ={tarefasPJ} status={'A Fazer'} equipe_id={p.equipe_id}/>
                                    </div>
                                </div>
                                <div className="col-2 TPtrello">
                                    <h4 className="text-center mt-2">Em Andamento</h4>
                                    <div className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                                        <this.MostraTarefasCard tarefasPJ={tarefasPJ} status={'Em Andamento'} equipe_id={p.equipe_id}/>
                                    </div>
                                </div>
                                <div className="col-2 TPtrello">
                                    <h4 className="text-center mt-2">Em Teste</h4>
                                    <div className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                                        <this.MostraTarefasCard tarefasPJ={tarefasPJ} status={'Em Teste'} equipe_id={p.equipe_id}/>
                                    </div>
                                </div>
                                <div className="col-2 TPtrello">
                                    <h4 className="text-center mt-2">Concluida</h4>
                                    <div className="scrollar d-flex flex-column align-items-center" style={{ height: "745px" }}>
                                        <this.MostraTarefasCard tarefasPJ={tarefasPJ} status={'Concluida'} equipe_id={p.equipe_id}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row col-3 TPtrello2 justify-content-between ms-1">
                                <div className="row align-items-start mt-3">
                                    <div>
                                        <h4>Descrição</h4>
                                        <p style={{ textAlign: 'justify', fontWeight: 300, lineHeight: '1.6em' }}>{p.descricao_projeto}</p>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <h6>Progresso</h6>
                                        <CircularProgressWithLabel value="20" id_projeto={p.id_projeto} />
                                    </div>
                                </div>

                                <div className="row col-12 align-items-center">
                                    <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                        <h6 className="col">{totalDetasks}</h6>
                                        <strong>
                                            <p className="text-center col">Total de <br /> Tarefas</p>
                                        </strong>
                                    </div>
                                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                        <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                            <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{TotalTasksAndamento}</h6>
                                            <strong>
                                                <p className="ms-2">Tarefas em Andamento</p>
                                            </strong>
                                        </div>
                                        <div className="TarefasConc d-flex align-items-center justify-content-center">
                                            <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{TotalTaksConcluidas}</h6>
                                            <strong>
                                                <p className=" ms-2">Tarefas Concluídas</p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <h4 className="container text-center">Funções</h4>
                                    <div className="container ">
                                        <div className="d-flex text-center justify-content-between">
                                            <div className="">
                                                <div className="">
                                                    <h6 style={{ color: "#F46E27" }}>Gerente de Projeto</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Gerente de Projeto' />
                                                    </ul>
                                                </div>

                                                <div className="">
                                                    <h6 style={{ color: "#F46E27" }}>Dev. BackEnd</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Back-End' />
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Dev. FrontEnd</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Front-End' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Tester</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Tester' />
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className="row gap-3 mt-10">
                            <div className="CardDT InfoProjeto row py-4 mt-4">
                                <div className="col-12 col-lg-5 me-4">
                                    <h4>Descrição</h4>
                                    <p style={{ textAlign: 'justify', fontWeight: 300, lineHeight: '1.6em' }}>{p.descricao_projeto}</p>
                                </div>
                                <div className="col-12 col-lg-6 ms-5">
                                    <div>
                                        <div>
                                            <h4 className="text-center">Funções</h4>
                                            <div className="d-flex justify-content-between flex-wrap col-md-11">
                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Gerente de Projeto</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Gerente de Projeto' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Dev. BackEnd</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Back-End' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Dev. FrontEnd</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Front-End' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Tester</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Tester' />
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <h6>Progresso</h6>
                                                <CircularProgressWithLabel value="20" id_projeto={p.id_projeto} />
                                            </div>
                                            <div className="Resumo col-md-12 col-lg-9 offset-lg-4 justify-content-center ">
                                                <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                                                    {/*<h6><this.BuscarMembros equipe_id = {p.equipe_id}/></h6>*/}
                                                    <strong>
                                                        <p className="ms-4 ">Total de <br />Colaboradores</p>
                                                    </strong>
                                                </div>
                                                <div className="row col-12">
                                                    <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                                        <h6 className="col">{totalDetasks}</h6>
                                                        <strong>
                                                            <p className="text-center col">Total de <br /> Tarefas</p>
                                                        </strong>
                                                    </div>
                                                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                                        <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                                            <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{TotalTasksAndamento}</h6>
                                                            <strong>
                                                                <p className="ms-2">Tarefas em Andamento</p>
                                                            </strong>
                                                        </div>
                                                        <div className="TarefasConc d-flex align-items-center justify-content-center">
                                                            <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{TotalTaksConcluidas}</h6>
                                                            <strong>
                                                                <p className=" ms-2">Tarefas Concluídas</p>
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-flex gap-4" style={{ maxHeight: "400px" }}>
                                <div className="CardDT col">
                                    <div className="LeftOptions col-lg-2 mt-sm-2">
                                        <span className="me-2 ms-4 mt-3">Equipe</span>
                                    </div>
                                    <table className="table" style={{ color: 'white' }}>
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
                                            {/*<this.MostrarEquipe equipe_id = {p.equipe_id}/>*/}
                                        </tbody>
                                        <tfoot>
                                            <tr>

                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="CardDT col">
                                    <div className="LeftOptions col-lg-2 mt-sm-2">
                                        <span className="me-2 ms-4 mt-3">Tarefas</span>
                                    </div>
                                    <table class="table" style={{ color: 'white' }}>
                                        <thead>
                                            <tr className="LeftOptions">
                                                <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                                <th scope="col" style={{ width: '30%' }}>Descricao</th>
                                                <th scope="col" style={{ width: '20%' }}>Pessoa</th>
                                                <th scope="col" style={{ width: '10%' }}>Prioridade</th>
                                                <th scope="col" style={{ width: '20%' }}>status</th>
                                                <th scope="col" style={{ width: '5%' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody className="" style={{ maxHeight: "400px", overflowy: 'auto' }}>
                                            <this.MostraTarefas tarefasPJ={tarefasPJ} />
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <BasicModalTarefa id_projeto={p.id_projeto} equipe_id={p.equipe_id} />
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </main>
                ))}
            </>
        )
    }
}

export default ProjetoDT;
