import * as React from 'react';
import { Component } from "react";
import api from '../../../api';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TarefasMenu from '../../TarefasMenu';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


class TarefasAndamento extends Component {
  state = {
    tarefas: [],
  }
  async componentDidMount() {
      const pessoaPath = window.location.pathname;
      console.log(pessoaPath);
      
      const response = await api.get(pessoaPath+'/tasks');

      this.setState({ tarefas: response.data });
  }

  ImprimeTarefas = (props) => {
    const qtdTarefas = props.tarefas;

    const [openAlert, setOpenAlert] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnackbar(false);
    };

    const handleCheck = () => {
      setOpenAlert(true);
    }

    const handleCloseAlert = () => {
      setOpenAlert(false);
    }

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const [changeIcon, setIcon] = React.useState(false);

    const handleClickSim = () => {
      setOpenSnackbar(true);
      setOpenAlert(false);
      setIcon(true);
    };

    const icon = (changeIcon === true) ? <TaskAltIcon sx={{color: "#F46E27"}} /> : <RadioButtonUncheckedIcon sx={{color: "#C2C3C6"}}/>;

    if( qtdTarefas === null){
        return(
          <tr>
            Sem tarefas em andamento
          </tr>
        );
    } else{
        function Prioridade(prioridade) {
          if (prioridade === 0) {
            return "Baixa"
          } else if (prioridade == 1) {
            return "Média"
          } else if (prioridade === 2) {
            return "Alta"
          }
        }

        function TempoRestante(inicio, prazo) {
          const dataInicioFormatada = new Date(inicio);
          //console.log(dataInicioFormatada);

          const dataPrazoFormatada = new Date(prazo);
          //console.log(dataPrazoFormatada);

          //console.log(dataPrazoFormatada - dataInicioFormatada);
          if ((dataPrazoFormatada - dataInicioFormatada) <= 86400000 && (dataPrazoFormatada - dataInicioFormatada) > 0) {
            return '1 dia';
          } else {
            const tempo = (dataPrazoFormatada - dataInicioFormatada) / 86400000;
            return `${tempo.toFixed()} dias`;
          }
        }

        function Inicio(inicio) {
          const dataInicio = new Date(inicio);
          const dataInicioArray = [dataInicio.getDate(), dataInicio.getMonth() + 1, dataInicio.getFullYear()]
          const dataInicioFormatada = `${dataInicioArray[0]}/${dataInicioArray[1]}/${dataInicioArray[2]}`;
          return dataInicioFormatada;
        }

        return (
          props.tarefas.map(t => 
            {if (t.status === "Em Andamento")
            return (
              <>
                <tr>
                  <td>
                    <IconButton onClick={handleCheck}>
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
                    <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> 
                    {TempoRestante(t.data_criacao, t.prazo_entrega)}
                  </td>
                  <td>
                    {Inicio(t.data_criacao)}
                  </td>
                  <td>
                    <TarefasMenu />
                  </td>
                </tr>

                <Dialog
                  open={openAlert}
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
                      <Button autoFocus onClick={handleClickSim} variant="contained"
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
        ));
    }
  }

  render() {
    const { tarefas} = this.state;

    return (
      <>
        <div className='TabelaTarefas table-responsive'>
          <table className="table align-middle text-center table-hover">
            <tbody>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Prioridade</th>
                <th scope="col">Tempo Restante</th>
                <th scope="col">Início</th>
                <th scope="col"></th>
              </tr>

              <this.ImprimeTarefas tarefas={tarefas} />
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default TarefasAndamento;