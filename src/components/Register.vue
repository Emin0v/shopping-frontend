<template>
  <div class="signup-form">
    <!--sign up form-->
    <h2>New User Signup!</h2>
    <Form @submit="signup" :validation-schema="schema">
      <div class="form-group">
        <label for="email">Name</label>
        <Field name="name" type="text" class="form-control" />
        <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="email">Surname</label>
        <Field name="surname" class="form-control" />
        <ErrorMessage name="surname" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <Field name="email" type="email" class="form-control" />
        <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>

      <button class="btn btn-primary">Signup</button>
    </Form>

    <div
      v-if="message"
      id="alert"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>
  </div>

  <!--/sign up form-->
</template>

<script>
import { register } from "@/common/product.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "Login1",

  components: {
    ErrorMessage,
    Field,
    Form,
  },

  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      surname: yup
        .string()
        .required("Surname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      schema,
      message: "",
      successful: false
    };
  },

  methods: {
    signup(user) {
      register({
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
      }).then((response) => {
        this.successful = response.data.success;
        this.message = response.data.message;
         
        var elems = document.getElementsByClassName("form-control");

        elems.forEach(function(elem) {
         elem.value=""
        })

        var alertDiv = document.getElementById("alert");
        
        setTimeout(function(){
              alertDiv.style.display="none"    
      
            }, 5000);

      });
    },
  },
};
</script>

<style scoped>
.error-feedback {
  color: red;
}
</style>