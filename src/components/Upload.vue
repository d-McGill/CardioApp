 <template>
 <el-upload
      ref="upload"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :limit="1"
      :on-exceed="handleExceed"
      :on-change="change"
      :before-upload="handleBefore"
      :auto-upload="false"
      accept="application/JSON">

    <template #trigger>
      <el-button type="primary" class="disabled">Select File</el-button>
    </template>
    
    <input type="file" ref="doc" @change="change" />
    <el-button class="ml-3" type="success" @click="submitUpload(jsonC)">Upload Data</el-button>
     
     <div v-if="content">
       <h1>{{fileName}}</h1>
       <button @click="cancelUpload">X</button>

     </div>

  
    <template #tip>
      <div class="el-upload__tip" style="color: red">
      One File can be uploaded at once, only JSON files will be accepted and new file will cover the old file
      </div>
    </template>

    

    </el-upload>
  <!--  <h1>{{content}}</h1> -->
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

  for(var i = 0; i < jsonC.length; i++) {
        var obj = jsonC[i];

        firebase.firestore().collection("graphdata").add({
        user: user.uid, 
        ledv: obj.ledv,
        lesv: obj.lesv,
        lsv: obj.lsv,
        lvef: obj.lvef,
        lvmass: obj.lvmass
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




</style>
<style>
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