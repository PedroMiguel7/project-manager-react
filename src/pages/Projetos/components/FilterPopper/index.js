import React from 'react';
import filter from '../../../../assets/icons/filter.svg';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { Box } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import CssDatePickerFut from '../DatePicker/DisableFuture/disableFuture';
import Button from '@mui/material/Button';
import CssDatePickerPas from '../DatePicker/DisablePast/disablePast';

function FilterPopper(props) {
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

    const CheckboxStyle = styled(Checkbox)({
        color: "#C2C3C6",
        '&.Mui-checked': {
            color: "#F46E27",
        }
    })

    const [checkedFA, setCheckedFA] = React.useState(true);
    const handleChangeFA = (evento) => {
        setCheckedFA(evento.target.checked);
    };

    const [checkedAN, setCheckedAN] = React.useState(true);
    const handleChangeAN = (evento) => {
        setCheckedAN(evento.target.checked);
    };

    const [checkedCO, setCheckedCO] = React.useState(true);
    const handleChangeCO = (evento) => {
        setCheckedCO(evento.target.checked);
    };
    
    
    var projetos = props.PROJETOS
    
    function Filtrar( ) {
        projetos = props.PROJETOS
        var elementos = []
        if (checkedAN === true) {
            elementos.push('Em Andamento')
        }
        if (checkedFA === true) {
            elementos.push('A Fazer')
        }
        if (checkedCO === true) {
            elementos.push('Concluido')
        }
        if (elementos !== null) {
            props.SET(projetos.filter(Projetos => elementos.includes(Projetos.status)))
        } else {
            props.SET('')
        }
    }

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
                                        <FormControlLabel checked={checkedFA} onChange={handleChangeFA} control={<CheckboxStyle defaultChecked size="small" />} label="A fazer" />
                                        <FormControlLabel checked={checkedAN} onChange={handleChangeAN} control={<CheckboxStyle defaultChecked size="small" />} label="Em Andamento" />
                                        <FormControlLabel checked={checkedCO} onChange={handleChangeCO} control={<CheckboxStyle defaultChecked size="small" />} label="Concluído" />
                                    </FormGroup>
                                </div>
                                <Divider />

                                <div className="d-flex align-items-center justify-content-between gap-3 my-3">
                                    <span className="PopperTitle">Data</span>
                                    <div className="d-flex align-items-center justify-content-center gap-2">
                                        <CssDatePickerFut label="Início" />
                                        <span>-</span>
                                        <CssDatePickerPas label="Fim" />
                                    </div>

                                </div>

                                <Divider />
                                <div className='d-flex align-items-center justify-content-between mt-4'>
                                    <Button style={{
                                        color: "#F66E6E",
                                        opacity: 0.7,
                                        textTransform: 'capitalize'
                                    }}
                                        variant="text" className='' onClick={{ uncheck }}>Limpar Filtros</Button>
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
                                            variant="text" className='' type="submit" onClick={Filtrar}>Salvar</Button>
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