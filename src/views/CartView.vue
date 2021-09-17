<template>
  <section id="cart_items">
    <div class="container">
      <Cart v-bind:products="products" ></Cart>
    </div>
  </section>
  <!--/#cart_items-->
</template>

<script>
import Cart from "../components/Cart.vue";
import { findByCartId } from "@/common/product.service";
import { getProductDetailById } from "@/common/product.service";

export default {
  components: {
    Cart,
  },

  data() {
    return {
      products: [],
    };
  },

  mounted() {

  },

  created(){
     this.getAllByCartId();
  },

  methods: {
    getAllByCartId() {
      findByCartId(`50945a35-be91-44c3-8ab4-5479f5521fa3`).then((resp) => {

         for (const [key, value] of Object.entries(resp.data.products)) {
          console.log(`${key}: ${value}`);

          console.log(`${key}`);

          this.getProducts(`${key}`);
        }
      });
    },
    getProducts(productId) {
      getProductDetailById(productId).then((resp) => {
        this.products.push(resp.data);
        console.log("products=>  " + JSON.stringify(this.products));
      });
    },
  },
};
</script>