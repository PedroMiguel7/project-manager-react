import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FilterPopper from '../FilterPopper';
import { alpha, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export default function ResponsiveDatePickers(props) {
  const [value, setValue] = React.useState(new Date());

  const limparFiltro = () => setValue(null);

  /*const CssDate = styled(DatePicker) ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F4F5FA',
        borderRadius: 5,
      },
      '&:hover fieldset': {
        borderColor: '#C2C3C6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F46E27',
      },
    },
  })*/

  return (
    <>
        <div className="d-flex align-items-center justify-content-center gap-2">
            <span style={{color: "#C2C3C6", fontWeight: 500}}>Data</span>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                disableFuture
                label="Início"
                openTo="year"
                views={['year', 'month', 'day']}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
                <span>-</span>
                <DatePicker
                disableFuture
                label="Fim"
                openTo="year"
                views={['year', 'month', 'day']}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
        
    </>
    
  );
}