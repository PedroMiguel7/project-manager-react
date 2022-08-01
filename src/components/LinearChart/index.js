import { grid } from '@mui/system';
import { ResponsiveLine } from '@nivo/line';
import { Component } from 'react';

class LinearChart extends Component {
    render () {
        const data = [
            {
              "id": "tarefas",
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
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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