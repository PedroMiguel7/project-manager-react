import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import api from '../../api';
import TagPessoas from "../../components/TagPessoas";
import aim from '../../assets/icons/aim.svg';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CustomizedAccordion from "../../components/CustomizedAccordion";
import TabelaTarefas from "../../components/TabelaTarefas";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import NovaTarefa from '../../components/NovaTarefa';
import HeaderTarefas from '../../components/HeaderTarefas';

class PessoasDT extends Component {
    state = {
        pessoa: [],
        tarefas: [],
        //projetos: [],
    }
    async componentDidMount() {
        const pessoaPath = window.location.pathname;
        console.log(pessoaPath);
        
        const response = await api.get(pessoaPath);

        
        this.setState({ pessoa: response.data });
    }

    render() {
        const { pessoa } = this.state;
        const { tarefas} = this.state;
        //console.log(pessoa);

        return (
            <>
                <div className="row">
                <div className='col-11 offset-1 col-lg-11 offset-lg-1 px-5 d-flex flex-wrap mt-5 gap-5'>
                    
                    <div className="col-lg-3 col-md-12 ProfilePessoa d-flex flex-column align-items-center p-4">
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
                                <span>Projeto</span>
                            </div>
                        </div>
                        <Divider light orientation="vertical" variant="middle" flexItem />
                        <div className="ResumoPessoa d-flex align-items-center justify-content-center flex-wrap gap-5">
                            <div className="d-flex flex-column text-center">
                                <h5>14</h5>
                                <p>Projetos Concluídos</p>
                            </div>
                            <div className="d-flex flex-column text-center">
                                <h5>71</h5>
                                <p>Tarefas Concluídas</p>
                            </div>
                        </div>
                        <CustomizedAccordion />

                    </div>
                    <div className="col-lg-8">
                        <div className="row Teste h-lg-50 p-3">
                            Rendimento
                        </div>
                        <div className="Teste row  h-lg-50 p-3">
                            
                            <HeaderTarefas />
                            
                            <div className="d-flex justify-content-end">
                                <NovaTarefa />
                            </div>
                            
                            
                        </div>
                    </div>
                
                
                 </div>
                </div>
                
            </>
        )
    }
}

export default PessoasDT;