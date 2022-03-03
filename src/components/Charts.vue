<template>
<el-row style="padding:0 15%;" >
  <el-col :span="12" >
    <h3>X - axis</h3>
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
  </el-col>
  <el-col :span="12">
        <h3>Y - axis</h3>
      <!--    X DROP DOWN   -->
    <el-select v-model="dataTermNew.x" class="m-2" placeholder="Select" size="large">
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
    <el-select  v-model="dataTermNew.y" class="m-2" placeholder="Select" size="large">
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
  </el-col>
</el-row>
<br/>
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
      x: 'Gene',
      y: 'Cardio Data',
      chart: 'line',
   })

     const dataTermNew = reactive({
      x: 'Gene',
      y: 'Cardio Data',
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
   firebaseFireStore.collection("HypertrophicCardio")
   .onSnapshot((snapShot) => {
       // Gene Data Arrays

       const scarData2 = [];
       const ledvData2 = [];
       const lesvData2 = [];
       const lsvData2 = [];
       const lvefData2 = [];
       const lvmassData2 = [];
       const redvData2 = [];
       const resvData2 = [];
       const rsvData2= [];
       const rvefData2 = [];


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

        if(dataTermNew.y === 'scar'){
         if(doc.get(dataTermNew.x)){
          scarData2.push(doc.data().scar,); 
          graphX.value = scarData2;
          graphNameX.value ='scar';
         }
       }

      if(dataTermNew.y === 'lsv'){
        if(doc.get(dataTermNew.x)){
          lsvData2.push(doc.data().lsv,);
          graphX.value = lsvData2;
          graphNameX.value ='lsv';
        }
         }

      if(dataTermNew.y === 'ledv'){
        if(doc.get(dataTermNew.x)){
          ledvData2.push(doc.data().ledv,);
          graphX.value = ledvData2;
          graphNameX.value ='ledv';
          }}
      
      if(dataTermNew.y === 'lesv'){
        if(doc.get(dataTermNew.x)){
          lesvData2.push(doc.data().lesv,);
          graphX.value = lesvData2;
          graphNameX.value ='lesv';} }    
     
     if(dataTermNew.y === 'lvef'){
       if(doc.get(dataTermNew.x)){
          lvefData2.push(doc.data().lvef,);
          graphX.value = lvefData2;
          graphNameX.value ='lvef';}  } 

     if(dataTermNew.y === 'lvmass'){
       if(doc.get(dataTerm.x)){
          lvmassData2.push(doc.data().lvmass,);
          graphX.value = lvmassData2;
          graphNameX.value ='lvmass';}}

     if(dataTermNew.y === 'redv'){
       if(doc.get(dataTerm.x)){
          redvData2.push(doc.data().redv,);
          graphX.value = redvData2;
          graphNameX.value ='redv';}  }

     if(dataTermNew.y === 'resv'){
       if(doc.get(dataTerm.x)){
          resvData2.push(doc.data().resv,);
          graphX.value = resvData2;
          graphNameX.value ='resv';}}

     if(dataTermNew.y === 'rsv'){
       if(doc.get(dataTerm.x)){
          rsvData2.push(doc.data().rsv,);
          graphX.value = rsvData2;
          graphNameX.value ='rsv';}  }

     if(dataTermNew.y === 'rvef'){
       if(doc.get(dataTerm.x)){
          rvefData2.push(doc.data().rvef,);
          graphX.value = rvefData2;
          graphNameX.value ='rvef';} } 


    // Cardio 
       if(dataTerm.y === 'scar'){
         if(doc.get(dataTerm.x)){
          scarData.push(doc.data().scar,); 
          graphY.value = scarData;
          graphNameY.value ='scar';
         }
       }

      if(dataTerm.y === 'lsv'){
        if(doc.get(dataTerm.x)){
          lsvData.push(doc.data().lsv,);
          graphY.value = lsvData;
          graphNameY.value ='lsv';
        }
         }

      if(dataTerm.y === 'ledv'){
        if(doc.get(dataTerm.x)){
          ledvData.push(doc.data().ledv,);
          graphY.value = ledvData;
          graphNameY.value ='ledv';
          }}
      
      if(dataTerm.y === 'lesv'){
        if(doc.get(dataTerm.x)){
          lesvData.push(doc.data().lesv,);
          graphY.value = lesvData;
          graphNameY.value ='lesv';} }    
     
     if(dataTerm.y === 'lvef'){
       if(doc.get(dataTerm.x)){
          lvefData.push(doc.data().lvef,);
          graphY.value = lvefData;
          graphNameY.value ='lvef';}  } 

     if(dataTerm.y === 'lvmass'){
       if(doc.get(dataTerm.x)){
          lvmassData.push(doc.data().lvmass,);
          graphY.value = lvmassData;
          graphNameY.value ='lvmass';}}

     if(dataTerm.y === 'redv'){
       if(doc.get(dataTerm.x)){
          redvData.push(doc.data().redv,);
          graphY.value = redvData;
          graphNameY.value ='redv';}  }

     if(dataTerm.y === 'resv'){
       if(doc.get(dataTerm.x)){
          resvData.push(doc.data().resv,);
          graphY.value = resvData;
          graphNameY.value ='resv';}}

     if(dataTerm.y === 'rsv'){
       if(doc.get(dataTerm.x)){
          rsvData.push(doc.data().rsv,);
          graphY.value = rsvData;
          graphNameY.value ='rsv';}  }

     if(dataTerm.y === 'rvef'){
       if(doc.get(dataTerm.x)){
          rvefData.push(doc.data().rvef,);
          graphY.value = rvefData;
          graphNameY.value ='rvef';} } 
      
      
          
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
      dataTermNew
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