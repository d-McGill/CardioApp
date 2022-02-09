<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>LOGIN PAGE</h1>
      <el-form ref="loginForm" class="marginTB">
        <el-form-item>
          <label>Email Address/Username</label>
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item>
          <label>Password</label>
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginForm)"
            >Login</el-button
          >
          <router-link to="/reset">Forgot password?</router-link>
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
      email: "",
      password: "",
    });

    return { form };
  },
};
</script>
<style>
.marginTB {
  margin: 5% 0;
}
</style>

