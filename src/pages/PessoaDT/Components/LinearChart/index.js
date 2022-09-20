import { ResponsiveLine } from '@nivo/line';

export default function LinearChart(props) {
  const data = [
    {
      "id": "Em Andamento",
      "color": "hsl(200, 70%, 50%)",
      "data": [],
    },
    {
      "id": "Concluídas",
      "color": "hsl(100, 70%, 50%)",
      "data": [],
    }
  ];

  // Semanal
  if (props.selectValue === 1) {
    var datas = new Date();

    const UltimosDias = [new Date(),];

    for (let i = 0; i < 6; i++) {
      UltimosDias.push(new Date(datas.setDate(datas.getDate() - 1)));
    }

    let Concluidas = 0;
    const UltimasConcluidas = [];
    if (props.tarefas !== null) {
      props.tarefas?.map(t => {
        if (t.status === "Concluido") {
          Concluidas++;
          UltimasConcluidas.push(new Date(t.data_conclusao));
        }
      })
    }

    var TarefasAndamento = [0, 0, 0, 0, 0, 0, 0];
    var TarefasConcluidas = [0, 0, 0, 0, 0, 0, 0];
    UltimosDias.reverse();

    if (props.tarefas !== null) {
      props.tarefas?.map(t => {
        if (t.status === "Em Andamento") {
          let i = -1;
          UltimosDias?.map(u => {
            i++;
            if (new Date(t.data_criacao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
              TarefasAndamento[i]++;
            }
          })
        } else if (t.status === "Concluido" || t.status === "Concluído") {
          let i = -1;
          UltimosDias?.map(u => {
            i++;
            if (new Date(t.data_conclusao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
              TarefasConcluidas[i]++;
            }
          })
        }
      })
    }

    for (let i = 0; i < 7; i++) {
      const DiasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      let DiaNum = UltimosDias[i].getDay();
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
      const obj1 = { "x": uFormatada, "y": TarefasAndamento[i] };
      const obj2 = { "x": uFormatada, "y": TarefasConcluidas[i] };
      data[0].data.push(obj1);
      data[1].data.push(obj2);
    }

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
          colors={['#C2C3C6', '#F46E27']}
          lineWidth={2}
          pointSize={6}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          enableArea={true}
          areaBlendMode="soft-light"
          areaOpacity={0.15}
          areaBaselineValue={0}
          enableSlices="x"
          useMesh={true}
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

  // Mensal
  } else if (props.selectValue === 2) {
    var datas = new Date();
    var Today = datas.getDate();
    const UltimosDias = [new Date(),];

    var TarefasAndamento = [0,];
    var TarefasConcluidas = [0,];

    for (let i = 1; i < Today; i++) {
      UltimosDias.push(new Date(datas.setDate(datas.getDate() - 1)));
      TarefasAndamento.push(0);
      TarefasConcluidas.push(0);
    }

    let Concluidas = 0;
    const UltimasConcluidas = [];
    if (props.tarefas !== null) {
      props.tarefas?.map(t => {
        if (t.status === "Concluido" || t.status === "Concluído") {
          Concluidas++;
          UltimasConcluidas.push(new Date(t.data_conclusao));
        }
      })
    }

    UltimosDias.reverse();

    if (props.tarefas !== null) {
      props.tarefas?.map(t => {
        if (t.status === "Em Andamento") {
          let i = -1;
          UltimosDias?.map(u => {
            i++;
            if (new Date(t.data_criacao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
              TarefasAndamento[i]++;
            }
          })
        } else if (t.status === "Concluido" || t.status === "Concluído") {
          let i = -1;
          UltimosDias?.map(u => {
            i++;
            if (new Date(t.data_conclusao).toISOString().split('T')[0] === u.toISOString().split('T')[0]) {
              TarefasConcluidas[i]++;
            }
          })
        }
      })
    }

    for (let i = 0; i < Today; i++) {
      let uFormatada = `${UltimosDias[i].getDate()}/${UltimosDias[i].getMonth() + 1}`;
      const obj1 = { "x": uFormatada, "y": TarefasAndamento[i] };
      const obj2 = { "x": uFormatada, "y": TarefasConcluidas[i] };
      data[0].data.push(obj1);
      data[1].data.push(obj2);
    }

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
          xScale={{
            type: 'linear',
            min: 1,
            max: 'auto',
          }}
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
            format: e => { return TarefasAndamento.length > 20 ? `${("0" + e).slice(-2)}/${("0" + (datas.getMonth() + 1)).slice(-2)}` : !(Math.floor(e) === e && e) ? '' : `${("0" + e).slice(-2)}/${("0" + (datas.getMonth() + 1)).slice(-2)}` },
            tickValues: TarefasAndamento.length > 20 ? 14 : 30,
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
          colors={['#C2C3C6', '#F46E27']}
          lineWidth={2}
          pointSize={6}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          enableArea={true}
          areaBlendMode="soft-light"
          areaOpacity={0.15}
          areaBaselineValue={0}
          enableSlices="x"
          useMesh={true}
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
}

//export default LinearChart;