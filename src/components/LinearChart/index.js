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
        //console.log(pessoaPath);
        
        const response = await api.get(pessoaPath);
        const response2 = await api.get(pessoaPath+'/tasks');
        
        this.setState({ pessoa: response.data, tarefas: response2.data });
    }

    render () {
        const { tarefas} = this.state;

        var datas = new Date();
        console.log(datas);

        const UltimosDias = [];

        for (let i = 0; i < 7; i++) {
          UltimosDias.push(new Date(datas.setDate(datas.getDate() - 1)));
        }

        console.log(UltimosDias);

        let Concluidas = 0;
        const UltimasConcluidas = [];
        tarefas.map( t => {
          if (t.status === "Concluido") {
            Concluidas++;
            UltimasConcluidas.push(new Date(t.data_conclusao));
          }
        })
        console.log(Concluidas);
        console.log(UltimasConcluidas);
        
        
    
        var QtdTarefas = [0, 0, 0, 0, 0, 0, 0];
        UltimosDias.reverse();

        tarefas.map ( t => {
          
          //if (t.status === "Concluido") {
            var i = -1;
            UltimosDias.map( u => {
              //console.log(`t: ${new Date(t.data_criacao).toISOString().split('T')[0]}, u: ${u.toISOString().split('T')[0]}`)
              i++;
              if (new Date(t.data_criacao).toISOString().split('T')[0] == u.toISOString().split('T')[0]) {
                QtdTarefas[i]++;
                let tData = new Date(t.data_criacao);
                let tFormatada = `${tData.getDate() + 1}/${tData.getMonth() + 1}`;
                let uData = new Date(u);
                let uFormatada = `${uData.getDate()}/${uData.getMonth() + 1}`;
                console.log(`t: ${tFormatada}, u: ${uFormatada}`)
              }
              
              //if (new Date(t.data_conclusao) === u) {
                
              //}
              //console.log(new Date(t.data_conclusao));
            })
         // }
        })

        console.log(QtdTarefas);

        const data = [
          {
            "id": "Tarefas",
              "color": "hsl(337, 70%, 50%)",
              "data": [
                
              ]
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
          const obj = {"x": uFormatada, "y": QtdTarefas[i]};
          data[0].data.push(obj);
        }
            
        console.log(data);

        
        return (
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
                        color: "#c2c3c6",
                        fontSize: 14
                    },
                  }
                }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 0,
                    max: 'auto',
                    stacked: true,
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
                colors= '#F46E27'
                lineWidth={3}
                pointSize={6}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                areaBlendMode="soft-light"
                areaOpacity={0.1}
                areaBaselineValue={0}
                enableSlices="x"
                useMesh={true}
            />
        
        )
            
    }
    
    
}

export default LinearChart;