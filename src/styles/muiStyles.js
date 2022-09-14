import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const Textfield = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#F4F5FA',
        svg: { color: '#F4F5FA' },
        '&.Mui-focused': {
            borderColor: '#F4F5FA',
            svg: { color: 'var(--corBotao)' }
        },
        '& fieldset': {
            borderColor: '#F4F5FA',
            borderRadius: 5
        },
        '&:hover fieldset': {
            borderColor: '#C2C3C6',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--corBotao)',
        },
    },
    '.MuiInputLabel-outlined': {
        color: '#F4F5FA',
        '&.Mui-focused': {
            color: 'var(--corBotao)',
        },
    },
})

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#21222D',
    borderRadius: 2,
    boxShadow: 24,
    p: 5,
    minWidth: '400px',
    width: '25vw'
  };

  export const FilterSelect = styled(TextField)({
    '& MuiInput-root:after': {
        borderBottomColor: '#F57D3D',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#F57D3D',
      },
    '.MuiTextField-root': {
        color: '#F57D3D',
        '& .MuiSelect-standard': {
            color: '#C2C3C6', 
        },
        '&.Mui-focused-standard': {
           color: '#F4F5FA',
        },
    },
    '& .MuiSelect-standard': {
      color: '#C2C3C6',
      '& fieldset': {
        borderColor: '#F4F5FA',
        borderRadius: 5
      },
    },
    '.MuiSelect-iconStandard': {
        color: '#C2C3C6',
    }
  })