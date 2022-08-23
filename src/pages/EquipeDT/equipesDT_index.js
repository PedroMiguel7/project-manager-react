import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import HeaderDt from "../../components/HeaderDt"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProgressoCircular from './Components/CircularProgress/index.js';
import ProjetosSelect from "./Components/ProjetosSelect";
import TarefasSelect from "./Components/TarefasSelect";
import ProgressoProjetos from "./Components/ProgressoProjetos";
import BarChart from "./Components/BarChart/index.js";
import MenuMembros from "./Components/MenuMembros";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ProjectNotFound from '../../assets/empty-states/project-not-found.svg';
import PeopleNotFound from '../../assets/empty-states/people-not-found.svg';
import TasksNotFound from '../../assets/empty-states/tasks-not-found.svg';
import { PageContainer, MembrosContainer, MembrosUl, ProjetosContainer, HeaderProjetos, ProjetosUl, TarefasContainer, HeaderTarefas, TarefasUl, Top3, TarefasCircularProgress, ProjetosCircularProgress, TarefasLi, StatusTarefa, NomeTarefa, PrazoTarefa, EmptyStateContainer } from "./style";

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
    minWidth: '400px',
    width: '25vw'
  };

class equipeDT_index extends Component {
    state = {
        projetos: [],
        equipe: [],
        PessoasEquipe: [],
        tarefas: [],
        statusProjeto: 0,
        statusTarefa: 0,
    }
    async componentDidMount() {
        var equipePath = window.location.pathname;
        
        const response = await api.get(equipePath+'/projetos');
        const response2 = await api.get(equipePath+'/pessoas');
        const response3 = await api.get(equipePath);
        //const response4 = await api.get('/tasks/');

        this.setState({ 
            projetos: response.data,
            PessoasEquipe: response2.data,
            equipe: response3.data,
            //tarefas: response4.data,
        });
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
                    <div className="EmptyStateContainer">
                        <img src={PeopleNotFound} />
                        <h5>
                            Essa equipe ainda não possui membros.
                        </h5>    
                    </div>
                </>
            );
        } else{
            let path = window.location.pathname;

            function stringToColor(nome) {
                let hash = 0;
                let i;
    
                for (i = 0; i < nome.length; i += 1) {
                  hash = nome.charCodeAt(i) + ((hash << 5) - hash);
                }
              
                let color = '#';
              
                for (i = 0; i < 3; i += 1) {
                  const value = (hash >> (i * 8)) & 0xff;
                  color += `00${value.toString(16)}`.slice(-2);
                }
              
                return color;
            }
    
            function stringAvatar(nome) {
                if (nome.indexOf(' ') >= 0) {
                    return (
                        `${nome.split(' ')[0][0]}${nome.split(' ')[1][0]}`
                    )
                } else {
                    return (
                        `${nome.split(' ')[0][0]}`
                    )
                }
            }

            return(
                props.PessoasEquipe.map(p => (
                    <li className="MembroLi d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Avatar sx={{bgcolor: `${stringToColor(p.nome_pessoa)}`, color: "#1E1F28"}}>
                                {stringAvatar(p.nome_pessoa)}
                            </Avatar>
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
                <li className="AddMembro d-flex align-items-center justify-content-center" onClick={handleClickAdd}>
                    <AddCircleOutlineRoundedIcon sx={{color: '#87888C'}} />
                    <span style={{color: '#87888C'}}>Adicionar um novo membro</span>
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
        //console.log(TarefasEquipe);
        //console.log(props.tarefas);
        if( TarefasEquipe === null){
            return(
                <>
                    <EmptyStateContainer>
                        <img src={TasksNotFound} />
                        <h5>
                            Essa equipe não possui tarefas.
                        </h5>    
                    </EmptyStateContainer>
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
                const ToDo = TarefasEquipe.filter((tarefas) => tarefas.status === "A Fazer");

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
                            <TarefasLi>
                                <StatusTarefa>
                                    {t.status}
                                </StatusTarefa>
                                <NomeTarefa>
                                    {t.descricao_task}
                                </NomeTarefa>
                                <PrazoTarefa>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(t.prazo_entrega)}
                                </PrazoTarefa>
                            </TarefasLi>  
                        ))
                    )
                }
            } else if (props.status === 2) {
                const OnGoing = TarefasEquipe.filter((tarefas) => tarefas.status === "Em Andamento");

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
                            <TarefasLi>
                                <StatusTarefa>
                                    {t.status}
                                </StatusTarefa>
                                <NomeTarefa>
                                    {t.descricao_task}
                                </NomeTarefa>
                                <PrazoTarefa>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(t.prazo_entrega)}
                                </PrazoTarefa>
                            </TarefasLi>  
                        ))
                    )
                }
            } else if (props.status === 3) {
                const Testing = TarefasEquipe.filter((tarefas) => tarefas.status === "Em Teste");

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
                            <TarefasLi>
                                <StatusTarefa>
                                    {t.status}
                                </StatusTarefa>
                                <NomeTarefa>
                                    {t.descricao_task}
                                </NomeTarefa>
                                <PrazoTarefa>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(t.prazo_entrega)}
                                </PrazoTarefa>
                            </TarefasLi>    
                        ))
                    )
                }
            } else if (props.status === 4) {
                const Done = TarefasEquipe.filter((tarefas) => tarefas.status === "Concluido");

                function FormatarData(data){
                    let Data = new Date(data);
                    return Data.toLocaleDateString("pt-BR");
                }

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
                            <TarefasLi>
                                <StatusTarefa>
                                    {t.status}
                                </StatusTarefa>
                                <NomeTarefa>
                                    {t.descricao_task}
                                </NomeTarefa>
                                <PrazoTarefa>
                                    <CheckCircleRoundedIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {FormatarData(t.data_conclusao)}
                                </PrazoTarefa>
                            </TarefasLi>   
                        ))
                    )
                }
            } else {
                return(
                    props.tarefas.map(t => (
                        <TarefasLi>
                            <StatusTarefa>
                                {t.status}
                            </StatusTarefa>
                            <NomeTarefa>
                                {t.descricao_task}
                            </NomeTarefa>
                            <PrazoTarefa>
                                <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                {TempoRestante(t.prazo_entrega)}
                            </PrazoTarefa>
                        </TarefasLi>  
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
                    <EmptyStateContainer>
                        <img src={ProjectNotFound} />
                        <h5>
                            Essa equipe ainda não possui projetos.
                        </h5>    
                    </EmptyStateContainer>
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

            if (props.status === 1) {
                const ToDo = props.projetos.filter((projetos) => projetos.status === "A Fazer");

                if (ToDo.length === 0) {
                    return (
                        <div className="EmptyStateContainer">
                            <img src={ProjectNotFound} />
                            <h5>
                                Sem projetos a fazer.
                            </h5>    
                        </div>
                    )
                } else {
                    return (
                        ToDo.map(p => (
                            <li className="ProjetosLi">
                            <div>
                                <h5>{p.nome_projeto}</h5>
                                <span>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(p.prazo_entrega)}
                                </span>
                            </div>
                            <div className="d-flex align-items-center   ">
                                <div className="d-flex align-items-center">
                                    <ProgressoProjetos key={1} id_projeto={p.id_projeto} status={p.status} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank"><ArrowForwardRoundedIcon /></a>
                                </div>
                            </div>
                        </li>
                        ))
                    )
                }

            } else if (props.status === 2) {
                const OnGoing = props.projetos.filter((projetos) => projetos.status === "Em Andamento");

                if (OnGoing.length === 0) {
                    return (
                        <div className="EmptyStateContainer">
                            <img src={ProjectNotFound} />
                            <h5>
                                Sem projetos em andamento.
                            </h5>    
                        </div>
                    )
                } else {
                    return (
                        OnGoing.map(p => (
                            <li className="ProjetosLi">
                            <div>
                                <h5>{p.nome_projeto}</h5>
                                <span>
                                    <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {TempoRestante(p.prazo_entrega)}
                                </span>
                            </div>
                            <div className="d-flex align-items-center   ">
                                <div className="d-flex align-items-center">
                                    <ProgressoProjetos key={2} id_projeto={p.id_projeto} status={p.status} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank"><ArrowForwardRoundedIcon /></a>
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
                        <div className="EmptyStateContainer">
                            <img src={ProjectNotFound} />
                            <h5>
                                Sem projetos concluidos.
                            </h5>    
                        </div>
                    )
                } else {
                    function FormatarData(data){
                        let Data = new Date(data);
                        return Data.toLocaleDateString("pt-BR");
                    }
                    
                    return (
                        Done.map(p => (
                            <li className="ProjetosLi">
                            <div>
                                <h5>{p.nome_projeto}</h5>
                                <span>
                                    <CheckCircleRoundedIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                                    {FormatarData(p.data_conclusao)}
                                </span>
                            </div>
                            <div className="d-flex align-items-center   ">
                                <div className="d-flex align-items-center">
                                    <ProgressoProjetos key={3} id_projeto={p.id_projeto} status={p.status} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank"><ArrowForwardRoundedIcon /></a>
                                </div>
                            </div>
                        </li>
                        ))
                    )
                }

                
            } else {
                function DataConclusão(data) {
                    let Data = new Date(data);
                    return (
                        <>
                            <CheckCircleRoundedIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                            {Data.toLocaleDateString("pt-BR")}
                        </>
                    )
                }

                function NaoConcluidos(prazo) {
                    return (
                        <>
                            <AccessTimeIcon sx={{fontSize: '1rem', marginRight: '0.2rem'}}/>
                            {TempoRestante(prazo)}
                        </>
                    )
                }

                return (
                    props.projetos.map(p => (
                        <li className="ProjetosLi">
                            <div>
                                <h5>{p.nome_projeto}</h5>
                                <span>
                                    {p.status === "Concluido" ? DataConclusão(p.data_conclusao) : NaoConcluidos(p.prazo_entrega) }
                                </span>
                            </div>
                            <div className="d-flex align-items-center   ">
                                <div className="d-flex align-items-center">
                                    <ProgressoProjetos key={0} id_projeto={p.id_projeto} status={p.status} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="LinkProjeto" href={`/projetos/${p.id_projeto}`} target="_blank"><ArrowForwardRoundedIcon /></a>
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
            <BarChart tarefas={props.equipe.tasks} />
        )
    }
 
    ImprimeTarefasStats = (props) => {
        if(props.tarefas === null){
            return (
                <ProgressoCircular Total={0} StatsTitle="Tarefas" ValueAndamento={0} ValueConcluido={0} op="tarefas" />    
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

        const {statusProjeto} = this.state;
        const {statusTarefa} = this.state;

        var TotalProjetos;
        if (projetos === null) {
            TotalProjetos = 0;
        } else {
            TotalProjetos = projetos.length;
        }

        const TarefasProjeto = [];
        if (projetos !== null) {
            projetos.map(f=>(
                TarefasProjeto.push(f.id_projeto)
            ))
        }

        return (
            <>
                <PageContainer className='col-11 offset-1 col-lg-11 offset-lg-1'>
                    <div className="row">
                        <HeaderDt link="/equipes" pagina="Equipe" titulo={equipe.nome_equipe} Status='' />
                    </div>
                    <div className="row gap-4">
                        <div className="col-lg-4 col-md-8">
                            <MembrosContainer className="row">
                                <h3>Membros</h3>
                                <MembrosUl>
                                    <this.ImprimeMembros PessoasEquipe = {PessoasEquipe}/>
                                    <this.AddMembro />
                                </MembrosUl>
                            </MembrosContainer>
                            <ProjetosContainer className="row">
                                <HeaderProjetos>
                                    <h3>Projetos</h3>
                                    <this.SelectStatusProjeto status={statusProjeto} />
                                </HeaderProjetos>
                                <ProjetosUl>
                                    <this.ImprimeProjetos projetos = {projetos} status = {statusProjeto} />
                                </ProjetosUl>
                            </ProjetosContainer>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <TarefasContainer >
                                <HeaderTarefas>
                                    <h3>Tarefas</h3>
                                    <this.SelectStatusTarefa status={statusTarefa} />
                                </HeaderTarefas>
                                <TarefasUl>
                                    <this.ImprimeTarefas equipe={equipe} tarefas = {tarefas} projetos = {TarefasProjeto} status = {statusTarefa} />
                                </TarefasUl>
                            </TarefasContainer>
                        </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="row">
                            <Top3 className="col-12">
                                <h6>Membros mais produtivos</h6>
                                <p>Por tarefas concluídas</p>
                                <this.ImprimeMembrosStats equipe={equipe} />
                            </Top3>
                            <TarefasCircularProgress className="col-12">
                                <this.ImprimeTarefasStats tarefas={tarefas} />
                            </TarefasCircularProgress>

                            <ProjetosCircularProgress className="col-12">
                                <this.ImprimeProjetosStats projetos={projetos} />
                            </ProjetosCircularProgress>
                        </div>
                    </div>
                    </div> 
                    
                </PageContainer>
            </>
        )
    }
}

export default equipeDT_index;