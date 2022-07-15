import * as React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TarefasMenu from '../TarefasMenu';

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
    <div className='TabelaTarefas table-responsive'>
      <table className="table align-middle text-center ">
        <thead className="TabelaTarefasHead align-middle">
          <tr>
            <th scope="col"></th>
            <th scope="col">Nome</th>
            <th scope="col">Tempo Restante</th>
            <th scope="col">Início</th>
            <th scope="col">Conclusão</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className='CorTarefa'>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              -
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              31/01/2022
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              -
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              31/01/2022
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> <span>6 dias</span>
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              -
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> <span>2 dias</span>
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              -
            </td>
            <td>
              <TarefasMenu />
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet
            </td>
            <td>
              <AccessTimeIcon sx={{fontSize: '1.25rem'}} /> <span>15 horas</span>
            </td>
            <td>
              01/01/2022
            </td>
            <td>
              -
            </td>
            <td>
             <TarefasMenu />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}
