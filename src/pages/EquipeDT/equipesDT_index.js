import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import TaskIcon from '../../assets/icons/task.svg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipe: [],
        PessoasEquipe: [],
        tarefas: [],
    }
    async componentDidMount() {
        var equipePath = window.location.pathname;
        
        const response = await api.get(equipePath+'/projetos');
        const response2 = await api.get(equipePath+'/pessoas');
        const response3 = await api.get(equipePath);
        const response4 = await api.get('/tasks/');

        this.setState({ projetos: response.data });
        this.setState({ PessoasEquipe: response2.data });
        this.setState({ equipe: response3.data });
        this.setState({ tarefas: response4.data });
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
        let totalMembros = 0;
        if(pessoas === null){
            totalMembros = pessoas.length;
        }
        return (
            totalMembros
        );
    }
    
    ImprimeMembros = (props) => {
        if( props.PessoasEquipe === null){
            return(
                <>
                    <div>
                        <span>Ainda não foi adicionado nenhum membro nesta equipe.</span>
                    </div>
                </>
            );
        } else{
            return(
                props.PessoasEquipe.map(p => (
                    <li className="MembroLi d-flex ">
                        <Avatar sx={{ bgcolor: "#c4c" }}>N</Avatar>
                        <div className="d-flex flex-column">
                            <span>{p.nome_pessoa}</span>
                            <span>{p.funcao_pessoa}</span>
                        </div>
                    </li>
                ))
            );
        }
    }

    DeletaEquipe(id_equipe) {
        api.delete("/equipes/"+id_equipe)
    }

    ImprimeTarefas = (props) => {
        if( props.tarefa === null){
            return(
                <>
                    <div>
                        <span>Ainda não foi adicionada nenhuma tarefa.</span>
                    </div>
                </>
            );
        } else{
            function TempoRestante(prazo) {
                const dataHojeFormatada = new Date();
      
                const dataPrazoFormatada = new Date(prazo);
                
                if ((dataPrazoFormatada - dataHojeFormatada) <= 86400000 && (dataPrazoFormatada - dataHojeFormatada) > 0) {
                  return '1 dia';
                } else if (dataPrazoFormatada < dataHojeFormatada) {
                  return 'Atraso'
                } else {
                  const tempo = (dataPrazoFormatada - dataHojeFormatada) / 86400000;
                  return `${tempo.toFixed()} dias`;
                }
            }

            return(
                props.tarefas.map(t => (
                      <li className="TarefasLi d-flex ">
                        <div className="TaskIcon d-flex align-items-center justify-content-center">
                            <img src={TaskIcon} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex flex-column">
                                <span>{t.status}</span>
                                <span>{t.nome_projeto}</span>
                                <span>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(t.prazo_entrega)}
                                </span>
                            </div>
                        
                            <div>
                                <Button variant="contained">Ver</Button>
                            </div>
                            
                        </div>
                    </li>  
                    
                ))
            );
        }
    }   

    ImprimeProjetos = (props) => {
        if( props.projetos === null){
            return(
                <>
                    <div>
                        <span>Ainda não foi atribuido nenhum projeto para esta equipe.</span>
                    </div>
                </>
            );
        } else{

            return (
                props.projetos.map(p => (
                    <li className="ProjetosLi">
                        <div>
                            <span>Status</span>
                            <h5>{p.nome_projeto}</h5>
                        </div>
                        <div>
                            <span>
                                <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                2 dias
                            </span>
                            <div className="d-flex align-items-center">
                                <div className="progress ProgressProjeto" >
                                    <div className="ProgressBarProjeto progress-bar" 
                                    style={{width: `12%`}}
                                    role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span>12%</span>
                            </div>
                            
                        </div>
                    </li>
                ))
            );
        }
    } 

    render() {
        const { projetos } = this.state;
        const { equipe } = this.state;
        const { PessoasEquipe } = this.state;
        const { tarefas } = this.state;

        return (
            <>
                <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <div className="TesteGrid row">
                        <HeaderDt pagina="Equipe" titulo={equipe.nome_equipe} Status='' />
                    </div>
                    <div className="TesteGrid row">
                        <div className="TesteGrid col-4">
                            <div>
                                <h3>Membros</h3>
                                <ul className="MembrosUl ps-0">
                                    <this.ImprimeMembros PessoasEquipe = {PessoasEquipe}/>
                                </ul>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h3>Projetos</h3>
                                    <span>Todos</span>
                                </div>
                                <ul className="MembrosUl ps-0">
                                    <this.ImprimeProjetos projetos = {projetos}/>
                                </ul>
                            </div>
                        </div>
                        <div className="TesteGrid col-4">
                            <h3>Tarefas</h3>
                                <ul className="TarefasUl ps-0">
                                    <this.ImprimeTarefas tarefas = {tarefas}/>
                                </ul>
                        </div>
                        <div className="TesteGrid col-4">
                            <h2>Estatísticas</h2>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default equipeDT_index;