<template>
    <el-select v-model="queryTerm.term" class="m-2" placeholder="Select" size="large">
        <el-option value="HP:0001638" selected>Cardiomyopathy</el-option>
        <el-option value="HP:0001639" selected>Hypertrophic cardiomyopathy</el-option>
        <el-option value="HP:0012817" selected>Noncompaction cardiomyopathy</el-option>
        <el-option value="HP:0001723" selected>Restrictive cardiomyopathy</el-option>
        <el-option value="HP:0200127" selected>Atrial cardiomyopathy</el-option>
        <el-option value="HP:0001644" selected>Dilated cardiomyopathy</el-option>
        <el-option value="HP:0011665" selected>Takotsubo cardiomyopathy</el-option>
        <el-option value="HP:0011663" selected>Right ventricular cardiomyopathy</el-option>
    </el-select>

    <el-button type="primary" @click="getApi()">
      {{ loading ? "Loading..." : "Learn something new" }}
    </el-button>
    <el-row class="row-bg">
        <table v-if="axios_response">
        <tr>
            <th style="width:40%">Name</th>
            <th>Clinical Synopsis</th>
        </tr>
        <tr v-for="(data,index) in axios_response" :key="index">
            <td>{{data.name}}</td>
            <td>{{data.definition}}</td>
            </tr>
        </table>
</el-row>
</template>

<script>
import { ref, computed, reactive } from "vue";
import axios from 'axios';

export default {
  setup() {

    const queryTerm = reactive({
      term: '',
    
    })

    let loading = ref(false);
    let axios_response = ref('');

    let quote = computed( () => {
      return axios_response.value && axios_response.value.slip
        ? axios_response.value.slip.advice
        : null
    }); 

    function getApi() {
      console.log(queryTerm.term);
      const url = "https://hpo.jax.org/api/hpo/term/" + queryTerm.term;
      console.log(url);

      loading.value = true
      return axios.get(url).then(response => {
        axios_response.value = response.data
        console.log(axios_response.value)
        setTimeout(() => {
          loading.value = false
        }, 4000);
      })
    }
  
    return { loading, quote, getApi, axios_response ,queryTerm}
  }
};
</script>


<style scoped>
.dark table {
    background-color: #15202B;
    color: #fff;
    
}
 table{
    margin:2% 5%;
    box-shadow: 0 0 8px rgba(0.0,0.0,0.0,0.2);
    border-radius: 8px;
    background-color:#eee;
    padding:1% 5%;
    width:100%;
  }

    table th{
    text-align: left !important;
    font-size: 26px;
    font-weight: 900;
  }

  td {
    text-align: left;
    font-size: 25px;
    vertical-align: top;
}
.el-button {
  width:25%;
  font-size: 18pt;
  padding: 20px;
}
.el-button  a{
  text-decoration: none;
  color:#fff;
}

.el-select--large {
    line-height: 40px;
    width: 25%;
    margin: 20px;
}
</style>
