<template>
<div>
    <p v-once >{{ getRSS() }} </p>
    <div v-if="isVis === 'false'"><p>Getting data ...</p></div>
      <div v-if="isVis === 'true'">
      <el-carousel :interval="6000" height="200px" autoplay="true" indicator-position="none">
       <el-carousel-item  v-for="(title, index) in titleData" :key="title.id">
        <div class="innerCar">
          <h3>{{title}}</h3>
          <p>{{descriptionData[index]}}</p>
        </div>
       </el-carousel-item>
      </el-carousel>
 </div>
</div>
</template>

<script scoped>
import {  ref} from "vue";
import axios from 'axios';

export default {
  setup() {

    let cardio_name = ref('');
    let cardio_def = ref('');

    let title =  ref('');

  const itemsData = ref([]);
  const titleData = [];
  const descriptionData = [];
  const linkData = [];
  const isVis = ref('false')






function getRSS() {
      const url = "https://api.codetabs.com/v1/proxy?quest=https://www.news-medical.net/tag/feed/Cardiomyopathy.aspx";
        axios.get(url).then(response => {

        itemsData.value= response.data.split('<item>')

        for(let i=0;i<itemsData.value.length;i++){
        titleData.push(itemsData.value[i].substring(
           itemsData.value[i].indexOf("<title>") + 7,
           itemsData.value[i].lastIndexOf("</title>")
        ))}

         for(let i=0;i<itemsData.value.length;i++){
        descriptionData.push( itemsData.value[i].substring(
           itemsData.value[i].indexOf("<description>") + 13,
           itemsData.value[i].lastIndexOf("</description>")
        ))}

        for(let i=0;i<itemsData.value.length;i++){
        linkData.push( itemsData.value[i].substring(
           itemsData.value[i].indexOf("<link>") + 6,
           itemsData.value[i].lastIndexOf("</link>")
        ))}
            isVis.value =  'true'
            console.log(isVis.value)
            console.log(titleData)

            })




        }


    return {getRSS, cardio_name ,cardio_def,title,titleData,descriptionData,linkData,isVis}
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
