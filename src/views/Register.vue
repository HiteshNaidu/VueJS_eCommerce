<template>
  <div class="MyAccount mt-5">
    <form class="CreateAccount">
      <br />

      <h3>Register</h3>
      <input type="email" class="form-control" placeholder="Email address" required />
      <br />
      <input type="password" class="form-control" placeholder="Password" required />
      <br />
      <input type="password" class="form-control" placeholder="Re-Password" required />
      <br />
      <button class="btn btn-lg btn-primary btn-block" type="submit" to="/Register">Register</button>
    </form>
    <br />
    <h3>Or</h3>
    <br />
    <form class="GuestLogIn">
      <h3>Continue as Guest</h3>
      <input type="email" class="form-control" placeholder="Email address" required />
      <input type="text" class="form-control" placeholder="Shipping Address" required />
      <br />
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