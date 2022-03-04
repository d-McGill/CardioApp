<template>
    <el-row>
      <el-col :span="8">
        <div class="wrapper">
        <ul>
          <li><strong>Name:</strong> {{name}}</li>
          <li><strong>Address:</strong> {{address}} </li>
          <li><strong>Phone Number:</strong> {{phoneNumber}}</li>
          <li><strong>Institute Name:</strong> {{institute}} </li>
          </ul>
            <el-button type="warning" @click="(isOpen = true), editUserAccount()">Edit profile</el-button>
            <el-button v-if="tableVis == 'false'" type="primary" @click="getUserData" style="margin-right:2%">View uploads</el-button>
            <el-button v-if="tableVis == 'true'" type="primary" @click="hideUserData" style="margin-right:2%">Hide uploads</el-button>
        </div>
        </el-col>
        <el-col :span="16">
      
      <div class="tableWrapper">
      <table v-if="tableVis == 'true'" class="tableContent">
        <thead>
          <th>Action</th>
          <th>ledv</th>
          <th>redv</th>
          <th>lesv</th>
          <th>resv</th>
          <th>lvef</th>
          <th>rvef</th>
          <th>lvmass</th>
          <th>lsv</th>
          <th>rsv</th>
          <th>scar</th>
          <th>female</th>
          <th>AgeatMRI</th>
          <th>ApicalHCM</th>
          <th>SuddenCardiacDeath</th>
          <th>Hypertension</th>
          <th>Diabetes</th>
          <th>Myectomy</th>
          <th>MYH7</th>
          <th>MYBPC3mutation</th>
          <th>TNNT2mutation</th>
          <th>ACTCmutation</th>
          <th>TPM1</th>
          <th>TNNCI</th>
          <th>TNNI3</th>
          <th>MYL2</th>
          <th>TTN</th>
          <th>Created on</th>
          <tr v-for="item in snapData" :key="item.document">
            <el-button type="warning" @click="(isOpen = true), populateModal(item)">Edit</el-button>
            <td style="height:20px; overflow:hidden">{{ item.ledv == undefined ? "N/A" : item.ledv }}</td>
            <td>{{ item.redv == undefined ? "N/A" : item.redv }}</td>
            <td>{{ item.lesv == undefined ? "N/A" : item.lesv }}</td>
            <td>{{ item.resv == undefined ? "N/A" : item.resv }}</td>
            <td>{{ item.lvef == undefined ? "N/A" : item.lvef }}</td>
            <td>{{item.rvef == undefined ? "N/A" : item.rvef}}</td>
            <td>{{item.lvmass == undefined ? "N/A" : item.lvmass}}</td>
            <td>{{item.lsv == undefined ? "N/A" : item.lsv}}</td>
            <td>{{item.rsv == undefined ? "N/A" : item.rsv}}</td>
            <td>{{item.scar == undefined ? "N/A" : item.scar}}</td>
            <td>{{item.female == undefined ? "N/A" : item.female}}</td>
            <td>{{item.AgeatMRI == undefined ? "N/A" : item.AgeatMRI}}</td>
            <td>{{item.ApicalHCM == undefined ? "N/A" : item.ApicalHCM}}</td>
            <td>{{item.SuddenCardiacDeath == undefined ? "N/A" : item.SuddenCardiacDeath}}</td>
            <td>{{item.Hypertension == undefined ? "N/A" : item.Hypertension}}</td>
            <td>{{item.Diabetes == undefined ? "N/A" : item.Diabetes}}</td>
            <td>{{item.Myectomy == undefined ? "N/A" : item.Myectomy}}</td>
            <td>{{item.MYH7 == undefined ? "N/A" : item.MYH7}}</td>
            <td>{{item.MYBPC3mutation == undefined ? "N/A" : item.MYBPC3mutation}}</td>
            <td>{{item.TNNT2mutation == undefined ? "N/A" : item.TNNT2mutation}}</td>
            <td>{{item.ACTCmutation == undefined ? "N/A" : item.ACTCmutation}}</td>
            <td>{{item.TPM1 == undefined ? "N/A" : item.TPM1}}</td>
            <td>{{item.TNNCI == undefined ? "N/A" : item.TNNCI}}</td>
            <td>{{item.TNNI3 == undefined ? "N/A" : item.TNNI3}}</td>
            <td>{{item.MYL2 == undefined ? "N/A" : item.MYL2}}</td>
            <td>{{item.TTN == undefined ? "N/A" : item.TTN}}</td>
            <td>{{item.CreatedOn == undefined ? "N/A" : item.CreatedOn}}</td>
          </tr>

        </thead>
        

      </table>
      </div>
        </el-col>
        </el-row>
       <Modal :open="isOpen" @close="isOpen = !isOpen">
          <el-form class="updateForm" v-if="userData == 'false'">

            <el-form-item>
              <label>ledv</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="ledv"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>redv</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="redv"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>lesv</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="lesv"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>resv</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="resv"
              ></el-input>
            </el-form-item>

            
            <el-form-item>
              <label>lvef</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="lvef"
              ></el-input>
            </el-form-item>

            
            <el-form-item>
              <label>rvef</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="rvef"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>lvmass</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="lvmass"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>lsv</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="lsv"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>rsv</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="rsv"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>scar</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="scar"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>female</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="female"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>AgeatMRI</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="AgeatMRI"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>SuddenCardiacDeath</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="SuddenCardiacDeath"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>Hypertension</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="Hypertension"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>Diabetes</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="Diabetes"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>Myectomy</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="Myectomy"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>MYH7</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="MYH7"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>MYBPC3mutation</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="MYBPC3mutation"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>TNNT2mutation</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="TNNT2mutation"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>ACTCmutation</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="ACTCmutation"
              ></el-input>
            </el-form-item>

                        <el-form-item>
              <label>TPM1</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="TPM1"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>TNNCI</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="TNNCI"
              ></el-input>
            </el-form-item>

                        <el-form-item>
              <label>TNNI3</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="TNNI3"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>MYL2</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="MYL2"
              ></el-input>
            </el-form-item>

            
            <el-form-item>
              <label>TTN</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="TTN"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="warning"
                style="margin: auto"
                @click="updateCollection()"
                >Update collection</el-button
              >
            </el-form-item>

            <el-form-item>
              <el-button
                type="danger"
                style="margin: auto"
                @click="deleteCollection()"
                >Delete collection</el-button
              >
            </el-form-item>
          </el-form>

          <el-form class="updateUser" v-if="userData == 'true'">

            <el-form-item>
              <label>Name</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="name"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>Address</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="address"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>Phone Number</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="phoneNumber"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <label>Institute</label>
              <el-input
                type="text"
                required
                autocomplete="off"
                v-model="institute"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="warning"
                style="margin: auto"
                @click="updateUserAccount()"
                >Update User</el-button
              >
            </el-form-item>

            <el-form-item>
              <el-button
                type="danger"
                style="margin: auto"
                @click="deleteUserAccount()"
                >Delete User</el-button
              >
            </el-form-item>
              <div v-if="confirmDeletion == 'true'">
                <label>Are you sure</label>
              <el-button
                type="primary"
                style="margin: auto"
                @click="confirmAccountDelete()"
                >Yes</el-button
              >
              <el-button
                type="primary"
                style="margin: auto"
                @click="cancelAccountDelete()"
                >No</el-button
              >
              </div>
          </el-form>
        </Modal>
</template>
<script>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
import { firebaseFireStore, firebaseAuthentication } from "@/firebase/database";
//import firebase from "firebase/app";
export default {
  components: {
    Modal,
  },
  setup() {
    const isOpen = ref(false);
    const tableVis = ref('false');
    const userData = ref('false');
    const confirmDeletion = ref('false');

    const ledv = ref("");
    const redv = ref("");
    const lesv = ref("");
    const resv = ref("");
    const lvef = ref("");
    const rvef = ref("");
    const lvmass = ref("");
    const lsv = ref("");
    const rsv = ref("");
    const scar = ref("");
    const female = ref("");
    const AgeatMRI = ref("");
    const ApicalHCM = ref("");
    const SuddenCardiacDeath = ref("");
    const Hypertension = ref("");
    const Diabetes = ref("");
    const Myectomy = ref("");
    const MYH7 = ref("");
    const MYBPC3mutation = ref("");
    const TNNT2mutation = ref("");
    const ACTCmutation = ref("");
    const TPM1 = ref("");
    const TNNCI = ref("");
    const TNNI3 = ref("");
    const MYL2 = ref("");
    const TTN = ref("");




    const user = ref(null);
    const snapData = ref([]);
    const documentId = ref();
    const address = ref('');
    const email = ref('');
    const institute = ref('');
    const phoneNumber = ref('');
    const name = ref('');


    firebaseAuthentication.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        user.value = currentUser;
        firebaseFireStore
          .collection("users")
          .doc(user.value.uid)
          .get()
          .then(function(snapshot) {
            name.value = snapshot.data().name;
            address.value = snapshot.data().address;
            email.value = snapshot.data().email;
            institute.value = snapshot.data().institute;
            phoneNumber.value = snapshot.data().phoneNumber;
          });
          
            
      } 
    });
    


    function getUserData() {
      snapData.value = [];
      tableVis.value = 'true';
      firebaseAuthentication.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          user.value = currentUser;
          firebaseFireStore
            .collection("HypertrophicCardio")
            .where("user", "==", currentUser.uid)
            .onSnapshot((snapShot) => {
              snapShot.forEach((doc) => {
                snapData.value.push({ document: doc.id, ...doc.data() });
              });
            });
        }
      });
    }

    function hideUserData() {
      snapData.value = [];
      tableVis.value = 'false';
      console.log("hidden");
    }

    function updateCollection(){
      snapData.value = [];
      isOpen.value = false;
      firebaseFireStore.collection("HypertrophicCardio").doc(documentId.value).update({

        ledv: ledv.value,
        redv: redv.value,
        lesv: lesv.value,
        resv: resv.value,
        lvef: lvef.value,
        rvef: rvef.value,
        lvmass: lvmass.value,
        lsv: lsv.value,
        rsv: rsv.value,
        scar: scar.value,
        female: female.value,
        AgeatMRI: AgeatMRI.value,
        ApicalHCM: ApicalHCM.value,
        SuddenCardiacDeath: SuddenCardiacDeath.value,
        Hypertension: Hypertension.value,
        Diabetes: Diabetes.value,
        Myectomy: Myectomy.value,
        MYH7: MYH7.value,
        MYBPC3mutation: MYBPC3mutation.value,
        TNNT2mutation: TNNT2mutation.value,
        ACTCmutation: ACTCmutation.value,
        TPM1: TPM1.value,
        TNNCI: TNNCI.value,
        TNNI3: TNNI3.value,
        MYL2: MYL2.value,
        TTN: TTN.value
        
      });
      
      
    }

    function deleteCollection(){
      
     snapData.value = [];
      firebaseFireStore.collection("HypertrophicCardio").doc(documentId.value).delete({});
      isOpen.value = false;
      
    }


    const populateModal = (item) => {
      userData.value = 'false';
      
      documentId.value = item.document;

        (ledv.value = item.ledv),
        (redv.value = item.redv),
        (lesv.value = item.lesv),
        (resv.value = item.resv),
        (lvef.value = item.lvef),
        (rvef.value = item.rvef),
        (lvmass.value = item.lvmass),
        (lsv.value = item.lsv),
        (rsv.value = item.rsv),
        (scar.value = item.scar),
        (female.value = item.female),
        (AgeatMRI.value = item.AgeatMRI),
        (ApicalHCM.value = item.ApicalHCM),
        (SuddenCardiacDeath.value = item.SuddenCardiacDeath),
        (Hypertension.value = item.Hypertension),
        (Diabetes.value = item.Diabetes),
        (Myectomy.value = item.Myectomy),
        (MYH7.value = item.MYH7),
        (MYBPC3mutation.value = item.MYBPC3mutation),
        (TNNT2mutation.value = item.TNNT2mutation),
        (ACTCmutation.value = item.ACTCmutation),
        (TPM1.value = item.TPM1),
        (TNNCI.value = item.TNNCI),
        (TNNI3.value = item.TNNI3),
        (MYL2.value = item.MYL2),
        (TTN.value = item.TTN);

    };

    function editUserAccount(){
      userData.value = 'true';

    }

    function updateUserAccount(){
        isOpen.value = false;
        firebaseFireStore.collection("users").doc(user.value.uid).update({

        name: name.value,
        address: address.value,
        phoneNumber: phoneNumber.value,
        institute: institute.value    
        
      });

    }

    function deleteUserAccount(){
      
      confirmDeletion.value = 'true';


    }

    function cancelAccountDelete(){

      confirmDeletion.value = 'false';

    }

    function confirmAccountDelete(){


        firebaseAuthentication.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          user.value = currentUser;
          currentUser.delete()
          .then(function(){
          firebaseFireStore.collection("users").doc(user.value.uid).delete({
            
          });
            isOpen.value = false;
          })

        }


      });


    }

    

    return {
      getUserData,
      isOpen,
      snapData,
      populateModal,
      updateCollection,
      deleteCollection,
      ledv,
      redv,
      lesv,
      resv,
      lvef,
      rvef,
      lvmass,
      lsv,
      rsv,
      scar,
      female,
      AgeatMRI,
      ApicalHCM,
      SuddenCardiacDeath,
      Hypertension,
      Diabetes,
      Myectomy,
      MYH7,
      MYBPC3mutation,
      TNNT2mutation,
      ACTCmutation,
      TPM1,
      TNNCI,
      TNNI3,
      MYL2,
      TTN,
      address,
      email,
      institute,
      phoneNumber,
      user,
      name,
      tableVis,
      hideUserData,
      editUserAccount,
      userData,
      updateUserAccount,
      deleteUserAccount,
      confirmAccountDelete,
      cancelAccountDelete,
      confirmDeletion

    };
  },
};
</script>

<style scoped>

.wrapper {
background: #eee; 
box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
border-radius: 8px;
margin:5%;
padding:2% 5% 5% 5%;
}
.tableWrapper{
  width:90%;
  overflow: scroll;
  height:600px;
  background: #eee; 
  box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
  border-radius: 8px;
  padding:10px;
}

.dark .tableWrapper{
  background-color: #15202B;
}

.dark .wrapper{
  background-color: #15202B;
}

table, th, td {
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

th {
  background-color: #409eff;
  color:#fff
}

td {
 width: 40px;
 overflow: scroll;
 white-space: nowrap;
 padding: 5px !important;
}

ul {
    text-align: left;
    padding: 5%;
    font-size: 15pt;
    text-decoration: none;
    list-style: none;
}

.vue-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 34%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
    background: #eee; 
}

.vue-modal-content {
    background-color: #eee;  
    border: none;
    min-height: 100vh;
}

label {
  font-weight: 900;
}
</style>