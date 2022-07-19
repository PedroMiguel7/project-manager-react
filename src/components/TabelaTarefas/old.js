import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(nome, tempo, inicio, conclusao) {
  return { nome, tempo, inicio, conclusao };
}

const rows = [
  createData('Tarefa Tal', '-', '01/01/2022', '31/01/2022'),
  createData('Tarefa Tal', '-', '01/01/2022', '31/01/2022'),
  createData('Tarefa Tal', '6 dias', '01/01/2022', '-'),
  createData('Tarefa Tal', '2 dias', '01/01/2022', '-'),
  createData('Tarefa Tal', '15 horas', '01/01/2022', '-'),
];

export default function TabelaTarefas() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color: '#fff'}} align='center'>Nome</TableCell>
            <TableCell sx={{color: '#fff'}} align='center'>Tempo Restante</TableCell>
            <TableCell sx={{color: '#fff'}} align='center'>Início</TableCell>
            <TableCell sx={{color: '#fff'}} align='center'>Conclusão</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color: '#fff'}} align='center' component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell sx={{color: '#fff'}} align='center'>{row.tempo}</TableCell>
              <TableCell sx={{color: '#fff'}} align='center'>{row.inicio}</TableCell>
              <TableCell sx={{color: '#fff'}} align='center'>{row.conclusao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}