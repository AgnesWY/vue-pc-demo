<template>
<div>
   <side-bar></side-bar>
   <router-view></router-view>
</div>
  
</template>

<script>
import sideBar from './components/sideBar'
export default {
    components:{
      sideBar
    }
  
}
</script>

<style>

</style>