import * as React from 'react';
import { Component } from "react";
import api from '../../../api';
import TarefasMenu from '../../TarefasMenu';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


class TarefasConcluidas extends Component {
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

    const [changeIcon, setIcon] = React.useState(true);

    const icon = (changeIcon === true) ? <TaskAltIcon sx={{color: "#F46E27"}} /> : <RadioButtonUncheckedIcon sx={{color: "#C2C3C6"}}/>;

    if( qtdTarefas === null){
        return(
          <tr>
            <p>Sem tarefas em andamento</p>
          </tr>
        );
    } else {
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

        function Conclusao(conclusao) {
          const dataConclusao = new Date(conclusao);
          const dataConclusaoArray = [dataConclusao.getDate(), dataConclusao.getMonth() + 1, dataConclusao.getFullYear()]
          const dataConclusaoFormatada = `${dataConclusaoArray[0]}/${dataConclusaoArray[1]}/${dataConclusaoArray[2]}`;
          return dataConclusaoFormatada;
        }

        return (
          props.tarefas.map(t => 
            {if (t.status === "Concluido")
            return (
              <tr>
                <td>
                  <IconButton onLoad={setIcon}>
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
                  {Inicio(t.data_criacao)}
                </td>
                <td>
                  {Conclusao(t.data_conclusao)}
                </td>
                <td>
                  <TarefasMenu />
                </td>
              </tr>
            )
          }
        ));
    }
  }

  render() {
    const { tarefas } = this.state;

    return (
      <>
        <div className='TabelaTarefas table-responsive'>
          <table className="table align-middle text-center table-hover">
            <tbody>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Prioridade</th>
                <th scope="col">Início</th>
                <th scope="col">Conclusão</th>
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

export default TarefasConcluidas;

/*export default function TabelaTarefas() {
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleCheck = () => {
    setOpenAlert(true);
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
  }

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [changeIcon, setIcon] = React.useState(false);

  const tarefasConcluidas = 0;

  const handleClickSim = () => {
    setOpenSnackbar(true);
    setOpenAlert(false);
    setIcon(true);
    tarefasConcluidas++;
  };

  const icon = (changeIcon === true) ? <TaskAltIcon sx={{color: "#F46E27"}} /> : <RadioButtonUncheckedIcon sx={{color: "#C2C3C6"}}/>;

  const data = new Date();
  const dataConclusao = [data.getDate(), data.getMonth() + 1, data.getFullYear()]
  const dataConclusaoFormatada = `${dataConclusao[0]}/${dataConclusao[1]}/${dataConclusao[2]}`;

  const prazo = "20-07-2022";
  const dataPrazo = prazo.split('-');
  console.log(dataPrazo);

  function TempoRestante() {
    const dataPrazoFormatada = new Date(`${dataPrazo[1]}/${dataPrazo[0]}/${dataPrazo[2]}`);
    console.log(dataPrazoFormatada);
    const dataHoje = new Date();
    console.log(dataHoje);
    console.log(dataPrazoFormatada - dataHoje);
    if ((dataPrazoFormatada - dataHoje) <= 86400000 && (dataPrazoFormatada - dataHoje) > 0) {
      return console.log('1 dia');
    } else {
      const tempo = (dataPrazoFormatada - dataHoje) / 86400000;
      return console.log(`${tempo.toFixed()} dias`)
    }
  }

  console.log(TempoRestante());

  

  const setTempoRestante = (changeIcon === true) ? '-' : TempoRestante();

  const setDataConclusao = (changeIcon === true) ? dataConclusaoFormatada : '-';

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
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
        
          <tr>
            <td>
              <IconButton onClick={handleCheck}>
                {icon}
              </IconButton>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              Alta
            </td>
            <td>
              <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> 
              {setTempoRestante}
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          <tr>
            <td>
              <IconButton onClick={handleCheck}>
                {icon}
              </IconButton>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              Alta
            </td>
            <td>
              <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> 
              {setTempoRestante}
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          <tr>
            <td>
              <IconButton onClick={handleCheck}>
                {icon}
              </IconButton>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              Alta
            </td>
            <td>
              <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> 
              {setTempoRestante}
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          
        </tbody>
      </table>
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
    </div>
    
  );
}
*/