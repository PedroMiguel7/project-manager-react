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
        const { pessoa } = this.state;
        const { tarefas} = this.state;

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

        const data = [
            {
              "id": "Tarefas",
              "color": "hsl(337, 70%, 50%)",
              "data": [
                {
                  "x": "seg",
                  "y": 2
                },
                {
                  "x": "ter",
                  "y": 3
                },
                {
                  "x": "qua",
                  "y": 7
                },
                {
                  "x": "qui",
                  "y": 1
                },
                {
                  "x": "sex",
                  "y": 9
                },
                
              ]
            },
          ]

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
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                curve="cardinal"
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
                areaBaselineValue={1}
                enableSlices="x"
                useMesh={true}
            />
        
        )
            
    }
    
    
}

export default LinearChart;