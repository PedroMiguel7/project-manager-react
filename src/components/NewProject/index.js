import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import NewProject from '../../assets/icons/new.svg';
import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import api from "../../api"


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
  minWidth: '300px',
  width: '20vw'
};

export default function BasicModal(props) {
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
        nome_projeto: nome[0].toUpperCase() + nome.slice(1),
        descricao_projeto: descricao,
        equipe_id: parseInt(dadoEquipe),
      })
      props.atualiza()
  }

  function FechaModal() {
    setOpen(false);
    //window.location.reload();
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
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <div className='OcuparEspaco'></div>
            <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleClose} />
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center order-1'>
              Adicionar<span style={{ color: '#F46E27' }}> Projeto</span>
            </Typography>
          </div>
          
          <form onSubmit={FechaModal}>
            <CssTextField
              required
              size="small"
              id="nome"
              name='nome'
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
              variant="outlined"
              margin="dense"
              fullWidth
              className='textField'
            />
            
            <CssTextField
              size="small"
              id="descricao"
              name='descricao'
              label="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              multiline
              minRows={4}
              maxRows={8}
              margin="dense"
              fullWidth className='textField'
            />

            <Box sx={{ minWidth: 120 }}>
                  <CssTextField 
                  size="small"
                  select
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
                    {equipe.map(p =>(
                      <MenuItem value={p.id_equipe} key={p.id_equipe}>{p.nome_equipe}</MenuItem>)
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

