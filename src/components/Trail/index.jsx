import { currentColor3, currentColor1 } from "../../styles/globalStyles";
import { Line } from "react-chartjs-2";
import { useHabits } from "../../Providers/Habits";

const data = (averageHabits) => {
  console.log(averageHabits());
  return {
    //informações passadas para o componente
    options: {
      legend: {
        display: false,
      },
      layout: {
        padding: {
          top: 140,
          bottom: 100,
          right: 40,
          left: 40,
        },
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
    },
    labels: [
      "atividades feitas no dia 1:",
      "atividades feitas no dia 2:",
      "atividades feitas no dia 3:",
      "atividades feitas no dia 4:",
      "atividades feitas no dia 5:",
      "atividades feitas no dia 6:",
      "atividades feitas no dia 7:",
    ], //Informações em cada node, pode ser string ou number

    datasets: [
      {
        fill: false, //preenchimento do espaço entre a base da tela e a linha
        lineTension: 0.1, //o quão suave são as curvas da linha
        borderColor: currentColor3,
        borderDash: [15], //tamanho do traçado da linha
        pointBorderColor: currentColor1,
        pointBackgroundColor: currentColor1,
        pointBorderWidth: 15, //tamanho da borda dos nodes
        pointHoverRadius: 30, //tamanho dos nodes quando passa o mouse
        pointHoverBackgroundColor: currentColor1,
        pointHoverBorderColor: currentColor3,
        pointHoverBorderWidth: 5, //grossura da borda dos nodes quando passa o mouse
        pointRadius: 15, //tamanho dos nodes
        pointHitRadius: 15, //tamanho dos nodes quando passa o mouse
        data: [
          //altura dos nodes no grafico
          averageHabits()[0],
          averageHabits()[1],
          averageHabits()[2],
          averageHabits()[3],
          averageHabits()[4],
          averageHabits()[5],
          averageHabits()[6],
        ],
      },
    ],
  };
};

const Trail = () => {
  const { averageHabits } = useHabits();

  return (
    <Line data={data(averageHabits)} options={data(averageHabits).options} />
  );
};

export default Trail;
