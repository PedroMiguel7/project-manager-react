import React from "react";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

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


export default function AddMembro() {
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleClickAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
        //setOpenAlert(false);
        //setAnchorEl(null);
    };

    return (
        <>
            <li className="AddMembro d-flex align-items-center justify-content-center" onClick={handleClickAdd}>
                <AddCircleOutlineRoundedIcon sx={{ color: '#87888C' }} />
                <span style={{ color: '#87888C' }}>Adicionar um novo membro</span>
            </li>

            <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='OcuparEspaco'></div>
                        <ClearRoundedIcon className='ClearRoundedIcon order-2' onClick={handleCloseAdd} />
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center order-1'>
                            Adicionar<span style={{ color: '#F46E27' }}> Membro</span>
                        </Typography>
                    </div>

                    <form /*onSubmit={EditaTask}*/>
                        <Box sx={{ minWidth: 120 }}>
                            <CssTextField
                                select
                                label="Pessoa"
                                fullWidth
                                margin="dense"
                                //value={dadoEquipe}
                                //={handleChangeAge}
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
                                <MenuItem value={1} key={1}>Fulano</MenuItem>
                                <MenuItem value={2} key={2}>Fulana</MenuItem>
                                <MenuItem value={3} key={3}>Fulanin</MenuItem>
                            </CssTextField>
                        </Box>

                        <Divider light className='mt-3' />
                        <div className='d-flex justify-content-end mt-5'>
                            <Button style={{
                                color: "#F4F5FA",
                                opacity: 0.5,
                                textTransform: 'capitalize'
                            }}
                                variant="text" className='' onClick={handleCloseAdd}>Cancelar</Button>
                            <Button style={{
                                color: "#F4F5FA",
                                background: "#F46E27",
                                textTransform: 'capitalize',
                                boxShadow: 'none'
                            }}
                                variant="contained" type="submit" /*onClick={EditaTask}*/>Salvar</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}