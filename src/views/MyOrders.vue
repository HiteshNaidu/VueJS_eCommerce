
<template>
  <div class="mt-5 pt-5">
    <ShoppingCart />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
  name: "myOrders",
  components: {
    ShoppingCart
  }
};
</script>

<style>
</style>