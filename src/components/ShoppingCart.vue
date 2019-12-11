<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} -
        {{product.price | currency}} -
        {{product.quantity}}
      </li>
    </ul>
    <p>Total:{{total | currency}}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="statusMessage">{{statusMessage}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions } from "vuex";
export default {
  methods: {
      ...mapActions({
        checkout:'checkout'  
      })
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal"
    }),
    ...mapState({
        statusMessage:state=>state.checkoutStatus,
    })
  }
};
</script>

<style>
</style>