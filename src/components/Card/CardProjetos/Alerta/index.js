import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect, useState } from 'react';

export default function Alerta(props) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        setOpenSnackbar(props.open);
    }) 

    const handleClose = () => {
        setOpenSnackbar(false);
    }

    return (
        <>
            <Snackbar open={openSnackbar} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center',}}>
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" sx={{ minWidth: '20vw' }}>
                    Projeto modificado com sucesso!
                </MuiAlert>
            </Snackbar>
        </>
    )
}