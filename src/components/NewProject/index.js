import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import NewProject from '../../assets/icons/new.svg'
import BasicSelect from '../Select/index.js'
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#494A58',
  borderRadius: 5,
  boxShadow: 24,
  p: 5
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  function cadastrarProjeto(e) {
    e.preventDefault()
    console.log(`Projeto ${nome} com descrição ${descricao} foi cadastrado com sucesso`)
  }
  

  const [nome, setNome] = useState()
  const [descricao, setDescricao] = useState()

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
          <form onSubmit={cadastrarProjeto}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-3'>
              Adicionar Projeto
            </Typography>
            <TextField 
              required 
              id="nome" 
              name='nome' 
              label="Nome"
              onChange={(e) => setNome(e.target.value)} 
              variant="outlined" 
              margin="dense" 
              fullWidth 
              className='textField'/>
            <TextField
              id="descricao"
              name='descricao'
              label="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              multiline
              maxRows={4}
              margin="dense"
              fullWidth className='textField'
            />
            <BasicSelect />
            <div className='d-flex justify-content-end mt-5'>
              <Button style={{
                color: "#F4F5FA",
                opacity: 0.5
              }} 
              variant="text" className='' onClick={handleClose}>Cancelar</Button>
              <Button style={{
                color: "#F4F5FA",
                background: "#F46E27"
              }}
              variant="contained" type="submit">Salvar</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
