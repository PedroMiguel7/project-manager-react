import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { LogoNew } from '../../../assets/icons/ICONS lightThema/icones';
import { useState } from 'react';
import { AddButton, ButtonContent, ModalHeader, OcuparEspaco, HeaderTitle, HighlightedTitle, ButtonsContainer, CancelButton, SaveButton } from "./style";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Textfield, style } from "./muiStyle";
import api from "../../../services/api";

export default function BasicModalEquipe(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setNome() }

  const [nome, setNome] = useState("")

  function PostaEquipe(equipe) {
    api.post("/equipes/",
      {
        nome_equipe: nome[0].toUpperCase() + nome.slice(1),
      })
    props.atualiza()
  }

  function FechaModal() {
    props.atualiza()
    setOpen(false);
  }

  return (
    <>
      <AddButton onClick={handleOpen} variant="contained" size="small" >
        <AddRoundedIcon sx={{ fontSize: "1.2rem" }} /><ButtonContent>Adicionar</ButtonContent>
      </AddButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalHeader>
            <OcuparEspaco></OcuparEspaco>
            <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleClose} />
            <HeaderTitle>
              Adicionar<HighlightedTitle> Equipe</HighlightedTitle>
            </HeaderTitle>
          </ModalHeader>

          <form onSubmit={FechaModal}>
            <Textfield
              required
              id="nome"
              name='nome'
              value={nome}
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
              variant="outlined"
              margin="dense"
              fullWidth
              className='textField' />
            <Divider light className='mt-3' />
            <ButtonsContainer>
              <CancelButton
                variant="text" id='cancelarAdd' onClick={handleClose}>
                Cancelar
              </CancelButton>
              <SaveButton
                variant="contained" type="submit" onClick={PostaEquipe}>
                Salvar
              </SaveButton>
            </ButtonsContainer>
          </form>
        </Box>
      </Modal>
    </>
  );
}