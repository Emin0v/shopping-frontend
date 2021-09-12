<template>

<section id="cart_items">
    <div class="container">
        <Cart></Cart>
    </div>
  </section>
  <!--/#cart_items-->

</template>

<script>
import Cart from "../components/Cart.vue";

export default {
  components: {
    Cart,
  },

  data() {
    return {};
  },
};
</script>