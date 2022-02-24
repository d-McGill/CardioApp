<template>

{{graphData.data}}
    <apexchart
      ref="demoChart"
      type="line"
      height="350"
      width="500"
      :options="chartOptions"
      :series="series"
    ></apexchart>

</template>
<script>
import { ref} from "vue";
export default {
 name: "App",
 props: {
     graphData: {
         type: Array,
         required: true,
     }

},
  setup(props){

  

console.log()



    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: props.graphData.data,
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Desktops",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    });

    const series = ref([
      {
        name: "one",
        data: props.graphData.data,
      },
    ]);
  
    return {chartOptions, series};
  },

  }
</script>
<style scoped>

</style>