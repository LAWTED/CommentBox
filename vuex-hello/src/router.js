import Vue from 'vue'
import Router from 'vue-router'
import  Home from '@/components/Home'
import Post from '@/components/Post'
import Main from '@/components/Main'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes:[
    {
      path:'/home',
      component: Home
    },
    {
      path: '/post/:id',
      component: Post
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    }
  ]
})
