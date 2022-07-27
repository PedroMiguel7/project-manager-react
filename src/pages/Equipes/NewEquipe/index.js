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
import { useState } from 'react';
import { PropaneSharp } from '@mui/icons-material';
import api from "../../../api"
import ExibirEquipes from "../../../components/CardEquipe/OneEquipe"

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
  minWidth: '400px',
  width: '40vw'
};

export default function BasicModalEquipe() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); setNome()}

  const [nome, setNome] = useState("")

  function PostaEquipe(equipe) {
    api.post("/equipes/",
    {
      nome_equipe : nome,
  })
  .then(resposta => {
    if(resposta.ok){
      
    }else{
        alert('Não foi possivel cadastrar equipe')
    }
  })
  }

  function FechaModal() {
    setOpen(false);
    window.location.reload();
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
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <div className='OcuparEspaco'></div>
            <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleClose} />
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center order-1'>
              Adicionar<span style={{ color: '#F46E27' }}> Equipe</span>
            </Typography>
          </div>

          <form onSubmit={FechaModal}>
            <CssTextField 
              required 
              id="nome" 
              name='nome' 
              value={nome}
              label="Nome"
              onChange={(e) => setNome(e.target.value)} 
              variant="outlined" 
              margin="dense"
              fullWidth 
              className='textField'/>
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
              variant="contained" type="submit" onClick={PostaEquipe}>Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}