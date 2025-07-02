<template>
  <div class="main">
 
  <NavBar/>


   <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>

  </div>
 
</template>
<script>
import NavBar from './components/NavBar.vue';
export default{
  components:{
    NavBar
  },
  data(){
      return{
    
  }
  }

}
</script>
<style scoped>



</style>



