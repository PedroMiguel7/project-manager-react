import React, { useState, useEffect } from "react";
import { Component } from "react";
import api from "../../../../../services/api";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TarefasMenu from "../../TarefasMenu";
import IconButton from "@mui/material/IconButton";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Alerta from "../../Alerta";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import PrioridadeAlta from "../../../../../assets/icons/prioridade-alta.svg";
import PrioridadeMedia from "../../../../../assets/icons/prioridade-media.svg";
import PrioridadeBaixa from "../../../../../assets/icons/prioridade-baixa.svg";
import Tooltip from "@mui/material/Tooltip";
import TasksNotFound from "../../../../../assets/empty-states/tasks-not-found.svg";
import { EmptyState, EmptyStateImg, EmptyStateTitle, Head, HeadCol, TableContainer, Table, TableBody, Row, Col, PriorityIcons, SpinnerBox, Spinner, LoadingMessage } from './style';

export default function TarefasFazer(props) {
  //const tarefas = props.tarefa;
  const [tarefas, setTarefas] = useState([]);
  const [tarefasId, setTarefasId] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);
  //const [openSnackbar, setOpenSnackbar] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [loading, setLoading] = useState(true);

  // state = {
  //   tarefas: [],
  //   tarefasId: 0,
  //   openAlert: false,
  //   openSnackbar: false,
  //   changeIcon: false,
  //   loading: false,
  // }

  useEffect(() => {
    const getTarefas = async () => {
      setLoading(true);
      try {
        const tarefas = await props.tarefas?.filter(
          (t) => t.status === "A Fazer"
        );
        setTarefas(tarefas);
        setLoading(false);
      } catch(err){
        setLoading(false);
        console.log(err);
      }
    }
    getTarefas();
  }, []);

  console.log(tarefas)
  
  function Header() {
    //const qtdTarefas = props.tarefas;

    // if (qtdTarefas !== null) {
    //   var qtdFazer = qtdTarefas?.filter(
    //     (tarefas) => tarefas.status === "A Fazer"
    //   );
    // }

    if (tarefas === null || tarefas?.length === 0) {
      return <></>;
    } else {
      return (
        <>
          <Head>
            <HeadCol scope="col"></HeadCol>
            <HeadCol scope="col">Descrição</HeadCol>
            <HeadCol scope="col">Prioridade</HeadCol>
            <HeadCol scope="col">Prazo</HeadCol>
            <HeadCol scope="col">Início</HeadCol>
            <HeadCol scope="col"></HeadCol>
          </Head>
        </>
      );
    }
  };

  function ImprimeTarefas() {
    // const qtdTarefas = props.tarefas;

    // if (qtdTarefas !== null) {
    //   var qtdFazer = qtdTarefas?.filter(
    //     (tarefas) => tarefas.status === "A Fazer"
    //   );
    // }

    const handleCheck = (id) => {
      console.log(id);
      setTarefasId(id);
      setOpenAlert(true);
    };

    const icon =
      changeIcon ? (
        <TaskAltRoundedIcon sx={{ color: "#F46E27" }} />
      ) : (
        <RadioButtonUncheckedIcon sx={{ color: "#C2C3C6" }} />
      );

    if (tarefas === null || tarefas?.length === 0) {
      return (
        <>
          <EmptyState>
            <EmptyStateImg src={TasksNotFound} />
            <EmptyStateTitle>
              Sem tarefas a fazer.
            </EmptyStateTitle>
          </EmptyState>
        </>
      );
    } else {
      function Prioridade(prioridade) {
        if (prioridade === 0) {
          return (
            <Tooltip title="Baixa" arrow>
              <PriorityIcons src={PrioridadeBaixa} />
            </Tooltip>
          );
        } else if (prioridade == 1) {
          return (
            <Tooltip title="Média" arrow>
              <PriorityIcons src={PrioridadeMedia} />
            </Tooltip>
          );
        } else if (prioridade === 2) {
          return (
            <Tooltip title="Alta" arrow>
              <PriorityIcons src={PrioridadeAlta} />
            </Tooltip>
          );
        }
      }

      function TempoRestante(prazo) {
        const dataHojeFormatada = new Date();

        const dataPrazoFormatada = new Date(prazo);

        if (
          dataPrazoFormatada - dataHojeFormatada <= 86400000 &&
          dataPrazoFormatada - dataHojeFormatada > 0
        ) {
          return "1 dia";
        } else if (dataPrazoFormatada < dataHojeFormatada) {
          return "Atraso";
        } else {
          const tempo = (dataPrazoFormatada - dataHojeFormatada) / 86400000;
          return `${tempo.toFixed()} dias`;
        }
      }

      function Inicio(inicio) {
        const dataInicio = new Date(inicio);
        dataInicio.setDate(dataInicio.getDate() + 1);
        const dataInicioFormatada = dataInicio.toLocaleDateString("pt-BR");
        return dataInicioFormatada;
      }

      var getId;
      return (
        tarefas?.map((t) => {
              <>
                <Row id={t.id_task} key={t.id_task}>
                  <Col>
                    <IconButton
                      onClick={() => {
                        handleCheck(t.id_task);
                      }}
                    >
                      {icon}
                    </IconButton>
                  </Col>
                  <Col>{t.descricao_task}</Col>
                  <Col>{Prioridade(t.prioridade)}</Col>
                  <Col>
                    <AccessTimeIcon
                      sx={{ fontSize: "1.1rem", marginRight: "0.2rem" }}
                    />
                    {TempoRestante(t.prazo_entrega)}
                  </Col>
                  <Col>{Inicio(t.data_criacao)}</Col>
                  <Col>
                    <TarefasMenu equipe_id={t.id_equipe} id_task={t.id_task} />
                  </Col>
                </Row>
              </>
        })
      )
    }
  };

  function Alerta() {
    const handleCloseAlert = () => setOpenAlert(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClickSim = (id) => {
      EditaTask(id);
      setOpenSnackbar(true);
      setOpenAlert(false);
      console.log(tarefasId);
    };

    function EditaTask(id) {
      api
        .put("/tasks/" + id + "/status", {
          status: "Em Andamento",
        })
        .then(
          setTimeout(() => {
            window.location.reload()
          }, 2500)
        );
    }

    return (
      <>
        <Dialog
          open={openAlert}
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              backgroundColor: "#494A58",
              color: "#fff",
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">
            {"Deseja inciar esta tarefa?"}
          </DialogTitle>

          <DialogActions>
            <Button
              onClick={handleCloseAlert}
              sx={{
                color: "#C2C3C6",
                opacity: 0.7,
              }}
            >
              Não
            </Button>
            <Button
              autoFocus
              onClick={() => {
                handleClickSim(tarefasId);
              }}
              variant="contained"
              sx={{
                color: "#FFF",
                backgroundColor: "#F57D3D",
                "&:hover": {
                  backgroundColor: "#F46E27",
                },
              }}
            >
              Sim
            </Button>
          </DialogActions>
        </Dialog>
        {openSnackbar === true ? <Alerta tipoAlerta="em andamento" /> : <></>}
      </>
    );
  };

  function LoadingSpinner() {
    return (
      <SpinnerBox>
        <Spinner size={60} thickness={1} />
        <LoadingMessage>Carregando os dados...</LoadingMessage>
      </SpinnerBox>
    )
  }

    return (
      <>
        <TableContainer className="table-responsive">
          <Table id="table" className="table align-middle text-center">
            <TableBody>
              <Header />
              {loading ? <LoadingSpinner /> : <ImprimeTarefas />}
              <Alerta />
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}