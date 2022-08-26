import Sidebar from "../../components/SideBar/SideBar";
import AdicionarProjeto from '../Projetos/components/NewProjeto/index'
import Cards from "../../components/Card/CardProjetos/ExibirProjetos";
import { useState, useEffect } from "react";
import api from "../../api";
import CardBaixoHome from "../Home/TabelaProjetosHome";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

export default function Menu_index() {
  const [projetos, setProjetos] = useState([]);
  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await api.get('/projetos/'
        );
        setProjetos(response.data);
      } catch (error) {
        console.log(error);
        if(error.response.status === 401){
          window.location.href = '/'
        }
      } 
    };
    fetchProjetos();
  }, []);

  /*

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
  */

  const Atualizar = async () => {
    try {
      const response = await api.get('/projetos/');
      setProjetos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

/*
  var QtdTotalEquipes = 0;
  if (equipes !== null) {
    QtdTotalEquipes = equipes.length;
  }

  var QtdTotalPessoas = 0;
  if (pessoas !== null) {
    QtdTotalPessoas = pessoas.length;
  }
  */


  var QtdProjetos = 0;
  var QtdAndamento = 0;
  var QtdConcluidos = 0;
  var QtdPFazer = 0;
  if (projetos !== null) {
    QtdProjetos = projetos.length;
    if (projetos?.filter(projetos => projetos.status === "Em Andamento") !== null) {
      QtdAndamento = projetos?.filter(projetos => projetos.status === "Em Andamento").length
    }
    if (projetos?.filter(projetos => projetos.status === "Concluido") !== null) {
      QtdConcluidos = projetos?.filter(projetos => projetos.status === ("Concluido")).length
    }
    if (projetos?.filter(projetos => projetos.status === "A Fazer") !== null) {
      QtdPFazer = projetos?.filter(projetos => projetos.status === "A Fazer").length
    }
  }

  function Grafico(props) {

    var labels = [ 'PROJETOS' ]


    const data = {
      labels,
      datasets: [
        {
          label: 'Não Iniciado',
          data: labels?.map(() => props.AFAZER, ({ min: 0, max: props.total })),
          backgroundColor: '#ffeb7acc',
        },
        {
          label: 'Em Desenvolvimento',
          data: labels?.map(() => props.EMANDA, ({ min: 0, max: props.total })),
          backgroundColor: '#e3622fcc',
        },
        {
          label: 'Concluído',
          data: labels?.map(() => props.CON, ({ min: 0, max: props.total })),
          backgroundColor: '#87cefacc',
        },
      ],
    };

    return (
      <>
        <Bar options={options} data={data} style={{marginTop: "20px"}} width="70%" height="30%"/>
      </>
    )
  }


  return (
    <div>
      {/*<Sidebar />*/}
      <main className="col-lg-11 col-sm-12 offset-lg-1 px-5">
        <div className="row mt-5 pb-3 main-header">
          <h1 className="col-lg-3 fs-2">Home - desafio 2.0</h1>
          {/*<input
            className="col-lg-3 offset-lg-6"
            type="search"
            name="main-search"
            id="main-search"
            placeholder="Pesquise aqui..."
            />*/}
        </div>

        <div className="Options row align-items-center mt-lg-4">
          <div className="LeftOptions col-lg-2 mt-sm-2">
            <span className="me-2 fs-4">Projetos recentes</span>
          </div>
          <div className=" col-lg-2 offset-lg-8 mt-sm-2">
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
          <div className="cardLateralHome d-flex justify-content-center col-lg-6 col-md-12 col-sm-12 mt-2 p-4 mt-4" style={{ width: '795px', height: '345px' }} >
            <div className="mt-2" style={{ width: '775px', height: '365px' }}>
              <Grafico AFAZER={QtdPFazer} EMANDA={QtdAndamento} CON={QtdConcluidos} total={QtdProjetos} />
            </div>
            {/*<div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
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
              </div>*/}
          </div>
        </div>
        <div className="Teste row  h-lg-50 p-3 mt-2" style={{backgroundColor:'var(--preto-medio)', borderRadius:'1%'}}>
          <CardBaixoHome Projetos={projetos} />
        </div>
      </main>
    </div>
  );
}
