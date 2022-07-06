import React from 'react';
import { useState } from 'react';
import filter from '../../assets/icons/filter.svg';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { Box } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

function FilterPopper(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    
                    <Paper sx={{ 
                        mt: 2,
                        backgroundColor: "#494A58",
                        color: "#C2C3C6",
                        minWidth: "200px",
                        
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
                        left: "calc(85% - 6px)"
                        }
                    }}
                    />
                        <div className='p-2'>
                            <div className='d-flex'>
                                <span>Status</span>
                                <FormGroup className='d-flex'>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Em Andamento" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Concluído" />
                                    <FormControlLabel control={<Checkbox />} label="Cancelado" />
                                </FormGroup>
                            </div>
                        </div>
                    </Paper>
                </Fade>
                )}
            </Popper>
            <button onClick={handleClick('bottom-end')} className="filter px-2 py-1">
                 <span>Filter</span> <img src={filter} alt="" />
            </button>
        </>
        
    )

  
}

export default FilterPopper