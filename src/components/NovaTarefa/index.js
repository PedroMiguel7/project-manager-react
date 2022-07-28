import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import api from '../../api';
import InputLabel from '@mui/material/InputLabel';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#F4F5FA',
    svg: {color: '#F4F5FA'},
    '&.Mui-focused': {
      borderColor: '#F4F5FA',
      svg: {color: '#F57D3D'}
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
      color: '#F4F5FA',
    }
  },
  '.MuiInputLabel-outlined': {
    color: '#F4F5FA',
    '&.Mui-focused': {
      color:'#F46E27',
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
  width: '40vw'
};

const DateTextField = styled(TextField) ({
  '& .MuiOutlinedInput-root': {
    color: "#F4F5FA",
    '& fieldset': {
      borderColor: '#F4F5FA',
      borderRadius: 5,
    },
    '&:hover fieldset': {
      borderColor: '#C2C3C6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F46E27',
      color: '#F46E27',
    },
    'input': {
      '&::placeholder': {
        color: '#C2C3C6',
      }
    }
  },
})


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); setPrioridade()};

  const pessoaPath = window.location.pathname;
  const PathArray = pessoaPath.split('/');
  const idPessoa = parseInt(PathArray[2]);

  function cadastrarTarefa(e) {
    e.preventDefault()
    console.log(`Tarefa com descrição ${descricao}, prioridade ${prioridade} e prazo para ${prazo} foi cadastrada com sucesso`)
  }
  
  const [descricao, setDescricao] = useState("")
  const [pessoa, setIdPessoa] = React.useState(idPessoa);
  const [status, setStatus] = React.useState("Em Andamento");
  const [prioridade, setPrioridade] = React.useState();
  const [prazo, setPrazo] = React.useState(new Date());

  const handleChange = (event) => {
    setPrioridade(event.target.value);
  };

  function PostaTarefa() {
    api.post("/tasks/",
    {
      pessoa_id: pessoa,
      descricao_task : descricao,
      prioridade: prioridade,
      status: status,
      prazo_entrega: prazo
  })
  }

  return (
    <div>
        <Button onClick={handleOpen} variant="contained" sx={{width: 'fit-content', color: "#F4F5FA",
        background: "#F46E27",
        textTransform: 'capitalize',
        boxShadow: 'none',
        ':hover': {
            background: "#F57D3D",
        }}}>
        <AddRoundedIcon sx={{fontSize: '1.10rem'}} />
            Adicionar Tarefa
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClearRoundedIcon className='ClearRoundedIcon' onClick={handleClose} />
          <form onSubmit={cadastrarTarefa}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
              Adicionar<span style={{ color: '#F46E27' }}> Tarefa</span>
            </Typography>
        
            <CssTextField
              required
              id="descricao"
              name='descricao'
              label="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              multiline
              minRows={1}
              maxRows={2}
              margin="dense"
              fullWidth className='textField'
            />

            <Box sx={{ minWidth: 120 }}>
              <CssTextField 
              required
              select
              label="Prioridade"
              fullWidth
              margin="dense"
              value={prioridade}
              onChange={handleChange}
              >
                <MenuItem value={0}>Baixa</MenuItem>
                <MenuItem value={1}>Média</MenuItem>
                <MenuItem value={2}>Alta</MenuItem>
              </CssTextField>
            </Box>

            <CssTextField
              type="number"         
              min={0}
              id="prazo"
              name='prazo'
              label="Prazo"
              onChange={(e) => setPrazo(e.target.value)}
              margin="dense"
              fullWidth className='textField'
              InputProps={{
                endAdornment: <InputAdornment position="end">dias</InputAdornment>,
                inputProps: { min: 0 }
              }}
            />
            

            <Divider light className='mt-3' />
            <div className='d-flex justify-content-end mt-5'>
              <Button style={{
                color: "#F4F5FA",
                opacity: 0.5,
                textTransform: 'capitalize'
              }}
                variant="text" className='' onClick={handleClose}>Cancelar</Button>
              <Button style={{
                color: "#F4F5FA",
                background: "#F46E27",
                textTransform: 'capitalize',
                boxShadow: 'none'
              }}
                variant="contained" type="submit">Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
