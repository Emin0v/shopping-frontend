<template>
  <section id="form">
    <!--form-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <Login1></Login1>
        </div>

        <div class="col-sm-1">
          <h2 class="or">OR</h2>
        </div>
        <div class="col-sm-4">
          <Register></Register>
        </div>
      </div>
    </div>
  </section>
  <!--/form-->

  <Cart></Cart>
</template>

<script>
import Login1 from "../components/Login.vue";
import Register from "../components/Register.vue";

export default {
  name: "Login",
  components: {
    Login1,
    Register,
  },

  data() {},
};
</script>
