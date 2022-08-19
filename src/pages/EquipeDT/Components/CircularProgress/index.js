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
                padding={0.7}
                cornerRadius={45}
                margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                colors={{ scheme: 'set3' }}
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
                        direction: 'row',
                        justify: false,
                        translateX: 23,
                        translateY: -115,
                        itemWidth: 96,
                        itemHeight: 33,
                        itemsSpacing: 5,
                        symbolSize: 10,
                        itemDirection: 'left-to-right'
                    }
                ]}
            />
        )
    }
}