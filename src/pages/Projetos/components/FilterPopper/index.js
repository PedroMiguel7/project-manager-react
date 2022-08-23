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
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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


    const [value, setValue] = React.useState(new Date());
    const [value2, setValue2] = React.useState(new Date());

    const limparFiltro = () => setValue(null);

    const DateTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            color: "#F4F5FA",
            '& fieldset': {
                borderColor: '#F4F5FA',
                borderRadius: 5,
            },
            '&:hover fieldset': {
                borderColor: '#C2C3C6',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F46E27',
                color: '#F46E27',
            },
            'input': {
                '&::placeholder': {
                    color: '#C2C3C6',
                }
            }
        },
    })


    var projetos = props.PROJETOS

    function Filtrar(PROPS) {
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
        //props.SET(projetos.filter((Projetos => Projetos.data_criacao >= PROPS.passado) &&  (Projetos => Projetos.data_criacao <= PROPS.futuro)))
        handleClose();
    }

    var novadata = (value2.getFullYear() + '-' + '0'+ (value2.getMonth()+1) + '-' + value2.getDate())
    console.log('filtro passado novo: ' + novadata)


    var novadata1 = (value.getFullYear() + '-' + '0'+ (value.getMonth()+1) + '-' + value.getDate())
    console.log('filtro futuro novo: ' + novadata1)

    var datinha
    projetos.map(p =>(
        datinha = p.data_criacao.slice(0, 10),
        //datinha.atoi(datinha.slice(12,19)),
        console.log(datinha)
    ))



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
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                disableFuture={true}
                                                inputFormat="dd/MM/yyyy"
                                                label="Início"
                                                openTo="year"
                                                views={['year', 'month', 'day']}
                                                value={value2}
                                                onChange={(newValue) => {
                                                    setValue2(newValue);
                                                }}
                                                renderInput={(params) => <DateTextField {...params} sx={{
                                                    maxWidth: "10.5rem",
                                                    "& label": {
                                                        color: '#F4F5FA'
                                                    },
                                                    "& label.Mui-focused": {
                                                        color: '#F46E27'
                                                    },
                                                    svg: { color: '#F4F5FA' }
                                                }} />}
                                            />
                                        </LocalizationProvider>
                                        <span>-</span>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                                            <DatePicker
                                                disablePast
                                                inputFormat="dd/MM/yyyy"
                                                label="Prazo"
                                                openTo="year"
                                                views={['year', 'month', 'day']}
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <DateTextField {...params} sx={{
                                                    "& label": {
                                                        color: '#F4F5FA'
                                                    },
                                                    "& label.Mui-focused": {
                                                        color: '#F46E27'
                                                    },
                                                    svg: { color: '#F4F5FA' }
                                                }} />}
                                            />
                                        </LocalizationProvider>
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