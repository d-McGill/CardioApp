<template>
<div class="marginTB">
    <h1>I want to learn about</h1>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Cardiomypaty" name="first">
        <SearchData />
        </el-tab-pane>
    <el-tab-pane label="Genes" name="second">Config</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>

import SearchData from '../components/SearchData.vue';
import { ref } from 'vue'

export default {
  name: "App",
  components: {
    SearchData

  },

  setup(){

    const activeName = ref('first')
    
  
  return {activeName, }
  
  }
};

</script>

<style scoped>
.title{
  /*  margin: 0 0 -20px 0 !important; */
    font-size: 60px !important; 
    margin-top:5%;
}

</style>
<style>
.el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 15px;
    display: inline-block;
}

.el-tabs__item {
    padding: 0 20px;
    font-size: 30pt;
    margin: 20px;
    font-weight: 900;

}
    
 .marginTB{ margin: 6% 0};
</style>