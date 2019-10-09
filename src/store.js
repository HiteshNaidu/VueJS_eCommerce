import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productDetail: []
  },
  getters:{
productDetail:state=> {
  return state.productDetail
}
  },
  mutations: {
    change: (state,product) => {
      
      state.productDetail=product;
      
    }
  },
  actions: {
    changeProductAction (context, payload) {
      context.commit('change', payload)
    }
  }
});
