import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { FilterSelect } from '../../../../styles/muiStyles';
import Home from "../../home.js";

export default function SelectPeriod({setPeriod}) {

    return (
        <>
          <FilterSelect
            select
            variant="standard"
            displayEmpty
            //value={newValue}
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
            <MenuItem onClick={() => setPeriod(1)} value={1}>Último Ano</MenuItem>
            <MenuItem onClick={() => setPeriod(2)} value={2}>Últimos 30 dias</MenuItem>
            <MenuItem onClick={() => setPeriod(3)} value={3}>Últimos 7 dias</MenuItem>
          </FilterSelect>
        </>
      )
}