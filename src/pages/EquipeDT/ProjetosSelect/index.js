import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProjetosSelect() {
    const [status, setStatus] = React.useState(1);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    displayEmpty
                    value={status}
                    onChange={handleChange}
                    defaultValue={1}
                >
                    <MenuItem value={1}>Todos</MenuItem>
                    <MenuItem value={2}>Em Andamento</MenuItem>
                    <MenuItem value={3}>Concluidos</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}