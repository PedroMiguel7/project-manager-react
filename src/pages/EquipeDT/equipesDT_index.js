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
import MenuMembros from "./MenuMembros";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MenuItem from '@mui/material/MenuItem';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      color: '#F4F5FA',
      svg: { color: '#F4F5FA' },
      '&.Mui-focused': {
        borderColor: '#F4F5FA',
        svg: { color: '#F57D3D' }
      },
      '& fieldset': {
        borderColor: '#F4F5FA',
        borderRadius: 5
      },
      '&:hover fieldset': {
        borderColor: '#C2C3C6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F46E27',
      },
      '& .MuiInputAdornment-root': {
        color: '#87888C',
      }
    },
    '.MuiInputLabel-outlined': {
      color: '#F4F5FA',
      '&.Mui-focused': {
        color: '#F46E27',
      },
    },
  })
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#21222D',
    borderRadius: 2,
    boxShadow: 24,
    p: 5,
    minWidth: '300px',
    width: '20vw'
  };

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
            let path = window.location.pathname;
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
                            <MenuMembros id={p.id_pessoa} path={path} />

                            {/*<a className="LinkProjeto" href={`/pessoas/${p.id_pessoa}`} target="_blank">Ver Pessoa</a>*/}
                        </div>
                    </li>
                ))
            );
        }
    }

    AddMembro = () => {
        const [openAdd, setOpenAdd] = React.useState(false);

        const handleClickAdd = () => {
            setOpenAdd(true);
          };

        const handleCloseAdd = () => {
            setOpenAdd(false);
            //setOpenAlert(false);
            //setAnchorEl(null);
        };

        return(
            <>
                <li className="AddMembro d-flex justify-content-between align-items-center" onClick={handleClickAdd}>
                        <div className="d-flex align-items-center">
                            
                            <div className="d-flex ms-2">
                                <AddCircleOutlineRoundedIcon sx={{color: '#87888C'}} />
                                <span style={{color: '#87888C'}}>Adicionar um novo membro</span>
                            </div>    
                        </div>
                        
                        <div className="d-flex me-2">

                            {/*<a className="LinkProjeto" href={`/pessoas/${p.id_pessoa}`} target="_blank">Ver Pessoa</a>*/}
                        </div>
                </li>
                <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='OcuparEspaco'></div>
                        <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleCloseAdd} />
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center order-1'>
                        Adicionar<span style={{ color: '#F46E27' }}> Membro</span>
                        </Typography>
                    </div>

                    <form /*onSubmit={EditaTask}*/>
                    <Box sx={{ minWidth: 120 }}>
                        <CssTextField
                        select
                        label="Pessoa"
                        fullWidth
                        margin="dense"
                        //value={dadoEquipe}
                        //={handleChangeAge}
                        SelectProps={{
                            MenuProps: {
                            PaperProps: {
                                style: {
                                maxHeight: '23vh',
                                backgroundColor: '#494A58',
                                color: '#fff',
                                }
                            }
                            }
                        }}
                        >
                            <MenuItem value={1} key={1}>Fulano</MenuItem>
                            <MenuItem value={2} key={2}>Fulana</MenuItem>
                            <MenuItem value={3} key={3}>Fulanin</MenuItem>
                        </CssTextField>
                    </Box>

                    <Divider light className='mt-3' />
                    <div className='d-flex justify-content-end mt-5'>
                        <Button style={{
                        color: "#F4F5FA",
                        opacity: 0.5,
                        textTransform: 'capitalize'
                        }}
                        variant="text" className='' onClick={handleCloseAdd}>Cancelar</Button>
                        <Button style={{
                        color: "#F4F5FA",
                        background: "#F46E27",
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                        }}
                        variant="contained" type="submit" /*onClick={EditaTask}*/>Salvar</Button>
                    </div>
                    </form>
                </Box>
                </Modal>
            </>
        )
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
        //console.log(props.tarefas);
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
                        <HeaderDt link="/equipes" pagina="Equipe" titulo={equipe.nome_equipe} Status='' />
                    </div>
                    <div className="TesteGrid row">
                        <div className="TesteGrid col-lg-4 col-md-8">
                            <div>
                                <h3>Membros</h3>
                                <ul className="MembrosUl ps-0">
                                    <this.ImprimeMembros PessoasEquipe = {PessoasEquipe}/>
                                    <this.AddMembro />
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
                                <div className="Top3 d-flex flex-column align-items-center col-12">
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