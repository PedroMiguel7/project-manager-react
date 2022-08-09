import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TaskIcon from '../../assets/icons/task.svg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProgressoCircular from './CircularProgress/index.js';
import ProjetosSelect from "./ProjetosSelect";
import TarefasSelect from "./TarefasSelect";
import ProgressoProjetos from "./ProgressoProjetos";
import BarChart from "./BarChart";

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipe: [],
        PessoasEquipe: [],
        tarefas: [],
        statusProjeto: 1,
        statusTarefa: 0,
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

    handleCallbackTarefa = (childData) => {
        this.setState({statusTarefa: childData})
    }

    ImprimeTarefas = (props) => {
        console.log(props.equipe.tasks);
        let TarefasEquipe = props.equipe.tasks;
        console.log(TarefasEquipe);
        console.log(props.tarefas);
        if( props.tarefas === null){
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

            if (props.status === 1) {
                const ToDo = props.tarefas.filter((tarefas) => tarefas.status === "A Fazer");

                if (ToDo.length === 0) {
                    return (
                        <li className="TarefasLi">
                            <span>
                                Sem Tarefas A Fazer
                            </span>
                        </li>
                    )
                } else {
                    return (
                        ToDo.map(t => (
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
                            </div>
                        </li>  
                        ))
                    )
                }
            } else if (props.status === 2) {
                const OnGoing = props.tarefas.filter((tarefas) => tarefas.status === "Em Andamento");

                if (OnGoing.length === 0) {
                    return (
                        <li className="TarefasLi">
                            <span>
                                Sem Tarefas Em Andamento
                            </span>
                        </li>
                    )
                } else {
                    return (
                        OnGoing.map(t => (
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
                            </div>
                        </li>  
                        ))
                    )
                }
            } else if (props.status === 3) {
                const Testing = props.tarefas.filter((tarefas) => tarefas.status === "Em Teste");

                if (Testing.length === 0) {
                    return (
                        <li className="TarefasLi">
                            <span>
                                Sem Tarefas Em Teste
                            </span>
                        </li>
                    )
                } else {
                    return (
                        Testing.map(t => (
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
                            </div>
                        </li>  
                        ))
                    )
                }
            } else if (props.status === 4) {
                const Done = props.tarefas.filter((tarefas) => tarefas.status === "Concluido");

                if (Done.length === 0) {
                    return (
                        <li className="TarefasLi">
                            <span>
                                Sem Tarefas Concluidas
                            </span>
                        </li>
                    )
                } else {
                    return (
                        Done.map(t => (
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
                            </div>
                        </li>  
                        ))
                    )
                }
            } else {
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
                            </div>
                        </li>  
                        
                    ))
                );    
            }

            
        }
    }

    handleCallbackTarefa = (childData) => {
        this.setState({statusTarefa: childData})
    }

    SelectStatusTarefa = (props) => {
        return (
            <>
                <TarefasSelect parentCallback = {this.handleCallbackTarefa} />
            </>
        )
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

            if (props.status === 2) {
                const OnGoing = props.projetos.filter((projetos) => projetos.status === "Em Andamento");

                if (OnGoing.length === 0) {
                    return (
                        <li className="ProjetosLi">
                            <span>
                                Sem Projetos Em Andamento
                            </span>
                        </li>
                    )
                } else {
                    return (
                        OnGoing.map(p => (
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
                                    <ProgressoProjetos key={2} id_projeto={p.id_projeto} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank">Ver Projeto</a>
                                </div>
                            </div>
                        </li>
                        ))
                    )
                }
            } else if (props.status === 3) {
                const Done = props.projetos.filter((projetos) => projetos.status === "Concluido" || projetos.status === "Concluído");

                if (Done.length === 0) {
                    return (
                        <li className="ProjetosLi">
                            <span>
                                Sem Projetos Concluidos :(
                            </span>
                        </li>
                    )
                } else {
                    return (
                        Done.map(p => (
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
                                    <ProgressoProjetos key={3} id_projeto={p.id_projeto} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank">Ver Projeto</a>
                                </div>
                            </div>
                        </li>
                        ))
                    )
                }

                
            } else {
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
                                    <ProgressoProjetos key={1} id_projeto={p.id_projeto} />
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
    } 

    handleCallbackProjeto = (childData) => {
        this.setState({statusProjeto: childData})
    }

    SelectStatusProjeto = (props) => {
        return (
            <>
                <ProjetosSelect parentCallback = {this.handleCallbackProjeto} />
            </>
        )
    }

    ImprimeMembrosStats = (props) => {
        return (
            <BarChart />
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
                    <ProgressoCircular op="tarefas" Total={0} StatsTitle="Tarefas" ValueAndamento={0} ValueConcluido={0} />
                    <div className="d-flex flex-column ">
                        <div>
                            <span className="ProgressLegends AndamentoLegend">A Fazer</span>
                        </div>
                        <div>
                            <span className="ProgressLegends AndamentoLegend">Em Andamento</span>
                        </div>
                        <div>
                            <span className="ProgressLegends PendenteLegend">Em Teste</span>
                        </div>
                        <div>
                            <span className="ProgressLegends ConcluidaLegend">Concluídas</span>
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
        
        const tarefas2 = equipe.tasks;
        console.log(tarefas2);
        console.log(PessoasEquipe);

        const {statusProjeto} = this.state;
        const {statusTarefa} = this.state;

        var TotalProjetos = projetos.length;

        const TarefasProjeto = [];
        projetos.map(f=>(
            TarefasProjeto.push(f.id_projeto)
        ))

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
                                    <this.SelectStatusProjeto status={statusProjeto} />
                                </div>
                                <ul className="MembrosUl ps-0">
                                    <this.ImprimeProjetos projetos = {projetos} status = {statusProjeto} />
                                </ul>
                            </div>
                        </div>
                        <div className="TesteGrid EquipeTarefas col-lg-4 col-md-8">
                            <div className="d-flex justify-content-between">
                                <h3>Tarefas</h3>
                                <this.SelectStatusTarefa status={statusTarefa} />
                            </div>
                            <ul className="TarefasUl ps-0">
                                <this.ImprimeTarefas equipe={equipe} tarefas = {tarefas} projetos = {TarefasProjeto} status = {statusTarefa} />
                            </ul>
                        </div>
                        <div className="TesteGrid col-lg-4 col-md-4">
                            <h2>Estatísticas</h2>
                            <div className="row">
                                <div className="Top3 col-12">
                                    <h6>Membros mais produtivos</h6>
                                    <p>Por tarefas concluídas</p>
                                    <this.ImprimeMembrosStats />
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