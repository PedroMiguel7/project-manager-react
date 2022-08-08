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
      /*'&.Mui-focused': {
        borderColor: '#F4F5FA',
        svg: {color: '#F57D3D'}
      },
      '& fieldset': {
        borderColor: '#F4F5FA',
        borderRadius: 5
      },
      '&:hover fieldset': {
        borderColor: '#C2C3C6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F46E27',
      },
    },
    '.MuiInputLabel-outlined': {
      color: '#F4F5FA',
      '&.Mui-focused': {
        color:'#F46E27',
      },*/
    },
    '.MuiSelect-iconStandard': {
        color: '#C2C3C6',
    }
  })

class ProjetosSelect extends React.Component {
    state = {
        selectValue: 1,
    };

    /*handleChange = (event) => {
        this.setState({selectValue: event.target.value});
        this.props.parentCallback(this.statusValue);
        //console.log(this.selectValue);
    };*/

    Status1 = () => {
        this.props.parentCallback(1);
        this.statusValue = 1;
    }

    Status2 = () => {
        this.props.parentCallback(2);
        this.statusValue = 2;
    }

    Status3 = () => {
        this.props.parentCallback(3);
        this.statusValue = 3;
    }

    /*onTrigger = () => {
        this.props.parentCallback(this.selectValue);
    };

    onTrigger2 = () => {
        this.props.getStatus(2);
    };*/

    render() {
        const {selectValue} = this.state;

        var statusValue;

        return (
            <>
                
                <CustomSelect
                    select
                    //color="warning"
                    variant="standard"
                    displayEmpty
                    value={statusValue}
                    onChange={this.handleChange}
                    defaultValue={1}
                    SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: '23vh',
                              backgroundColor: '#494A58',
                              color: '#fff',
                            }
                          }
                        }
                      }}
                    InputProps={{ disableUnderline: true }}
                >
                    <MenuItem onClick={this.Status1} value={1}>Todos</MenuItem>
                    <MenuItem onClick={this.Status2} value={2}>Em Andamento</MenuItem>
                    <MenuItem onClick={this.Status3} value={3}>Concluídos</MenuItem>
                </CustomSelect>
            </>
        )
    }

    /*const [status, setStatus] = React.useState(1);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };*/

    /*return (
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
    )*/
}

export default ProjetosSelect;