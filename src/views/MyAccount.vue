<template>
  <div class="MyAccount">
    <form class="SignIn">
      <br>
      <img src="../assets/login.png" alt width="80" height="80">
      <h1>Sign In</h1>
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
      <button class="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Edit Account</button>
    </form>
    <br>
    <h1>Or</h1>
    <br>
    <form class="GuestLogIn">
      <img src="../assets/login.png" alt width="80" height="80">
      <h1>Continue as Guest</h1>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
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