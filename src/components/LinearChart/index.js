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

        //let DataHoje = new Date('07-20-2022');
        //

        var datas = new Date('07-30-2022'); // Simular dia 20 jul
        console.log(datas); 
        //var DiaAnterior = new Date();
        //DiaAnterior.setDate(today.getDate()-1);

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
        
        tarefas.map ( t => {
          
          //if (t.status === "Concluido") {
            var i = -1;
            UltimosDias.map( u => {
              //console.log(`t: ${new Date(t.data_criacao).toISOString().split('T')[0]}, u: ${u.toISOString().split('T')[0]}`)
              i++;
              if (new Date(t.data_criacao).toISOString().split('T')[0] == u.toISOString().split('T')[0]) {
                QtdTarefas[i]++;
                console.log(`t: ${new Date(t.data_criacao).toISOString().split('T')[0]}, u: ${u.toISOString().split('T')[0]}`)
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
          const obj = {"x": UltimosDias[i].toISOString().split('T')[0], "y": QtdTarefas[i]};
          //console.log(obj);
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