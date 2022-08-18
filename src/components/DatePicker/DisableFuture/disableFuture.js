import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { alpha, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export default function CssDateFut(props) {
  const [value, setValue] = React.useState(new Date());

  const limparFiltro = () => setValue(null);

  const DateTextField = styled(TextField) ({
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
  

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          disableFuture={true}
          inputFormat="dd/MM/yyyy"
          label={props.label}
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
              setValue(newValue);
          }}
          renderInput={(params) => <DateTextField {...params} sx={{
            maxWidth: "10.5rem",
            "& label": {
              color: '#F4F5FA'
            },
            "& label.Mui-focused": {
              color: '#F46E27'
            },
            svg: { color: '#F4F5FA' }}} />}
          />
      </LocalizationProvider>
    </>
  );
}