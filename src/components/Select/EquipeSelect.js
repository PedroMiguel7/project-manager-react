import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class AdicionarProjeto2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipes: [],
        }
    }

    async componentDidMount() {
        fetch("https://golang-posgre-brisanet.herokuapp.com/equipes/")
            .then(novareposta => novareposta.json())
            .then(dados => {
                this.setState({ equipes: dados })
            })
    }

    render() {
        const { equipes } = this.state;

        const [equipe, setEquipe ] = this.useState('');

        const handleChange = (event) => {
            setEquipe(event.target.value);
        };

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

        return (
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
                    <InputLabel sx={{ color: '#C2C3C6' }} id="demo-simple-select-label">Equipes</InputLabel>
                    <CssSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={equipe}
                        label="Age"
                        onChange={handleChange}
                        sx={{
                            svg: { color: '#F4F5FA' }
                        }}
                    >
                        {equipes.map((e, index) => <MenuItem value={index}>{e.nome_equipe}</MenuItem>)}
                    </CssSelect>
                </FormControl>
            </Box >
        )
    }

}

export default AdicionarProjeto2;