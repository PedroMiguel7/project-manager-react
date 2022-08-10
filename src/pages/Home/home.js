import Sidebar from "../../components/SideBar/SideBar";
import AdicionarProjeto from '../../components/NewProject/index'
import CardBaixoHome from "./CardBaixoHome";
import Cards from "../../components/Card/CardProjetos/ExibirProjetos";
import { useState, useEffect } from "react";
import api from "../../api";

export default function Menu_index() {

  const [projetos, setProjetos] = useState([]);
  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await api.get('/projetos/');
        setProjetos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjetos();
  }, []);

  const [equipes, setEquipes] = useState([]);
  useEffect(() => {
    const fetchequipe = async () => {
      try {
        const response = await api.get('/equipes/');
        setEquipes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchequipe();
  }, []);

  const [pessoas, setPessoas] = useState([]);
  useEffect(() => {
    const fetchpessoas = async () => {
      try {
        const response = await api.get('/pessoas/');
        setPessoas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpessoas();
  }, []);

  function Atualizar() {
    useEffect(() => {
      const fetchProjetos = async () => {
        try {
          const response = await api.get('/projetos/');
          setProjetos(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProjetos();
    }, []);
  }


  var QtdTotalEquipes = 0;
  if (equipes !== null) {
    QtdTotalEquipes = equipes.length;
  }

  var QtdTotalPessoas = 0;
  if (pessoas !== null) {
    QtdTotalPessoas = pessoas.length;
  }


  var QtdProjetos = 0;
  var QtdAndamento = 0;
  var QtdConcluidos = 0;
  var QtdPFazer = 0;
  if (projetos !== null) {
    QtdProjetos = projetos.length;
    if (projetos.filter(projetos => projetos.status === "Em Andamento") !== null) {
      QtdAndamento = projetos.filter(projetos => projetos.status === "Em Andamento").length
    }
    if (projetos.filter(projetos => projetos.status === "Concluido") !== null) {
      QtdConcluidos = projetos.filter(projetos => projetos.status === ("Concluido")).length
    }
    if (projetos.filter(projetos => projetos.status === "A Fazer") !== null) {
      QtdPFazer = projetos.filter(projetos => projetos.status === "A Fazer").length
    }
  }


  return (
    <div>
      <Sidebar />
      <main className="col-11 offset-1 col-lg-11 offset-lg-1 px-5">
        <div className="row mt-5 pb-3 main-header">
          <h1 className="col-lg-3 fs-2">Home - desafio 2.0</h1>
          <input
            className="col-lg-3 offset-lg-6"
            type="search"
            name="main-search"
            id="main-search"
            placeholder="Search here..."
          />
        </div>

        <div className="Options row align-items-center mt-lg-4">
          <div className="LeftOptions col-lg-2 mt-sm-2">
            <span className="me-2 fs-4">Projetos recentes</span>
          </div>
          <div className="RightOptions d-flex col-lg-2 offset-lg-8 mt-sm-2">
            <AdicionarProjeto atualiza={Atualizar} />
          </div>
        </div>

        <div
          className="row d-flex justify-content-between flex-wrap"
        >
          <div className="CardlateralesquerdoHome col-lg-7 col-md-12 mt-2 ms-3">
            <div className="row CardsContainer my-4 mt-4 d-flex">
              <Cards Projetos={projetos} atualiza={Atualizar}/>
            </div>
          </div>
          <div className="cardLateralHome d-flex justify-content-center col-lg-4 col-md-12 col-sm-12 mt-2 p-4 mt-4">
            <div className="Resumo col-md-12 col-lg-12 justify-content-center ">
              <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                <h6 >{QtdTotalEquipes}</h6>
                <strong>
                  <p className="ms-4 ">Total de <br /> Equipes</p>
                </strong>
                <h6 className="ms-5" style={{color: "var(--azul-claro)"}}>{QtdTotalPessoas}</h6>
                <strong>
                  <p className="ms-4 ">Total de <br /> pessoas</p>
                </strong>
              </div>
              <div className="row col-12">
                <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                  <h6 className="col">{QtdProjetos}</h6>
                  <strong>
                    <p className="text-center col">Total de <br /> Projetos</p>
                  </strong>
                </div>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="TarefasAnd d-flex align-items-center justify-content-center">
                    <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{QtdAndamento}</h6>
                    <strong>
                      <p className="ms-2">Projetos em Andamento</p>
                    </strong>
                  </div>
                  <div className="TarefasConc d-flex align-items-center justify-content-center">
                    <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>{QtdConcluidos}</h6>
                    <strong>
                      <p className=" ms-2">Projetos Concluídos</p>
                    </strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row mt-3">
          <CardBaixoHome Projetos={projetos} />
        </div>
      </main>
    </div>
  );
}
