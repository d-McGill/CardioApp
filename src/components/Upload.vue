<template>
<br/>
    <input type="file" ref="doc" @change="change" id="file" class="inputfile" name="file" />
    <label for="file">Choose a file</label>
    <el-button class="ml-3" type="success" @click="submitUpload(jsonC)">Upload Data</el-button>
     <div v-if="content">
       <table class="fileTable">
         <tr>
           <td style="width:50%">{{fileName}}</td>
           <td><button @click="cancelUpload" class="xButton">X</button></td>
         </tr>
          </table>
      </div>

</template>

  <script>

import { ref} from 'vue';
import firebase from "firebase/app";
export default {
 name: "App",
  setup(){

const upload = ref();
const content = ref();
const fileName = ref();
const jsonC = ref(); 

const handleExceed = (files) => {
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
  }


const handleBefore = (file)=>{
  console.log(file.name)
}



const submitUpload = (jsonC) => {
 
 var user = firebase.auth().currentUser;
 var timeStamp = Date().toString();
 console.log(timeStamp);
  for(var i = 0; i < jsonC.length; i++) {
        var obj = jsonC[i];

        firebase.firestore().collection("testColl").add({
        user: user.uid, 
        ledv: obj.ledv,
        redv: obj.redv,
        lesv: obj.lesv,
        resv: obj.resv,
        lvef: obj.lvef,
        rvef: obj.rvef,
        lvmass: obj.lvmass,
        lsv: obj.lsv,
        rsv: obj.rsv,        
        scar: obj.scar,
        female: obj.female,
        AgeatMRI: obj.AgeatMRI,
        ApicalHCM: obj.ApicalHCM,
        SuddenCardiacDeath: obj.SuddenCardiacDeath,
        Hypertension: obj.Hypertension,
        Diabetes: obj.Diabetes,
        Myectomy: obj.Myectomy,
        MYH7: obj.MYH7,
        MYBPC3mutation: obj.MYBPC3mutation,
        TNNT2mutation: obj.TNNT2mutation,
        ACTCmutation: obj.ACTCmutation,
        TPM1: obj.TPM1,
        TNNCI: obj.TNNCI,
        TNNI3: obj.TNNI3,
        MYL2: obj.MYL2,
        TTN: obj.TTN,
        CreatedOn: timeStamp

  })
}

       console.log(jsonC.value)
}

const cancelUpload = () =>{
  fileName.value = "";
}

function change(e){

      const file = e.target.files[0];
      const reader = new FileReader();
      if (file.name.includes(".json")) {
        reader.onload = (res) => {

          content.value = res.target.result;
          
          fileName.value = file.name;


          let jsonContent = JSON.parse(content.value);
          console.log(content.value);
          jsonC.value = jsonContent;
          console.log(jsonContent);

        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(file);
      } 
}


  return {handleExceed, submitUpload, upload, handleBefore, change, content,cancelUpload, fileName, jsonC}
    },
}
</script>

<style scoped>

.fileTable{
  width:100%;
  margin:5%;
  font-size: 20pt;
  font-weight: 900;
  background-color: #eee;
  padding:5%;
  box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
}

.dark .fileTable{
  background-color: #15202B;
  padding:5%;
}


.xButton{
  padding:5%;
  text-align: center;
  width: 100%;
  font-size: 20pt;
  font-weight: 900;
  border: 1px solid red;
  color: #fff;
  background-color: red;
}

.xButton:hover{
  padding:5%;
  text-align: center;
  width: 100%;
  font-size: 20pt;
  font-weight: 900;
  border: 1px solid red;
  color: red;
  background-color: #fff;
}

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: var(--el-color-primary);
    display: inline-block;
    margin: 0 5%;
    padding: 5px 30px;
    border-radius: 8px
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: #53a8ff;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}


.el-button {
  width:50%;
  font-size: 18pt;
  padding: 20px;
}
.el-button  a{
  text-decoration: none;
  color:#fff;
}


.disabled {
        pointer-events: none;
        opacity: 0.3;
      }

.el-upload {
    background-color: #409eff;
    border-radius: 4px;
    margin: 0 2% 0 0;

}

.el-upload-list__item-name {
    color: var(--el-text-color-regular);
    display: block;
    margin-right: 40px;
    overflow: hidden;
    padding-left: 4px;
    text-overflow: ellipsis;
    transition: color var(--el-transition-duration);
    white-space: nowrap;
    background-color: #eee;
    padding: 5% 0;
    font-size: 15pt;
}

.el-upload-list__item .el-icon--close {
    display: none;
    position: absolute;
    top: 20px;
    right: 0px;
    cursor: pointer;
    opacity: .75;
    color: var(--el-text-color-regular);
    font-size: 30pt; }

</style>