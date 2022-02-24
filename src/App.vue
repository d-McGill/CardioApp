<template>
  <div class="app" :class="mode">
  <Header :mode="mode" @toggle="toggle"/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Home',
    data () {
    return {
      mode: 'light'
    }
  },

  components: {
    Header,Footer
  },
  methods: {
    toggle (){
      if (this.mode === "dark"){
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
}
</script>
<style>
* {
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  color: #2c3e50;
  transition: background 0.3s ease-in-out;
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

.dark {
  background:#192734;
  color: #f3f3f3;
}

.dark .formWrapper{
    background-color: #15202B;
    color: #fff;

}

.dark footer{
    background-color: #15202B;
    color: #fff;

}

.dark footer a{
    color: #fff;
}

.dark a{
    color: #fff;

}

.dark #tab-second {
    color: #fff;
}

.dark #tab-first {
    color: #fff;
}

.dark .innerCar {
    background-color: #15202B;
    color: #fff;
    
}

.dark table {
    background-color: #15202B;
    color: #fff;
    
}

.dark .fileTable {
    background-color: #15202B;
    color: #fff;
    
}



/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>
