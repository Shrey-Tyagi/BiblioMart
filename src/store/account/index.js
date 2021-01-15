// /src/store/account/index.js
import state from './state'
import * as getters from './getters'
import * as mutations from './mutation'
import * as actions from './action'
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}