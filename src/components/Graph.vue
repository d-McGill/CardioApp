<template>
    <apexchart
      ref="demoChart"
      height="500"
      width="80%"
      :options="chartOptions"
      :series="series"
    ></apexchart>
</template>
<script>
import { ref} from "vue";
export default {
 name: "App",
 props: {
     graphDataX: {
         type: Array,
         required: true,
     },
      graphDataY: {
         type: Array,
         required: true,
     },
      graphChart: {
         type: String,
         required: true,
     }

},
  setup(props){
    const chartOptions = ref({
      chart: {
        height: 500,
        type: props.graphChart,
        zoom: {
          enabled: true,
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
        title: {
          text: "People",
        },
      },
      yaxis: {
        title: {
          text: "Values",
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
        name: "Gene Data",
        data: props.graphDataX,
      },
       {
        name: "Cardio Data",
        data: props.graphDataY,
      },
    ]);
  
    return {chartOptions, series};
  },

  }
</script>
<style scoped>

</style>