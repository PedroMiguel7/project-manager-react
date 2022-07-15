import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import DeletaProjeto from '../DELETES/DeletaProjeto';

export default function CardDelete(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setAnchorEl(null);
  };

  return (
    <div>
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
        
        <MenuItem onClick={handleClickOpen} sx={{color: '#C2C3C6'}} className="gap-1">
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
            {"Tem certeza que deseja excluir este projeto?"}
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
            }}  onClick={DeletaProjeto(props.id)}>
                Deletar
            </Button>
            </DialogActions>
        </Dialog>
      </Menu>
    </div>
  );
}
