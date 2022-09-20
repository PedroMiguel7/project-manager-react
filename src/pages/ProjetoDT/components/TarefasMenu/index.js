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
import api from '../../../../services/api';
import { useEffect, useState } from 'react';

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
    '& .MuiInputAdornment-root': {
      color: '#87888C',
    }
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


export default function TarefasMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openEdit, setOpenEdit] = React.useState(false);

  const [openAlert, setOpenAlert] = React.useState(false);

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

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setAnchorEl(null);
  };



  var [nome, setNome] = useState(props.tarefa.descricao_task);
  const [pessoa, setPessoa] = useState([]);
  var [projetoID, setProjetoID ] = useState(props.tarefa.id_projeto);

  var [prioridade, setPrioridade] = React.useState(props.tarefa.prioridade);
  const handleChangePrior = (event) => {
    setPrioridade(event.target.value);
  };

  var [dadoEquipe, setDadoEquipe] = React.useState(props.tarefa.pessoa_id);
  const handleChangeAge = (eventA) => {
    setDadoEquipe(eventA.target.value);
  };

  useEffect(() => {
    const fetchequipe = async () => {
      try {
        const response = await api.get("/equipes/" + props.equipe_id + "/membros");
        setPessoa(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchequipe();
  }, []);

  function DeletaTask() {
    api.delete('/tasks/' + props.id_task);
    handleCloseAlert();
    props.atualiza();
  }

  function EditaTask(e) {
    e.preventDefault()
    const updateStatus = async () => {
      api.put('/tasks/' + props.id_task, {
          descricao_task: nome,
          pessoa_id: parseInt(dadoEquipe),
          prioridade: parseInt(prioridade),
          projeto_id: parseInt(projetoID)
      })
      .then(res => {
        props.atualiza();
        handleCloseEdit();
      })
      .catch(err => alert(err))
    }
    updateStatus()
  }

  return (
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
              }} onClick={DeletaTask}>
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
            <form onSubmit={EditaTask}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
                Editar<span style={{ color: 'var(--corBotao)' }}> Tarefa</span>
              </Typography>

              <CssTextField
                required
                id="nome"
                name='nome'
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                variant="outlined"
                margin="dense"
                color='primary'
                fullWidth
                className='textField'
                autoComplete='off'
              />

              <Box sx={{ minWidth: 120 }}>
                <CssTextField
                  select
                  label="Responsável"
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
                  {pessoa?.map(f => (
                    <MenuItem value={f.id_pessoa} key={f.id_pessoa}>{f.nome_pessoa}</MenuItem>)
                  )}
                </CssTextField>
              </Box>

              <Box sx={{ minWidth: 120 }}>
                <CssTextField
                  select
                  label="Prioridade"
                  fullWidth
                  margin="dense"
                  value={prioridade}
                  onChange={handleChangePrior}
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
                  <MenuItem value={0}>Baixa</MenuItem>
                  <MenuItem value={1}>Média</MenuItem>
                  <MenuItem value={2}>Alta</MenuItem>
                </CssTextField>
              </Box>

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
                  background: "var(--corBotao)",
                  textTransform: 'capitalize',
                  boxShadow: 'none'
                }}
                  variant="contained" type="submit" onClick={(e) => EditaTask(e)}>Salvar</Button>
              </div>
            </form>
          </Box>
        </Modal>
      </Menu>
    </div>
  );
}
