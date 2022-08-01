import { ResponsiveLine } from '@nivo/line';
import { Component } from 'react';

class LinearChart extends Component {
    render () {
        const data = [
            {
              "id": "japan",
              "color": "hsl(337, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 113
                },
                {
                  "x": "helicopter",
                  "y": 171
                },
                {
                  "x": "boat",
                  "y": 289
                },
                {
                  "x": "train",
                  "y": 91
                },
                {
                  "x": "subway",
                  "y": 111
                },
                {
                  "x": "bus",
                  "y": 61
                },
                {
                  "x": "car",
                  "y": 166
                },
                {
                  "x": "moto",
                  "y": 108
                },
                {
                  "x": "bicycle",
                  "y": 237
                },
                {
                  "x": "horse",
                  "y": 44
                },
                {
                  "x": "skateboard",
                  "y": 257
                },
                {
                  "x": "others",
                  "y": 32
                }
              ]
            },
            {
              "id": "france",
              "color": "hsl(25, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 57
                },
                {
                  "x": "helicopter",
                  "y": 69
                },
                {
                  "x": "boat",
                  "y": 159
                },
                {
                  "x": "train",
                  "y": 43
                },
                {
                  "x": "subway",
                  "y": 191
                },
                {
                  "x": "bus",
                  "y": 35
                },
                {
                  "x": "car",
                  "y": 89
                },
                {
                  "x": "moto",
                  "y": 289
                },
                {
                  "x": "bicycle",
                  "y": 259
                },
                {
                  "x": "horse",
                  "y": 172
                },
                {
                  "x": "skateboard",
                  "y": 271
                },
                {
                  "x": "others",
                  "y": 96
                }
              ]
            },
            {
              "id": "us",
              "color": "hsl(220, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 266
                },
                {
                  "x": "helicopter",
                  "y": 54
                },
                {
                  "x": "boat",
                  "y": 74
                },
                {
                  "x": "train",
                  "y": 199
                },
                {
                  "x": "subway",
                  "y": 72
                },
                {
                  "x": "bus",
                  "y": 210
                },
                {
                  "x": "car",
                  "y": 209
                },
                {
                  "x": "moto",
                  "y": 214
                },
                {
                  "x": "bicycle",
                  "y": 268
                },
                {
                  "x": "horse",
                  "y": 103
                },
                {
                  "x": "skateboard",
                  "y": 72
                },
                {
                  "x": "others",
                  "y": 232
                }
              ]
            },
            {
              "id": "germany",
              "color": "hsl(145, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 193
                },
                {
                  "x": "helicopter",
                  "y": 212
                },
                {
                  "x": "boat",
                  "y": 53
                },
                {
                  "x": "train",
                  "y": 89
                },
                {
                  "x": "subway",
                  "y": 241
                },
                {
                  "x": "bus",
                  "y": 297
                },
                {
                  "x": "car",
                  "y": 128
                },
                {
                  "x": "moto",
                  "y": 257
                },
                {
                  "x": "bicycle",
                  "y": 90
                },
                {
                  "x": "horse",
                  "y": 131
                },
                {
                  "x": "skateboard",
                  "y": 207
                },
                {
                  "x": "others",
                  "y": 139
                }
              ]
            },
            {
              "id": "norway",
              "color": "hsl(124, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 24
                },
                {
                  "x": "helicopter",
                  "y": 142
                },
                {
                  "x": "boat",
                  "y": 253
                },
                {
                  "x": "train",
                  "y": 178
                },
                {
                  "x": "subway",
                  "y": 57
                },
                {
                  "x": "bus",
                  "y": 123
                },
                {
                  "x": "car",
                  "y": 125
                },
                {
                  "x": "moto",
                  "y": 260
                },
                {
                  "x": "bicycle",
                  "y": 291
                },
                {
                  "x": "horse",
                  "y": 125
                },
                {
                  "x": "skateboard",
                  "y": 5
                },
                {
                  "x": "others",
                  "y": 100
                }
              ]
            }
          ]

        return (
          <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 37,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 0,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enableGridX={false}
                colors={{ scheme: 'pastel2' }}
                pointSize={7}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                areaBlendMode="soft-light"
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 8,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        
        )
            
    }
    
    
}

export default LinearChart;