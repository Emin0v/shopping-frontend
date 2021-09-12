<template>
  <div class="col-sm-4" v-for="(item, index) in products" :key="index">
    <div class="product-image-wrapper">
      <div class="single-products">
        <div class="productinfo text-center">
          <img :src="getImageUrl(item.image)" alt="" />
          <h2>{{ item.money }} {{ item.price }}{{ item.moneySymbol }}</h2>
       
          <!-- <a class="product-name" v-bind:href="'/detail/' + item.id">
          {{item.name}}</a> -->
          <router-link 
          :to="{path:'productDetails', query:{productId: item.id}}">
                 {{item.name}}
          </router-link>

          <p>{{ item.description }}</p>
          <a href="#" class="btn btn-default add-to-cart"
            ><i class="fa fa-shopping-cart"></i>Add to cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveToCart } from "@/common/product.service";
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

    addToCart(item) {
      saveToCart({
        cartId: "50945a35-be91-44c3-8ab4-5479f5521fa3",
        productId: item.id,
        count: this.quantity,
      })
        .then((resp) => {
          if (resp.data != null) {
            console.log(resp.data);
            alert("Karta elave olundu");
          }
        })
        .catch(alert("Xeta bash verdi"));
    },
  },
};
</script>