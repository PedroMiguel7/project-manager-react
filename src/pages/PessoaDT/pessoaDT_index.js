import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import aim from "../../assets/icons/aim.svg";
import HeaderTarefas from "./Components/HeaderTarefas";
import LinearChart from "../../components/LinearChart";
import RendimentoSelect from "./Components/RendimentoSelect";
import BackIcon from "../../assets/icons/back.svg";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import EditaPessoa from "./Components/EditaPessoa";
import AvatarTag from "./Components/AvatarTag";
import {
  PageContainer,
  ProfileContainer,
  Back,
  ProfileHeader,
  NomePessoa,
  NomeEquipe,
  ResumoPessoa,
  PessoaDashboard,
  Rendimento,
  RendimentoHeader,
  ChartContainer,
  TarefasPessoa,
} from "./style";
import ProfileSkeleton from "./Components/Skeleton";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "#F4F5FA",
    svg: { color: "#F4F5FA" },
    "&.Mui-focused": {
      borderColor: "#F4F5FA",
      svg: { color: "#F57D3D" },
    },
    "& fieldset": {
      borderColor: "#F4F5FA",
      borderRadius: 5,
    },
    "&:hover fieldset": {
      borderColor: "#C2C3C6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F46E27",
    },
    "& .MuiInputAdornment-root": {
      color: "#87888C",
    },
  },
  ".MuiInputLabel-outlined": {
    color: "#F4F5FA",
    "&.Mui-focused": {
      color: "#F46E27",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#21222D",
  borderRadius: 2,
  boxShadow: 24,
  p: 5,
  minWidth: "400px",
  width: "25vw",
};

class PessoasDT extends Component {
  state = {
    pessoa: [],
    tarefas: [],
    equipes: [],
    rendimentoFilter: 1,
    openEdit: false,
    openAlert: false,
    openSnackbar: false,
  };
  async componentDidMount() {
    var pessoaPath = window.location.pathname;

    const response = await api.get(pessoaPath);
    const response2 = await api.get(pessoaPath + "/tasks");
    const response3 = await api.get("/equipes/");

    this.setState({
      pessoa: response.data,
      tarefas: response2.data,
      equipes: response3.data,
    });
  }

  handleCallbackRendimento = (childData) => {
    this.setState({ rendimentoFilter: childData });
  };

  SelectRendimento = () => {
    return (
      <>
        <RendimentoSelect parentCallback={this.handleCallbackRendimento} />
      </>
    );
  };

  updateStateByProps = () => {
    try {
      const atualiza = async () => {
        var pessoaPath = window.location.pathname;
        const response = await api.get(pessoaPath);
        this.setState({ pessoa: response.data });
      };
      atualiza();
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    const { pessoa } = this.state;
    const { tarefas } = this.state;
    const { equipes } = this.state;
    const { rendimentoFilter } = this.state;
    const { openEdit } = this.state;

    if (!pessoa.nome_pessoa) {
      document.title = "Pessoa";
    } else {
      document.title = `${pessoa.nome_pessoa}`;
    }

    let TotalTarefas;
    if (tarefas === null) {
      TotalTarefas = 0;
    } else {
      TotalTarefas = tarefas.length;
    }

    let Concluidas = 0;
    for (var prop in tarefas) {
      if (tarefas[prop].status === "Concluido") {
        Concluidas++;
      }
    }

    const handleClickEdit = () => {
      this.setState({ openEdit: true });
    };

    const handleCloseEdit = () => {
      this.setState({ openEdit: false });
    };

    const handleChangeEquipe = () => {};

    const handleDelete = (id) => {
      //this.setState({tarefasId: id})
      this.setState({ openAlert: true });
      this.setState({ openEdit: false });
    };

    var path = window.location.pathname;
    /*function EditaPessoa() {
            const updateStatus = async () => {
              const response = await api.put(window.location.pathname, {
                descricao_task: nome,
                pessoa_id: parseInt(dadoEquipe),
                prioridade: parseInt(prioridade),
                projeto_id: projetoID
              },[])
              props.atualiza();
              handleCloseEdit();
            }
            updateStatus()
          }*/

    return (
      <>
        <PageContainer /*className="col-11 offset-1 col-lg-11 offset-lg-1 col-sm-12 offset-sm-1"*/>
          <ProfileContainer /*className="col-lg-3 col-md-12 col-sm-12"*/>
            <Back>
              <Link to={"/pessoas"} /*className="mb-2 me-1"*/>
                <img src={BackIcon} style={{ width: 28 }} />
              </Link>
            </Back>

            {pessoa.length === 0 || pessoa.length === null ? (
              <ProfileSkeleton />
            ) : (
              <>
                <ProfileHeader>
                  <AvatarTag
                    funcao={pessoa.funcao_pessoa}
                    nome={pessoa.nome_pessoa}
                  />
                  <NomePessoa>
                    <h1>{pessoa.nome_pessoa}</h1>
                    <EditaPessoa
                      idPessoa={pessoa.id_pessoa}
                      PESSOA={pessoa}
                      nome_pessoa={pessoa.nome_pessoa}
                      funcao_pessoa={pessoa.funcao_pessoa}
                      equipe_id={pessoa.equipe_id}
                      atualiza={this.updateStateByProps}
                      equipes={equipes}
                    />
                  </NomePessoa>
                  <NomeEquipe>
                    <img src={aim} />
                    <span>{pessoa.nome_equipe}</span>
                  </NomeEquipe>
                </ProfileHeader>

                <ResumoPessoa>
                  <div>
                    <h5>{TotalTarefas}</h5>
                    <p>Total de Tarefas</p>
                  </div>
                  <div>
                    <h5>{Concluidas}</h5>
                    <p>Tarefas Concluídas</p>
                  </div>
                </ResumoPessoa>
              </>
            )}
            {/*<CustomizedAccordion />*/}
          </ProfileContainer>

          <PessoaDashboard /*className="col-lg-8 col-md-12 col-sm-12"*/>
            <Rendimento /*className="row"*/>
              <RendimentoHeader /*className="col-12"*/>
                <h5>Rendimento</h5>
                <this.SelectRendimento />
              </RendimentoHeader>

              <ChartContainer>
                <LinearChart selectValue={rendimentoFilter} />
              </ChartContainer>
            </Rendimento>
            <TarefasPessoa /*className="row col-12 p-3 mt-3"*/>
              <HeaderTarefas />
            </TarefasPessoa>
          </PessoaDashboard>
        </PageContainer>
      </>
    );
  }
}

export default PessoasDT;
