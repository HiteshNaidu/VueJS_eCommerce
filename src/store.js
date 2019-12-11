import Vue from "vue";
import Vuex from "vuex";
import shop from "./api/shop";
import { mapstate } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    users: [],
    cart: [],
    checkoutStatus: null,
    productDetail: [],
    productComments: []
  },
  getters: {
    productsCount() {
      //return product array length
    },
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    },

    availableComments(state) {
      return state.productComments.filter(item => item.productId === state.productDetail.id);
    },
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },
    cartTotal(state, getters) {
      let total = 0;
      getters.cartProducts.forEach(element => {
        total += element.price * element.quantity;
      });
      return total;
    },
    // productDetail: state => id => {
    //   return state.products.find(product => product.id === id);
    // },
    productComment: state => {
      return state.productComment;
    },
    //pass arguments to getters by returning a function.
    productIsInStock() {
      return product => {
        return product.inventory > 0;
      };
    }
  },
  mutations: {
    changeProduct: (state, product) => {
      state.productDetail = product;
    },
    addComment: (state, comment) => {
      state.productComments = [...state.productComments, comment];
    },
    setProducts(state, products) {
      //update products
      state.products = products;
    },
    setComments(state, productComments) {
      //update products
      state.productComments = productComments;
    },
    setUsers(state, users) {
      //update products
      state.users = users;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.cart = [];
    }
  },
  actions: {
    //store methods
    changeProductAction({ state, commit }, product) {
      const productSelected = state.products.find(item => item.id === product.id);
      commit("changeProduct", productSelected);
    },
    addCommentAction(context, payload) {
      context.commit("addComment", payload);
    },
    fetchProducts(context) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          context.commit("setProducts", products);
          resolve();
        });
      });
    },
    fetchComments(context) {
      return new Promise((resolve, reject) => {
        shop.getComments(productComments => {
          context.commit("setComments", productComments);
          resolve();
        });
      });
    },
    fetchUsers(context) {
      return new Promise((resolve, reject) => {
        shop.getUsers(users => {
          context.commit("setUsers", users);
          resolve();
        });
      });
    },
    addProductToCart({ state, getters, commit }, product) {
      if (getters.productIsInStock(product)) {
        const cartItem = state.cart.find(item => item.id === product.id);
        if (!cartItem) {
          commit("pushProductToCart", product.id);
        } else {
          commit("incrementItemQuantity", cartItem);
        }
        commit("decrementProductInventory", product);
      }
    },
    checkout({ state, commit }) {
      shop.buyProducts(
        state.cart,
        () => {
          commit("emptyCart");
          commit("setCheckoutStatus", "success");
        },
        () => {
          commit("setCheckoutStatus", "fail");
        }
      );
    }
  }
});
