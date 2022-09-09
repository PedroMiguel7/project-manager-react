import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FilterSelect } from '../../../../styles/muiStyles';

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
    var newValue;

    return (
      <>
        <FilterSelect
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
        </FilterSelect>
      </>
    )
  }
}

export default RendimentoSelect;