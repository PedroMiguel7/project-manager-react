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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [equipes, setEquipes] = useState([]);
  const url = '/equipes/';
  useEffect(() => {
    const fetchEquipe = async () => {
      const response = await api.get(url)
      setEquipes(response.data)
    }
    fetchEquipe()
  });

  const [tarefas, setTarefa] = React.useState([]);

  const handleChange = (event) => {
    setTarefa(event.target.value);
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

  function cadastrarTarefa(e) {
    e.preventDefault()
    console.log(`Tarefa ${nome} com descrição foi cadastrada com sucesso`)
  }


  const [nome, setNome] = useState();
  const [inicio, setInicio] = useState();
  const [tempo, setTempo] = useState();

  function AtualizaNome (e) {
    this.SetState(
      {
        nome: e.target.value
      }
    )
  }
  function AtualizaInicio (e) {
    this.SetState(
      {
        inicio: e.target.value
      }
    )
  }
  function AtualizaTempo (e) {
    this.SetState(
      {
        tempo: e.target.value
      }
    )
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
              required
              id="nome"
              name='nome'
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
              variant="outlined"
              margin="dense"
              color='primary'
              fullWidth
              className='textField'
              sx={{
                "& label": {
                  color: '#F4F5FA'
                },
                "& label.Mui-focused": {
                  color: '#F46E27'
                },
              }} />
            <CssTextField
              id="descricao"
              name='descricao'
              label="Descrição"
              //onChange={(e) => setDescricao(e.target.value)}
              multiline
              minRows={4}
              maxRows={8}
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
                <InputLabel sx={{ color: '#C2C3C6' }} id="demo-simple-select-label">Equipe</InputLabel>
                <CssSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={equipe}
                  label="Age"
                  onChange={handleChange}
                  sx={{
                    svg: { color: '#F4F5FA' }
                  }}
                >
                  {equipes.map((e, index) => <MenuItem key={index} value={e.id_equipe}>{e.nome_equipe}</MenuItem>)}
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
