import React from "react";
import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef } from '@nivo/core';

export default function GraficoLinear(props) {
    const data = [
        // {
        //   "id": "Em Andamento",
        //   "color": "hsl(200, 70%, 50%)",
        //   "data": [],
        // },
        {
            "id": "Concluídas",
            "color": "hsl(100, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 260
                },
                {
                    "x": "helicopter",
                    "y": 36
                },
                {
                    "x": "boat",
                    "y": 261
                },
                {
                    "x": "train",
                    "y": 78
                },
                {
                    "x": "subway",
                    "y": 22
                  },
                  {
                    "x": "bus",
                    "y": 21
                  },
            ],
        }
    ];

    return (
        <>
            <ResponsiveLine
                data={data}
                margin={{ top: 55, right: 25, bottom: 50, left: 35 }}
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
                            stroke: "#2C2E3B",
                            strokeWidth: 1,
                            strokeDasharray: "6 6"
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
                }}
                axisLeft={{
                    orient: 'left',
                    format: e => Math.floor(e) === e && e,
                    tickSize: 0,
                    tickPadding: 15,
                    tickRotation: 0,
                }}
                enableGridX={false}
                colors={['#F46E27']}
                lineWidth={1}
                enablePoints={false}
                pointSize={6}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                areaBlendMode="normal"
                areaOpacity={0.17}
                areaBaselineValue={0}
                enableSlices="x"
                useMesh={true}
                defs={[
                    // using helpers
                    // will inherit colors from current element
                    linearGradientDef('gradientA', [
                        { offset: 0, color: 'inherit' },
                        { offset: 100, color: 'inherit', opacity: 0 },
                    ]),
                    linearGradientDef('gradientB', [
                        { offset: 0, color: '#000' },
                        { offset: 100, color: 'inherit' },
                    ],
                    // you may specify transforms for your gradients, e.g. rotations and skews,
                    // following the transform attribute format.
                    // For instance here we rotate 90 degrees relative to the center of the object.
                    {
                        gradientTransform: 'rotate(90 0.5 0.5)'
                    }),
                    // using plain object
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            { offset: 20, color: '#F46E27' },
                            { offset: 50, color: 'rgba(244, 110, 39, 0.6)'},
                            { offset: 100, color: 'rgba(244, 110, 39, 0)' },
                        ],
                    },
                ]}
        
                fill={[
                    { match: '*', id: 'gradient' },
                ]}
                legends={[
                    {
                        anchor: 'top-right',
                        direction: 'row',
                        justify: false,
                        translateX: -30,
                        translateY: -30,
                        itemsSpacing: 20,
                        itemDirection: 'left-to-right',
                        itemWidth: 60,
                        itemHeight: 10,
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
        </>
    )
}