import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api from '../../api'
import { useState, useEffect } from 'react';


function MostrandoEquipes() {
    api.get("/equipes/");
    const [equipes, setEquipes] = useState([]);
    const url = "/equipes/";
    useEffect(() => {
        const fetchEquipe = async () => {
            const response = await api.get(url)
            setEquipes(response.data)
        }
        fetchEquipe()
        console.log(equipes)
    });

    return (
        <MenuItem value={1}>Komanda</MenuItem>
    )
}



export default function BasicSelect() {
    const [equipe, setEquipe] = React.useState('');

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
                <InputLabel sx={{ color: '#C2C3C6' }} id="demo-simple-select-label">Equipe</InputLabel>
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
                    <MostrandoEquipes/>

                </CssSelect>
            </FormControl>
        </Box>
    );
}