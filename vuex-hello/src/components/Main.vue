<template>
    <div class="mainPage">
        <div class="homepage">
        <h1>主页面</h1>
        <span v-if="user"> 你好，{{user.name}}<br/><br/><br/>
            <el-button type="warning"  @click="login">注销</el-button>
        </span>
        <el-button v-else type="success" @click="login">点击登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.replace('/login')
            },
            logout () {
                this.$store.dispatch('logout').then(() => {
                    this.$router.replace('/login')
                })
            }
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>
<style>
  .mainPage{
  /*background-color:white;*/
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-height: 30vh;
  margin: 50px auto;
  box-shadow: 3px 5px 10px rgba(0,0,0,0.5);
  border-radius: 15px;
  
}
</style>
