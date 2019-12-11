<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="header mb-5" fixed="top">
      <b-navbar-brand href="/">ECommerceHMA</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>|
        <b-nav-item to="/about">About</b-nav-item>|
        <b-nav-item to="/Products">Products</b-nav-item>|
        <!-- <b-nav-item  to="/ProductDetails">Product Details</b-nav-item> | -->
        <b-nav-item to="/MyOrders">My Orders</b-nav-item>|
        <b-nav-item to="/MyAccount">My Account</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
