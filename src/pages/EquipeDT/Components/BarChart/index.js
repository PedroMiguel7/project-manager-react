import { ResponsiveBar } from '@nivo/bar';

export default function BarChart(props) {
    const data = [
        {
            "Membro": "Bruno de Calcinha",
            "qtd": 15,
            "qtdColor": "hsl(43, 70%, 50%)",
        },
        {
            "Membro": "Fulana",
            "qtd": 11,
            "qtdColor": "hsl(186, 70%, 50%)",
        },
        {
            "Membro": "Fulanin",
            "qtd": 8,
            "qtdColor": "hsl(254, 70%, 50%)",
          },
    ]

    return (
        <>
            <div style={{width: "420px", height: "270px"}}>

                    <ResponsiveBar
                    data={data}
                    keys={[
                        'qtd',
                    ]}
                    indexBy="Membro"
                    margin={{ top: 0, right: 20, bottom: 18, left: 70 }}
                    padding={0.2}
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    colorBy="indexValue"
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
                        tickSize: 0,
                        tickPadding: 6,
                        tickRotation: 0,
                    }}
                    axisLeft={{
                        format: (v) => {
                            return v.length > 7 ? (
                                <tspan>
                                {v.substring(0, 7) + "..."}
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
                    tooltip={function(){}}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                />
            </div>
        </>
    )
}