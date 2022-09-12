import React, { useState } from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';

export default function RadialBarChart(props) {
    const [matches, setMatches] = useState(window.matchMedia("(min-height: 870px)").matches);

    window.matchMedia("(min-height: 870px)").addEventListener("change", e => setMatches( e.matches ));

    if (props.op === "tarefas") {
        const data = [
            {
                "id": "A Fazer",
                "data": [
                {
                    "x": "A Fazer",
                    "y": props.ValueFazer ? props.ValueFazer/100 : 0
                },
                ]
            },
            {
                "id": "Em Andamento",
                "data": [
                {
                    "x": "Em Andamento",
                    "y": props.ValueAndamento ? props.ValueAndamento/100 : 0
                },
                ]
            },
            {
                "id": "Em Teste",
                "data": [
                {
                    "x": "Em Teste",
                    "y": props.ValueTeste ? props.ValueTeste/100 : 0
                },
                ]
            },
            {
                "id": "Concluídas",
                "data": [
                {
                    "x": "Concluídas",
                    "y": props.ValueConcluido ? props.ValueConcluido/100 : 0
                },
                ]
            },
        ]

        return (
                <ResponsiveRadialBar
                data={data}
                maxValue={1}
                valueFormat=">-.2~%"
                startAngle={-90}
                endAngle={90}
                innerRadius={0.15}
                padding={0.6}
                cornerRadius={45}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors={{ scheme: 'set3' }}
                theme={{
                    textColor: "#C2C3C6",
                    tooltip: {
                      container: {
                          background: "#87888c",
                          color: "#fff",
                          fontSize: 14
                      },
                    }
                  }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '1'
                        ]
                    ]
                }}
                tracksColor="#2B2B36"
                enableRadialGrid={false}
                enableCircularGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                label="category"
                motionConfig="molasses"
                legends={ matches ? [
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: -40,
                        itemWidth: 90,
                        itemHeight: 10,
                        itemsSpacing: 5,
                        symbolSize: 9,
                        itemDirection: 'left-to-right'
                    }
                ] : false}
            />
        )
    } else {
        const data = [
            {
                "id": "A Fazer",
                "data": [
                {
                    "x": "A Fazer",
                    "y": props.ValueFazer ? props.ValueFazer/100 : 0
                },
                ]
            },
            {
                "id": "Em Andamento",
                "data": [
                {
                    "x": "Em Andamento",
                    "y": props.ValueAndamento ? props.ValueAndamento/100 : 0
                },
                ]
            },
            {
                "id": "Concluídos",
                "data": [
                {
                    "x": "Concluídos",
                    "y": props.ValueConcluido ? props.ValueConcluido/100 : 0
                },
                ]
            },
        ]

        return (
                <ResponsiveRadialBar
                data={data}
                maxValue={1}
                valueFormat=">-.2~%"
                startAngle={-90}
                endAngle={90}
                innerRadius={0.25}
                padding={0.6}
                cornerRadius={45}
                margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                colors={{ scheme: 'set3' }}
                theme={{
                    textColor: "#C2C3C6",
                    tooltip: {
                      container: {
                          background: "#87888c",
                          color: "#fff",
                          fontSize: 14
                      },
                    }
                  }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '1'
                        ]
                    ]
                }}
                tracksColor="#2B2B36"
                enableRadialGrid={false}
                enableCircularGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                label="category"
                motionConfig="molasses"
                legends={ matches ? [
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: -45,
                        itemWidth: 90,
                        itemHeight: 10,
                        itemsSpacing: 5,
                        symbolSize: 9,
                        itemDirection: 'left-to-right'
                    }
                ] : false}
            />
        )
    }
}