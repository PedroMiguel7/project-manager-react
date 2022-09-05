import * as React from 'react';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import WarningIcon from '@mui/icons-material/Warning';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import api from '../../../../api';


const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#F4F5FA',
        svg: { color: '#F4F5FA' },
        '&.Mui-focused': {
            borderColor: '#F4F5FA',
            svg: { color: 'var(--corBotao)'}
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


export default function EditaPessoa(props) {
    const [nome, setNome] = useState(props.PESSOA.nome_pessoa);
    const [equipe, setEquipe] = useState(props.equipes);
    const [dadoEquipe, setDadoEquipe] = useState(props.equipe_id);
    const [funcao, setFuncao] = React.useState(props.PESSOA.funcao_pessoa);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChangeAge = (eventA) => {
        setDadoEquipe(eventA.target.value);
      };
    
       
    const handleClickEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleChangeFun = (evento) => {
        setFuncao(evento.target.value);
    };

    const handleDelete = () => {
        //api.delete('/pessoas/'+ props.idPessoa);
        //Deleta(props.idPessoa)
        //handleCloseAlert();
        //this.setState({tarefasId: id})
        setOpenAlert(true);
        setOpenEdit(false);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
        setTimeout(() => { window.location.pathname = "/pessoas" }, 500)
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    const handleConfirmDelete = () => {
        api.delete('/pessoas/' + props.idPessoa);
        setOpenSnackbar(true);
        setOpenAlert(false);
    };

    function Edita(e) {
        e.preventDefault()
        const updateStatus = async () => {
            api.put('/pessoas/' + props.idPessoa, {
                    equipe_id: dadoEquipe,
                    funcao_pessoa: funcao,
                    nome_pessoa: nome
                })
                .then(res => {
                    props.atualiza()
                    handleCloseEdit();
                })
                .catch(err => alert(err))
        }
        updateStatus()
    }

    return (
        <>
            <Tooltip title="Editar" placement="right">
                <IconButton onClick={handleClickEdit}>
                    <EditRoundedIcon sx={{ fontSize: 20, color: "#f4f4f4" }} />
                </IconButton>
            </Tooltip>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='OcuparEspaco'></div>
                        <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleCloseEdit} />
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center order-1'>
                            Editar<span style={{ color: 'var(--corBotao)' }}> Pessoa</span>
                        </Typography>
                    </div>
                    <form /*onSubmit={EditaPessoa}*/>
                        <CssTextField
                            required
                            id="nome"
                            name='nome'
                            label="Nome"
                            value={nome}
                            onChange={(f) => setNome(f.target.value)}
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
                                <MenuItem value={"Back-End"}>Back-End</MenuItem>
                                <MenuItem value={"Front-End"}>Front-End</MenuItem>
                                <MenuItem value={"Tester"}>Tester</MenuItem>
                                <MenuItem value={"Gerente de Projeto"}>Gerente de Projeto</MenuItem>
                            </CssTextField>
                        </Box>

                        <Box sx={{ minWidth: 120 }}>
              <CssTextField
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
                {equipe?.map(p => (
                  <MenuItem value={p.id_equipe} key={p.id_equipe}>{p.nome_equipe}</MenuItem>)
                )}
              </CssTextField>
            </Box>

                        <Divider light className='mt-3' />
                        <div className='d-flex justify-content-between mt-5'>
                            <div>
                                <Button style={{
                                    color: "#F66E6E",
                                    opacity: 0.5,
                                    textTransform: 'capitalize'
                                }}
                                    variant="text" className='' onClick={handleDelete}>
                                    <DeleteIcon sx={{ fontSize: 18 }} />Deletar
                                </Button>
                            </div>
                            <div>
                                <Button style={{
                                    color: "#F4F5FA",
                                    opacity: 0.5,
                                    textTransform: 'capitalize'
                                }}
                                    variant="text" className='' onClick={handleCloseEdit}>
                                    Cancelar
                                </Button>
                                <Button style={{
                                    color: "#F4F5FA",
                                    background: "var(--corBotao)",
                                    textTransform: 'capitalize',
                                    boxShadow: 'none'
                                }}
                                    variant="contained" type="submit" onClick={(e) => Edita(e)}>
                                    Salvar
                                </Button>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>

            {/* Alerta */}

            <Dialog
                open={openAlert}
                //key={t.id_task}
                onClose={handleCloseAlert}
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
                    {"Tem certeza que deseja excluir essa pessoa?"}
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
                    <Button autoFocus onClick={handleConfirmDelete} variant="contained"
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
            <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" sx={{ minWidth: '20vw' }}>
                    Pessoa deletada com sucesso!
                </MuiAlert>
            </Snackbar>
        </>
    )
}