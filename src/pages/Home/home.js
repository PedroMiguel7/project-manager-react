import Sidebar from "../../components/SideBar/SideBar";
import AdicionarProjeto from '../../components/NewProject/index'
import Cards from "../../components/Card/CardProjetos/ExibirProjetos";
import { useState, useEffect } from "react";
import api from "../../api";
import CardBaixoHome from "../Home/TabelaProjetosHome";
import { ResponsiveMarimekko } from '@nivo/marimekko'

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

  const Atualizar = async () => {
    try {
      const response = await api.get('/projetos/');
      setProjetos(response.data);
    } catch (error) {
      console.log(error);
    }
  };


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

  /*function Grafico() {
    const data = [
      {
        "statement": "it's good",
        "participation": 7,
        "stronglyAgree": 13,
        "agree": 29,
        "disagree": 23,
        "stronglyDisagree": 15
      },
      {
        "statement": "it's sweet",
        "participation": 12,
        "stronglyAgree": 23,
        "agree": 6,
        "disagree": 27,
        "stronglyDisagree": 16
      },
      {
        "statement": "it's spicy",
        "participation": 14,
        "stronglyAgree": 24,
        "agree": 24,
        "disagree": 19,
        "stronglyDisagree": 28
      },
      {
        "statement": "worth eating",
        "participation": 17,
        "stronglyAgree": 10,
        "agree": 0,
        "disagree": 24,
        "stronglyDisagree": 6
      },
      {
        "statement": "worth buying",
        "participation": 4,
        "stronglyAgree": 24,
        "agree": 19,
        "disagree": 18,
        "stronglyDisagree": 5
      }
    ]

      < ResponsiveMarimekko
    data = { data }
    id = "statement"
    value = "participation"
    dimensions = {
      [
      {
        id: 'disagree strongly',
        value: 'stronglyDisagree'
      },
      {
        id: 'disagree',
        value: 'disagree'
      },
      {
        id: 'agree',
        value: 'agree'
      },
      {
        id: 'agree strongly',
        value: 'stronglyAgree'
      }
      ]}
    innerPadding = { 9}
    axisTop = { null}
    axisRight = {{
      orient: 'right',
        tickSize: 5,
          tickPadding: 5,
            tickRotation: 0,
              legend: '',
                legendOffset: 0
    }
  }
  axisBottom = {{
    orient: 'bottom',
      tickSize: 5,
        tickPadding: 5,
          tickRotation: 0,
            legend: 'participation',
              legendOffset: 36,
                legendPosition: 'middle'
  }
}
axisLeft = {{
  orient: 'left',
    tickSize: 5,
      tickPadding: 5,
        tickRotation: 0,
          legend: 'opinions',
            legendOffset: -40,
              legendPosition: 'middle'
}}
margin = {{ top: 40, right: 80, bottom: 100, left: 80 }}
colors = {{ scheme: 'spectral' }}
borderWidth = { 1}
borderColor = {{
  from: 'color',
    modifiers: [
      [
        'darker',
        0.2
      ]
    ]
}}
defs = {
  [
  {
    id: 'lines',
    type: 'patternLines',
    background: 'rgba(0, 0, 0, 0)',
    color: 'inherit',
    rotation: -45,
    lineWidth: 4,
    spacing: 8
  }
  ]}
fill = {
  [
  {
    match: {
      id: 'agree strongly'
    },
    id: 'lines'
  },
  {
    match: {
      id: 'disagree strongly'
    },
    id: 'lines'
  }
  ]}
legends = {
  [
  {
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 80,
    itemsSpacing: 0,
    itemWidth: 140,
    itemHeight: 18,
    itemTextColor: '#999',
    itemDirection: 'right-to-left',
    itemOpacity: 1,
    symbolSize: 18,
    symbolShape: 'square',
    effects: [
      {
        on: 'hover',
        style: {
          itemTextColor: '#000'
        }
      }
    ]
  }
  ]}
  />
    return (
  <ResponsiveMarimekko />
)
  }
  */


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
          placeholder="Pesquise aqui..."
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
        <div className="CardlateralesquerdoHome col-lg-6 col-md-12 mt-2 ms-3">
          <div className="row CardsContainer my-4 mt-4 d-flex">
            <Cards Projetos={projetos} atualiza={Atualizar} home={"home"} />
          </div>
        </div>
        <div className="cardLateralHome d-flex justify-content-center col-lg-6 col-md-12 col-sm-12 mt-2 p-4 mt-4">
          <div className="Resumo col-md-12 col-lg-12 justify-content-center ">
            <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
              <h6 >{QtdTotalEquipes}</h6>
              <strong>
                <p className="ms-4 ">Total de <br /> Equipes</p>
              </strong>
              <h6 className="ms-5" style={{ color: "var(--azul-claro)" }}>{QtdTotalPessoas}</h6>
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
      <div className="Teste row  h-lg-50 p-3 mt-2">
        <CardBaixoHome Projetos={projetos} />
      </div>
    </main>
  </div>
);
}
