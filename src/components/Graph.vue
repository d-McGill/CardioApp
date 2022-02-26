<template>
    <apexchart
      ref="demoChart"
      height="500"
      width="100%"
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
      graphNameX: {
         type: String,
         required: true,
     },
      graphDataY: {
         type: Array,
         required: true,
     },
       graphNameY: {
         type: String,
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
        text: "A graph showing the comparison between the " + props.graphNameX + " gene and " + props.graphNameY + " data.",
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
          text: "Data Points",
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
        name: props.graphNameX,
        data: props.graphDataX,
      },
       {
        name: props.graphNameY,
        data: props.graphDataY,
      },
    ]);
  
    return {chartOptions, series};
  },

  }
</script>
<style scoped>

</style>