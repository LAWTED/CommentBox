import axios from "axios";
const state= {
  user: undefined
}

const mutations= {
  login (state, payload) {
      state.user = payload
  },
  logout (state) {
      state.user = undefined
  }
}

const actions= {
  login (context, payload) {
      context.commit('login', payload)
  },
  logout (context) {
      context.commit('logout')
  }
}

export default {
  state, mutations, actions
}
