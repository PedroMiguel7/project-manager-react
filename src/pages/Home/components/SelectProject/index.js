import React, { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import { FilterSelect } from '../../../../styles/muiStyles';
import api from "../../../../services/api";

export default function SelectProject({ projetos, setByProject }) {
  const Projetos = projetos;
  const [projectId, setProjectId] = useState(0)

  const handleChange = (e) => {
    setProjectId(e.target.value)
    setByProject(e.target.value)
  }

  return (
    <>
      <FilterSelect
        select
        variant="standard"
        displayEmpty
        value={projectId}
        onChange={handleChange}
        defaultValue={0}
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
        <MenuItem value={0} key={0} >Todos os projetos</MenuItem>
        {
          Projetos?.map(p => (
            <MenuItem value={p.id_projeto} key={p.id_projeto} >{p.nome_projeto}</MenuItem>
          ))
        }
      </FilterSelect>
    </>
  )
}