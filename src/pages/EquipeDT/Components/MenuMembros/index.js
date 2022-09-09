import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from "react-router-dom";

export default function MenuMembros(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openEdit, setOpenEdit] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

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

  function RemoveMembro() {
    console.log(`${props.path}/pess${props.id}`);
    //api.delete('/tasks/' + props.id_task)
    //this.handleCloseAlert()
  }

  RemoveMembro();

  return (
    <>
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
          <Link className='Link' to={`/pessoas/${props.id}`} target="_blank">
            <OpenInNewIcon sx={{ color: '#C2C3C6' }} /> <span>Ver Pessoa</span>
          </Link>

        </MenuItem>
        <MenuItem onClick={handleClickDelete} sx={{ color: '#C2C3C6' }} className="gap-1">
          <PersonRemoveIcon sx={{ color: '#C2C3C6' }} /> <span>Remover</span>
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
            {"Tem certeza que deseja remover esse membro da equipe?"}
          </DialogTitle>
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
              }} /*onClick={DeletaTask}*/>
              Remover
            </Button>
          </DialogActions>
        </Dialog>
      </Menu>
    </>
  )
}