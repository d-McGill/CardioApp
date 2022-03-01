<template>
  <el-row>
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>Reset Password</h1>
      <el-form ref="resetPass" class="marginTB">
        <div class="formWrapper">
        <el-form-item>
          <label>Enter email address</label>
          <el-input v-model="email" type="email"></el-input>
        </el-form-item>
        </div>
    <el-form-item>
      <el-button type="primary" style="margin: auto" @click="resetPass">Reset</el-button>
    </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script>
  import { ref} from "vue";
  import { useRouter } from "vue-router";
import firebase from "firebase/app";
export default {
  name: "register",
  setup() {
    const email = ref("");

    const router = useRouter();

    function resetPass() {
      const info = {
        email: email.value

      };

       firebase.auth().sendPasswordResetEmail(info.email)
       .then(
        router.replace("login"))
    }

    return {email,resetPass};
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

.dark .formWrapper{
    background-color: #15202B;
    color: #fff;

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
