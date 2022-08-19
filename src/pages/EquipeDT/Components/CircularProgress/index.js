import { ResponsiveRadialBar } from '@nivo/radial-bar'

export default function RadialBarChart(props) {
    if (props.op === "tarefas") {
        const data = [
            {
                "id": "A Fazer",
                "data": [
                {
                    "x": "A Fazer",
                    "y": 80
                },
                ]
            },
            {
                "id": "Em Andamento",
                "data": [
                {
                    "x": "Em Andamento",
                    "y": 21
                },
                ]
            },
            {
                "id": "Em Teste",
                "data": [
                {
                    "x": "Em Teste",
                    "y": 10
                },
                ]
            },
            {
                "id": "Concluídas",
                "data": [
                {
                    "x": "Concluídas",
                    "y": 89
                },
                ]
            },
        ]

        return (
                <ResponsiveRadialBar
                data={data}
                valueFormat=" >-.2f"
                startAngle={-90}
                endAngle={90}
                innerRadius={0.15}
                padding={0.6}
                cornerRadius={45}
                margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
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
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: -20,
                        itemWidth: 90,
                        itemHeight: 10,
                        itemsSpacing: 5,
                        symbolSize: 10,
                        itemDirection: 'left-to-right'
                    }
                ]}
            />
        )
    } else {
        const data = [
            {
                "id": "A Fazer",
                "data": [
                {
                    "x": "A Fazer",
                    "y": 0
                },
                ]
            },
            {
                "id": "Em Andamento",
                "data": [
                {
                    "x": "Em Andamento",
                    "y": props.ValueAndamento
                },
                ]
            },
            {
                "id": "Concluídas",
                "data": [
                {
                    "x": "Concluídas",
                    "y": props.ValueConcluido
                },
                ]
            },
        ]

        const format = v => `${v}%`
        return (
                <ResponsiveRadialBar
                data={data}
                maxValue={100}
                valueFormat=" >-.2c"
                labelFormat={format}
                tooltipFormat={format}
                startAngle={-90}
                endAngle={90}
                innerRadius={0.15}
                padding={0.6}
                cornerRadius={45}
                margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
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
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: -20,
                        itemWidth: 90,
                        itemHeight: 10,
                        itemsSpacing: 5,
                        symbolSize: 10,
                        itemDirection: 'left-to-right'
                    }
                ]}
            />
        )
    }
}