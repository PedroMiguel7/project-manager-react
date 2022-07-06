import React, { Component } from "react";
import api from '../../api';

class CardLateralDireitoHome extends Component {
    state = {
        projetosHomeLateral: [],
        concluidos : [],
        andamento : [],
        totalequipes: [],
    }
    async componentDidMount() {
        const response = await api.get('/projetos/');
        const response2 = await api.get('/projetos/status/Concluido');
        const response3 = await api.get('/projetos/status/Em Andamento');
        const response4 = await api.get('/equipes/');
        
        this.setState({ projetosHomeLateral: response.data });
        this.setState({ concluidos: response2.data });
        this.setState({ andamento: response3.data });
        this.setState({ totalequipes: response4.data });
    }

    render() {
        const { projetosHomeLateral } = this.state;
        const { concluidos } = this.state;
        const { andamento } = this.state;
        const { totalequipes } = this.state;

        return (
            <>
                <div >
                    <div >
                        <div
                            className="col-4 cardLateralHome d-flex justify-content-center col-lg-12 col-md-12 p-4 mt-4 "
                        >
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="Resumo col-md-12 col-lg-12 justify-content-center ">
                                    <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                                        <h6 >{totalequipes.length}</h6>
                                        <strong>
                                            <p className="ms-4 ">Total de <br /> Equipes</p>
                                        </strong>
                                    </div>
                                        <div className="row col-12">
                                            <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                                <h6 className="col">{projetosHomeLateral.length}</h6>
                                                <strong>
                                                    <p className="text-center col">Total de <br /> Projetos</p>
                                                </strong>
                                            </div>
                                            <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                                <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                                    <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{andamento.length}</h6>
                                                    <strong>
                                                        <p className="ms-2">Projetos em Andamento</p>
                                                    </strong>
                                                </div>
                                                <div className="TarefasConc d-flex align-items-center justify-content-center">
                                                    <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{concluidos.length}</h6>
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

            </>
        )
    }
}


export default CardLateralDireitoHome;