<template>
  <div class="commentbox">
    <div class="commentForm">
      <input v-model="message" placeholder="  友善的评论是交流的起点" onfocus="this.placeholder=''"
             onblur="this.placeholder='  友善的评论是交流的起点'" @keyup.enter="submitComment">
      <button @click="submitComment">提交</button>
    </div>

    <div :key="comment.id" v-for="comment in reversedComments" class="commentShow">
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentBox",
  data: () => ({
    message: '',

  }),
  computed: {
    postId(){return this.$route.params.id},
    comments(){
      return this.$store.getters.getComments(this.postId)},
    reversedComments() {
      return this.comments.slice().reverse()
    }
  },
  methods: {
    submitComment() {
      if(this.message)
      {
        let comment = {
        body: this.message,
        post: this.postId
      }
      this.$store.dispatch({ type:'addComment',comment})
      this.message = ''
      }
    }
  }
}
</script>

<style scoped>
.commentbox {
  /*background-color:white;*/
  width: 400px;
  min-height: 30vh;
  margin: 20px auto;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 20px;
}

.commentShow {
  text-align: center;
}

.commentForm {
  display: flex;
  margin-bottom: 20px;
}

.commentForm input {
  flex-grow: 1;
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 15px; /* 边框半径 */
  outline: none; /* 不显示轮廓线 */
  font-size: 17px; /* 字体大小 */
  box-shadow: 1px 1px 3px #6f6d6d inset;
  caret-color: transparent;
  text-align: center;
}

.commentForm input:focus {
  outline: none;
  border: 2px solid grey;
}

.commentForm button {
  margin-left: 5px;
  width: 50px; /* 宽度 */
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 15px; /* 边框半径 */
  background: #73cef8; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
  box-shadow: 1px 1px 3px #6f6d6d inset;
}

.commentForm button:hover { /* 鼠标移入按钮范围时改变颜色 */
  background: #5599FF;
}


</style>
