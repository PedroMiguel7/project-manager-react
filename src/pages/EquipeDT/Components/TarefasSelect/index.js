import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FilterSelect } from '../../../../styles/muiStyles';

class TarefasSelect extends React.Component {
  state = {
    selectValue: 0,
  };

  Status0 = () => {
    this.props.parentCallback(0);
    this.statusValue = 0;
  }

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

  Status4 = () => {
    this.props.parentCallback(4);
    this.statusValue = 4;
  }

  render() {
    var statusValue;

    return (
      <>
        <FilterSelect
          select
          variant="standard"
          displayEmpty
          value={statusValue}
          //onChange={this.handleChange}
          defaultValue={0}
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
          <MenuItem onClick={this.Status0} value={0}>Todas</MenuItem>
          <MenuItem onClick={this.Status1} value={1}>A Fazer</MenuItem>
          <MenuItem onClick={this.Status2} value={2}>Em Andamento</MenuItem>
          <MenuItem onClick={this.Status3} value={3}>Em Teste</MenuItem>
          <MenuItem onClick={this.Status4} value={4}>Concluídas</MenuItem>
        </FilterSelect>
      </>
    )
  }
}

export default TarefasSelect;