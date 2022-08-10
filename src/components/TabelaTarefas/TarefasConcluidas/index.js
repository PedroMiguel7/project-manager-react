import * as React from 'react';
import { Component } from "react";
import api from '../../../api';
import TarefasMenu from '../../TarefasMenu';
import IconButton from '@mui/material/IconButton';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PrioridadeAlta from '../../../assets/icons/prioridade-alta.svg';
import PrioridadeMedia from '../../../assets/icons/prioridade-media.svg';
import PrioridadeBaixa from '../../../assets/icons/prioridade-baixa.svg';
import Tooltip from '@mui/material/Tooltip';


class TarefasConcluidas extends Component {
  state = {
    tarefas: [],
  }
  async componentDidMount() {
      const pessoaPath = window.location.pathname;
      
      const response = await api.get(pessoaPath+'/tasks');

      this.setState({ tarefas: response.data });
  }

  ImprimeTarefas = (props) => {
    const qtdTarefas = props.tarefas;
    const qtdConcluidas = qtdTarefas.filter((tarefas) => tarefas.status === "Concluido" || tarefas.status === "Concluído");

    const [changeIcon, setIcon] = React.useState(true);

    const icon = (changeIcon === true) ? <TaskAltRoundedIcon sx={{color: "#F46E27"}} /> : <RadioButtonUncheckedIcon sx={{color: "#C2C3C6"}}/>;

    if( qtdTarefas === null || qtdConcluidas.length === 0){
        return(
          <tr>
            Sem tarefas concluídas
          </tr>
        );
    } else {
        function Prioridade(prioridade) {
          if (prioridade === 0) {
            return (
              <Tooltip title='Baixa' arrow>
                <img className='IconesPrioridade' src={PrioridadeBaixa}/>
              </Tooltip>
            )
          } else if (prioridade == 1) {
            return (
              <Tooltip title='Média' arrow>
                <img className='IconesPrioridade' src={PrioridadeMedia}/>
              </Tooltip>
            )
          } else if (prioridade === 2) {
            return (
              <Tooltip title='Alta' arrow>
                <img className='IconesPrioridade' src={PrioridadeAlta}/>
              </Tooltip>
            )
          }
        }

        function Inicio(inicio) {
          const dataInicio = new Date(inicio);
          const dataInicioArray = [dataInicio.getDate(), dataInicio.getMonth() + 1, dataInicio.getFullYear()]
          const dataInicioFormatada = `${dataInicioArray[0]}/${dataInicioArray[1]}/${dataInicioArray[2]}`;
          return dataInicioFormatada;
        }

        function Conclusao(conclusao) {
          const dataConclusao = new Date(conclusao);
          const dataConclusaoArray = [dataConclusao.getDate(), dataConclusao.getMonth() + 1, dataConclusao.getFullYear()]
          const dataConclusaoFormatada = `${dataConclusaoArray[0]}/${dataConclusaoArray[1]}/${dataConclusaoArray[2]}`;
          return dataConclusaoFormatada;
        }

        return (
          props.tarefas.map(t => 
            {if (t.status === "Concluido")
            return (
              <tr>
                <td>
                  <IconButton onLoad={setIcon}>
                    {icon}
                  </IconButton>
                </td>
                <td>
                  {t.descricao_task}
                </td>
                <td>
                  {Prioridade(t.prioridade)}
                </td>
                <td>
                  {Inicio(t.data_criacao)}
                </td>
                <td>
                  {Conclusao(t.data_conclusao)}
                </td>
                <td>
                  <TarefasMenu />
                </td>
              </tr>
            )
          }
        ));
    }
  }

  render() {
    const { tarefas } = this.state;

    return (
      <>
        <div className='TabelaTarefas table-responsive'>
          <table className="table align-middle text-center table-hover">
            <tbody>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Prioridade</th>
                <th scope="col">Início</th>
                <th scope="col">Conclusão</th>
                <th scope="col"></th>
              </tr>

              <this.ImprimeTarefas tarefas={tarefas} />
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default TarefasConcluidas;