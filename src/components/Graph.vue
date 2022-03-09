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
        text: "A graph showing the comparison between two genes mutations within two heart sections",
        align: "left",
      },
      grid: {
        row: {
        },
      },
      xaxis: {
        min: 0,
        categories: props.graphDataX,
        title: {
          text: props.graphNameX  + " Values",
        },
      },
      yaxis: {
        min: 0,
        categories: props.graphDataY,
          title: {
          text: props.graphNameY  + " Values",
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