<template>
  <!--    X DROP DOWN   -->
    <el-select v-model="dataTerm.x" class="m-2" placeholder="Select" size="large">
        <el-option value="MYH7" selected>MYH7</el-option>
        <el-option value="MYBPC3" selected>MYBPC3</el-option>
        <el-option value="TNNT2" selected>TNNT2</el-option>
        <el-option value="ACTC1" selected>ACTC1</el-option>
        <el-option value="TPM1" selected>TPM1</el-option>
        <el-option value="TNNC1" selected>TNNC1</el-option>
        <el-option value="TNNI3" selected>TNNI3</el-option>
        <el-option value="MYL2" selected>MYL2</el-option>
        <el-option value="TTN" selected>TTN</el-option>
    </el-select>
 <!--  Y DROP DOWN   -->
    <el-select  v-model="dataTerm.y" class="m-2" placeholder="Select" size="large">
        <el-option value="Cardiomyopathy" selected>Cardiomyopathy</el-option>
        <el-option value="Hypertrophic cardiomyopathy" selected>Hypertrophic cardiomyopathy</el-option>
        <el-option value="Noncompaction cardiomyopathy" selected>Noncompaction cardiomyopathy</el-option>
        <el-option value="Restrictive cardiomyopathy" selected>Restrictive cardiomyopathy</el-option>
        <el-option value="Atrial cardiomyopathy" selected>Atrial cardiomyopathy</el-option>
        <el-option value="Dilated cardiomyopathy" selected>Dilated cardiomyopathy</el-option>
        <el-option value="Takotsubo cardiomyopathy" selected>Takotsubo cardiomyopathy</el-option>
        <el-option value="Right ventricular cardiomyopathy" selected>Right ventricular cardiomyopathy</el-option>
    </el-select>
 <!--  TYPE OF GRAPH  -->
    <el-select  v-model="dataTerm.chart" class="m-2" placeholder="Select" size="large">
        <el-option value="line" selected>Line</el-option>
        <el-option value="bar" selected>Bar</el-option>
    </el-select>
 <!--  ON CLICK CREATE GRAPH  -->
    <el-button type="primary"  @click="createGraph()">Genrate Graph</el-button>
    <el-empty description="no data selected"></el-empty>

<!--  DYNAMIC GRAPH COMPONENT - GETS PASSED A PROP THAT WILL BE DYNMAIC -->
    <graph :graphData=rvef></graph>


  <!--  ARRAY TEST OUT PUTS  --> 
      
      {{scar}}

      {{nA}}

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
      x: '',
      y: '',
      chart: '',
   })

// DATA ARRAYS FOR EACH DATA POINT
const scar = ref([])
const rvef = ref([3,6,7,8,3]) // example of passing data to the prop!
const rsv = reactive([0])
const resv = reactive([0])
const redv = reactive([0])
const lvmass = reactive([0])
const lvef = reactive([0])
const lsv = reactive([0])
const lesv = reactive([0])
const ledv = reactive([0])
const Hfemale = reactive([0])
const SuddenCardiacDeath = reactive([0])
const Myectomy = reactive([0])
const Hypertension = reactive([0])
const Diabetes = reactive([0])
const ApicalHCM = reactive([0])
const AgeatMRI = reactive([0])

// MAIN DATA ARRAY
  const allData = ref([
      {
         AgeatMRI: '',
         ApicalHCM: '',
         Diabetes: '',
         Hypertension: '',
         Myectomy: '',
         SuddenCardiacDeath: '',
         female: '',
         ledv: '',
         lesv: '',
         lsv: '',
         lvef: '',
         lvmass: '',
         redv: '',
         resv: '',
         rsv: '',
         rvef: '',
         scar: '',

      },

    ]);

// ON CLICK FUNCTION TO CREATE GRAPH
  function createGraph(){
    getGraphData()
  }


// GETS ALL DATA FROM FIREBASE COLLECTION
  function getGraphData() {
   firebaseFireStore.collection("graphtest")
   .onSnapshot((snapShot) => {
       const snapData = [];
       const scarData = [];
    snapShot.forEach((doc) => {
           snapData.push({
         AgeatMRI: doc.data().AgeatMRI,
         ApicalHCM: doc.data().ApicalHCM,
         Diabetes: doc.data().Diabetes,
         Hypertension: doc.data().Hypertension,
         Myectomy: doc.data().Myectomy,
         SuddenCardiacDeath: doc.data().SuddenCardiacDeath,
         Hfemale: doc.data().female,
         ledv: doc.data().ledv,
         lesv: doc.data().lesv,
         lsv: doc.data().lsv,
         lvef: doc.data().lvef,
         lvmass: doc.data().lvmass,
         redv: doc.data().redv,
         resv: doc.data().resv,
         rsv: doc.data().rsv,
         rvef: doc.data().rvef,
         scar: doc.data().scar,
        });

        scarData.push({
         scar: doc.data().scar,
        });
      
      });

         allData.value = snapData;
         scar.value = scarData;
         });
  }
    return {
      allData,
      getGraphData,  
      scar, 
      dataTerm,
      createGraph,
      rvef,
      rsv,
      resv,
      redv,
      lvmass,
      lvef ,
      lsv ,
      lesv,
      ledv,
      Hfemale ,
      SuddenCardiacDeath,
      Myectomy ,
      Hypertension,
      Diabetes,
      ApicalHCM,
      AgeatMRI,
      };
  },

  }
</script>
<style scoped>

</style>