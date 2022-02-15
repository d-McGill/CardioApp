<template>
<header>
      <nav>
      <div index="1" class="nav-link"><router-link to="/">CardioApp</router-link></div>
      <div index="2" class="nav-link"><router-link to="/login">Login</router-link></div>
   <!--      <router-link :to="{ name: 'Login' }"><el-button type="success" icon="el-icon-s-check" round v-if="!user">Login</el-button></router-link>
       <router-link :to="{ name: 'Login' }"><el-button type="success" icon="el-icon-s-check" round v-if="user">Loger</el-button></router-link>
     <div index="2" class="nav-link"><router-link :to="{ name: 'Login'}" round v-if="!user"> Login</router-link></div> 

        <router-link :to="{ name: 'Login' }"><el-button type="success" icon="el-icon-s-check" round v-if="!user">Login</el-button></router-link -->


      <div index="3" class="nav-link"><router-link to="/register">Register</router-link></div>
      <div index="4" class="nav-link"><router-link to="/dashboard">Dashboard</router-link></div>
      <div index="5" class="nav-link"><router-link to="/help">Help</router-link></div>
    </nav>
    <Toggle :mode="mode" @toggle="$emit('toggle')"/>
</header>
</template>

<script>
import Toggle from './Toggle.vue'
export default {
  props: ['mode'],
  name: 'Header',

  components: {
    Toggle
  }
  
}
</script>
<style scoped>

a:-webkit-any-link {
    color: #2c3e50; 
    cursor: pointer;
    text-decoration: none !important;
    margin: 0px !important; 
    font-size: 12pt;
    font-weight: 800;
} 

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #eee;
  box-shadow: 1px 1px 1px rgba(0.0,0.0,0.1);
  transition: background 0.3s ease-in-out;
  color: #f3f3f3;
}
.dark header {
  background: #15202B;
  
}
header h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 900;
  
}

header nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
.dark header nav .nav-link a{
   color: #f3f3f3;
}
header nav .nav-link:hover {
  background: #B0B0B0;
}
.dark header nav .nav-link:hover {
  background: #101520;
}

.dark header nav .nav-link a{
   color: #f3f3f3;
}


</style>
