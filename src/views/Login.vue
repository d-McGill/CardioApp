<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>LOGIN PAGE</h1>
      <el-form ref="loginForm" class="marginTB" @submit.prevent>
        <el-form-item>
          <label>Email Address/Username</label>
          <el-input v-model="email" type="email"></el-input>
        </el-form-item>

        <el-form-item>
          <label>Password</label>
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>

        <div v-if="errorFirebase">
          <el-button plain type="danger" disabled icon="el-icon-error">
            {{ errorFirebase }}
          </el-button>
        </div>

        <el-form-item>

          <el-button type="success" style="margin: auto" @click="login">
        Login
          </el-button>
          <!--
          <el-button type="primary" @click="submitForm(loginForm)"
            >Login</el-button
          > -->
          <router-link to="/reset">Forgot password?</router-link>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>
<script>
/*import { reactive } from "vue"; */
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";
export default {
  name: "login",
  emits: ["login-clicked"],
  /*name: "App",*/

  setup() {
    const email = ref("");
    const password = ref("");
    const errorFirebase = ref(null);

    const router = useRouter();

      function login() {
      
      const info = {
        email: email.value,
        password: password.value,

      };

      firebaseAuthentication
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            router.push("/");
          },
          (error) => {
            errorFirebase.value = error.message;
          }
        );
    }

    return { email, password, errorFirebase, login };    
  },
};
</script>
<style>
.marginTB {
  margin: 5% 0;
}
</style>

