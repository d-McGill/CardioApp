<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Visualise Data" name="first">
      <Charts />
  </el-tab-pane>
  
  <el-tab-pane label="Add Data" name="second">
    <el-row>
      <el-col :span="7"></el-col>
     <el-col :span="10">
      <Upload />
     </el-col>
      <el-col :span="7"></el-col>
    </el-row>
   </el-tab-pane>
 </el-tabs>
  </div>
</template>
<script>
import Upload from '../components/Upload.vue';
import Charts from '../components/Charts.vue'
import { ref} from 'vue';

export default {
 name: "App",
   components: {
    Upload, Charts

  },
  setup(){

  const activeName = ref('first')



  return {activeName}
  
  }
  }

</script>
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
</style>