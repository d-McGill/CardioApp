<template>
   <body> <nav>
        <div class="menu-item"><a href="#">option</a></div>
        <div class="menu-item"><a href="#">option2</a></div>
        <Dropdown title="Services" :itmes="services" />
        <div class="menu-item"><a href="#">option3</a></div>
    </nav></body>
</template>
<script>
import Dropdown from './Dropdown.vue'
export default {
    name: 'navbar',
    components:{
        Dropdown
    },
     data(){
   return{
     services:[
       {
         title: 'Web',
         link: '#'
       },
       {
                  title: 'hhello',
         link: '#'

       },
       {
                  title: 'good',
         link: '#'
       }
     ]
   }
 }
   

}

        
   
</script>
<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: rgb(255, 240, 240);
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: blanchedalmond;
  border-bottom-color: brown;
}
nav .menu-item a{
  color: black;
 text-decoration: none;
}

</style>