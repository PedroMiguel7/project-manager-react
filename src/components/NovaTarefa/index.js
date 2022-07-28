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
import { useState, useEffect } from 'react';
import api from '../../api';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

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
    color: '#87888C',
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
      prioridade: parseInt(prioridade),
      status: status,
      prazo_entrega: prazo
    })
  }

  function FechaModal() {
    setOpen(false);
    window.location.reload();
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
        <div className='d-flex align-items-center justify-content-between mb-4'>
            <div className='OcuparEspaco'></div>
            <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleClose} />
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center order-1'>
              Adicionar<span style={{ color: '#F46E27' }}> Tarefa</span>
            </Typography>
          </div>
          <form onSubmit={FechaModal}>
        
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
              id="prazo"
              name='prazo'
              label="Prazo"
              onChange={(e) => setPrazo(e.target.value)}
              margin="dense"
              fullWidth className='textField'
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <span>dias</span>
                </InputAdornment>,
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
                variant="contained" type="submit" onClick={PostaTarefa}>Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
