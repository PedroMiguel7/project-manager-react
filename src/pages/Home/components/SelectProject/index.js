import React, { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import { FilterSelect } from '../../../../styles/muiStyles';
import api from "../../../../services/api";

export default function SelectProject({ projetos, setByProject }) {
  const Projetos = projetos;
  const [firstProject, setFirstProject] = useState(98)
  const [projectId, setProjectId] = useState(98)

  // useEffect(() => {
  //   const getFistProject = async () => {
  //     const firstId = await Projetos[0].id_projeto; 
  //     setFirstProject(firstId)
  //   }
  //   getFistProject()
  // }, [])

  const handleChange = (e) => {
    setProjectId(e.target.value)
    setByProject(e.target.value)
  }

  //console.log(firstProject)
  return (
    <>
      <FilterSelect
        select
        variant="standard"
        displayEmpty
        value={projectId}
        onChange={handleChange}
        defaultValue={98}
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
        <MenuItem value={0}>Teste</MenuItem>
        {
          Projetos?.map(p => (
            <MenuItem value={p.id_projeto} key={p.id_projeto} >{p.nome_projeto}</MenuItem>
          ))
        }
      </FilterSelect>
    </>
  )
}