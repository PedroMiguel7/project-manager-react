import HeaderDt from "../../components/HeaderDt"
import React, { Component, useEffect, useState } from "react";
import api from '../../api';
import MostrarLIstaTarefas from "./components/ListaDeTarefas";
import { Link } from "react-router-dom";
import { ResponsivePie } from '@nivo/pie';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

class ProjetoDT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projetos: [],
            tarefasPJ: [],
            openAlert: false,
            openSnackbar: false,
            changeIcon: false,
        }
    }
    async componentDidMount() {
        const projetoPath = window.location.pathname;
        
        const response = await api.get(projetoPath);
        const response3 = await api.get(projetoPath + "/tasks");
        this.setState({ projetos: response.data });
        this.setState({ tarefasPJ: response3.data });
    }
    

    updateStateByProps = () => {
        try {
            const atualiza = async () => {
                const projetoPath = window.location.pathname;
                const response = await api.get(projetoPath);
                const response3 = await api.get(projetoPath + "/tasks");
                this.setState({ projetos: response.data });
                this.setState({ tarefasPJ: response3.data });
            }
            atualiza();
        } catch (error) {
            console.error(error.message);
        }
    }

    BuscarMembrosFunc = (props) => {
        const [pessoas, setPessoas] = useState([]);
        const url = '/equipes/' + props.equipe_id + '/pessoas';
        useEffect(() => {
            const fetchEquipe = async () => {
                try{
                    const response2 = await api.get(url)
                    setPessoas(response2.data)
                } catch (error) {
                    console.log(error);
                    if(error.response.status === 401){
                      window.location.href = '/'
                    }
            }
        }
            fetchEquipe();
        }, []);
        //let totalMembros = 0;
        if (props.QualFoi === "Funções") {
            if (pessoas !== null) {
                if (pessoas.filter(pessoas => pessoas.funcao_pessoa === `${props.funcao_pessoa}`) === null) {
                    return (
                        <li>sem pessoa</li>
                    );
                } else {
                    return (
                        pessoas.filter(pessoas => pessoas.funcao_pessoa === `${props.funcao_pessoa}`)?.map(f => (
                            <li>{f.nome_pessoa}</li>
                            ))
                            );
                        }
                    } else {
                return (
                    <li>sem pessoa</li>
                )
            }
        } else if(props.QualFoi === 'ARRAY'){
            return(
                pessoas
                )
            } else {
                if (pessoas !== null) {
                return (
                    pessoas?.map(f => (
                        <tr>
                            <td scope="row">{f.nome_pessoa}</td>
                            <td className="ms-4 ">{f.funcao_pessoa}</td>
                        </tr>
                    ))
                )
            } else {
                return (
                    <li>sem pessoa</li>
                )
            }
        }
    }

    MostraTarefas = (props) => {
        if (props.tarefasPJ !== null) {
            return (
                props.tarefasPJ?.map(p => (
                    <tr key={p.id_task}>
                        <th scope="row">{p.id_task}</th>
                        <td className="">{p.descricao_task}</td>
                        <td>{p.nome_pessoa}</td>
                        <td>{p.prioridade}</td>
                        <td>{p.status}</td>
                        <td></td>
                    </tr>
                ))
            )
        } else {
            return (
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }
    }
    
    GraficoPizza = (props) => {
        if(props.TotalDetasks !== 0){
            const data =
            [
                    {
                        "id": "Em Desenvolvimento",
                        "label": "Desen.",
                        "value": props.EMANDAMENTO,
                        "color": "hsl(248, 70%, 50%)"
                        //#FFF2F1
                    },
                    {
                        "id": "Em Teste",
                        "label": "Teste",
                        "value": props.EMTESTE,
                        "color": "hsl(63, 70%, 50%)"
                        //#04395E
                    },
                    {
                        "id": "Concluida",
                        "label": "Concluida",
                        "value": props.CONCLUIDAS,
                        "color": "hsl(147, 70%, 50%)"
                        //#4F9D69
                    },
                    {
                        "id": "A Fazer",
                        "label": "A-Fazer",
                        "value": props.AFAZER,
                        "color": "hsl(162, 70%, 50%)"
                        //#92D5E6
                    },
                ]
                
    
            const MyResponsivePie = () => (
                <ResponsivePie
                    data={data}
                    margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ theme: 'background' }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
                    colors={{ scheme: 'category10' }}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="black"
                    gentle='black'
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 83.5,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#fffff'
                                    }
                                }
                            ]
                        }
                    ]}
                    />
            )
            return (
                <>
                    <MyResponsivePie />
                </>
            )
        } else {
            const data =
                [
                    {
                        "id": "SEM TAREFAS",
                        "label": " SEM TAREFAS NO MOMENTO",
                        "value": 1,
                        "color": "hsl(162, 70%, 50%)"
                        //#92D5E6
                    },
                ]
    
    
                const MyResponsivePie = () => (
                <ResponsivePie
                    data={data}
                    margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ theme: 'background' }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
                    colors={{ scheme: 'category10' }}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: 'color', modifiers: [] }}
                    gentle='black'
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 83.5,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#fffff'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            )
            return (
                <>
                    <MyResponsivePie />
                </>
            )
        }


    }

    MarcarConcluido = (props) => {
        if ((props.QTDTAREFAS !== 0) && (props.QTDTAREFAS === props.QTDCONCLUIDAS) && (props.status === "Em Andamento")) {
            const [openAlert, setOpenAlert] = React.useState(false);
            
            const handleClose = (event, reason) => {
                if (reason === 'clickaway') {
                return;
            }
              setOpenSnackbar(false);
            };
            
            const handleCheck = (id) => {
                this.setState({tarefasId: id})
              this.setState({openAlert: true})
            }
            
            const handleCloseAlert = () => {
                setOpenAlert(false);
            }
        
            const [openSnackbar, setOpenSnackbar] = React.useState(false);
        
            const handleClickSim = (id) => {
              EditaTask(id);
              setOpenSnackbar(true);
              setOpenAlert(false);
              this.setState({changeIcon: true});
            };
            
            const icon = (this.state.changeIcon === true) ? <TaskAltRoundedIcon sx={{color: "#F46E27"}} /> : <RadioButtonUncheckedIcon sx={{color: "#C2C3C6"}}/>;
        
            function EditaTask(id) {
              api.put('/projetos/' + id + '/status', {
                status: "Concluido",
              })
              this.updateStateByProps();
            }

            return (
                <IconButton onClick={() => { handleCheck(props.id_projeto); }}>
                    {icon}
                    <h5 style={{ color: 'white', marginTop: '9px' }}>
                        Concluir Projeto
                    </h5>
                </IconButton>
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }

    Alerta = (props) => {
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpenSnackbar(false);
        };
        var id = props.id
    
        const handleCheck = () => {
    
          this.setState({tarefasId: id})
          this.setState({openAlert: true});
        }
    
        const handleCloseAlert = () => {
            this.setState({openAlert: false});
        }
    
        const [openSnackbar, setOpenSnackbar] = React.useState(false);
    
        const handleClickSim = () => {
          EditaTask(id);
          setOpenSnackbar(true);
          this.setState({openAlert: false});
        };
    
        function EditaTask(ID) {
          api.put('/projetos/' + ID + '/status', {
            status: "Concluido",
          })
          this.updateStateByProps();
        }
    
        return(
          <>
            <Dialog
              open={this.state.openAlert}
              //key={t.id_task}
              onClose={handleCloseAlert}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              PaperProps={{
                  style: {
                    backgroundColor: '#494A58',
                    color: '#fff'
                  },
                }}
              >
                  <DialogTitle id="alert-dialog-title">
                  {"Marcar Projeto como concluído?"}
                  </DialogTitle>
                  
                  <DialogActions>
                  <Button onClick={handleCloseAlert}
                  sx={{
                      color: "#C2C3C6",
                      opacity: 0.7
                  }}>Não</Button>
                  <Button autoFocus onClick={() => {handleClickSim(this.state.tarefasId);}} variant="contained"
                  sx={{
                      color: "#FFF",
                      backgroundColor: "#F57D3D",
                      '&:hover': {
                          backgroundColor: "#F46E27",
                      }
                  }}>
                      Sim
                  </Button>
                  </DialogActions>
              </Dialog>
              <Snackbar open={openSnackbar} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center',}}>
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" sx={{ minWidth: '20vw' }}>
                  Projeto concluído!
                </MuiAlert>
            </Snackbar>
          </>
        )
    }


      
    
    render() {
        const { projetos } = this.state;
        const { tarefasPJ } = this.state;
        
        var totalDetasks = 0;
        var TotalTaksConcluidas = 0;
        var TotalTasksAndamento = 0;
        var TotalTasksFazer = 0;
        var TotalTasksTeste = 0;
        
        var TasksFazer = [];
        var TasksAndamento = [];
        var TasksTeste = [];
        var TasksConcluidas = [];

        
        //var equipe_id = projetos.map(p =>(p.equipe_id))
        //var pessoas = []
        //pessoas = <this.BuscarMembrosFunc equipe_id={equipe_id[0]} QualFoi={'ARRAY'}/>

        
        if (tarefasPJ !== null) {
            totalDetasks = tarefasPJ.length;
            if (tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Concluido") !== null) {
                TotalTaksConcluidas = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Concluido").length;
                TasksConcluidas = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Concluido");
            }

            if (tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Andamento") !== null) {
                TotalTasksAndamento = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Andamento").length;
                TasksAndamento = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Andamento");
            }

            if (tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Teste") !== null) {
                TotalTasksTeste = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Teste").length;
                TasksTeste = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "Em Teste");
            }

            if (tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "A Fazer") !== null) {
                TotalTasksFazer = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "A Fazer").length;
                TasksFazer = tarefasPJ.filter(tarefasPJ => tarefasPJ.status === "A Fazer");
            }
        }

        return (
            <>
                {projetos?.map(p => (
                    <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5' key={p.id_projeto}>
                        <div className="LeftOptions col mt-sm-2">
                            <HeaderDt link="/projetos" pagina="Projeto" titulo={p.nome_projeto} status={p.status} FUNC1={<this.MarcarConcluido QTDTAREFAS={totalDetasks} QTDCONCLUIDAS={TotalTaksConcluidas} status={p.status} id_projeto={p.id_projeto}/>} FUNC2={<this.Alerta id={p.id_projeto} />}/>
                        </div>
                        <div className="d-flex row">
                            <div className="col-9 d-flex justify-content-between">
                                <div className="col-2 TPtrello">
                                    <MostrarLIstaTarefas status="A Fazer" statusṔrojeto={p.status} id_projeto={p.id_projeto} tarefas={TasksFazer} equipe_id={p.equipe_id} atualiza={this.updateStateByProps} statusPROJETO={p.status}/>
                                </div>
                                <div className="col-2 TPtrello">
                                    <MostrarLIstaTarefas status="Em Andamento" tarefas={TasksAndamento} equipe_id={p.equipe_id} atualiza={this.updateStateByProps} statusPROJETO={p.status}/>
                                </div>
                                <div className="col-2 TPtrello">
                                    <MostrarLIstaTarefas status="Em Teste" tarefas={TasksTeste} equipe_id={p.equipe_id} atualiza={this.updateStateByProps} statusPROJETO={p.status}/>
                                </div>
                                <div className="col-2 TPtrello">
                                    <MostrarLIstaTarefas status="Concluido" tarefas={TasksConcluidas} equipe_id={p.equipe_id} atualiza={this.updateStateByProps} statusPROJETO={p.status}/>
                                </div>
                            </div>
                            <div className="row col-3 TPtrello2 justify-content-between ms-1">
                                <h2>Estatísticas</h2>
                                <div className="row col-12 align-items-center" style={{ backgroundColor: "var(--preto-medio)", borderRadius: "5%", marginTop: "-px", minHeight: '349px' }}>
                                    <this.GraficoPizza TotalDetasks={totalDetasks} AFAZER={TotalTasksFazer} EMANDAMENTO={TotalTasksAndamento} EMTESTE={TotalTasksTeste} CONCLUIDAS={TotalTaksConcluidas} />
                                </div>
                                <h3 className="mt-3">Info-Gerais</h3>
                                <div className="row" style={{ backgroundColor: "var(--preto-medio)", borderRadius: "5%", marginTop: "-px", minHeight: '118px', maxHeight:'125px', overflowY: 'auto' }}>
                                    <div className="align-items-start mt-2 scroll">
                                        <h5>Descrição</h5>
                                        <p style={{ textAlign: 'justify', fontWeight: 300, lineHeight: '1.6em', scroll:'auto', }}>{p.descricao_projeto}</p>
                                    </div>
                                </div>
                                <div className="row align-items-end mt-2" style={{ backgroundColor: "var(--preto-medio)", borderRadius: "5%", minHeight: '211px' }}>
                                    <div className="container ">
                                        Equipe:
                                        <Link to={'/equipes/' + p.equipe_id} target="_blank" className="ms-2 Link text-reset text-decoration-none">
                                            <h5 style={{ color: 'var(--laranja)' }}>
                                                {p.nome_equipe}
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="container " style={{ height: '145px', }}>
                                        <div className="scroll TabelaTarefas table-responsive" style={{ maxHeight: '140px', scroll: "auto" }}>
                                            <table className="table align-middle text-center " >
                                                <thead style={{ position: "sticky" }}>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <this.BuscarMembrosFunc equipe_id={p.equipe_id} />
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row gap-3 mt-10">
                            <div className="CardDT InfoProjeto row py-4 mt-4">
                                <div className="col-12 col-lg-5 me-4">
                                    <h4>Descrição</h4>
                                    <p style={{ textAlign: 'justify', fontWeight: 300, lineHeight: '1.6em' }}>{p.descricao_projeto}</p>
                                </div>
                                <div className="col-12 col-lg-6 ms-5">
                                    <div>
                                        <div>
                                            <h4 className="text-center">Funções</h4>
                                            <div className="d-flex justify-content-between flex-wrap col-md-11">
                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Gerente de Projeto</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Gerente de Projeto' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Dev. BackEnd</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Back-End' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Dev. FrontEnd</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Front-End' />
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 style={{ color: "#F46E27" }}>Tester</h6>
                                                    <ul style={{ fontWeight: 300 }}>
                                                        <this.BuscarMembrosFunc equipe_id={p.equipe_id} funcao_pessoa='Tester' />
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <h6>Progresso</h6>
                                                <CircularProgressWithLabel value="20" id_projeto={p.id_projeto} />
                                            </div>
                                            <div className="Resumo col-md-12 col-lg-9 offset-lg-4 justify-content-center ">
                                                <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                                                    <h6><this.BuscarMembros equipe_id = {p.equipe_id}/></h6>
                                                    <strong>
                                                        <p className="ms-4 ">Total de <br />Colaboradores</p>
                                                    </strong>
                                                </div>
                                                <div className="row col-12">
                                                    <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                                        <h6 className="col">{totalDetasks}</h6>
                                                        <strong>
                                                            <p className="text-center col">Total de <br /> Tarefas</p>
                                                        </strong>
                                                    </div>
                                                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                                        <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                                            <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{TotalTasksAndamento}</h6>
                                                            <strong>
                                                                <p className="ms-2">Tarefas em Andamento</p>
                                                            </strong>
                                                        </div>
                                                        <div className="TarefasConc d-flex align-items-center justify-content-center">
                                                            <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{TotalTaksConcluidas}</h6>
                                                            <strong>
                                                                <p className=" ms-2">Tarefas Concluídas</p>
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-flex gap-4" style={{ maxHeight: "400px" }}>
                                <div className="CardDT col">
                                    <div className="LeftOptions col-lg-2 mt-sm-2">
                                        <span className="me-2 ms-4 mt-3">Equipe</span>
                                    </div>
                                    <table className="table" style={{ color: 'white' }}>
                                        <thead>
                                            <tr className="LeftOptions">
                                                <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                                <th scope="col" style={{ width: '20%' }}>Nome</th>
                                                <th scope="col" style={{ width: '35%' }}>função</th>
                                                <th scope="col" style={{ width: '40%' }}>ID - Tarefas</th>
                                                <th scope="col" style={{ width: '5%' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <this.MostrarEquipe equipe_id = {p.equipe_id}/>
                                        </tbody>
                                        <tfoot>
                                            <tr>

                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="CardDT col">
                                    <div className="LeftOptions col-lg-2 mt-sm-2">
                                        <span className="me-2 ms-4 mt-3">Tarefas</span>
                                    </div>
                                    <table class="table" style={{ color: 'white' }}>
                                        <thead>
                                            <tr className="LeftOptions">
                                                <th scope="col" style={{ width: '10%', marginBottom: '40px' }}>#</th>
                                                <th scope="col" style={{ width: '30%' }}>Descricao</th>
                                                <th scope="col" style={{ width: '20%' }}>Pessoa</th>
                                                <th scope="col" style={{ width: '10%' }}>Prioridade</th>
                                                <th scope="col" style={{ width: '20%' }}>status</th>
                                                <th scope="col" style={{ width: '5%' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody className="" style={{ maxHeight: "400px", overflowy: 'auto' }}>
                                            <this.MostraTarefas tarefasPJ={tarefasPJ} />
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <BasicModalTarefa id_projeto={p.id_projeto} equipe_id={p.equipe_id} />
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                        </div>*/}
                    </main>
                ))}
            </>
        )
    }
}

export default ProjetoDT;
