<template>
  <div class="login-form">
    <!--login form-->
    <h2>Login to your account</h2>
    <form action="#">
      <input v-model="email" placeholder="Email Address" />
      <input v-model="password"  placeholder="Password" />
      <span>
        <input type="checkbox" class="checkbox" />
        Keep me signed in
      </span>
      <button  class="btn btn-default">Login</button>
    </form>
  </div>
  <!--/login form-->
</template>

<script>
export default {
  name: "Login1",

  data() {
    return {
        email:'',
        password:'',
    };
  },

  methods: {
  
  }
};
</script>