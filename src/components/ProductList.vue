<template>
  <div>
    <h1>Product List</h1>
    <pulse-loader v-if="loading" :loading="loading"></pulse-loader>
    <b-card-group deck class="p-3 mt-5" v-else>
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
        <template v-slot:footer>
          <!-- <P>burada godetails functioun icine product id verilecek
             ve go details fonksiyonu da storeda idsi verilen urunu fltreleyip return edecek
          return edilen urun getters il produt details de alinacakk</P>-->
          <b-button
            to="/ProductDetails"
            @click="changeProductAction(product)"
            variant="info"
          >Purchase</b-button>
        </template>
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
      changeProductAction: "changeProductAction",
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
  created() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  }
};
</script>

<style>
</style>