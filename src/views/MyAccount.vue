<template>
  <div class="MyAccount">
    <form class="CreateAccount">
      <br>
      <img src="../assets/login.png" alt width="60" height="60">
      <h3>Sign In</h3>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        required
      >
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        required
      >
      <br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Edit Account</button>
    </form>
    <br>
    <h3>Or</h3>
    <br>
    <form class="GuestLogIn">
      <img src="../assets/login.png" alt width="60" height="60">
      <h3>Continue as Guest</h3>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        required
      >
      <input
        type="text"
        class="form-control"
        placeholder="Shipping Address"
        required
      >
      <br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Continue</button>
    </form>
  </div>
</template>

<style>
.MyAccount {
  max-width: 400px;
  margin: auto;
}
</style>