import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import api from "../../../api"

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
      '& .MuiInputAdornment-root': {
      color: '#87888C',
    }
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

export default function BasicModalTarefa(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false); setDadoEquipe(); setPrioridade()};

    const [nome, setNome] = useState("");
    const [pessoa, setPessoa] = useState([]);
    const [prazoEntrega, setPrazoEntrega] = useState();
    const [prioridade, setPrioridade] = React.useState();

    const [dadoEquipe, setDadoEquipe] = React.useState('');
    const handleChangeAge = (eventA) => {
        setDadoEquipe(eventA.target.value);
    };


    const handleChangePrior = (event) => {
        setPrioridade(event.target.value);
    };

    const handleChangePes = (evento) => {
        setPessoa(evento.target.value);
    };


    useEffect(() => {
        const fetchequipe = async () => {
            try {
                const response = await api.get("/equipes/" + props.equipe_id + "/pessoas");
                setPessoa(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchequipe();
    }, []);

    function PostaTarefa() {
        api.post("/tasks/",
            {
                descricao_task: nome,
                pessoa_id: parseInt(dadoEquipe),
                projeto_id: props.id_projeto,
                prazo_entrega: parseInt(prazoEntrega),
                prioridade: prioridade,
            })
    }

    function FechaModal() {
        setOpen(false);
        console.log(`Tarefa ${nome} para ${dadoEquipe} com prioridade ${prioridade} foi cadastrada com sucesso`)
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" sx={{width: 'fit-content', color: "#F4F5FA",
            background: "#F46E27",
            textTransform: 'capitalize',
            boxShadow: 'none',
            ':hover': {
                background: "#F57D3D",
            }}}>
                Atribuir Tarefa
            </Button>
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
                        Atribuir<span style={{ color: '#F46E27' }}> Tarefa</span>
                        </Typography>
                    </div>
                    <form onSubmit={FechaModal}>
                        <CssTextField
                            required
                            id="nome"
                            name='nome'
                            label="Nome"
                            onChange={(e) => setNome(e.target.value)}
                            variant="outlined"
                            margin="dense"
                            color='primary'
                            fullWidth
                            className='textField'
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
                                {pessoa.map(f => (
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

                        <CssTextField
                        type="number"
                        id="prazo"
                        name='prazo'
                        label="Prazo"
                        onChange={(a) => setPrazoEntrega(a.target.value)}
                        margin="dense"
                        fullWidth className='textField'
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                            <span>dias</span>
                            </InputAdornment>,
                            inputProps: { min: 0 }
                        }}
                        />

                        <Divider light className='mt-3' />
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
                                variant="contained" type="submit" onClick={PostaTarefa}>Salvar</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}