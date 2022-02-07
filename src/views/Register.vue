<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>Register for an account</h1>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm marginTB" :size="formSize">
        
        <el-form-item label="Full Name" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="Email Address" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="pass">
         <el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="Confirm" prop="checkPass">
         <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="Researcher" prop="researcher">
          <el-radio-group v-model="ruleForm.researcher">
            <el-radio border label="Yes"></el-radio>
            <el-radio border label="No"></el-radio>
         </el-radio-group>
    
         </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Register</el-button>
        </el-form-item>
        <router-link to="/login" >Already have an account?</router-link>
       </el-form>
      </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from 'vue'




const formSize = ref('')

const ruleForm = reactive({
  name: '',
  email: '',
  pass: '',
  checkPass: '',
  researcher: '',
})

const rules = reactive({
  name: [
    {
      required: true,
      message: 'Please enter your full name',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  email: [
    {
      required: true,
      message: 'Please enter your email address',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'not vild email',
      trigger: 'blur',
    },
  ],
    password: [
    {
      required: true,
      message: 'Please password',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
     reaseacher: [
    {
      required: true,
      message: 'Please password',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
 
})



</script>
<style>
.marginTB{ margin: 5% 0};
</style>