 <template>
 <el-upload
      ref="upload"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :limit="1"
      :on-exceed="handleExceed"
      :auto-upload="false"
      accept="application/JSON">

    <template #trigger>
      <el-button type="primary" class="disabled">Select File</el-button>
    </template>
    
    <el-button class="ml-3" type="success" @click="submitUpload">Upload Data</el-button>
    
    <template #tip>
      <div class="el-upload__tip" style="color: red">
      One File can be uploaded at once, only JSON files will be accepted and new file will cover the old file
      </div>
    </template>

    </el-upload>
</template>

  <script>

import { ref} from 'vue';

export default {
 name: "App",
  setup(){

const upload = ref()

const handleExceed = (files) => {
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}
const submitUpload = () => {
  upload.value.submit()
}
  
  return {handleExceed, submitUpload, upload}
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