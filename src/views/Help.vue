<template>
  <el-container>
    <el-aside>  
      <div class="menuItems">
        <el-button @click="displayAbout" type="info" class="infoButton">About</el-button>
        <el-button @click="displayLearning" type="info" class="infoButton">Learning</el-button>
        <el-button @click="displayDashboard" type="info" class="infoButton">Dashboard</el-button>
        <el-button @click="displayProfile" type="info" class="infoButton">Profile</el-button>
      </div>
    </el-aside>

    <el-main>
      <div class="aboutSection" v-if="about == 'true'">
        <h1>Cardio App</h1>
        <p class="info">An application that brings all relevant research cardiomyopathy data in one place.
         Analyse, contribute, and learn with our and external data sets.
         Create an account to get started or register in a few easy steps. In the meantime here are some definitions.</p>
        <FactsAPI />
      </div>

      <div class="learningSection" v-if="learning == 'true'">
        <h1> Learning </h1>
        <p class="info">The learning page allows users to independently learn about different HCM gene mutations and different types of Cardiomyopathy. By selecting a certain type of cardiomyopathy ranging from Hypertrophic Cardiomyopathy, Noncompaction Cardiomyopathy, , Restrictive Cardiomyopathy, Atrial Cardiomyopathy, Dilated Cardiomyopathy and more users will be able to the clinical synopsis for that selected Cardiomyopathy. <br>
        <br>Users can also select from different HCM gene mutations ranging from, MHY7, MYBPC3, TNNT2, TPM1, MYL2 and more. By selecting one users will be able to see a descriptive mutation description alongside associated diseases and terms </p>
      </div>

      <div class="dashboardSection" v-if="dashboard == 'true'">
        <h1> Dashboard </h1>
        <p class="info">The dashboard page contains a section to allow users to upload data regarding gene mutations and different cardiomyopathies which will be stored for your user. Data uploaded will be represented in the visualise tab of the dashboard after selecting from the pre set options based on the data uploaded a graph will be plotted, users can also select the type of the chart to display the data in.</p>
      </div>

      <div class="profileSection" v-if="profile == 'true'">
        <h1> Profile </h1>
        <p class="info">The profile page allows for user management, it allows users to see data they have uploaded and edit or remove it, as well allowing users to edit account information or even delete their accounts. </p>
      </div>
    </el-main>
              
  </el-container>

</template>
<script>
import FactsAPI from '../components/FactsAPI.vue';
import { ref} from 'vue';
export default {
components: {
    FactsAPI
  },

  setup() {
    const about = ref('true');
    const learning = ref('ture');
    const dashboard = ref('false');
    const profile = ref('false');

    function displayAbout(){
      about.value = 'true';
      learning.value = 'false';
      dashboard.value = 'false';
      profile.value = 'false';
    }

    function displayLearning(){
      learning.value = 'true';
      about.value = 'false';
      dashboard.value = 'false';
      profile.value = 'false';

    }

    function displayDashboard(){
      dashboard.value = 'true';
      about.value = 'false';
      learning.value = 'false';
      profile.value = 'false';
    }

    function displayProfile(){
      profile.value = 'true';
      about.value = 'false';
      learning.value = 'false';
      dashboard.value = 'false';

    }

    return {about, learning, dashboard, profile, displayAbout, displayLearning , displayDashboard, displayProfile}
  }
}

</script>

<style scoped>


.info{
  font-size:25px;
}
.infoButton{
  padding:20px;
}
p{
  text-align: left;
}

.el-aside {
  background: #eee; 
  height: 40rem;
  border-radius: 0 20px 20px 0;
  box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
}

.dark .el-aside {
  background-color: #15202B;
}

.el-button {
  color: white;
  cursor: pointer; 
  width: 50%; 
   margin-top: 5rem;
   font-size: 20px;
}

.el-main {
  background: #eee;
  box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2); 
  height: 40rem;
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding:5%;
}

.dark .el-main {
   background-color: #15202B;
}

.li {
  margin-top: 50px;
}


</style>