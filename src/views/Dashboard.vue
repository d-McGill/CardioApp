<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Visualise Data" name="first">
    
    <el-select v-model="data.gene" class="m-2" placeholder="Select" size="large">
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

    <el-select v-model="data.cardio" class="m-2" placeholder="Select" size="large">
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


    </el-tab-pane>
    <el-tab-pane label="Add Data" name="second">
      <el-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
    
    
    
    </el-tab-pane>
   
  </el-tabs>
  </div>
</template>
<script>

import { ref, reactive } from 'vue';

export default {
 name: "App",
  setup(){

  const activeName = ref('first')

    const data = reactive({
      gene: '',
      cardio: ''
    
    })
  
  return {activeName, data}
  
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