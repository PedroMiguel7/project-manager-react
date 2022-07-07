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

  const CssSelect = styled(Select) ({
    '& .MuiSelect-select': {
      color: "#F4F5FA",
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
        <InputLabel sx={{color: '#C2C3C6'}} id="demo-simple-select-label">Equipe</InputLabel>
        <CssSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={equipe}
          label="Age"
          onChange={handleChange}
          /*sx={{color: '#F4F5FA', borderColor: "#F4F5FA"}}*/
        >
          <MenuItem value={1}>Komanda</MenuItem>
          <MenuItem value={2}>Cariri Inovação</MenuItem>
          <MenuItem value={3}>Cariri Teste</MenuItem>
          
        </CssSelect>
      </FormControl>
    </Box>
  );
}
