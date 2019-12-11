<template>
  <div>
    <h1>Product List</h1>
    <pulse-loader v-if="loading" :loading="loading"></pulse-loader>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <img
          v-bind:src="product.src"
        />
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add to cart</button>
      </li>
    </ul>
    <b-card-group deck class="p-3 mt-5">
      <b-card
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :img-src="product.src"
      >
        <b-card-text>
          <p>Price: {{product.price | currency}}</p>
          <p>Stock: {{product.inventory}}</p>
        </b-card-text>
        <!-- <template v-slot:footer>
          <b-button to="/ProductDetails" @click="goDetails('Drops')" variant="info">Purchase</b-button>
        </template>-->
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false
    };
  },
  components: {
    PulseLoader
  },
  methods: {
    ...mapActions({
      addProductToCart: "addProductToCart",
      fetchProducts: "fetchProducts"
    })
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    ...mapGetters({
      productIsInStock: "productIsInStock"
    })
  },
  // computed: {
  //     products() {
  //         return this.$store.state.products
  //     },
  //     productIsInStock(product){
  //         return this.$store.getters.productIsInStock
  //     }
  // }
  created() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  }
};
</script>

<style>
</style>