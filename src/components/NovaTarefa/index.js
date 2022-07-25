import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import NewProject from '../../assets/icons/new.svg';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import BasicSelect from '../Select/index.js';
import { useState, useEffect } from 'react';
import api from '../../api';
import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#F4F5FA',
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

const CssSelect = styled(Select)({
  '& .MuiSelect-outlined': {
    color: "#F4F5FA",
  }, '& fieldset': {
    borderColor: '#F4F5FA',
    borderRadius: 5,
  },
  '&:focus': {
    backgroundColor: 'yellow'
  },
  '&:hover': {
    borderColor: '#F46E27',
    color: '#F46E27',
  },
})


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pessoaPath = window.location.pathname;
  const PathArray = pessoaPath.split('/');
  const idPessoa = parseInt(PathArray[2]);

  function cadastrarTarefa(e) {
    e.preventDefault()
    console.log(`Tarefa com descrição ${descricao} e prioridade {prioridade} foi cadastrada com sucesso`)
  }
  
  const [descricao, setDescricao] = useState("")
  const [id_pessoa, setIdPessoa] = React.useState(idPessoa);
  const [status, setStatus] = React.useState("Em Andamento");
  const [prioridade, setPrioridade] = React.useState(0);

  const handleChange = (event) => {
    setPrioridade(event.target.value);
};

  function PostaTarefa() {
    api.post("/tasks/",
    {
      pessoa_id: idPessoa,
      descricao_task : descricao,
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
        <AddIcon sx={{fontSize: '1.15rem'}} />
            Nova Tarefa
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
              id="descricao"
              name='descricao'
              label="Descrição"
              //onChange={(e) => setDescricao(e.target.value)}
              multiline
              minRows={1}
              maxRows={2}
              margin="dense"
              fullWidth className='textField'
              sx={{
                "& label": {
                  color: '#F4F5FA'
                },
                "& label.Mui-focused": {
                  color: '#F46E27'
                },
              }}
            />

            <Box sx={{ minWidth: 120 }}>
            <FormControl required fullWidth margin="dense" sx={{
                "& label": {
                    color: '#F4F5FA'
                },
                "& label.Mui-focused": {
                    color: '#F46E27'
                }
            }}
            >
                <InputLabel sx={{ color: '#C2C3C6' }} id="demo-simple-select-label">Prioridade</InputLabel>
                <CssSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={prioridade}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        svg: { color: '#F4F5FA' }
                    }}
                >
                    <MenuItem value={0}>Baixa</MenuItem>
                    <MenuItem value={1}>Média</MenuItem>
                    <MenuItem value={2}>Alta</MenuItem>
                </CssSelect>
            </FormControl>
            </Box>
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
