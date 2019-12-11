<template>
  <div class="home mt-5 pt-5">
    <ProductList />
    <!-- <hr>
    <ShoppingCart/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
// import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  name: "home",
  components: {
    ProductList
    //,ShoppingCart
  }
};
</script>
