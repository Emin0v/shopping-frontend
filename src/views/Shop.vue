<template>
  <section id="advertisement">
    <div class="container">
      <img src="images/shop/advertisement.jpg" alt="" />
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>Category</h2>
            <div class="panel-group category-products" id="accordian">
              <Category @categoryId="getAllByCategoryId($event)"  v-bind:categories="categories"></Category>
            </div>

            <div class="price-range">
              <!--price-range-->
              <h2>Price Range</h2>
              <div class="well">
                <input
                  type="text"
                  class="span2"
                  value=""
                  data-slider-min="0"
                  data-slider-max="600"
                  data-slider-step="5"
                  data-slider-value="[250,450]"
                  id="sl2"
                /><br />
                <b>$ 0</b> <b class="pull-right">$ 600</b>
              </div>
            </div>
            <!--/price-range-->

            <div class="shipping text-center">
              <!--shipping-->
              <img src="images/home/shipping.jpg" alt="" />
            </div>
            <!--/shipping-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">Features Items</h2>

            <ProductList v-bind:products="products"></ProductList>
          </div>

          <Pagination></Pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getCategories } from "@/common/product.service";
import ProductList from "../components/ProductList.vue";
import Category from "../components/Category.vue";
import Pagination from "../components/Pagination.vue";
import { getAllByCategoryId } from "@/common/product.service";
import { getAllProducts } from "@/common/product.service";

export default {
  components: {
    ProductList,
    Category,
    Pagination,
  },

  data() {
    return {
      products: [],
      quantity: 1,
      categories: {},
    };
  },

  created() {
    this.getCategories();
    this.getAllProducts();
  },

  methods: {
    getAllByCategoryId(id) {
      getAllByCategoryId(id).then((response) => {
        this.products = response.data;
      });
    },

    getAllProducts() {
      getAllProducts().then((response) => {
        this.products = response.data;
      });
    },

    getCategories() {
      getCategories().then((response) => {
        this.categories = response.data;
      });
    },

  },
};
</script>