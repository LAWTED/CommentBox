import axios from "axios";
const state= {
  all : []
}

const mutations = {
  //这个部分需要重写
  addComment(state,comment){
    state.all.push(comment)
  },
  loadComments(state,comments) {
    state.all= comments
  }
}

const actions = {
  //这个部分需要重写
  addComment({commit}, {comment}) {
    const uri = '/api/Ecomments'
    axios.post(uri,comment).then(
      res =>{
        const comment = res.data
        commit('addComment',comment)
      }
    )
  },
  loadComments({commit}){
    const uri= '/api/Ecomments'
    axios.get(uri).then(
      res =>{
        let comments = res.data
        commit('loadComments',comments)
      }

    )
  }
}

const getters={
  getComments:(state) => (id) =>{
    return state.all.filter(t => t.post === id)
  }
}

export default {
  state,mutations,actions,getters
}
