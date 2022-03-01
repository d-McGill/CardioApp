<template>
  <el-row>
    <el-col :span="7">
    </el-col>
    <el-col :span="10">
      <h1>Register for an account</h1>
    <el-form class="demo-ruleForm" @submit.prevent>
      <div v-if="errorRegistration" class="errorInfo">
        <h4>Form Vaildation Error</h4>
        <h5>{{ errorRegistration }}</h5>
      </div>
       <div class="formWrapper">
    <el-form-item>
      <label>Username *</label>
      <el-input type="email" placeholder="Username must be a vaild email address" required autocomplete="off" v-model="email"></el-input>
    </el-form-item>

    <el-form-item prop="pass">
       <label>Password *</label>
      <el-input type="password" placeholder="Password must be at least 6 characters long" required autocomplete="off" show-password v-model="password"></el-input>
    </el-form-item>

    <el-form-item prop="pass">
       <label>Confirm Password *</label>
      <el-input type="password" placeholder="Must match password" required autocomplete="off" show-password v-model="confirmPassword"></el-input>
    </el-form-item>

  <el-form-item>
    <label>Name *</label>
      <el-input type="text" placeholder="Enter your full name" required autocomplete="off" v-model="name"></el-input>
    </el-form-item>

    <el-form-item>
      <label>Full Address *</label>
      <el-input type="text" placeholder="Enter your full address" required autocomplete="off" v-model="address"></el-input>
    </el-form-item>

     <el-form-item>
      <label>Phone Number *</label>
      <el-input type="text" placeholder="Enter you full phone number including area code" required autocomplete="off" v-model="number"></el-input>
    </el-form-item>

      <el-form-item>
      <label>Institutional Affiliation *</label>
      <el-input type="text" placeholder="enter full institution name" required autocomplete="off" v-model="institute"></el-input>
    </el-form-item>

  </div>
    <el-form-item>
      <el-button type="primary" style="margin: auto" @click="register">Register</el-button>
    </el-form-item>

  </el-form>

</el-col>
    <el-col :span="7">
    </el-col>
  </el-row>

</template>
<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication} from "@/firebase/database";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

export default {
  name: "register",
  emits: ["register-clicked"],

  setup() {
    const name = ref("");
    const address = ref("");
    const number = ref("");
    const institute = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const errorRegistration = ref("");

    watch(confirmPassword, () => {
      if (
        password.value !== "" &&
        confirmPassword.value !== "" &&
        password.value !== confirmPassword.value
      ) {
        errorRegistration.value = "Passwords do not match!";
      } else {
        errorRegistration.value = null;
      }
    });

    const router = useRouter();

    function register() {
      const info = {
        email: email.value,
        name: name.value,
        password: password.value,
        phoneNumber: number.value,
        address: address.value,
        institute: institute.value
      };

      if (!errorRegistration.value) {
        firebaseAuthentication
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentials) => {
            return userCredentials.user
                .updateProfile({
                  displayName: info.name,
                })
                .then(() => {
             firebase.firestore().collection('users').doc(userCredentials.user.uid).set({
                     email: info.email,
                     name: info.name,
                     password: info.password,
                     phoneNumber: info.phoneNumber,
                     address: info.address,
                     institute: info.institute                     
                     });

                  userCredentials.user.sendEmailVerification(); 
                  router.replace("login");
                
                });
            },
            (error) => {
              errorRegistration.value = error.message;
            }
          );
      }
    }

    return {
      name,
      address,
      number,
      institute,
      email,
      password,
      confirmPassword,
      errorRegistration,
      register,
    };
  },
};
</script>
<style scoped> 


h1{
  font-weight: 900;
}
</style>
<style scoped>
    .errorInfo{
      font-size: 14px !important;
      color: red;
      margin: 5%;
      padding: 0px;
  }


  .formWrapper{
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
    padding: 2% 5%;
    background-color:#eee;
    border-radius: 8px;
    margin:5% 0;
  }

.dark .formWrapper{
    background-color: #15202B;
    color: #fff;

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

