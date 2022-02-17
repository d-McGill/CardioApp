<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>Reset Password</h1>
      <el-form ref="resetPass" class="marginTB">
        <div class="formWrapper">
        <el-form-item>
          <label>Enter email address</label>
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm(resetPass)"
            >Reset Password</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",

  setup() {
    const form = reactive({
      email: ""
    });
    return { form };
  },
};
</script>

<style scoped>
  .formWrapper{
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
    padding: 2% 5%;
    background-color:#eee;
    border-radius: 8px;
    margin:5% 0;
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

.errorInfo{
  background-color: #FF0000;
  color: #fff;
  padding:2%;
  border-radius: 8px;
}
 label{
  font-weight: 900;
}
</style>
