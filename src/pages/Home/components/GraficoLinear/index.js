import React, { useState, useEffect } from "react";
import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef } from '@nivo/core';
import DataLoading from "../../../../components/DataLoading";
import api from "../../../../services/api";

export default function GraficoLinear(props) {
    const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const projectId = props.projectId;

    useEffect(() => {
        const fetchTarefas = async () => {
            setLoading(true)
            try {
                const response = await api.get(`/projetos/${projectId}/tasks`
                );
                setTarefasConcluidas(response.data?.filter(s => s.status === "Concluido"));
                setLoading(false)
            } catch (error) {
                console.log(error);
                if (error.response.status === 401) {
                    window.location.href = '/'
                }
                setLoading(false)
            }
        };
        fetchTarefas();
    }, [projectId]);

    //console.log(tarefasConcluidas, period)

    // if (loading === true) {
    //     console.log('LOADING...')
    // } else {
    //     console.log('NOT LOADING')
    // }

    const data = [
        {
            "id": "Concluídas",
            "color": "hsl(100, 70%, 50%)",
            "data": [],
        }
    ];

    // Semanal
    if (props.period === 3) {
        let datas = new Date('08-31-2022');

        const UltimosDias = [new Date('08-31-2022'),];

        for (let i = 0; i < 6; i++) {
            const data = new Date(datas.setDate(datas.getDate() - 1));
            UltimosDias.push(data);
        }

        //console.log(new Date(UltimosDias[0]).toDateString())

        let Concluidas = 0;
        const UltimasConcluidas = [];
        if (tarefasConcluidas !== null) {
            tarefasConcluidas?.map(d => {
                Concluidas++;
                const data = new Date(d.data_conclusao);
                UltimasConcluidas.push(data);

            })
        }

        //console.log(UltimasConcluidas)

        let TarefasConcluidas = [0, 0, 0, 0, 0, 0, 0];
        UltimosDias.reverse();

        if (tarefasConcluidas !== null) {
            UltimasConcluidas?.map(t => {
                let i = -1;
                UltimosDias?.map(u => {
                    i++;
                    if (t.toDateString() === u.toDateString()) {
                        TarefasConcluidas[i]++;
                    }
                })
            }
            )
        }

        //console.log(TarefasConcluidas)

        for (let i = 0; i < 7; i++) {
            const DiasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
            let DiaNum = new Date(UltimosDias[i]).getDay();
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
            const obj = { "x": uFormatada, "y": TarefasConcluidas[i] };
            data[0].data.push(obj);
            //   data[1].data.push(obj2);
        }

        //console.log(data[0].data)
        return (
            <>  
                <ResponsiveLine
                    data={data}
                    margin={{ top: 40, right: 20, bottom: 60, left: 35 }}
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
                                { offset: 50, color: 'rgba(244, 110, 39, 0.6)' },
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



    //  else {
    //     return (
    //         <>
    //             <ResponsiveLine
    //                 data={data}
    //                 margin={{ top: 40, right: 15, bottom: 60, left: 35 }}
    //                 theme={{
    //                     textColor: "#C2C3C6",
    //                     axis: {
    //                         "legend": {
    //                             "text": {
    //                                 "fontSize": 16,
    //                             }
    //                         },
    //                     },
    //                     grid: {
    //                         line: {
    //                             stroke: "#2C2E3B",
    //                             strokeWidth: 1,
    //                             strokeDasharray: "6 6"
    //                         }
    //                     },
    //                     tooltip: {
    //                         container: {
    //                             background: "#87888c",
    //                             color: "#fff",
    //                             fontSize: 14
    //                         },
    //                     }
    //                 }}
    //                 xScale={{ type: 'point' }}
    //                 yScale={{
    //                     type: 'linear',
    //                     min: 0,
    //                     max: 'auto',
    //                     stacked: false,
    //                     reverse: false
    //                 }}
    //                 yFormat=" >-.2d"
    //                 curve="monotoneX"
    //                 axisTop={null}
    //                 axisRight={null}
    //                 axisBottom={{
    //                     orient: 'bottom',
    //                     tickSize: 0,
    //                     tickPadding: 15,
    //                     tickRotation: 0,
    //                 }}
    //                 axisLeft={{
    //                     orient: 'left',
    //                     format: e => Math.floor(e) === e && e,
    //                     tickSize: 0,
    //                     tickPadding: 15,
    //                     tickRotation: 0,
    //                 }}
    //                 enableGridX={false}
    //                 colors={['#F46E27']}
    //                 lineWidth={1}
    //                 enablePoints={false}
    //                 pointSize={6}
    //                 pointColor={{ from: 'color', modifiers: [] }}
    //                 pointBorderWidth={2}
    //                 pointBorderColor={{ from: 'serieColor' }}
    //                 pointLabel="y"
    //                 pointLabelYOffset={-12}
    //                 enableArea={true}
    //                 areaBlendMode="normal"
    //                 areaOpacity={0.17}
    //                 areaBaselineValue={0}
    //                 enableSlices="x"
    //                 useMesh={true}
    //                 defs={[
    //                     // using helpers
    //                     // will inherit colors from current element
    //                     linearGradientDef('gradientA', [
    //                         { offset: 0, color: 'inherit' },
    //                         { offset: 100, color: 'inherit', opacity: 0 },
    //                     ]),
    //                     linearGradientDef('gradientB', [
    //                         { offset: 0, color: '#000' },
    //                         { offset: 100, color: 'inherit' },
    //                     ],
    //                         // you may specify transforms for your gradients, e.g. rotations and skews,
    //                         // following the transform attribute format.
    //                         // For instance here we rotate 90 degrees relative to the center of the object.
    //                         {
    //                             gradientTransform: 'rotate(90 0.5 0.5)'
    //                         }),
    //                     // using plain object
    //                     {
    //                         id: 'gradient',
    //                         type: 'linearGradient',
    //                         colors: [
    //                             { offset: 20, color: '#F46E27' },
    //                             { offset: 50, color: 'rgba(244, 110, 39, 0.6)' },
    //                             { offset: 100, color: 'rgba(244, 110, 39, 0)' },
    //                         ],
    //                     },
    //                 ]}

    //                 fill={[
    //                     { match: '*', id: 'gradient' },
    //                 ]}
    //                 legends={[
    //                     {
    //                         anchor: 'top-right',
    //                         direction: 'row',
    //                         justify: false,
    //                         translateX: -30,
    //                         translateY: -30,
    //                         itemsSpacing: 20,
    //                         itemDirection: 'left-to-right',
    //                         itemWidth: 60,
    //                         itemHeight: 10,
    //                         itemOpacity: 0.75,
    //                         symbolSize: 8,
    //                         symbolShape: 'circle',
    //                         symbolBorderColor: 'rgba(0, 0, 0, .5)',
    //                         effects: [
    //                             {
    //                                 on: 'hover',
    //                                 style: {
    //                                     itemBackground: 'rgba(0, 0, 0, .03)',
    //                                     itemOpacity: 1
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ]}
    //             />
    //         </>
    //     )
    // }

}