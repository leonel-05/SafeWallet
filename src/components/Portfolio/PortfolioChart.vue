<template>
  <div class="portfolio-container">
    <div class="chart-wrapper">
      <BarChart :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default {
  components: { BarChart: Bar },
  props: ["transacciones"],
  computed: {
    chartData() {
      const cryptoAmounts = this.transacciones.map((t) => t.crypto_amount);
      const cryptoCodes = this.transacciones.map((t) => t.crypto_code);
      return {
        labels: cryptoCodes,
        datasets: [
          {
            label: "Cantidad de Criptomonedas",
            data: cryptoAmounts,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };
    },
  },
};
</script>

<style>
.portfolio-container {
  background-image: url('@/assets/FondoParaApp.jpg'); /* Cambia la ruta por la de tu imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.chart-wrapper {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco con transparencia */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra */
  border-radius: 12px;
  padding: 1.5rem;
  width: 80%;
  max-width: 900px;
}

.chart-wrapper canvas {
  max-height: 400px;
}

@media (max-width: 768px) {
  .chart-wrapper {
    width: 95%; /* Aumenta el tamaño para pantallas más pequeñas */
  }
}
</style>

