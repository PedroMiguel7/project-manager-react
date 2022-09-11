import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import aim from "../../assets/icons/aim.svg";
import HeaderTarefas from "./Components/HeaderTarefas";
import LinearChart from "./Components/LinearChart";
import RendimentoSelect from "./Components/RendimentoSelect";
import BackIcon from "../../assets/icons/back.svg";
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

    return (
      <>
        <PageContainer>
          <ProfileContainer>
            <Back>
              <Link to={"/pessoas"}>
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

          <PessoaDashboard>
            <Rendimento>
              <RendimentoHeader>
                <h5 style={{color: 'var(--corTexto)'}}>Rendimento</h5>
                <this.SelectRendimento />
              </RendimentoHeader>
              <ChartContainer>
                <LinearChart selectValue={rendimentoFilter} tarefas={tarefas} />
              </ChartContainer>
            </Rendimento>
            <TarefasPessoa>
              <HeaderTarefas tarefas={tarefas} />
            </TarefasPessoa>
          </PessoaDashboard>
        </PageContainer>
      </>
    );
  }
}

export default PessoasDT;