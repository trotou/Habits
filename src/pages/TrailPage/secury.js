import { motion } from "framer-motion";
import {
  animationWrapperStyle,
  currentColor3,
  currentColor1,
} from "../../styles/globalStyles";
import { Line } from "react-chartjs-2";

const data = {
  //informações passadas para o componente
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false, //esconde linhas de fundo horizontais
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false, //esconde linhas de fundo verticais
          },
        },
      ],
    },
  },
  labels: [1, 2, "sou uma string", 4, 5, 6, 7], //Informações em cada node, pode ser string ou number

  datasets: [
    {
      fill: false, //preenchimento do espaço entre a base da tela e a linha
      lineTension: 0.1, //o quão suave são as curvas da linha
      borderColor: currentColor3,
      borderDash: [15], //tamanho do traçado da linha
      pointBorderColor: currentColor1,
      pointBackgroundColor: currentColor1,
      pointBorderWidth: 50, //tamanho da borda dos nodes
      pointHoverRadius: 55, //tamanho dos nodes quando passa o mouse
      pointHoverBackgroundColor: currentColor1,
      pointHoverBorderColor: currentColor3,
      pointHoverBorderWidth: 5, //grossura da borda dos nodes quando passa o mouse
      pointRadius: 10, //tamanho dos nodes
      pointHitRadius: 10, //tamanho dos nodes quando passa o mouse
      data: [
        //altura dos nodes no grafico
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
      ],
    },
  ],
};

const LoginPage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Line data={data} options={data.options} />
    </motion.div>
  );
};

export default LoginPage;
