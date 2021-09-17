<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>Category</h2>
            <div class="panel-group category-products" id="accordian">

              <Category v-bind:categories="categories"></Category>
              
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
          <div class="product-details">
            <!--product-details-->
            <div class="col-sm-4">
              <div class="view-product">
                <img
                  class="img-fluid mx-auto d-block image"
                  :src="getImageUrl(product.images)"
                />
                <h3>ZOOM</h3>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="product-information">
                <!--/product-information-->
                <img
                  src="images/product-details/new.jpg"
                  class="newarrival"
                  alt=""
                />
                <h2>{{ product.name }}</h2>
                <p>Web ID: {{ product.id }}</p>
                <img src="images/product-details/rating.png" alt="" />
                <br />
                <span>
                  <span
                    >{{ product.money }} {{ product.price
                    }}{{ product.moneySymbol }}</span
                  >

                  <label>Quantity:</label>
                  <input type="number" value="3" />
                  <button type="button" class="btn btn-fefault cart">
                    <i class="fa fa-shopping-cart"></i>
                    Add to cart
                  </button>
                </span>
                <div>
                  <p>{{ product.description }}</p>
                  <!-- <p>Seller:{{ product.seller.name }}</p> -->

                  <strong style="color: red" v-if="product.freeDelivery">
                    FREE
                  </strong>
                  Delivery:
                  <span style="color: orange" class="value">{{
                    product.deliveryIn
                  }}</span>
                  <div>
                    <span class="value" v-html="product.features"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/product-details-->

          <div class="category-tab shop-details-tab">
            <!--category-tab-->
            <div class="col-sm-12">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#reviews" data-toggle="tab">Reviews (5)</a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div class="tab-pane fade active in" id="reviews">
                <div class="col-sm-12">
                  <ul>
                    <li>
                      <a href=""><i class="fa fa-user"></i>EUGEN</a>
                    </li>
                    <li>
                      <a href=""><i class="fa fa-clock-o"></i>12:41 PM</a>
                    </li>
                    <li>
                      <a href=""><i class="fa fa-calendar-o"></i>31 DEC 2014</a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p><b>Write Your Review</b></p>

                  <form action="#">
                    <span>
                      <input type="text" placeholder="Your Name" />
                      <input type="email" placeholder="Email Address" />
                    </span>
                    <textarea name=""></textarea>
                    <b>Rating: </b>
                    <img src="images/product-details/rating.png" alt="" />
                    <button type="button" class="btn btn-default pull-right">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!--/category-tab-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getProductDetailById } from "@/common/product.service";
import { PRODUCT_URL } from "@/common/config";
import { getCategories } from "@/common/product.service";
import Category from "../components/Category.vue";

export default {
  name: "ProductDetails",

  components: {
    Category,
  },

  props: ["productId"],

  data() {
    return {
      product: {},
      categories: {},
    };
  },

  created() {
    this.getCategories();
  },

  mounted() {
    getProductDetailById(this.productId).then((resp) => {
      this.product = resp.data;

    });
  },

  methods: {
    getImageUrl(id) {
      return PRODUCT_URL + "filestore/" + id;
    },

    getCategories() {
      getCategories().then((response) => {
        this.categories = response.data;
      });
    },

  },
};
</script>
