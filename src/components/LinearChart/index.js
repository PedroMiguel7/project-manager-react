import { grid } from '@mui/system';
import { ResponsiveLine } from '@nivo/line';
import { Component } from 'react';
import api from '../../api';

class LinearChart extends Component {
    state = {
      pessoa: [],
      tarefas: [],
    }
    async componentDidMount() {
        const pessoaPath = window.location.pathname;
        
        const response = await api.get(pessoaPath);
        const response2 = await api.get(pessoaPath+'/tasks');
        
        this.setState({ pessoa: response.data, tarefas: response2.data });
    }

    Rendimento = (props) => {
      if (this.props.selectValue === 1){
        var datas = new Date();
       
        const UltimosDias = [new Date(),];

        for (let i = 0; i < 6; i++) {
          UltimosDias.push(new Date(datas.setDate(datas.getDate() - 1)));
        }

        let Concluidas = 0;
        const UltimasConcluidas = [];
        if(props.tarefas !== null){
          props.tarefas.map( t => {
            if (t.status === "Concluido") {
              Concluidas++;
              UltimasConcluidas.push(new Date(t.data_conclusao));
            }
          })
        }

        var TarefasAndamento = [0, 0, 0, 0, 0, 0, 0];
        var TarefasConcluidas = [0, 0, 0, 0, 0, 0, 0];
        UltimosDias.reverse();

        if(props.tarefas !== null){
          props.tarefas.map ( t => {
            if (t.status === "Em Andamento") {
              let i = -1;
              UltimosDias.map( u => {
                i++;
                if (new Date(t.data_criacao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
                  TarefasAndamento[i]++;
                  let tData = new Date(t.data_criacao);
                  let tFormatada = `${tData.getDate() + 1}/${tData.getMonth() + 1}`;
                  let uData = new Date(u);
                  let uFormatada = `${uData.getDate()}/${uData.getMonth() + 1}`;
                  console.log(`t: ${tFormatada}, u: ${uFormatada}`)
                }
              })
            } else if (t.status === "Concluido" || t.status === "Concluído") {
              let i = -1;
              UltimosDias.map( u => {
                i++;
                if (new Date(t.data_conclusao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
                  TarefasConcluidas[i]++;
                  let tData = new Date(t.data_criacao);
                  let tFormatada = `${tData.getDate() + 1}/${tData.getMonth() + 1}`;
                  let uData = new Date(u);
                  let uFormatada = `${uData.getDate()}/${uData.getMonth() + 1}`;
                  console.log(`t: ${tFormatada}, u: ${uFormatada}`)
                }
              })
            }
          })
        }

        const data = [
          {
            "id": "Em Andamento",
            "color": "hsl(200, 70%, 50%)",
            "data": [],
          },
          {  
            "id": "Concluídas",
            "color": "hsl(100, 70%, 50%)",
            "data": [],
          }
        ];
        
        for (let i = 0; i < 7; i++) {
          const DiasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
          let DiaNum = UltimosDias[i].getDay();
          let DiaSemana;
          if (DiaNum === 0) {
            DiaSemana = DiasSemana[0];
          } else if (DiaNum === 1) {
            DiaSemana = DiasSemana[1];
          } else if (DiaNum === 2) {
            DiaSemana = DiasSemana[2];
          } else if (DiaNum === 3) {
            DiaSemana = DiasSemana[3];
          } else if (DiaNum === 4) {
            DiaSemana = DiasSemana[4];
          } else if (DiaNum === 5) {
            DiaSemana = DiasSemana[5];
          } else if (DiaNum === 6) {
            DiaSemana = DiasSemana[6];
          }
          let uFormatada = `${DiaSemana} ${UltimosDias[i].getDate()}`;
          const obj1 = {"x": uFormatada, "y": TarefasAndamento[i]};
          const obj2 = {"x": uFormatada, "y": TarefasConcluidas[i]};
          data[0].data.push(obj1);
          data[1].data.push(obj2);
        }

        return(
          <>
            <ResponsiveLine
                  data={data}
                  margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
                  theme={{
                    textColor: "#C2C3C6",
                    axis: {
                      "legend": {
                        "text": {
                            "fontSize": 16,
                        }
                      },
                    },
                    grid: {
                      line: {
                          stroke: "#87888C",
                          strokeWidth: 0.2
                      }
                    },
                    tooltip: {
                      container: {
                          background: "#87888c",
                          color: "#fff",
                          fontSize: 14
                      },
                    }
                  }}
                  xScale={{ type: 'point' }}
                  yScale={{
                      type: 'linear',
                      min: 0,
                      max: 'auto',
                      stacked: false,
                      reverse: false
                  }}
                  yFormat=" >-.2d"
                  curve="monotoneX"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                      orient: 'bottom',
                      tickSize: 0,
                      tickPadding: 15,
                      tickRotation: 0,
                      /*legend: 'dias',
                      legendOffset: 37,
                      legendPosition: 'middle'*/
                  }}
                  axisLeft={{
                      orient: 'left',
                      format: e => Math.floor(e) === e && e,
                      tickSize: 0,
                      tickPadding: 15,
                      tickRotation: 0,
                      /*legend: 'tarefas',
                      legendOffset: -40,
                      legendPosition: 'middle'*/
                  }}
                  enableGridX={false}
                  colors={['#C2C3C6', '#F46E27']}
                  lineWidth={2}
                  pointSize={6}
                  pointColor={{ from: 'color', modifiers: [] }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabel="y"
                  pointLabelYOffset={-12}
                  enableArea={true}
                  areaBlendMode="soft-light"
                  areaOpacity={0.15}
                  areaBaselineValue={0}
                  enableSlices="x"
                  useMesh={true}
              />
          </>
        )        
        
      } else if (this.props.selectValue === 2){
        var datas = new Date();
        var Today = datas.getDate();
        const UltimosDias = [new Date(),];

        var TarefasAndamento = [0,];
        var TarefasConcluidas = [0,];

        for (let i = 1; i < Today; i++) {
          UltimosDias.push(new Date(datas.setDate(datas.getDate() - 1)));
          TarefasAndamento.push(0);
          TarefasConcluidas.push(0);
        }

        console.log(UltimosDias);

        let Concluidas = 0;
        const UltimasConcluidas = [];
        if(props.tarefas !== null){
          props.tarefas.map( t => {
            if (t.status === "Concluido" || t.status === "Concluído") {
              Concluidas++;
              UltimasConcluidas.push(new Date(t.data_conclusao));
            }
          })
        }
        console.log(UltimasConcluidas);

        UltimosDias.reverse();

        if(props.tarefas !== null){
          props.tarefas.map ( t => {
            if (t.status === "Em Andamento") {
              let i = -1;
              UltimosDias.map( u => {
                i++;
                if (new Date(t.data_criacao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
                  TarefasAndamento[i]++;
                  let tData = new Date(t.data_criacao);
                  let tFormatada = `${tData.getDate() + 1}/${tData.getMonth() + 1}`;
                  let uData = new Date(u);
                  let uFormatada = `${uData.getDate()}/${uData.getMonth() + 1}`;
                  console.log(`t: ${tFormatada}, u: ${uFormatada}`)
                }
              })
            } else if (t.status === "Concluido" || t.status === "Concluído") {
              let i = -1;
              UltimosDias.map( u => {
                i++;
                if (new Date(t.data_conclusao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
                  TarefasConcluidas[i]++;
                  let tData = new Date(t.data_criacao);
                  let tFormatada = `${tData.getDate() + 1}/${tData.getMonth() + 1}`;
                  let uData = new Date(u);
                  let uFormatada = `${uData.getDate()}/${uData.getMonth() + 1}`;
                  console.log(`t: ${tFormatada}, u: ${uFormatada}`)
                }
              })
            }
          })
        }

        const data = [
          {
            "id": "Em Andamento",
            "color": "hsl(200, 70%, 50%)",
            "data": [
                
            ],
          },
          {  
            "id": "Concluídas",
            "color": "hsl(100, 70%, 50%)",
            "data": [
                  
            ],
          }
        ];
        
        for (let i = 0; i < Today; i++) {
          
          let uFormatada = `${UltimosDias[i].getDate()}/${UltimosDias[i].getMonth() + 1}`;
          const obj1 = {"x": uFormatada, "y": TarefasAndamento[i]};
          const obj2 = {"x": uFormatada, "y": TarefasConcluidas[i]};
          data[0].data.push(obj1);
          data[1].data.push(obj2);
        }

        console.log(TarefasAndamento);
        console.log(TarefasConcluidas);
        console.log(data);

        return(
          <>
            <ResponsiveLine
                  data={data}
                  margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
                  theme={{
                    textColor: "#C2C3C6",
                    axis: {
                      "legend": {
                        "text": {
                            "fontSize": 16,
                        }
                      },
                    },
                    grid: {
                      line: {
                          stroke: "#87888C",
                          strokeWidth: 0.2
                      }
                    },
                    tooltip: {
                      container: {
                          background: "#87888c",
                          color: "#fff",
                          fontSize: 14
                      },
                    }
                  }}
                  xScale={{ type: 'point' }}
                  yScale={{
                      type: 'linear',
                      min: 0,
                      max: 'auto',
                      stacked: false,
                      reverse: false
                  }}
                  yFormat=" >-.2d"
                  curve="monotoneX"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                      orient: 'bottom',
                      tickSize: 0,
                      tickPadding: 15,
                      tickRotation: 0,
                      /*legend: 'dias',
                      legendOffset: 37,
                      legendPosition: 'middle'*/
                  }}
                  axisLeft={{
                      orient: 'left',
                      format: e => Math.floor(e) === e && e,
                      tickSize: 0,
                      tickPadding: 15,
                      tickRotation: 0,
                      /*legend: 'tarefas',
                      legendOffset: -40,
                      legendPosition: 'middle'*/
                  }}
                  enableGridX={false}
                  colors={['#C2C3C6', '#F46E27']}
                  lineWidth={2}
                  pointSize={6}
                  pointColor={{ from: 'color', modifiers: [] }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabel="y"
                  pointLabelYOffset={-12}
                  enableArea={true}
                  areaBlendMode="soft-light"
                  areaOpacity={0.15}
                  areaBaselineValue={0}
                  enableSlices="x"
                  useMesh={true}
              />
          </>
        )
      }
    }

    render () {
        const { tarefas } = this.state;

        return (
          <>
            <this.Rendimento tarefas={tarefas} />
          </>
        )
    }  
}

export default LinearChart;