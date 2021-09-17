<template>
  <div class="breadcrumbs">
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li class="active">Shopping Cart</li>
    </ol>
  </div>
  <div class="table-responsive cart_info">
    <table class="table table-condensed">
      <thead>
        <tr class="cart_menu">
          <td class="image">Item</td>
          <td class="description"></td>
          <td class="price">Price</td>
          <td class="quantity">Quantity</td>
          <td class="total">Total</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="cart_product">
            <a href=""><img style="    width: 110px;height: 160px;border-radius: 50%;" 
            :src="getImageUrl(product.images)" alt="" /></a>
          </td>
          <td class="cart_description">
            <h4>
              <a href="">{{ product.name }}</a>
            </h4>
            <p>Web ID: {{ product.id }}</p>
          </td>
          <td class="cart_price">
            <p>{{ product.price }}{{ product.moneySymbol }}</p>
          </td>
          <td class="cart_quantity">
            <div class="cart_quantity_button">
              <a class="cart_quantity_up" href=""> + </a>
              <input
                class="cart_quantity_input"
                type="text"
                name="quantity"
                value="1"
                autocomplete="off"
                size="2"
              />
              <a class="cart_quantity_down" href=""> - </a>
            </div>
          </td>
          <td class="cart_total">
            <p class="cart_total_price">
              {{ product.price }}{{ product.moneySymbol }}
            </p>
          </td>
          <td class="cart_delete">
            <a class="cart_quantity_delete" href=""
              ><i class="fa fa-times"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { PRODUCT_URL } from "@/common/config";

export default {
  props: ["products"],

  data() {
    return {};
  },

  methods: {
    getImageUrl(id) {
      return PRODUCT_URL + "filestore/" + id;
    },
  },
};
</script>
