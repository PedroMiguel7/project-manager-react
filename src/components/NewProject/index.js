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
import NewProject from '../../assets/icons/new.svg';
import BasicSelect from '../Select/index.js';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import { PropaneSharp } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import api from "../../api"
import { createTheme } from '@mui/system';


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

/*const theme = createTheme({
  
    MuiSelect: {
      select: {
        borderColor: 'brown',
        "&:focus": {
          backgroundColor: '#ffddec',
          borderColor: 'brown'
        },
        '&:before': {
          borderColor: 'orange'
        },
        '&:after': {
          borderColor: 'green',
        }
      }
    }
})*/

/*const useStyles = makeStyles((theme) => ({
  selectRoot: {
  //...other styles
    '&:focus':{
      backgroundColor:'yellow'
    }
  }
}));*/

const CssSelect = styled(Select)({

  "& .MuiOutlinedInput-root": {
    "& .MuiSelect-select .Mui-focused select": {
      borderColor: '#c4c',
    }
  }
  
});


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
  const handleClose = () => {setOpen(false); setDadoEquipe()};

  /*function cadastrarProjeto(e) {
    e.preventDefault()
    console.log(`Projeto ${nome} com descrição ${descricao} foi cadastrado com sucesso`)
  }*/

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [equipe, setequipe] = useState([])

  function PostaProjeto() {
    api.post("/projetos/",
      {
        nome_projeto: nome,
        descricao_projeto: descricao,
        equipe_id: parseInt(dadoEquipe),
      })
  }

  function FechaModal() {
    setOpen(false);
    window.location.reload();
  }

  const [dadoEquipe, setDadoEquipe] = React.useState('');
  const handleChangeAge = (eventA) => {
    setDadoEquipe(eventA.target.value);
  };

  useEffect(() => {

    const fetchequipe = async () => {
      try {
        const response = await api.get('/equipes/');
        setequipe(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchequipe();
  }, []);

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
          <ClearRoundedIcon className='ClearRoundedIcon' onClick={handleClose} />
          <form onSubmit={FechaModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
              Adicionar<span style={{ color: '#F46E27' }}> Projeto</span>
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
              onChange={(e) => setDescricao(e.target.value)}
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

            <Box className='my-2' sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={{
                  "& .MuiInputLabel-root": {
                    color: '#fff',
                    '& .Mui-focused': {
                      color: '#F46E27',
                  },
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'blue',
                    borderColor: 'green',
                  },
                  '& .MuiSelect-select': {
                    borderColor: 'red',
                  }
                  }}>
                  <InputLabel id="demo-simple-select-label" /*sx={{color: '#fff',}}*/>Equipe</InputLabel>
                  <CssSelect
                  className="teste"
                    labelId="demo-simple-select-label"
                    id_equipe="demo-simple-select"
                    value={dadoEquipe}
                    label="Equipe"
                    onChange={handleChangeAge}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 300,
                          backgroundColor: '#494A58',
                          color: '#fff',
                        }
                      }
                  }}
                    sx={{
                      svg: { color: '#F4F5FA', }
                  }}>
                    {equipe.map(p =>(
                      <MenuItem value={p.id_equipe} key={p.id_equipe}>{p.nome_equipe}</MenuItem>)
                    )}
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
                variant="contained" type="submit" onClick={PostaProjeto}>Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}