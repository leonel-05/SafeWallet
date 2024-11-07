<template>
  <div>
    <BarChart :chart-data="chartData" />
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
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      };
    },
  },
};
</script>
