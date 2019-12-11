<template>
  <div class="p-2 m-2">
    <div class="mt-5 pt-5">
      <h4>{{productDetail.title}}</h4>
      <b-card
        :key="productDetail.id"
        :title="productDetail.title"
        :img-src="productDetail.src"
        img-left
        class="mb-3"
      >
        <b-card-text>
          <p>Price: {{productDetail.price | currency}}</p>
          <p>Stock: {{productDetail.inventory}}</p>
        </b-card-text>
        <button
          :disabled="!productIsInStock(productDetail)"
          @click="addProductToCart(productDetail)"
        >Add to cart</button>
      </b-card>
    </div>
    <ProductCommentComponent>Comment</ProductCommentComponent>
  </div>
</template>


<script>
import ProductCommentComponent from "@/components/ProductCommentComponent.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      productDetail: state => state.productDetail
    }),
    ...mapGetters({
      productIsInStock: "productIsInStock"
    })
  },
  methods: {
    ...mapActions({
      addProductToCart: "addProductToCart"
    })
  },
  components: {
    ProductCommentComponent
  }
};
</script>
