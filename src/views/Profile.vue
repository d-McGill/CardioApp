<template>
    <h1>Profile</h1>
    <el-row class="marginTB">
    <el-card class="box-card">
            <label>Name: {{user}} </label> <br><br><br>
            <label>Email: {{email}} </label> <br><br><br>
            <label>Email: {{address}} </label> <br><br><br>
            <label>Email: {{phoneNumber}} </label> <br><br><br>
            <label>Email: {{institute}} </label> <br><br><br>
    </el-card>
    </el-row>
</template>
<script>

import { ref } from "vue";
import {
  firebaseAuthentication,
  firebaseFireStore,
} from "@/firebase/database";
export default {
    setup(){
    const user = ref(null);
    const address = ref('');
    const email = ref('');
    const institute = ref('');
    const phoneNumber = ref('');

    firebaseAuthentication.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        user.value = currentUser;
        firebaseFireStore
          .collection("users")
          .doc(user.value.uid)
          .get()
          .then(function(snapshot) {
            user.value = snapshot.data().name;
            address.value = snapshot.data().address;
            email.value = snapshot.data().email;
            institute.value = snapshot.data().institute;
            phoneNumber.value = snapshot.data().phoneNumber;

          });
          
            
      } 
    });
    return { user, email, address, phoneNumber, institute};
    },
  }

</script>

<style>
.marginTB {
  margin: 5% 0;
}

  .box-card{
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
  /*  padding: 2% 5%; */
    background-color:#eee;
    border-radius: 8px;
  /*  margin:5% 0; */
    margin-left: 35%;
    height: 30rem;
  }


label{
  font-weight: 900;
}

</style>