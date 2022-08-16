import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import WarningIcon from '@mui/icons-material/Warning';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

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


export default function EditaPessoa(props) {
    const [equipe, setEquipe] = useState([]);

    useEffect(() => {
        const fetchEquipe = async () => {
          try {
            const response = await api.get("/equipes/");
            setEquipe(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchEquipe();
    }, []);

    return(
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
            Editar<span style={{ color: '#F46E27' }}> Pessoa</span>
            </Typography>
        </div>
            <form /*onSubmit={EditaPessoa}*/>
            <CssTextField
                id="nome"
                name='nome'
                label="Nome"
                value={pessoa.nome_pessoa}
                //onChange={(e) => setNome(e.target.value)}
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
                label="Equipe"
                fullWidth
                margin="dense"
                value={pessoa.equipe_id}
                //onChange={handleChangeEquipe}
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
                    {equipes.map(e => (
                    <MenuItem value={e.id_equipe} key={e.id_equipe}>{e.nome_equipe}</MenuItem>
                    ))}
                </CssTextField>
            </Box>

            <Box sx={{ minWidth: 120 }}>
                <CssTextField
                select
                label="Função"
                fullWidth
                margin="dense"
                //value={prioridade}
                //onChange={handleChangePrior}
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
                <MenuItem value={0}>A</MenuItem>
                <MenuItem value={1}>B</MenuItem>
                <MenuItem value={2}>C</MenuItem>
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
                    variant="text" className='' onClick={() => {handleDelete();}}>
                        <DeleteIcon sx={{fontSize: 18}} />Deletar
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
                    background: "#F46E27",
                    textTransform: 'capitalize',
                    boxShadow: 'none'
                    }}
                    variant="contained" type="submit" /*onClick={EditaTask}*/>
                        Salvar
                    </Button>    
                </div>
            </div>
            </form>
        </Box>
        </Modal>
    )
}