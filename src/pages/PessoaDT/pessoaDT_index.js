import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
import TagPessoas from "../../components/TagPessoas";
import aim from '../../assets/icons/aim.svg';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CustomizedAccordion from "../../components/CustomizedAccordion";
import NovaTarefa from '../../components/NovaTarefa';
import HeaderTarefas from '../../components/HeaderTarefas';
import LinearChart from "../../components/LinearChart";
import RendimentoSelect from "./RendimentoSelect"

class PessoasDT extends Component {
    state = {
        pessoa: [],
        tarefas: [],
        rendimentoFilter: 1,
    }
    async componentDidMount() {
        const pessoaPath = window.location.pathname;
        console.log(pessoaPath);
        
        const response = await api.get(pessoaPath);
        const response2 = await api.get(pessoaPath+'/tasks');
        
        this.setState({ pessoa: response.data, tarefas: response2.data });
    }

    handleCallbackRendimento = (childData) => {
        this.setState({rendimentoFilter: childData})
    }

    SelectRendimento = (props) => {
        return (
            <>
                <RendimentoSelect parentCallback = {this.handleCallbackRendimento} />
            </>
        )
    }

    render() {
        const { pessoa } = this.state;
        const { tarefas} = this.state;
        const { rendimentoFilter} = this.state;
        console.log(rendimentoFilter);

        let TotalTarefas;
        if (tarefas === null) {
            TotalTarefas = 0;
        } else {
            TotalTarefas = tarefas.length;
        }
        
        let Concluidas = 0;
        for (var prop in tarefas) {
            if (tarefas[prop].status === "Concluido") {
                //console.log(tarefas[prop].status);
                Concluidas++;
            }
        }

        return (
            <>
                <div className='col-11 offset-1 col-lg-11 offset-lg-1 col-sm-12 offset-sm-1 ps-5 d-flex flex-wrap mt-5 gap-5'>
                    <div className="col-lg-3 col-md-12 col-sm-12 ProfilePessoa d-flex flex-column align-items-center p-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="AvatarBorder d-flex align-items-center justify-content-center">
                                <Avatar className="Avatar"sx={{width: 150, height: 150}} />
                                
                            </div>
                            <div className="AvatarTag">
                                {pessoa.funcao_pessoa}
                            </div>
                            
                            <h1 className="text-center">{pessoa.nome_pessoa}</h1>
                            <div>
                                <img src={aim} /> <span>{pessoa.nome_equipe}</span>
                            </div>
                            <div>
                                {/*<span>Projeto</span>*/}
                            </div>
                        </div>
                        <Divider light orientation="vertical" variant="middle" flexItem />
                        <div className="ResumoPessoa d-flex align-items-center justify-content-center flex-wrap gap-5">
                            <div className="d-flex flex-column text-center">
                                <h5>{TotalTarefas}</h5>
                                <p>Total de Tarefas</p>
                            </div>
                            <div className="d-flex flex-column text-center">
                                <h5>{Concluidas}</h5>
                                <p>Tarefas Concluídas</p>
                            </div>
                        </div>
                        {/*<CustomizedAccordion />*/}

                    </div>
                    
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="row Teste h-lg-50 p-3">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                <h5 className='m-0'>Rendimento</h5>
                                <this.SelectRendimento />    
                            </div>
                            
                            <div className="ChartContainer" >
                              <LinearChart selectValue={rendimentoFilter} />  
                            </div>
                            
                        </div>
                        <div className="Teste row col-12 h-lg-50 p-3 mt-3">
                            
                            <HeaderTarefas />
                            
                            <div className="d-flex justify-content-end">
                                {/*<NovaTarefa />*/}
                            </div>
                        </div>
                    </div>
                 </div>
            </>
        )
    }
}

export default PessoasDT;