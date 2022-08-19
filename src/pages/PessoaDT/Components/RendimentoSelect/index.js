import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(TextField)({
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

class RendimentoSelect extends React.Component {
    state = {
        selectValue: 1,
    };

    Value1 = () => {
        this.props.parentCallback(1);
        this.newValue = 1;
    }

    Value2 = () => {
        this.props.parentCallback(2);
        this.newValue = 2;
    }

    render() {
        const {selectValue} = this.state;

        var newValue;

        return (
            <>
                <CustomSelect
                    select
                    variant="standard"
                    displayEmpty
                    value={newValue}
                    //onChange={this.handleChange}
                    defaultValue={1}
                    SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              backgroundColor: '#494A58',
                              color: '#fff',
                            }
                          }
                        }
                      }}
                    InputProps={{ disableUnderline: true }}
                >
                    <MenuItem onClick={this.Value1} value={1}>Semanal</MenuItem>
                    <MenuItem onClick={this.Value2} value={2}>Mensal</MenuItem>
                </CustomSelect>
            </>
        )
    }
}

export default RendimentoSelect;