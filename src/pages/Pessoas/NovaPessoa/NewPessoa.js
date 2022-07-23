import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import NewProject from '../../../assets/icons/new.svg';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { PropaneSharp } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import api from "../../../api"


const CssTextField = styled(TextField) ({
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

export default function BasicModalPessoa() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function cadastrarProjeto(e) {
    e.preventDefault()
    console.log(`Pessoa ${nome} com funcao ${funcao} foi cadastrado com sucesso`)
  }
  
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = React.useState("");
  const [equipe, setEquipe] = React.useState();

  const handleChange = (event) => {
    setEquipe(event.target.value);
    };
    
    const handleChangeFun = (evento) => {
        setFuncao(evento.target.value);
    };

  function PostaPessoa() {
    api.post("/pessoas/",
    {
      nome_pessoa : nome,
      funcao_pessoa : funcao,
      equipeId: equipe,
  })
  }

  return (
    <div>
      <button onClick={handleOpen} className="new-project "><img src={NewProject} alt="" /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClearRoundedIcon className='ClearRoundedIcon' onClick={handleClose}/>
          <form onSubmit={cadastrarProjeto}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
              Adicionar<span style={{color: '#F46E27'}}> Pessoa</span>
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
                <InputLabel sx={{ color: '#C2C3C6' }} id="demo-simple-select-label">Função</InputLabel>
                <CssSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={funcao}
                    label="Age"
                    onChange={handleChangeFun}
                    sx={{
                        svg: { color: '#F4F5FA' }
                    }}
                >
                    <MenuItem value={1}>Back-End</MenuItem>
                    <MenuItem value={2}>Front-End</MenuItem>
                    <MenuItem value={3}>Tester</MenuItem>
                    <MenuItem value={4}>Gerente de Projeto</MenuItem>
                </CssSelect>
            </FormControl>
        </Box>
            
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
                    value={equipe}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        svg: { color: '#F4F5FA' }
                    }}
                >
                    <MenuItem value={1}>Komanda</MenuItem>
                    <MenuItem value={2}>Cariri Inovação</MenuItem>
                    <MenuItem value={3}>Cariri Teste</MenuItem>
                </CssSelect>
            </FormControl>
        </Box>
            <Divider light className='mt-3'/>
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
              variant="contained" type="submit" onClick={PostaPessoa}>Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}