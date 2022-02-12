<template>

<div>
<el-aside>
  
</el-aside>
<el-main>
<el-row class="row-bg" justify="center">
    <el-col :span="1"></el-col>


    <el-col :span="12" class="marginTB">
      <h1 class="title">Cardio App</h1>
      <p>An application that brings all relevant research cardiomyopathy data in one place.
         Analyse, contribute, and learn with our and external data sets.
         Create an account to get started or register in a few easy steps. In the meantime here are some definitions. </p>
      <FactsAPI />
      <p>Peaked your interest or have something to add? Get started here....</p>
      <br/>
      <el-button @click="$router.push('login')" type="primary">Login</el-button> 
      <el-button @click="$router.push('register')" type="primary">Register</el-button>
</el-col>

    <el-col :span="1"></el-col>
  </el-row>
</el-main>
</div>
</template>
<script>

import FactsAPI from '../components/FactsAPI.vue';

export default {
  name: "App",
  components: {
    FactsAPI

  }
};

</script>

<style scoped>
.title{
  /*  margin: 0 0 -20px 0 !important; */
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