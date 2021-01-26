<template>
  <div class="postBody">
    <div v-if="show">
      <h1>{{post.title}}</h1>
    </div>
    <div v-else>
      <h1>loading...</h1>
    </div>
    <div class="comment-count">
      {{commentCount}} 条评论
    </div>
  </div>
</template>

<script>
export default {
  name: "PostBody",
  props:['postId'],
  computed: {
    show(){
      return this.post
    },
    commentCount(){return this.$store.getters.getComments(this.postId).length},
    post(){
      return this.$store.state.post.all.find(
        t => t.id === this.postId
      )
    }
  }
}
</script>

<style scoped>
  .postBody{
    /*background-color:white;*/
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 3px 5px 10px rgba(0,0,0,0.5);
    border-radius: 15px;
    position: relative;
  }
  .comment-count{
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-weight: bold;
    color:grey;
  }
  h1{
    text-align: center;
  }
</style>

