<template>
    <el-select class="m-2" placeholder="Select" size="large">
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

    <el-select class="m-2" placeholder="Select" size="large">
        <el-option value="Cardiomyopathy" selected>Cardiomyopathy</el-option>
        <el-option value="Hypertrophic cardiomyopathy" selected>Hypertrophic cardiomyopathy</el-option>
        <el-option value="Noncompaction cardiomyopathy" selected>Noncompaction cardiomyopathy</el-option>
        <el-option value="Restrictive cardiomyopathy" selected>Restrictive cardiomyopathy</el-option>
        <el-option value="Atrial cardiomyopathy" selected>Atrial cardiomyopathy</el-option>
        <el-option value="Dilated cardiomyopathy" selected>Dilated cardiomyopathy</el-option>
        <el-option value="Takotsubo cardiomyopathy" selected>Takotsubo cardiomyopathy</el-option>
        <el-option value="Right ventricular cardiomyopathy" selected>Right ventricular cardiomyopathy</el-option>
    </el-select>
    <el-button type="primary">Genrate Graph</el-button>
    <el-empty description="no data selected"></el-empty>

    <p v-once>{{getX()}}</p> 

 {{scar}}
   
<p v-once> {{sortDataG()}}</p>
<graph/>

</template>
<script>
import { ref, reactive } from "vue";
import { firebaseFireStore } from "@/firebase/database";
import Graph from "./Graph.vue"
export default {
  components: { Graph },
 name: "App",
  setup(){

    const graphData = reactive({      
      data: [0,0,0,0],
    })





        const dataG = ref([
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


  function getX() {

   firebaseFireStore
     .collection("graphtest")
   .onSnapshot((snapShot) => {
       const snapData = [];
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
         });
        console.log(snapData)
         dataG.value = snapData;
         sortDataG();
         });
  }


const scar = reactive([0])

    function sortDataG(){
         for (let index in dataG.value){
             scar.push(parseInt(index));
         }
      
    }



    return {dataG,getX, sortDataG, scar, graphData};
  },

  }
</script>
<style scoped>

</style>