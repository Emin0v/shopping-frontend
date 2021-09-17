<template>
  <div class="container" style="background-color: whitesmoke">
    <div style="display: flex;justify-content: center;">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSgYF6xWVPSAvw8ArTxbvTpezslN9BPfZfA&usqp=CAU"
      />
    </div>

    <div class="form-style-2 container">
      <div class="form-style-2-heading">Your information</div>
      <form action="" method="post">
        <label
          ><span>Customer id <span class="required">*</span></span>
          <input type="text" class="input-field" readonly
        /></label>
        <label
          ><span>Name <span class="required">*</span></span>
          <input type="text" class="input-field"
        /></label>
        <label>
          <span>Surname <span class="required">*</span></span>
          <input type="text" class="input-field" />
        </label>
        <label
          ><span>Email <span class="required">*</span></span
          ><input type="text" class="input-field"
        /></label>
        <label
          ><span>Balance</span
          ><input type="number" class="input-field" readonly
        /></label>
        <!-- <label
          ><span>Regarding</span
          ><select name="field4" class="select-field">
            <option value="General Question">General</option>
          </select></label
        > -->

        <label><span> </span><input type="submit" value="Submit" /></label>
      </form>
    </div>
  </div>
</template>

<script>
import { getUser } from "@/common/product.service";

export default {
  data() {
    return {
      id: '',
      name:'',
      surname:'',
      email:'',
      balance:Number
    };
  },

  mounted() {
         getUser('6ce17741-f535-4298-923d-1f4cd42e585f').then(resp=>{
           console.log(resp)
         })
  }
};
</script>

<style type="text/css">
.form-style-2 {
  max-width: 500px;
  padding: 20px 12px 10px 20px;
  font: 13px Arial, Helvetica, sans-serif;
}
.form-style-2-heading {
  font-weight: bold;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
  font-size: 15px;
  padding-bottom: 3px;
}
.form-style-2 label {
  display: block;
  margin: 0px 0px 15px 0px;
}
.form-style-2 label > span {
  width: 100px;
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
}
.form-style-2 span.required {
  color: red;
}
.form-style-2 .tel-number-field {
  width: 40px;
  text-align: center;
}
.form-style-2 input.input-field,
.form-style-2 .select-field {
  width: 48%;
}
.form-style-2 input.input-field,
.form-style-2 .tel-number-field,
.form-style-2 .textarea-field,
.form-style-2 .select-field {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  -moz-box-shadow: 1px 1px 4px #ebebeb;
  -webkit-box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  padding: 7px;
  outline: none;
}
.form-style-2 .input-field:focus,
.form-style-2 .tel-number-field:focus,
.form-style-2 .textarea-field:focus,
.form-style-2 .select-field:focus {
  border: 1px solid #0c0;
}
.form-style-2 .textarea-field {
  height: 100px;
  width: 55%;
}
.form-style-2 input[type="submit"],
.form-style-2 input[type="button"] {
  border: none;
  padding: 8px 15px 8px 15px;
  background: #ff8500;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  -moz-box-shadow: 1px 1px 4px #dadada;
  -webkit-box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
}
.form-style-2 input[type="submit"]:hover,
.form-style-2 input[type="button"]:hover {
  background: #ea7b00;
  color: #fff;
}
</style>