<template>
  <div class="login-form">
    <!--login form-->
    <h2>Login to your account</h2>
    <form >
      <input v-model="email" placeholder="Email Address" />
      <input v-model="password"  placeholder="Password" />
      <span>
        <input @click="rememberMe=!rememberMe"  type="checkbox" class="checkbox" />
        Keep me signed in
      </span>
    </form>
      <button @click="login" class="btn btn-primary" >Login</button>
  </div>
  <!--/login form-->
</template>

<script>
import { login } from "@/common/product.service";

export default {
  name: "Login1",

  data() {
    return {
        email:'',
        password:'',
        rememberMe:false
    };
  },

  methods: {
     login(){
       login({
         email:this.email,
         password:this.password,
         rememberMe:this.rememberMe
       })
     }
  }
};
</script>