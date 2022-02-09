<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>Register for an account</h1>
      <el-form ref="ruleFormRef" class="marginTB">
       {{ isSame() }}
        <el-form-item>
          <label>Email Adress</label>
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item>
          <label>Password</label>
         <el-input v-model="form.password" type="password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <label>Confirm</label>
         <el-input v-model="form.checkPass" type="password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <p class="errorInfo">{{form.error}}</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Register</el-button>
        </el-form-item>
        <router-link to="/login" >Already have an account?</router-link>
       </el-form>
      </el-col>
    <el-col :span="8"></el-col>
  </el-row>

</template>

<script>
import { reactive} from 'vue'
export default {
  name: "App",
  setup() {
  const form = reactive({
    email: '',
    password: '',
    checkPass: '',
    error: '' })

    function isSame(){
      if(form.password !== form.checkPass){
        form.error = "Please make sure password match each other";
      }else{
         form.error = "";
      }
    }

  return{form, isSame}
  },
};

</script>
<style> 
  .marginTB{ margin: 5% 0};
</style>
<style scoped>
    .errorInfo{
      font-size: 14px;
      color: red;
      margin: -10px 0 20px 0px;
      padding: 0px;
  }
</style>

