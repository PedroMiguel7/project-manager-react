import React from 'react';
import { useState } from 'react';
import filter from '../../assets/icons/filter.svg';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { Box } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import CssDatePicker from '../DatePicker/DisableFuture/disableFuture';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function FilterPopper(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const [checkboxState, setUnchecked] = React.useState();
    const uncheck = () => setUnchecked(false);
    const limpar = () => {
        setUnchecked(false);
    };

    const CheckboxStyle = styled(Checkbox) ({
        color: "#C2C3C6",
        '&.Mui-checked': {
          color: "#F46E27",
        }
    })

    return (
        <>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={250}>
                    
                    <Paper sx={{ 
                        mt: 2,
                        backgroundColor: "#494A58",
                        color: "#C2C3C6",
                        minWidth: "200px",
                        maxWidth: "490px",                 
                    }}>
                    <Box
                    sx={{
                        position: "relative",
                        mt: "10px",
                        "&::before": {
                        backgroundColor: "#494A58",
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: 12,
                        height: 12,
                        top: -6,
                        transform: "rotate(45deg)",
                        left: "calc(94% - 13px)"
                        }
                    }}
                    />
                        <div className='Popper p-3'>
                            <div className='d-flex align-items-center mb-2'>
                                <span className='me-5 PopperTitle'>Status</span>
                                <FormGroup className='PopperOptions d-flex flex-row gap-2'>
                                    <FormControlLabel control={<CheckboxStyle defaultChecked size="small" />} label="A fazer" />
                                    <FormControlLabel control={<CheckboxStyle defaultChecked size="small" />} label="Em Andamento"  />
                                    <FormControlLabel control={<CheckboxStyle defaultChecked size="small" />} label="Concluído" />
                                </FormGroup>
                            </div>
                            <Divider  />
                            
                            <div className="d-flex align-items-center justify-content-between gap-3 my-3">
                                <span className="PopperTitle">Data</span>
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <CssDatePicker label="Início" />
                                    <span>-</span>
                                    <CssDatePicker label="Fim" />    
                                </div>
                                
                            </div>

                            <Divider  />
                            <div className='d-flex align-items-center justify-content-between mt-4'>
                                <Button style={{
                                color: "#F66E6E",
                                opacity: 0.7,
                                textTransform: 'capitalize'
                                }} 
                                variant="text" className='' onClick={{uncheck}}>Limpar Filtros</Button>
                                <div className='d-flex align-items-center'>
                                    <Button style={{
                                    color: "#C2C3C6",
                                    opacity: 0.5,
                                    textTransform: 'capitalize'
                                    }} 
                                    variant="text" className='' onClick={handleClose}>Cancelar</Button>
                                    <Button style={{
                                    color: "#C2C3C6",
                                    textTransform: 'capitalize'
                                    }} 
                                    variant="text" className='' type="submit">Salvar</Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Fade>
                )}
            </Popper>
            <button onClick={handleClick('bottom-end')} className="filter px-2 py-1">
                 <span>Filtro</span> <img src={filter} alt="" />
            </button>
        </>
        
    )

  
}

export default FilterPopper