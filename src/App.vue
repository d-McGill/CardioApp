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
  background: #eee;
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

.dark footer a{
    color: #fff;
}

.dark a{
    color: #fff;

}

.dark .vue-modal-content {
    background-color: #15202B !important;
}

.dark .vue-modal{
    background: #15202B !important;
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



.dark .fileTable {
    background-color: #15202B;
    color: #fff;
    
}

.dark footer a:hover{
    text-decoration: none;
    font-weight: 900;
    background-color: #fff;
    color: #409eff !important;
    padding:15px 50px;
    border-radius: 8px;
    
}

.el-empty__image {
    margin-top: 3%;
}
.vue-modal-content {
    background-color: #eee;  
    border: none;
    min-height: 100vh;
}

html{
  background-color: #f3f3f3;
}

.dark html{
  background-color: #192734;
}

</style>
