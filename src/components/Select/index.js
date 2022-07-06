import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [equipe, setEquipe] = React.useState('');

  const handleChange = (event) => {
    setEquipe(event.target.value);
  };

  const CssBasicSelect = styled(BasicSelect) ({
    '& .MuiSelect-root': {
      color: '#fff',
    },
    'input': {
      '&::placeholder': {
        color: '#C2C3C6',
      }
    }
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
        <InputLabel sx={{color: '#C2C3C6'}} id="demo-simple-select-label">Equipe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={equipe}
          label="Age"
          onChange={handleChange}
        
        >
          <MenuItem value={10}>Komanda</MenuItem>
          <MenuItem value={20}>Devs Cariri</MenuItem>
          <MenuItem value={30}>Cariri Inovação</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
