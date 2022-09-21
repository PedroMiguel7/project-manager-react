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
import TrendingUp from '../../assets/icons/ph_trend-up.svg';
import TrendingDown from '../../assets/icons/ph_trend-down.svg';
import { TrendingUpRounded, TrendingDownRounded } from '@mui/icons-material';
import { NotFoundContainer, Main, Header, Title, ProjectSummaryHeader, ProjectSummaryTitle, ProjectSummaryContainer, ProjectCountersContainer, ProjectCounterContainer, ProjectCounterTitle, CounterNumContainer, ProjectCounterNum, TagContainer, TagIcon, TagTitle, ProjectCounterSubtitle, LinearChartContainer, LinearChartHeader, LinearChartTitle } from './styles.js';
//import { useQuery } from 'react-query';

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


  let QtdProjetos = 0;
  let QtdAndamento = 0;
  let QtdConcluidos = 0;
  let QtdPFazer = 0;
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
  const [nomeProjeto, setNomeProjeto] = useState('')
  const [resumoTarefas, setResumoTarefas] = useState(false);

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
            Resumo de {resumoTarefas ? "Tarefas" : "Projetos"}
          </ProjectSummaryTitle>
          <SelectPeriod setPeriod={setPeriod} />
        </ProjectSummaryHeader>
        <ProjectCountersContainer>
            <ProjectCounterContainer>
              <ProjectCounterTitle>
                {!resumoTarefas ? "Total" : "A Fazer"}
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  {QtdProjetos}
                </ProjectCounterNum>
                <TagContainer>
                  <TagIcon src={TrendingUp} />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>{resumoTarefas ? "Tarefas" : "Projetos"}</ProjectCounterSubtitle>
            </ProjectCounterContainer>
            
            <ProjectCounterContainer>
              <ProjectCounterTitle>
                {!resumoTarefas ? "A Fazer" : "Em Andamento"}
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  {QtdPFazer}
                </ProjectCounterNum>
                <TagContainer>
                  <TagIcon src={TrendingUp} />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>{resumoTarefas ? "Tarefas" : "Projetos"}</ProjectCounterSubtitle>
            </ProjectCounterContainer>

            <ProjectCounterContainer>
              <ProjectCounterTitle>
                {!resumoTarefas ? "Em Andamento" : "Em Teste"}
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  {QtdAndamento}
                </ProjectCounterNum>
                <TagContainer>
                  <TagIcon src={TrendingUp} />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>{resumoTarefas ? "Tarefas" : "Projetos"}</ProjectCounterSubtitle>
            </ProjectCounterContainer>

            <ProjectCounterContainer>
              <ProjectCounterTitle>
                {!resumoTarefas ? "Concluídos" : "Concluídas"}
              </ProjectCounterTitle>
              <CounterNumContainer>    
                <ProjectCounterNum>
                  {QtdConcluidos}
                </ProjectCounterNum>
                <TagContainer>
                  <TagIcon src={TrendingUp} />
                  <TagTitle>
                    7.5%
                  </TagTitle>
                </TagContainer>
              </CounterNumContainer>
              <ProjectCounterSubtitle>{resumoTarefas ? "Tarefas" : "Projetos"}</ProjectCounterSubtitle>
            </ProjectCounterContainer>
        </ProjectCountersContainer>

        <LinearChartContainer>
          <LinearChartHeader>
            <LinearChartTitle>Tarefas</LinearChartTitle>
            <SelectProject projetos={projetos} setByProject={setByProject} setResumoTarefas={setResumoTarefas} setNomeProjeto={setNomeProjeto} />
          </LinearChartHeader>
          <GraficoLinear projectId={byProject} period={period} />
        </LinearChartContainer>
      </ProjectSummaryContainer>
    </Main>
  );
}
