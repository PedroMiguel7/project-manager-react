import * as React from 'react';
import { Component } from "react";
import api from '../../../../../api';
import TarefasMenu from '../../TarefasMenu';
import IconButton from '@mui/material/IconButton';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PrioridadeAlta from '../../../../../assets/icons/prioridade-alta.svg';
import PrioridadeMedia from '../../../../../assets/icons/prioridade-media.svg';
import PrioridadeBaixa from '../../../../../assets/icons/prioridade-baixa.svg';
import Tooltip from '@mui/material/Tooltip';
import TasksNotFound from "../../../../../assets/empty-states/tasks-not-found.svg";
import { EmptyState, EmptyStateImg, EmptyStateTitle, Head, HeadCol, TableContainer, Table, TableBody, Row, Col, PriorityIcons, SpinnerBox, Spinner, LoadingMessage } from './style';

class TarefasConcluidas extends Component {
  state = {
    tarefas: [],
    loading: false,
  }
  async componentDidMount() {
    const pessoaPath = window.location.pathname;

    this.setState({ loading: true })
    try {
      const response = await api.get(pessoaPath + '/tasks');
      this.setState({ loading: false, tarefas: response.data });
    } catch(err){
      this.setState({ loading: false })
      console.log(err);
    }
  }

  Header = (props) => {
    const qtdTarefas = props.tarefas;

    if (qtdTarefas !== null) {
      var qtdAndamento = qtdTarefas?.filter((tarefas) => tarefas.status === "Concluido" || tarefas.status === "Concluído");
    }

    if (qtdTarefas === null || qtdAndamento.length === 0) {
      return (
        <>
        </>
      )
    } else {
      return (
        <>
          <Head>
            <HeadCol scope="col"></HeadCol>
            <HeadCol scope="col">Descrição</HeadCol>
            <HeadCol scope="col">Prioridade</HeadCol>
            <HeadCol scope="col">Início</HeadCol>
            <HeadCol scope="col">Conclusão</HeadCol>
            <HeadCol scope="col"></HeadCol>
          </Head>
        </>
      )
    }

  }

  ImprimeTarefas = (props) => {
    const qtdTarefas = props.tarefas;

    if (qtdTarefas !== null) {
      var qtdConcluidas = qtdTarefas?.filter((tarefas) => tarefas.status === "Concluido" || tarefas.status === "Concluído");
    }

    const [changeIcon, setIcon] = React.useState(true);

    const icon = (changeIcon === true) ? <TaskAltRoundedIcon sx={{ color: "#F46E27" }} /> : <RadioButtonUncheckedIcon sx={{ color: "#C2C3C6" }} />;

    if (qtdTarefas === null || qtdConcluidas.length === 0) {
      return (
        <EmptyState>
          <EmptyStateImg src={TasksNotFound} />
          <EmptyStateTitle>
            Sem tarefas concluídas.
          </EmptyStateTitle>
        </EmptyState>
      );
    } else {
      function Prioridade(prioridade) {
        if (prioridade === 0) {
          return (
            <Tooltip title='Baixa' arrow>
              <PriorityIcons src={PrioridadeBaixa} />
            </Tooltip>
          )
        } else if (prioridade == 1) {
          return (
            <Tooltip title='Média' arrow>
              <PriorityIcons src={PrioridadeMedia} />
            </Tooltip>
          )
        } else if (prioridade === 2) {
          return (
            <Tooltip title='Alta' arrow>
              <PriorityIcons src={PrioridadeAlta} />
            </Tooltip>
          )
        }
      }

      function Inicio(inicio) {
        const dataInicio = new Date(inicio);
        dataInicio.setDate(dataInicio.getDate() + 1);
        const dataInicioFormatada = dataInicio.toLocaleDateString("pt-BR");
        return dataInicioFormatada;
      }

      function Conclusao(conclusao) {
        const dataConclusao = new Date(conclusao);
        dataConclusao.setDate(dataConclusao.getDate() + 1);
        const dataConclusaoFormatada = dataConclusao.toLocaleDateString("pt-BR");
        return dataConclusaoFormatada;
      }

      return (
        props.tarefas?.map(t => {
          if (t.status === "Concluido")
            return (
              <Row id={t.id_task} key={t.id_task} style={{color: 'var(--corTexto'}}>
                <Col>
                  <IconButton onLoad={setIcon}>
                    {icon}
                  </IconButton>
                </Col>
                <Col>
                  {t.descricao_task}
                </Col>
                <Col>
                  {Prioridade(t.prioridade)}
                </Col>
                <Col>
                  {Inicio(t.data_criacao)}
                </Col>
                <Col>
                  {Conclusao(t.data_conclusao)}
                </Col>
                <Col>
                  <TarefasMenu />
                </Col>
              </Row>
            )
        }
        ));
    }
  }

  LoadingSpinner = () => {
    return (
      <SpinnerBox>
        <Spinner size={60} thickness={1} />
        <LoadingMessage>Carregando os dados...</LoadingMessage>
      </SpinnerBox>
    )
  }

  render() {
    const { tarefas } = this.state;
    const { loading } = this.state;

    return (
      <>
        <TableContainer className='table-responsive'>
          <Table className="table align-middle text-center">
            <TableBody>
              <this.Header tarefas={tarefas} />
              {loading ? <this.LoadingSpinner /> : <this.ImprimeTarefas tarefas={tarefas} />}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export default TarefasConcluidas;