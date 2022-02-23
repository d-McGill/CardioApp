<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>Login</h1>
      <el-form ref="loginForm" class="marginTB" @submit.prevent>
     <div v-if="errorFirebase" class="errorInfo">
        <h4>Form Vaildation Error</h4>
        <h5>{{ errorFirebase }}</h5>
      </div>
        <div class="formWrapper">
        <el-form-item>
          <label>Username</label>
          <el-input v-model="email" placeholder="Username must be a vaild email address" type="email" id="email"></el-input>
        </el-form-item>

        <el-form-item>
          <label>Password</label>
          <el-input v-model="password"  placeholder="Need to rest? Rest with the link below" show-password type="password"></el-input>
        </el-form-item>
      </div>



        <el-form-item>

          <el-button type="primary" style="margin: auto" @click="login" id="loginButton">
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
            router.push("/dashboard");
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

  .el-button {
  width:40%;
  font-size: 18pt;
  padding: 5% 8%;
}
.el-button  a{
  text-decoration: none;
  color:#fff;
}

  .formWrapper{
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
    padding: 2% 5%;
    background-color:#eee;
    border-radius: 8px;
    margin:5% 0;
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

