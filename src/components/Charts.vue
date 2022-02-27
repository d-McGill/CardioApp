<template>
  <!--    X DROP DOWN   -->
    <el-select v-model="dataTerm.x" class="m-2" placeholder="Select" size="large">
       <el-option value="No Gene Data" selected>No Gene Data</el-option>
       <el-option value="MYBPC3m">MYBPC3m</el-option>
       <el-option value="MYH7" >MYH7</el-option>
       <el-option value="MYL2" >MYL2</el-option>
       <el-option value="TNNCI" >TNNCI</el-option>
       <el-option value="TNNI3" >TNN13</el-option>
       <el-option value="TNNT2m" >TNNT2m</el-option>
       <el-option value="TPM1" >TPM1</el-option>
       <el-option value="TTN" >TTN</el-option>

       
       
    </el-select>
 <!--  Y DROP DOWN   -->
    <el-select  v-model="dataTerm.y" class="m-2" placeholder="Select" size="large">
      <el-option value="No Cardio Data" selected>No Cardio Data</el-option>
      <el-option value="ledv" >ledv</el-option>
      <el-option value="lesv" >lesv</el-option>
      <el-option value="lsv" >lsv</el-option>
      <el-option value="lvef">lvef</el-option>
      <el-option value="lvmass" >lvmass</el-option>
      <el-option value="redv" >redv</el-option>
      <el-option value="resv">resv</el-option>
      <el-option value="rsv" >rsv</el-option>
      <el-option value="rvef" >rvef</el-option>
       <el-option value="scar" >Scar</el-option>

    </el-select>
 <!--  TYPE OF GRAPH  -->
    <el-select  v-model="dataTerm.chart" class="m-2" placeholder="Select" size="large">
        <el-option value="line" selected>Line</el-option>
        <el-option value="bar">Bar</el-option>
        <el-option value="radar" >Radar</el-option>
         <el-option value="area" >Area</el-option>
         <el-option value="scatter">Scatter</el-option>
        
    </el-select>
 <!--  ON CLICK CREATE GRAPH  -->
    <el-button class="graphButton" type="primary"  @click="createGraph()">Genrate Graph</el-button>
    <el-empty description="no data selected" v-if="isVis === 'false'"></el-empty>

<!--  DYNAMIC GRAPH COMPONENT - GETS PASSED A PROP THAT WILL BE DYNMAIC -->
    <graph v-if="isVis === 'true'" :graphDataX=graphX :graphDataY=graphY :graphChart=dataTerm.chart :graphNameX="graphNameX" :graphNameY="graphNameY"></graph>
</template>
<script>
import { ref, reactive } from "vue";
import { firebaseFireStore } from "@/firebase/database";
import Graph from "./Graph.vue"
export default {
components: { Graph },
name: "App",
  setup(){
// FORM LOGIC - V_MODEL x
  const dataTerm = reactive({
      x: 'Select Gene Data',
      y: 'Select Cardio Data',
      chart: 'line',
   })

const isVis = ref('false')
// DATA ARRAYS FOR EACH DATA POINT
const graphX = ref([])
const graphY = ref([])
const graphNameY = ref('')
const graphNameX = ref('')


// ON CLICK FUNCTION TO CREATE GRAPH
  function createGraph(){
    isVis.value = false;
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
          graphNameX.value = 'MYBPC3m';
       }
      
      if(dataTerm.x === 'MYH7'){
          MYH7Data.push(doc.data().MYL2,); 
          graphX.value = MYH7Data;
          graphNameX.value = 'MYH7';
       }

      if(dataTerm.x === 'MYL2'){
          MYL2Data.push(doc.data().MYL2,); 
          graphX.value = MYL2Data;
           graphNameX.value ='MYL2';
       }
      
      if(dataTerm.x === 'TNNCI'){
          TNNCIData.push(doc.data().TNNCI,); 
          graphX.value = TNNCIData;
          graphNameX.value ='TNNCI';
       }
      
      if(dataTerm.x === 'TNNI3'){
          TNNI3Data.push(doc.data().TNNI3,); 
          graphX.value = TNNI3Data;
          graphNameX.value ='TNNI3';
       }
      
      if(dataTerm.x === 'TNNT2m'){
          TNNT2mutationData.push(doc.data().TNNT2mutation,); 
          graphX.value = TNNT2mutationData;
         graphNameX.value ='TNNT2m';
       }
      
      if(dataTerm.x === 'TPM1'){
          TPM1Data.push(doc.data().TPM1,); 
          graphX.value = TPM1Data;
          graphNameX.value ='TPM1';
       }

      if(dataTerm.x === 'TTN'){
          TTNData.push(doc.data().TTN,); 
          graphX.value = TTNData;
          graphNameX.value ='TTN';
       }


    // Cardio 
       if(dataTerm.y === 'scar'){
          scarData.push(doc.data().scar,); 
          graphY.value = scarData;
          graphNameY.value ='scar';
       }

      if(dataTerm.y === 'lsv'){
          lsvData.push(doc.data().lsv,);
          graphY.value = lsvData;
         graphNameY.value ='lsv';
         }

      if(dataTerm.y === 'ledv'){
          ledvData.push(doc.data().ledv,);
          graphY.value = ledvData;
          graphNameY.value ='ledv';
          }
      
      if(dataTerm.y === 'lesv'){
          lesvData.push(doc.data().lesv,);
          graphY.value = lesvData;
          graphNameY.value ='lesv';}     
     
     if(dataTerm.y === 'lvef'){
          lvefData.push(doc.data().lvef,);
          graphY.value = lvefData;
          graphNameY.value ='lvef';}   

     if(dataTerm.y === 'lvmass'){
          lvmassData.push(doc.data().lvmass,);
          graphY.value = lvmassData;
          graphNameY.value ='lvmass';}

     if(dataTerm.y === 'redv'){
          redvData.push(doc.data().redv,);
          graphY.value = redvData;
          graphNameY.value ='redv';}  

     if(dataTerm.y === 'resv'){
          resvData.push(doc.data().resv,);
          graphY.value = resvData;
          graphNameY.value ='resv';}

     if(dataTerm.y === 'rsv'){
          rsvData.push(doc.data().rsv,);
          graphY.value = rsvData;
          graphNameY.value ='rsv';}  

     if(dataTerm.y === 'rvef'){
          rvefData.push(doc.data().rvef,);
          graphY.value = rvefData;
          graphNameY.value ='rvef';}  
      
      
          
      });

 
        isVis.value =  'true'
        
         });
  }

  
    return {
      graphY,
      graphNameY,
      graphNameX,
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
.vue-apexcharts {
    text-align: center;
    margin: 5% 10%;
    border-radius:9px;
    padding:2%;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);}

.el-select--large {
    line-height: 40px;
    margin: 0 1%;
}

.graphButton {
    padding: 20px;
}
   
</style>
<style>
 .apexcharts-toolbar {
    top: -20px !important;
}
</style>