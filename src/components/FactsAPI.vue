<template>
<div>
    <p v-once >{{ getCardio() }} </p>
    <p v-once >{{ getHyperCardio() }} </p>
    <p v-once >{{ getNonCardio() }} </p>
    <p v-once >{{ getAtrCardio() }} </p>


      <el-carousel :interval="6000" height="200px" autoplay="true" indicator-position="none">
       <el-carousel-item>
        <div class="innerCar">
            <h1 class="title">What is {{cardio_name}}</h1>
            <h4>{{cardio_def}}</h4>
        </div>
       </el-carousel-item>

       <el-carousel-item>
        <div class="innerCar">
            <h1 class="title">What is {{HYcardio_name}}</h1>
            <h4>{{HYcardio_def}}</h4>
        </div>
       </el-carousel-item>

        <el-carousel-item>
        <div class="innerCar">
            <h1 class="title">What is {{Noncardio_name}}</h1>
            <h4>{{Noncardio_def}}</h4>
        </div>
       </el-carousel-item>

        <el-carousel-item>
        <div class="innerCar">
        <h1 class="title">What is {{Atrcardio_name}}</h1>
        <h4>{{Atrcardio_def}}</h4>
        </div>
       </el-carousel-item>
      </el-carousel>
</div>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';

export default {
  setup() {

    let cardio_name = ref('');
    let cardio_def = ref('');
    let HYcardio_name = ref('');
    let HYcardio_def = ref('');
    let Noncardio_name = ref('');
    let Noncardio_def = ref('');
    let Atrcardio_name = ref('');
    let Atrcardio_def = ref('');

function getCardio() {
      const url = "https://hpo.jax.org/api/hpo/term/HP:0001638";
        axios.get(url).then(response => {
            cardio_name.value = response.data.details.name
            cardio_def.value = response.data.details.definition
            })
        }
function getHyperCardio() {
      const url = "https://hpo.jax.org/api/hpo/term/HP:0001639";
        axios.get(url).then(response => {
            HYcardio_name.value = response.data.details.name
            HYcardio_def.value = response.data.details.definition
            })
        }

function getNonCardio() {
      const url = "https://hpo.jax.org/api/hpo/term/HP:0012817";
        axios.get(url).then(response => {
            Noncardio_name.value = response.data.details.name
            Noncardio_def.value = response.data.details.definition
            })
        }

function getAtrCardio() {
      const url = "https://hpo.jax.org/api/hpo/term/HP:0200127";
        axios.get(url).then(response => {
            Atrcardio_name.value = response.data.details.name
            Atrcardio_def.value = response.data.details.definition
            })
        }
  
    return { getCardio, getHyperCardio, getNonCardio, getAtrCardio ,cardio_name, cardio_def, HYcardio_name, HYcardio_def, Noncardio_name,Noncardio_def,Atrcardio_name,Atrcardio_def}
  }
};
</script>


  <style>

</style>

<style scoped>
.el-carousel__container{
    margin: 5% 0;
    border-radius: 8px;
  /*  padding-left: 15rem;
    padding-right: 15rem; */
}
.innerCar{
    padding: 5% 0 2% 2%;
}

.innerCar h4{
  padding-left: 7rem;
  padding-right: 7rem;
}

.el-carousel__arrow {
  background: #767676;
}

.el-carousel__arrow:hover {
  background: #767676

}
/*
.el-icon {
  background: red;
}
*/
</style>

