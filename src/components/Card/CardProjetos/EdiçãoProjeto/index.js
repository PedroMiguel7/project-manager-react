import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import api from '../../../../api';
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#F4F5FA',
    svg: { color: '#F4F5FA' },
    '&.Mui-focused': {
      borderColor: '#F4F5FA',
      svg: { color: '#F57D3D' }
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
      color: '#F46E27',
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


export default function EditaProjeto(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenSnackbar(false);
  };

  const [openEdit, setOpenEdit] = React.useState(false);

  const [openAlert, setOpenAlert] = React.useState(false);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickEdit = () => {
    setOpenEdit(true);
  };

  const handleClickDelete = () => {
    setOpenAlert(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setOpenAlert(false);
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setOpenEdit(false);
    setOpenAlert(false);
    setAnchorEl(null);
    setOpenSnackbar(true);
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setAnchorEl(null);
  };


  var [nome, setNome] = useState(props.projetinho.nome_projeto);
  var [descricao, setDescricao] = useState(props.projetinho.descricao_projeto);
  var [equipe, setEquipe] = useState();



  function DeletaProjeto() {
    api.delete('/projetos/' + props.id_projeto);
    handleCloseAlert();
    props.atualiza();
  }

  function EditaProjeto() {
    const updateStatus = async () => {
      const response = await api.put('/projetos/' +   props.id_projeto, {
        descricao_projeto: descricao,
        equipe_id: parseInt(props.equipe_id),
        nome_projeto: nome
      }, [])
      props.atualiza();
      handleEdit();
    }
    updateStatus()
  }

  return (
    <>
      <div>
        <Tooltip title="Opções" placement="right">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ color: '#C2C3C6' }}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              backgroundColor: '#494A58'
            },
          }}
        >
          <MenuItem onClick={handleClickEdit} sx={{ color: '#C2C3C6' }} className="gap-1">
            <EditIcon sx={{ color: '#C2C3C6' }} /> <span>Editar</span>
          </MenuItem>
          <MenuItem onClick={handleClickDelete} sx={{ color: '#C2C3C6' }} className="gap-1">
            <DeleteIcon sx={{ color: '#C2C3C6' }} /> <span>Deletar</span>
          </MenuItem>
          <Dialog
            open={openAlert}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
              style: {
                backgroundColor: '#494A58',
                color: '#fff'
              },
            }}
          >
            <DialogTitle id="alert-dialog-title">
              <WarningIcon />
              {"Tem certeza que deseja excluir esta tarefa?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" sx={{ color: '#C2C3C6' }}>
                Essa ação é permanente.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAlert}
                sx={{
                  color: "#C2C3C6",
                  opacity: 0.7
                }}>Cancelar</Button>
              <Button autoFocus variant="contained"
                sx={{
                  color: "#FFF",
                  backgroundColor: "#F66E6E",
                  '&:hover': {
                    backgroundColor: "#ED5F5F",
                  }
                }} onClick={DeletaProjeto}>
                Deletar
              </Button>
            </DialogActions>
          </Dialog>
          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ClearRoundedIcon className='ClearRoundedIcon' onClick={handleClose} />
              <form onSubmit={EditaProjeto}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
                  Editar<span style={{ color: '#F46E27' }}> Projeto</span>
                </Typography>

                <CssTextField
                  required
                  id="nome"
                  name='nome'
                  label="Título"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  variant="outlined"
                  margin="dense"
                  color='primary'
                  fullWidth
                  className='textField'
                  autoComplete='off'
                />

                <CssTextField
                  required
                  id="descricao"
                  name='descricao'
                  label="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  multiline
                  minRows={4}
                  maxRows={8}
                  variant="outlined"
                  margin="dense"
                  color='primary'
                  fullWidth
                  className='textField'
                  autoComplete='off'
                />

                <Divider light className='mt-3' />
                <div className='d-flex justify-content-end mt-5'>
                  <Button style={{
                    color: "#F4F5FA",
                    opacity: 0.5,
                    textTransform: 'capitalize'
                  }}
                    variant="text" className='' onClick={handleCloseEdit}>Cancelar</Button>
                  <Button style={{
                    color: "#F4F5FA",
                    background: "#F46E27",
                    textTransform: 'capitalize',
                    boxShadow: 'none'
                  }}
                    variant="contained" type="submit" onClick={EditaProjeto}>Salvar</Button>
                </div>
              </form>
            </Box>
          </Modal>

        </Menu>
      </div>

      <Snackbar open={openSnackbar} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" sx={{ minWidth: '20vw' }}>
          Projeto modificado com sucesso!
        </MuiAlert>
      </Snackbar>
    </>
  );
}
