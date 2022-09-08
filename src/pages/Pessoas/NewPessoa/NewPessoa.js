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
import api from "../../../services/api";
import { LogoNew } from '../../../assets/icons/ICONS lightThema/icones';
import { AddButton, ButtonContent, ModalHeader, OcuparEspaco, HeaderTitle, HighlightedTitle, ButtonsContainer, CancelButton, SaveButton } from "./style";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Textfield, style } from "../../../styles/muiStyles.js";


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
    <>
      <AddButton id='NovaPessoa' onClick={handleOpen} variant="contained" size="small" >
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
              Adicionar<HighlightedTitle> Pessoa</HighlightedTitle>
            </HeaderTitle>
          </ModalHeader>

          <form onSubmit={FechaModal}>
            <Textfield
              required
              id="nome"
              name='nome'
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
              variant="outlined"
              margin="dense"
              fullWidth
              className='textField' />

            <Box sx={{ minWidth: 120 }}>
              <Textfield
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
              </Textfield>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <Textfield
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
              </Textfield>
            </Box>

            <Divider light className='mt-3' />
            <ButtonsContainer>
              <CancelButton
                variant="text" id='cancelarAdd' onClick={handleClose}>
                Cancelar
              </CancelButton>
              <SaveButton
                variant="contained" id='aceitarAdd' type="submit" onClick={PostaPessoa}>
                Salvar
              </SaveButton>
            </ButtonsContainer>
          </form>
        </Box>
      </Modal>
    </>
  );
}