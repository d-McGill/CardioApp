<template>
  <!--    X DROP DOWN   -->
    <el-select v-model="dataTerm.x" class="m-2" placeholder="Select" size="large">
       <el-option value="No Gene Data" selected>No Gene Data</el-option>
       <el-option value="MYBPC3m" selected>MYBPC3m</el-option>
       <el-option value="MYH7" selected>MYH7</el-option>
       <el-option value="MYL2" selected>MYL2</el-option>
       <el-option value="TNNCI" selected>TNNCI</el-option>
       <el-option value="TNNI3" selected>TNN13</el-option>
       <el-option value="TNNT2m" selected>TNNT2m</el-option>
       <el-option value="TPM1" selected>TPM1</el-option>
       <el-option value="TTN" selected>TTN</el-option>

       
       
    </el-select>
 <!--  Y DROP DOWN   -->
    <el-select  v-model="dataTerm.y" class="m-2" placeholder="Select" size="large">
      <el-option value="No Cardio Data" selected>No Cardio Data</el-option>
      <el-option value="ledv" selected>ledv</el-option>
      <el-option value="lesv" selected>lesv</el-option>
      <el-option value="lsv" selected>lsv</el-option>
      <el-option value="lvef" selected>lvef</el-option>
      <el-option value="lvmass" selected>lvmass</el-option>
      <el-option value="redv" selected>redv</el-option>
      <el-option value="resv" selected>resv</el-option>
      <el-option value="rsv" selected>rsv</el-option>
      <el-option value="rvef" selected>rvef</el-option>
       <el-option value="scar" selected>Scar</el-option>

    </el-select>
 <!--  TYPE OF GRAPH  -->
    <el-select  v-model="dataTerm.chart" class="m-2" placeholder="Select" size="large">
        <el-option value="line" selected>Line</el-option>
        <el-option value="bar" selected>Bar</el-option>
        <el-option value="radar" selected>Radar</el-option>
         <el-option value="area" selected>Area</el-option>
         <el-option value="scatter" selected>Scatter</el-option>
         <el-option value="candlestick" selected>candlestick</el-option>
        
    </el-select>
 <!--  ON CLICK CREATE GRAPH  -->
    <el-button type="primary"  @click="createGraph()">Genrate Graph</el-button>
    <el-empty description="no data selected" v-if="isVis === 'false'"></el-empty>

<!--  DYNAMIC GRAPH COMPONENT - GETS PASSED A PROP THAT WILL BE DYNMAIC -->
    <h4 v-if="isVis === 'true'">Graph is showing GENE Data from <strong>{{dataTerm.x}}</strong> And CARDIO data<strong>{{dataTerm.y}}</strong></h4>
    <graph v-if="isVis === 'true'" :graphDataX=graphX :graphDataY=graphY :graphChart=dataTerm.chart></graph>
</template>
<script>
import { ref, reactive } from "vue";
import { firebaseFireStore } from "@/firebase/database";
import Graph from "./Graph.vue"
export default {
components: { Graph },
name: "App",
  setup(){
// FORM LOGIC - V_MODEL 
  const dataTerm = reactive({
      x: 'Select Gene Data',
      y: 'Select Cardio Data',
      chart: '',
   })

const isVis = ref('false')
// DATA ARRAYS FOR EACH DATA POINT
const graphX = ref([])
const graphY = ref([])


// ON CLICK FUNCTION TO CREATE GRAPH
  function createGraph(){
    getGraphData()
  }


// GETS ALL DATA FROM FIREBASE COLLECTION
  function getGraphData() {
   firebaseFireStore.collection("graphdata")
   .onSnapshot((snapShot) => {
       // Gene Data Arrays

       const MYBPC3mutationData = [];
       const MYH7Data= [];
       const MYL2Data = [];
       const TNNCIData = [];
       const TNNI3Data = [];
       const TNNT2mutationData=[];
       const TPM1Data = [];
       const TTNData = [];


       // Cardio Data Arrays
       const scarData = [];
       const ledvData = [];
       const lesvData = [];
       const lsvData = [];
       const lvefData = [];
       const lvmassData = [];
       const redvData = [];
       const resvData = [];
       const rsvData = [];
       const rvefData = [];
      
    snapShot.forEach((doc) => {

    // Gene
        if(dataTerm.x === 'MYBPC3m'){
          MYBPC3mutationData.push(doc.data().MYBPC3mutation,); 
          graphX.value = MYBPC3mutationData;
       }
      
      if(dataTerm.x === 'MYH7'){
          MYH7Data.push(doc.data().MYL2,); 
          graphX.value = MYH7Data;
       }

      if(dataTerm.x === 'MYL2'){
          MYL2Data.push(doc.data().MYL2,); 
          graphX.value = MYL2Data;
       }
      
      if(dataTerm.x === 'TNNCI'){
          TNNCIData.push(doc.data().TNNCI,); 
          graphX.value = TNNCIData;
       }
      
      if(dataTerm.x === 'TNNI3'){
          TNNI3Data.push(doc.data().TNNI3,); 
          graphX.value = TNNI3Data;
       }
      
      if(dataTerm.x === 'TNNT2m'){
          TNNT2mutationData.push(doc.data().TNNT2mutation,); 
          graphX.value = TNNT2mutationData;
       }
      
      if(dataTerm.x === 'TPM1'){
          TPM1Data.push(doc.data().TPM1,); 
          graphX.value = TPM1Data;
       }

      if(dataTerm.x === 'TTN'){
          TTNData.push(doc.data().TTN,); 
          graphX.value = TTNData;
       }


    // Cardio 
       if(dataTerm.y === 'scar'){
          scarData.push(doc.data().scar,); 
          graphY.value = scarData;
       }

      if(dataTerm.y === 'lsv'){
          lsvData.push(doc.data().lsv,);
          graphY.value = lsvData;}

      if(dataTerm.y === 'ledv'){
          ledvData.push(doc.data().ledv,);
          graphY.value = ledvData;}
      
      if(dataTerm.y === 'lesv'){
          lesvData.push(doc.data().lesv,);
          graphY.value = lesvData;}     
     
     if(dataTerm.y === 'lvef'){
          lvefData.push(doc.data().lvef,);
          graphY.value = lvefData;}   

     if(dataTerm.y === 'lvmass'){
          lvmassData.push(doc.data().lvmass,);
          graphY.value = lvmassData;}

     if(dataTerm.y === 'redv'){
          redvData.push(doc.data().redv,);
          graphY.value = redvData;}  

     if(dataTerm.y === 'resv'){
          resvData.push(doc.data().resv,);
          graphY.value = resvData;}

     if(dataTerm.y === 'rsv'){
          rsvData.push(doc.data().rsv,);
          graphY.value = rsvData;}  

     if(dataTerm.y === 'rvef'){
          rvefData.push(doc.data().rvef,);
          graphY.value = rvefData;}  
      
      
          
      });

 
        isVis.value =  'true'
        
         });
  }

  
    return {
      graphY,
      isVis,
      getGraphData,  
      graphX, 
      dataTerm,
      createGraph,
      };
  },

  }
</script>
<style scoped>

</style>