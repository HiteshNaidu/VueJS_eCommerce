<template>
  <div class="MyAccount mt-5">
    <form class="CreateAccount">
      <br />
      <h3>Sign In</h3>
      <input v-model="email" type="email" class="form-control mb-1" placeholder="Email" />
      <input v-model="password" type="password" class="form-control mb-1" placeholder="Password" />

      <button @click="login" class="btn btn-lg btn-success btn-block" type="button">Sign In</button>
      <br />
      <h3>Not a Member</h3>

      <button
        class="btn btn-lg btn-primary btn-block"
        type="button"
        @click="$router.push('register')"
      >Register</button>
    </form>
    <br />
    <br />
    <form class="GuestLogIn">
      <h3>Continue as Guest</h3>
      <input type="email" class="form-control mb-1" placeholder="Email address" required />
      <input type="text" class="form-control mb-1" placeholder="Shipping Address" required />
      <button
        class="btn btn-lg btn-warning btn-block"
        type="button"
        @click="$router.push('products')"
      >Continue as Guest</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    ...mapActions({
      fetchComments: "fetchComments",
      fetchUsers: "fetchUsers"
    }),
    login() {
      let user = {
        email: this.email,
        password: this.password
      };

      // for (var i = 0; i < this.users.length; i++) {
      if (user.email === "abc@gmail.com" && user.password === "123") {
        this.$router.push("/products");
      } else {
        alert("Not successful login!");
      }
      // }
      // this.$store.dispatch("setLogin", user);
    }
  },
  computed: {
    ...mapState({
      users: state => state.users,
      products: state => state.products,
      productDetail: state => state.productDetail,
      productComments: state => state.productComments
    })
  },
  created() {
    this.fetchComments();
    this.fetchUsers();
  }
};
</script>
<style>
.MyAccount {
  max-width: 400px;
  margin: auto;
}
</style>