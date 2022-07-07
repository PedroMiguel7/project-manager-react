import HeaderDt from "../../components/HeaderDt"
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel'
import Table from "../../components/Table";
import React, { Component } from "react";
import api from '../../api';

const projetoPath = window.location.pathname;
console.log(projetoPath);

class ProjetoDT extends Component {
    state = {
        projetos: [],
    }
    async componentDidMount() {
        const response = await api.get(projetoPath);

        this.setState({ projetos: response.data });
    }

    render() {
        const { projetos } = this.state;

        return(
            <>
                {projetos.map(p => (
                <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <HeaderDt pagina= "Projeto" titulo={p.nome_projeto} status={p.status}/>
                    <div className="row gap-3">
                        <div className="CardDT InfoProjeto row py-4">
                            <div className="col-12 col-lg-5 me-4">
                                <h4>Descrição</h4>
                                <p style={{textAlign: 'justify', fontWeight: 300, lineHeight: '1.6em'}}>{p.descricao_projeto}</p>
                            </div>
                            <div className="col-12 col-lg-6 ms-5">
                                <div>
                                    <div>
                                        <h4 className="text-center">Funções</h4>
                                        <div className="d-flex justify-content-between flex-wrap col-md-11">
                                            <div>
                                                <h6 style={{color: "#F46E27"}}>Gerente de Projeto</h6>
                                                <ul style={{ fontWeight: 300}}>
                                                    <li>Fulano de Tal</li>
                                                </ul>
                                            </div>
    
                                            <div>
                                                <h6 style={{color: "#F46E27"}}>Dev. BackEnd</h6>
                                                <ul style={{ fontWeight: 300}}>
                                                    <li>Fulano de Tal</li>
                                                    <li>Fulano de Tal</li>
                                                </ul>
                                            </div>
    
                                            <div>
                                                <h6 style={{color: "#F46E27"}}>Dev. FrontEnd</h6>
                                                <ul style={{ fontWeight: 300}}>
                                                    <li>Fulano de Tal</li>
                                                    <li>Fulano de Tal</li>
                                                </ul>
                                            </div>
    
                                            <div>
                                                <h6 style={{color: "#F46E27"}}>Tester</h6>
                                                <ul style={{ fontWeight: 300}}>
                                                    <li>Fulano de Tal</li>
                                                    <li>Fulano de Tal</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
    
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                        <h6>Progresso</h6>
                                        <CircularProgressWithLabel value="20" />
                                        </div>
                                        <div className="Resumo col-md-12 col-lg-9 offset-lg-4 justify-content-center ">
                                            <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                                                <h6 >11</h6>
                                                <strong>
                                                <p className="ms-4 ">Total de <br/> Equipes</p>    
                                                </strong>    
                                            </div>
                                            <div className="row col-12">
                                                <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                                    <h6 className="col">60</h6>
                                                    <strong>
                                                    <p className="text-center col">Total de <br/> Projetos</p>
                                                    </strong>
                                                </div>
                                                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                                    <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                                        <h6 className="col-4 md-5" style={{fontFamily: "'Roboto Mono', monospace"}}>13</h6>
                                                        <strong>
                                                        <p className="ms-2">Projetos em Andamento</p>
                                                        </strong>
                                                    </div>
                                                    <div className="TarefasConc d-flex align-items-center justify-content-center">
                                                        <h6 className="col-4 md-5" style={{fontFamily: "'Roboto Mono', monospace"}}>47</h6>
                                                        <strong>
                                                        <p className=" ms-2">Projetos Concluídos</p>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
    
                        <div className="row d-flex gap-4">
                            <div className="CardDT col">
                                <Table />
                            </div>
                            <div className="CardDT col">
                                <Table />
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
