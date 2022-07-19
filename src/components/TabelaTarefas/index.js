import * as React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TarefasMenu from '../TarefasMenu';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function createData(nome, tempo, inicio, conclusao) {
  return { nome, tempo, inicio, conclusao };
}

const rows = [
  createData('Tarefa Tal', '-', '01/01/2022', '31/01/2022'),
  createData('Tarefa Tal', '-', '01/01/2022', '31/01/2022'),
  createData('Tarefa Tal', '6 dias', '01/01/2022', '-'),
  createData('Tarefa Tal', '2 dias', '01/01/2022', '-'),
  createData('Tarefa Tal', '15 horas', '01/01/2022', '-'),
];

export default function TabelaTarefas() {
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

  /*let dataHoje = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;*/

  /*const dataHoje = [data.getDate(), data.getMonth() + 1, data.getFullYear()]; */
  /*const inicio = "14-07-2022";
  const dataInicio = inicio.split('-');
  console.log(dataInicio);*/
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

  /*
  console.log(dataHoje);
  console.log(dataFormatada);
  console.log(dataTeste);

  console.log(`${dataTeste - dataFormatada}`);*/

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
