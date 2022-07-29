import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import NewProject from '../../../assets/icons/new.svg';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import api from "../../../api"


const projetoPath = window.location.pathname;

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
    const handleClose = () => setOpen(false);


    function cadastrarProjeto(e) {
        e.preventDefault()
        console.log(`Tarefa ${nome} para ${dadoEquipe} com prioridade ${prioridade} foi cadastrada com sucesso`)
        console.log(prazoEntrega)
    }

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
                const url = ("/equipes/" + props.equipe_id+"/pessoas")
                const response = await api.get(url);
                setPessoa(response.data);
                console.log(pessoa)
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
                pessoa_id: dadoEquipe,
                projeto_id: props.id_projeto,
                prazo_entrega: parseInt(prazoEntrega),
                prioridade: prioridade,
            })
    }

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
                    <ClearRoundedIcon className='ClearRoundedIcon' onClick={handleClose} />
                    <form onSubmit={cadastrarProjeto}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center mb-4'>
                            Adicionar<span style={{ color: '#F46E27' }}> Tarefa</span>
                        </Typography>
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
                            sx={{
                                "& label": {
                                    color: '#F4F5FA'
                                },
                                "& label.Mui-focused": {
                                    color: '#F46E27'
                                },
                            }} />

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl required fullWidth margin="dense" sx={{
                                "& label": {
                                    color: '#F4F5FA'
                                },
                                "& label.Mui-focused": {
                                    color: '#F46E27'
                                }
                            }}
                            >
                                <InputLabel sx={{ color: '#C2C3C6' }} id="demo-simple-select-label">Responsável</InputLabel>
                                <CssSelect
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dadoEquipe}
                                    label="Age"
                                    onChange={handleChangeAge}
                                    sx={{
                                        svg: { color: '#F4F5FA' }
                                    }}
                                >
                                    {pessoa.map(f => (
                                        <MenuItem value={f.id_pessoa} key={f.id_pessoa}>{f.nome_pessoa}</MenuItem>)
                                    )}
                                </CssSelect>
                            </FormControl>
                        </Box>
                        <CssTextField
                            required
                            id="prazoEntrega"
                            name='prazo de entrega'
                            label="Prazo de entrega"
                            onChange={(a) => setPrazoEntrega(a.target.value)}
                            variant="outlined"
                            margin="dense"
                            color='primary'
                            fullWidth
                            className='textField'
                            sx={{
                                "& label": {
                                    color: '#F4F5FA'
                                },
                                "& label.Mui-focused": {
                                    color: '#F46E27'
                                },
                            }} />

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl required fullWidth margin="dense" sx={{
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
                                    value={prioridade}
                                    label="Age"
                                    onChange={handleChangePrior}
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