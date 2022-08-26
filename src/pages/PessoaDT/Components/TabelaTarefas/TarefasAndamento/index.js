import * as React from 'react';
import { Component } from "react";
import api from '../../../../../api';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TarefasMenu from '../../TarefasMenu';
import IconButton from '@mui/material/IconButton';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PrioridadeAlta from '../../../../../assets/icons/prioridade-alta.svg';
import PrioridadeMedia from '../../../../../assets/icons/prioridade-media.svg';
import PrioridadeBaixa from '../../../../../assets/icons/prioridade-baixa.svg';
import Tooltip from '@mui/material/Tooltip';
import TasksNotFound from "../../../../../assets/empty-states/tasks-not-found.svg";
import { NoBorder, Head, TableContainer, Table, Row, PriorityIcons } from './style';


class TarefasAndamento extends Component {
  state = {
    tarefas: [],
    tarefasId: 0,
    openAlert: false,
    openSnackbar: false,
    changeIcon: false,
  }
  async componentDidMount() {
      const pessoaPath = window.location.pathname;
      
      const response = await api.get(pessoaPath+'/tasks');

      this.setState({ tarefas: response.data });
  }

  Header = (props) => {
    const qtdTarefas = props.tarefas;
    
    if (qtdTarefas !== null) {
      var qtdAndamento = qtdTarefas.filter((tarefas) => tarefas.status === "Em Andamento");  
    }

    if( qtdTarefas === null || qtdAndamento.length === 0){
      return (
        <>
        </>
      )
    } else {
      return (
        <>
          <Head>
            <th scope="col"></th>
            <th scope="col">Nome</th>
            <th scope="col">Prioridade</th>
            <th scope="col">Tempo Restante</th>
            <th scope="col">Início</th>
            <th scope="col"></th>
          </Head>
        </>
      )
    }
  }

  ImprimeTarefas = (props) => {
    const qtdTarefas = props.tarefas;

    if (qtdTarefas !== null) {
      var qtdAndamento = qtdTarefas.filter((tarefas) => tarefas.status === "Em Andamento");  
    }

    const [openAlert, setOpenAlert] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
    
    const handleCheck = (id) => {
      console.log(id);
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
      api.put('/tasks/' + id, {
        status: "Concluido",
        data_conclusao: new Date(),
      })
      console.log('/tasks/' + id);
    }

    if( qtdTarefas === null || qtdAndamento.length === 0){
        return(
          <>
            <NoBorder>
              <img src={TasksNotFound} />
              <h5 style={{color: "#454756", textAlign: "center"}}>
                Sem tarefas em andamento.
              </h5>
            </NoBorder>
          </>
          
        );
    } else {
        function Prioridade(prioridade) {
          if (prioridade === 0) {
            return (
              <Tooltip title='Baixa' arrow>
                <PriorityIcons src={PrioridadeBaixa}/>
              </Tooltip>
            )
          } else if (prioridade == 1) {
            return (
              <Tooltip title='Média' arrow>
                <PriorityIcons src={PrioridadeMedia}/>
              </Tooltip>
            )
          } else if (prioridade === 2) {
            return (
              <Tooltip title='Alta' arrow>
                <PriorityIcons src={PrioridadeAlta}/>
              </Tooltip>
            )
          }
        }

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

        function Inicio(inicio) {
          const dataInicio = new Date(inicio);
          dataInicio.setDate(dataInicio.getDate() + 1);
          const dataInicioFormatada = dataInicio.toLocaleDateString("pt-BR");
          return dataInicioFormatada;
        }

        var getId;
        return (
          props.tarefas?.map(t => 
            {if (t.status === "Em Andamento")
            return (
              <>
                <Row id={t.id_task}>
                  <td>
                    <IconButton onClick={() => {handleCheck(t.id_task);}}>
                      {icon}
                    </IconButton>
                  </td>
                  <td>
                    {t.descricao_task}
                  </td>
                  <td>
                    {Prioridade(t.prioridade)}
                  </td>
                  <td>
                    <AccessTimeIcon sx={{fontSize: '1.1rem', marginRight: '0.2rem'}} /> 
                    {TempoRestante(t.prazo_entrega)}
                  </td>
                  <td>
                    {Inicio(t.data_criacao)}
                  </td>
                  <td>
                    <TarefasMenu equipe_id={t.id_equipe} id_task={t.id_task} />
                  </td>
                </Row>
              </>
            )
          }
        ));
    }
  }

  Alerta = () => {
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };

    const handleCheck = (id) => {
      console.log(id);

      this.setState({tarefasId: id})
      this.setState({openAlert: true});
    }

    const handleCloseAlert = () => {
      this.setState({openAlert: false});
    }

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClickSim = (id) => {
      //EditaTask(id);
      setOpenSnackbar(true);
      this.setState({openAlert: false});
      console.log(this.state.tarefasId);
    };

    function EditaTask(id) {
      api.put('/tasks/' + id, {
        status: "Concluido",
        data_conclusao: new Date(),
      })
      console.log('/tasks/' + id);
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
              {"Marcar tarefa como concluída?"}
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
              Tarefa concluída!
            </MuiAlert>
        </Snackbar>
      </>
    )
  }

  render() {
    const { tarefas } = this.state;

    var TableHeader = document.getElementsByClassName('TabelaTarefasHead');
    
    const scrollHandler = (event) => {
      //var TableHeader = document.getElementsByClassName('TabelaTarefasHead');
      //console.log(TableHeader);

      let ScrollValue = event.currentTarget.scrollTop;
      //console.log(ScrollValue);

      if (ScrollValue < 4) {
        //console.log(document.getElementsByClassName(".TabelaTarefasHead").remove("AddShadow"))
      }
    }

    return (
      <>
        <TableContainer className='table-responsive' /*onScroll={scrollHandler}*/>
          <Table id='table' className="table align-middle text-center">
            <tbody>
              <this.Header tarefas={tarefas} />
              <this.ImprimeTarefas tarefas={tarefas} />
              <this.Alerta />
            </tbody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export default TarefasAndamento;