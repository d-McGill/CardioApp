<template>
  <div>


   
    <h1>HELP PAGE</h1>
        <body>
      <Navbar />
    </body>

  
        </div>
              <body>

</body>
</template>
<script>
import Navbar from './Navbar.vue';

export default {
  name: 'Help',
  components: {
    Navbar
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body {
  font-family: 'montserrat', sans-serif;
}
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





