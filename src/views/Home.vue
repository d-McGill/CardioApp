<template>
  <el-row class="row-bg" justify="center">
    <el-col :span="3"></el-col>
    <el-col :span="9" class="marginTB">
      <h1 class="title">Cardiomyopathy</h1>
      <h4>An application that brings awareness and medical data together!</h4>
      <el-carousel indicator-position="outside" class="marginTB">
       <el-carousel-item v-for="item in 4" :key="item">
        <h3> Fact {{ item }}</h3>
       </el-carousel-item>
      </el-carousel>
      <el-button><router-link to="/login">Login</router-link></el-button> 
      <el-button type="primary"><router-link to="/register">Register</router-link></el-button>
    </el-col>
    <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>
<script>
export default {
  name: "App",

  setup() {
  },
};

</script>
<style>
.marginTB{ margin: 5% 0};
.el-carousel__item h3 {
  font-size: 18px;
  margin: 0;
  text-align: center;
  color:#000;
  font-weight: 900;
  padding: 45px;
}
/*
.el-carousel__item:nth-child(2n) {
  /*background-color: #fff; 
}

.el-carousel__item:nth-child(2n + 1) {
 /* background-color: #fff; 
}
*/

.el-carousel__container {
    position: relative;
    height: 100px !important; 
}
</style>

<style scoped>
.title{
  /*  margin: 0 0 -20px 0 !important; */
    font-size: 50px !important; 
}
</style>