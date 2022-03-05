<template>

<div>
<el-main>
<el-row class="row-bg" justify="center">
    <el-col :span="1"></el-col>
    <el-col :span="12" class="">
      <h1 class="title">Cardio App</h1>
      <p>An application that brings all relevant research cardiomyopathy data in one place.
         Analyse, contribute, and learn with our and external data sets.
         Create an account to get started or register in a few easy steps. In the meantime here are the latest research and news articles in the cardiomyopathy space. </p>
      <RssFeed />
      <p>Peaked your interest or have something to add? Get started here....</p>
      <br/>
      <el-button v-if="!user" @click="$router.push('login')" type="primary">Login</el-button> 
      <el-button v-if="!user" @click="$router.push('register')" type="primary">Register</el-button>
</el-col>

    <el-col :span="1"></el-col>
   
  </el-row>
</el-main>
</div>
</template>
<script>

import RssFeed from '../components/RssFeed.vue';
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
export default {
  name: "App",

      data () {

      const user = ref(null);
      firebaseAuthentication.onAuthStateChanged(currentUser =>{
        if(currentUser) {
          user.value = currentUser.email;
          this.log = firebaseAuthentication.currentUser || true;
          this.sign = firebaseAuthentication.currentUser || false;
        } else {
          user.value == null;
        }
      });
      

    return {
      user
    };
  },

  components: {
    RssFeed
  }
};

</script>
<style scoped>
.innerCar {
    padding: 2% 0% 5% 0%;
    background-color: #eee;
    border-radius: 8px;
}
</style>
<style scoped>
.title{
  margin: 0 0 -5px 0 !important;
    font-size: 60px !important; 
    margin-top:5%;
}
.el-button {
  width:40%;
  font-size: 18pt;
  padding: 5% 8%;
}
.el-button  a{
  text-decoration: none;
  color:#fff;
}
</style> 