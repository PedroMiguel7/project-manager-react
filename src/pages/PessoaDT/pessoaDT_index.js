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

const pessoaPath = window.location.pathname;
console.log(pessoaPath);

class PessoasDT extends Component {
    state = {
        pessoa: [],
    }
    async componentDidMount() {
        const response = await api.get(pessoaPath);

        this.setState({ pessoa: response.data });
    }

    render() {
        const { pessoa } = this.state;
        //console.log(pessoa);

        return (
            <>
                <div className="row">
                <div className='col-11 offset-1 col-lg-11 offset-lg-1 px-5 d-flex mt-5 gap-5'>
                    
                    <div className="col-lg-3 ProfilePessoa d-flex flex-column align-items-center p-4">
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
                        <div className="row Teste h-50 p-4">
                            Rendimento
                        </div>
                        <div className="Teste row  h-50 p-4">
                            <div className="d-flex justify-content-between">
                                <h5>Tarefas</h5>
                                <div>
                                    <span>4/5 Completas</span>
                                    <div class="progress Progress" >
                                        <div class="ProgressBar progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <TabelaTarefas />
                            <div>
                                <Button />
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