import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import TaskIcon from '../../assets/icons/task.svg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProgressoCircular from './CircularProgress/index.js';
import { ThirtyFpsSelect } from "@mui/icons-material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProjetosSelect from "./ProjetosSelect";

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipe: [],
        PessoasEquipe: [],
        tarefas: [],
        status: 1,
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
            var colors = ["#FFC16A", "#A9DFD8", "#F2C8ED", "#A7CAFF", "#E7DF9B", "#F2A7A7"];
            return(
                props.PessoasEquipe.map(p => (
                    <li className="MembroLi d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Avatar sx={{ bgcolor: colors[Math.floor(Math.random() * 5)], color: "#171821" }}>{p.nome_pessoa.charAt(0)}</Avatar>
                            <div className="d-flex flex-column ms-2">
                                <span>{p.nome_pessoa}</span>
                                <span>{p.funcao_pessoa}</span>
                            </div>    
                        </div>
                        
                        <div className="d-flex me-2">
                            <a className="LinkProjeto" href={`/pessoas/${p.id_pessoa}`} target="_blank">Ver Pessoa</a>
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
                        <div className="d-flex align-items-center justify-content-between ms-2">
                            <div className="d-flex flex-column ms-2">
                                <span>{t.status}</span>
                                <span>{t.nome_projeto}</span>
                                <span>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(t.prazo_entrega)}
                                </span>
                            </div>
                        
                            {/*<div>
                                <Button variant="contained">Ver</Button>
                            </div>*/}
                            
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
            function TempoRestante(prazo) {
                const dataHojeFormatada = new Date();
      
                const dataPrazoFormatada = new Date(prazo);
                
                if ((dataPrazoFormatada - dataHojeFormatada) <= 86400000 && (dataPrazoFormatada - dataHojeFormatada) > 0) {
                  return '1 dia restante';
                } else if (dataPrazoFormatada < dataHojeFormatada) {
                  return 'Atrasado'
                } else {
                  const tempo = (dataPrazoFormatada - dataHojeFormatada) / 86400000;
                  return `${tempo.toFixed()} dias restantes`;
                }
            }

            return (
                props.projetos.map(p => (
                    <li className="ProjetosLi">
                        <div>
                            <span>{p.status}</span>
                            <h5>{p.nome_projeto}</h5>
                        </div>
                        <div>
                            <span>
                                <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                {TempoRestante(p.prazo_entrega)}
                            </span>
                            <div className="d-flex align-items-center">
                                <div className="progress ProgressProjeto" >
                                    <div className="ProgressBarProjeto progress-bar" 
                                    style={{width: `12%`}}
                                    role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span>12%</span>
                            </div>
                            <div className="d-flex justify-content-end">
                                <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank">Ver Projeto</a>
                            </div>
                            
                        </div>
                    </li>
                ))
            );
        }
    } 

    handleCallback = (childData) => {
        this.setState({status: childData})
    }

    ProjetosSelect = (props) => {
        const [status, setStatus] = React.useState(1);

        const handleChange = (event) => {
            setStatus(event.target.value);
        };

        return (
            <>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        displayEmpty
                        value={status}
                        onChange={handleChange}
                        defaultValue={1}
                    >
                        <MenuItem value={1}>Todos</MenuItem>
                        <MenuItem value={2}>Em Andamento</MenuItem>
                        <MenuItem value={3}>Concluidos</MenuItem>
                    </Select>
                </FormControl>
            </>
        )

    }
 
    ImprimeTarefasStats = (props) => {
        if(props.tarefas === null){
            return (
                <ProgressoCircular Total={0} StatsTitle="Tarefas" ValueAndamento={0} ValueConcluido={0} />    
            )
            
        } else {
            var TotalTarefas = props.tarefas.length;

            const TarefasAndamento = props.tarefas.filter((tarefas) => tarefas.status === "Em Andamento");
            let QtdAndamento = TarefasAndamento.length;

            const TarefasConcluidos = props.tarefas.filter((tarefas) => tarefas.status === "Concluido" || tarefas.status === "Concluído");
            let QtdConcluidos = TarefasConcluidos.length;

            let PorcAndamento = (QtdAndamento/TotalTarefas) * 100;

            let PorcConcluidos = (QtdConcluidos/TotalTarefas) * 100;

            return (
                <>
                    <ProgressoCircular Total={0} StatsTitle="Tarefas" ValueAndamento={0} ValueConcluido={0} />
                    <div className="d-flex flex-column ">
                        <div>
                            <span className="ProgressLegends AndamentoLegend">Em Andamento</span>
                        </div>
                        <div>
                            <span className="ProgressLegends ConcluidaLegend">Concluídas</span>
                        </div>
                        <div>
                            
                            <span className="ProgressLegends PendenteLegend">Pendentes</span>
                        </div>
                    </div>
                </>
                
            )
        }
    }

    ImprimeProjetosStats = (props) => {
        if(props.projetos === null){
            return (
                <ProgressoCircular Total={0} StatsTitle="Projetos" ValueAndamento={0} ValueConcluido={0} />    
            )
            
        } else {
            var TotalProjetos = props.projetos.length;

            const ProjetosAndamento = props.projetos.filter((projetos) => projetos.status === "Em Andamento");
            let QtdAndamento = ProjetosAndamento.length;

            const ProjetosConcluidos = props.projetos.filter((projetos) => projetos.status === "Concluido" || projetos.status === "Concluído");
            let QtdConcluidos = ProjetosConcluidos.length;

            let PorcAndamento = (QtdAndamento/TotalProjetos) * 100;

            let PorcConcluidos = (QtdConcluidos/TotalProjetos) * 100;

            return (
                <>
                    <div>
                        <div>
                            <span className="ProgressLegends AndamentoLegend">Em Andamento</span>
                        </div>
                        <div>
                            <span className="ProgressLegends ConcluidaLegend">Concluídos</span>
                        </div>
                        <div>
                            <span className="ProgressLegends PendenteLegend">Pendentes</span>
                        </div>
                    </div>
                    <ProgressoCircular Total={TotalProjetos} StatsTitle="Projetos" ValueAndamento={PorcAndamento} ValueConcluido={PorcConcluidos} />
                </>
                
            )
        }
    }

    render() {
        const { projetos } = this.state;
        const { equipe } = this.state;
        const { PessoasEquipe } = this.state;
        const { tarefas } = this.state;

        const {status} = this.state;

        var TotalProjetos = projetos.length;

        const TarefasProjeto = [];
        projetos.map(f=>(
            TarefasProjeto.push(f.id_projeto)
        ))

        //console.log(TarefasProjeto);


        return (
            <>
                <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                    <div className="TesteGrid row">
                        <HeaderDt pagina="Equipe" titulo={equipe.nome_equipe} Status='' />
                    </div>
                    <div className="TesteGrid row">
                        <div className="TesteGrid col-lg-4 col-md-8">
                            <div>
                                <h3>Membros</h3>
                                <ul className="MembrosUl ps-0">
                                    <this.ImprimeMembros PessoasEquipe = {PessoasEquipe}/>
                                </ul>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h3>Projetos</h3>
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <ProjetosSelect parentCallback = {this.handleCallback} getStatus={status} />
                                    </FormControl>
                                </div>
                                <ul className="MembrosUl ps-0">
                                    <this.ImprimeProjetos projetos = {projetos}/>
                                </ul>
                            </div>
                        </div>
                        <div className="TesteGrid EquipeTarefas col-lg-4 col-md-8">
                            <h3>Tarefas</h3>
                            <ul className="TarefasUl ps-0">
                                <this.ImprimeTarefas tarefas = {tarefas} projetos = {TarefasProjeto} />
                            </ul>
                        </div>
                        <div className="TesteGrid col-lg-4 col-md-4">
                            <h2>Estatísticas</h2>
                            <div className="row">
                                <div className="Top3 col-12">
                                    <h6>Membros mais produtivos</h6>
                                    <p>Por tarefas concluídas</p>
                                </div>
                                <div className="TasksCircularProgress col-12 flex-wrap">
                                    <this.ImprimeTarefasStats tarefas={tarefas} />
                                </div>

                                <div className="TasksCircularProgress col-12 flex-wrap-reverse">
                                    <this.ImprimeProjetosStats projetos={projetos} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default equipeDT_index;