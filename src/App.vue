<template>
  <div>
    <Header/>
    <div id="app">
    <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/header'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  data() {
    return{

    }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
