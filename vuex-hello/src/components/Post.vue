<template>
  <div class="post">
    <div class="upper">
      <PostBody :postId="postId"/>
    </div>
    <div class="bottom">
      <CommentBox/>
    </div>
  </div>
</template>

<script>
import PostBody from './PostBody'
import CommentBox from './CommentBox'
export default {
    name:'Post',
    components:{
      PostBody,
      CommentBox
    },
  data:() => ({
    title:'在这里评论'
  }),
  computed:{
      postId(){
        return this.$route.params.id
      }
  }
}
</script>

<style scoped>
  .post{
    display: flex;
    flex-direction: column;
    height: 100vh;

  }
  .upper{
    display: flex;
    min-height: 40vh;
    background-color: white;
  }
  .bottom {
    display: flex;
    flex-grow: 1;
    background-color: white;
  }
</style>
