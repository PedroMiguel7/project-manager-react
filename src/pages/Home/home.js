import AdicionarProjeto from '../Projetos/components/NewProjeto/index'
import Cards from "../../components/Card/CardProjetos/ExibirProjetos";
import Card from './components/Card';
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardBaixoHome from "./components/TabelaProjeto/TabelaProjetosHome";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SelectPeriod from './components/SelectPeriod';
import SelectProject from './components/SelectProject';
import GraficoLinear from './components/GraficoLinear';
import { TrendingUpRounded, TrendingDownRounded } from '@mui/icons-material';
import { NotFoundContainer, Main, Header, Title, ProjectSummaryHeader, ProjectSummaryTitle, ProjectSummaryContainer, ProjectCountersContainer, ProjectCounterContainer, ProjectCounterTitle, CounterNumContainer, ProjectCounterNum, TagContainer, TagTitle, ProjectCounterSubtitle, LinearChartContainer, LinearChartHeader, LinearChartTitle } from './styles.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

export default function Menu_index() {
  document.title = "Gerenciador de Projetos";
  const [projetos, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await api.get('/projetos/'
        );
        setProjetos(response.data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
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
      if (!localStorage.getItem('token')) {
        const response = await api.get('/projetos/');
        setProjetos(response.data);
      }
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

    var labels = ['PROJETOS']


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
          backgroundColor: '#87cefacc',
        },
        {
          label: 'Concluído',
          data: labels?.map(() => props.CON, ({ min: 0, max: props.total })),
          backgroundColor: '#e3622fcc',

        },
      ],
    };

    return (
      <>
        <Bar options={options} data={data} style={{ marginTop: "20px" }} width="70%" height="30%" />
      </>
    )
  }

  // filters
  const [period, setPeriod] = useState(1)
  const [byProject, setByProject] = useState()

  function Teste(value) {
    if (value === 1) {
      console.log("Select 1")
    } else if (value === 2) {
      console.log("Select 2")
    } else if (value === 3) {
      console.log("Select 3")
    }
  }

  Teste(period)
  console.log(byProject)

  return (
    <Main>
      <Header>
        <Title>
          Home
        </Title>
      </Header>
      <ProjectSummaryContainer>
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>
            Resumo de Projetos
          </ProjectSummaryTitle>
          <SelectPeriod setPeriod={setPeriod} />
        </ProjectSummaryHeader>
        <ProjectCountersContainer>
            <ProjectCounterContainer>
              <ProjectCounterTitle>
                Total
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  23
                </ProjectCounterNum>
                <TagContainer>
                  <TrendingUpRounded fontSize='small' />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>Projetos</ProjectCounterSubtitle>
            </ProjectCounterContainer>
            
            <ProjectCounterContainer>
              <ProjectCounterTitle>
                A Fazer
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  6
                </ProjectCounterNum>
                <TagContainer>
                  <TrendingUpRounded fontSize='small' />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>Projetos</ProjectCounterSubtitle>
            </ProjectCounterContainer>

            <ProjectCounterContainer>
              <ProjectCounterTitle>
                Em Andamento
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  11
                </ProjectCounterNum>
                <TagContainer>
                  <TrendingUpRounded fontSize='small' />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>Projetos</ProjectCounterSubtitle>
            </ProjectCounterContainer>

            <ProjectCounterContainer>
              <ProjectCounterTitle>
                Concluídos
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  6
                </ProjectCounterNum>
                <TagContainer>
                  <TrendingUpRounded fontSize='small' />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>Projetos</ProjectCounterSubtitle>
            </ProjectCounterContainer>
        </ProjectCountersContainer>
        <LinearChartContainer>
          <LinearChartHeader>
            <LinearChartTitle>Tarefas</LinearChartTitle>
            <SelectProject projetos={projetos} setByProject={setByProject} />
          </LinearChartHeader>
          <GraficoLinear projectId={byProject} period={period} />
        </LinearChartContainer>
      </ProjectSummaryContainer>
    </Main>
  );
}
