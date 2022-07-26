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
import { alpha, styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

const DateTextField = styled(TextField) ({
  '& .MuiOutlinedInput-root': {
    color: "#F4F5FA",
    '& fieldset': {
      borderColor: '#F4F5FA',
      borderRadius: 5,
    },
    '&:hover fieldset': {
      borderColor: '#C2C3C6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F46E27',
      color: '#F46E27',
    },
    'input': {
      '&::placeholder': {
        color: '#C2C3C6',
      }
    }
  },
})

export default function TarefasMenu() {
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

  const [prazo, setPrazo] = React.useState(new Date());
  

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
                sx={{color: '#C2C3C6'}}
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
        <MenuItem onClick={handleClickEdit} sx={{color: '#C2C3C6'}} className="gap-1">
            <EditIcon sx={{color: '#C2C3C6'}} /> <span>Editar</span>
        </MenuItem>
        <MenuItem onClick={handleClickDelete} sx={{color: '#C2C3C6'}} className="gap-1">
            <DeleteIcon sx={{color: '#C2C3C6'}} /> <span>Deletar</span>
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
            <DialogContentText id="alert-dialog-description" sx={{color: '#C2C3C6'}}>
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
            }}>
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
          <form /*onSubmit={cadastrarTarefa}*/>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
              Editar<span style={{ color: '#F46E27' }}> Tarefa</span>
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
            <FormControl fullWidth margin="dense" sx={{
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
                    label="Prioridade"
                    //onChange={handleChange}
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

            <div className="d-flex align-items-center justify-content-center gap-2 my-2">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                  disablePast
                  inputFormat="dd/MM/yyyy"
                  label="Prazo"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={prazo}
                  onChange={(newValue) => {
                    setPrazo(newValue);
                  }}
                  renderInput={(params) => <DateTextField {...params} sx={{
                    "& label": {
                      color: '#F4F5FA'
                    },
                    "& label.Mui-focused": {
                      color: '#F46E27'
                    },
                    svg: { color: '#F4F5FA' }}} />}
                  />
              </LocalizationProvider>
            </div>
            
            <Divider light className='mt-3'/>
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
                    variant="contained" type="submit">Salvar</Button>
                    </div>
                </form>
                </Box>
            </Modal>
      </Menu>
    </div>
  );
}
