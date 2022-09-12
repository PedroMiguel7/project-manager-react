import { ResponsiveBar } from '@nivo/bar';
import { Container } from './style';

export default function BarChart(props) {
    let TarefasEquipe = props.tarefas;
    const Done = TarefasEquipe?.filter((tarefas) => tarefas.status === "Concluido");

    const arrPessoas = [];

    Done?.map(p => {
        arrPessoas.push(p.nome_pessoa);
    })

    const counts = {};
    arrPessoas.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    const orderedArr = Object.fromEntries(
        Object.entries(counts).sort(([, a], [, b]) => b - a)
    );

    const data = [
        {
            "Membro": Object.keys(orderedArr)[2],
            "qtd": Object.values(orderedArr)[2],
            "qtdColor": "hsl(254, 70%, 50%)",
        },
        {
            "Membro": Object.keys(orderedArr)[1],
            "qtd": Object.values(orderedArr)[1],
            "qtdColor": "hsl(186, 70%, 50%)",
        },
        {
            "Membro": Object.keys(orderedArr)[0],
            "qtd": Object.values(orderedArr)[0],
            "qtdColor": "hsl(43, 70%, 50%)",
        },
    ]

    return (
        <>
            {
                Object.keys(counts).length < 3 ? 
                <h1>Tem nada n</h1> 
                : 
                <Container>
                    <ResponsiveBar
                        data={data}
                        keys={[
                            'qtd',
                        ]}
                        indexBy="Membro"
                        margin={{ top: 0, right: 20, bottom: 18, left: 85 }}
                        padding={0.2}
                        layout="horizontal"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        colorBy="indexValue"
                        motionConfig="molasses"
                        theme={{
                            textColor: "#C2C3C6",
                            fontSize: 13,
                            grid: {
                                line: {
                                    stroke: "#87888C",
                                    strokeWidth: 0.2
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
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        borderRadius={6}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            format: e => Math.floor(e) === e && e,
                            tickSize: 0,
                            tickPadding: 6,
                            tickRotation: 0,
                        }}
                        axisLeft={{
                            format: (v) => {
                                return v?.length > 9 ? (
                                    <tspan>
                                        {v.substring(0, 9) + "..."}
                                        <title>{v}</title>
                                    </tspan>
                                ) : (
                                    v
                                );
                            },
                            tickSize: 0,
                            tickPadding: 9,
                            tickRotation: 0,
                        }}
                        enableGridX={true}
                        enableGridY={false}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        legends={[]}
                        tooltip={function () { }}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                    />
                </Container>
            }
        </>
    )
}