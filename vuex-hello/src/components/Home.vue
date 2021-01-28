<template>
  <div class="home">
    <ul>
        <li :key="post.id" v-for="post in posts">
          <div class="list">
            <h2><router-link :to="'post/'+post.id">{{ post.title }}</router-link></h2>
          </div>
        </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Home",
  computed:{
    posts(){return this.$store.state.post.all}
  },created:function () {
    // this.$store.dispatch({type:'loadComments'})
    this.$store.dispatch({type:'loadPosts'})
  },
}
</script>

<style scoped>
.home{
  /*background-color:white;*/
  width: 400px;
  min-height: 30vh;
  margin: 50px auto;
  box-shadow: 3px 5px 10px rgba(0,0,0,0.5);
  border-radius: 15px;
  position: relative;
  align-content: center;
}

li{
  list-style-type: none;
  padding:10px 10px
}

ul{
  margin: 0;
  padding: 0;
}
.list{
  display:flex;
  justify-content:center;
  margin: 5px 20px;
  border-radius: 15px;
  height: 10vh;
  box-shadow: 1px 1px 3px grey inset;
}

a{
  text-align: center;
  margin: auto;
  text-decoration: none;
  font-size: large;
}
a:link {color: black}     /* 未访问的链接 */
a:visited {color: black}  /* 已访问的链接 */
a:hover {color: grey}    /* 当有鼠标悬停在链接上 */
</style>
