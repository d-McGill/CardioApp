<template>
<div>
    <p v-once >{{ getRSS() }} </p>



</div>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';

export default {
  setup() {

    let cardio_name = ref('');
    let cardio_def = ref('');
    let xml = ref('');
    let title =  ref('');


function getRSS() {
      const url = "https://api.codetabs.com/v1/proxy?quest=https://www.news-medical.net/tag/feed/Cardiomyopathy.aspx";
        axios.get(url).then(response => {
            console.log(response.data)
            xml.value = response.data
            console.log(xml.value)
            })
        }

  
    return {getRSS, cardio_name ,cardio_def,title,xml }
  }
};
</script>


  <style>

</style>

<style>
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

