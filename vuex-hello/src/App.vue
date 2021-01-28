<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Post from "./components/Post";
export default {
  name:'app',
  created:function () {
    // this.$store.dispatch({type:'loadComments'})
    // this.$store.dispatch({type:'loadPosts'})
  },
  components:{
    Post
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
