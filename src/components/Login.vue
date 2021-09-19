<template>
  <div class="login-form">
    <!--login form-->
    <h2>Login to your account</h2>
    <Form @submit="handleLogin" :validation-schema="schema">
      <div class="form-group">
        <label for="username">Email</label>
        <Field name="email" type="text" class="form-control" />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <span>
        <input
          @click="rememberMe = !rememberMe"
          type="checkbox"
          class="checkbox"
        />
        Keep me signed in
      </span>
      <button class="btn btn-primary">Login</button>
    </Form>
  </div>
  <!--/login form-->
</template>

<script>
import { login } from "@/common/product.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login1",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      email: "",
      password: "",
      rememberMe: false,
      schema,
    };
  },

  methods: {
    handleLogin(user) {

      login({
        email: user.email,
        password: user.password,
        rememberMe: this.rememberMe,
      })
        .then((response) => {
          if (response.data.authToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>