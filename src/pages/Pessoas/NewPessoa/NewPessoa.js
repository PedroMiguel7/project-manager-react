import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { createContext, useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import api from "../../../api";
import { LogoNew } from '../../../assets/icons/ICONS lightThema/icones';


const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#F4F5FA',
    svg: { color: '#F4F5FA' },
    '&.Mui-focused': {
      borderColor: '#F4F5FA',
      svg: { color: 'var(--corBotao)' }
    },
    '& fieldset': {
      borderColor: '#F4F5FA',
      borderRadius: 5
    },
    '&:hover fieldset': {
      borderColor: '#C2C3C6',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--corBotao)',
    },
  },
  '.MuiInputLabel-outlined': {
    color: '#F4F5FA',
    '&.Mui-focused': {
      color: 'var(--corBotao)',
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
  width: '25vw'
};

export default function BasicModalPessoa(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setDadoEquipe(); setFuncao(); }

  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = React.useState();
  const [equipe, setEquipe] = React.useState([]);

  const [dadoEquipe, setDadoEquipe] = React.useState('');
  const handleChangeAge = (eventA) => {
    setDadoEquipe(eventA.target.value);
  };

  function FechaModal() {
    setOpen(false);
  }

  const handleChangeFun = (evento) => {
    setFuncao(evento.target.value);
  };

  function PostaPessoa() {
    api.post("/pessoas/",
      {
        nome_pessoa: nome[0].toUpperCase() + nome.slice(1),
        funcao_pessoa: funcao,
        equipe_Id: parseInt(dadoEquipe),
      })
      props.atualiza()
  }
  
  useEffect(() => {
    const fetchequipe = async () => {
      try {
        const response = await api.get('/equipes/');
        setEquipe(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchequipe();
  }, []);

  return (
    <div>
      <button id='NovaPessoa' onClick={handleOpen} className="new-project "><LogoNew/></button>
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
              Adicionar<span style={{ color: 'var(--corBotao)' }}> Pessoa</span>
            </Typography>
          </div>
          <form onSubmit={FechaModal}>
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
              <CssTextField 
              select
              id='selecionaFuncao'
              label="Função"
              fullWidth
              margin="dense"
              value={funcao}
              onChange={handleChangeFun}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: '23vh',
                      backgroundColor: '#494A58',
                      color: '#fff',
                    }
                  }
                }
              }}
              >
                <MenuItem id='escolheFuncao' value={"Back-End"}>Back-End</MenuItem>
                <MenuItem value={"Front-End"}>Front-End</MenuItem>
                <MenuItem value={"Tester"}>Tester</MenuItem>
                <MenuItem value={"Gerente de Projeto"}>Gerente de Projeto</MenuItem>
              </CssTextField>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <CssTextField
              select
              id='selecionaEquipe'
              label="Equipe"
              fullWidth
              margin="dense"
              value={dadoEquipe}
              onChange={handleChangeAge}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: '23vh',
                      backgroundColor: '#494A58',
                      color: '#fff',
                    }
                  }
                }
              }}
              >
                {equipe?.map(p => (
                  <MenuItem id='escolheEquipe' value={p.id_equipe} key={p.id_equipe}>{p.nome_equipe}</MenuItem>)
                )}
              </CssTextField>
            </Box>

            <Divider light className='mt-3' />
            <div className='d-flex justify-content-end mt-5'>
              <Button style={{
                color: "#F4F5FA",
                opacity: 0.5,
                textTransform: 'capitalize'
              }}
                variant="text" id='cancelarAdd' onClick={handleClose}>Cancelar</Button>
              <Button style={{
                color: "#F4F5FA",
                background: "var(--corBotao)",
                textTransform: 'capitalize',
                boxShadow: 'none'
              }}
                variant="contained" id='aceitarAdd' type="submit" onClick={PostaPessoa}>Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}