<template>
  <div class="signup-form">
    <!--sign up form-->
    <h2>New User Signup!</h2>
    <form>
      <input v-model="name" type="text" placeholder="Name" />
      <input v-model="surname" type="text" placeholder="Surname" />
      <input v-model="email" type="email" placeholder="Email Address" />
      <input v-model="password" type="password" placeholder="Password" />
    </form>
    <button @click="signup" class="btn btn-primary">Signup</button>
  </div>
  <!--/sign up form-->
</template>

<script>
import { register } from "@/common/product.service";

export default {
  name: "Login1",

  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
    };
  },

  methods: {
    signup() {
      alert(this.name + ", " + this.email + ", " + this.password);
      register({
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
      }).then(response=>{
        alert(response.data)
      });
    },
  },
};
</script>