<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>Category</h2>
						
					<Category v-bind:categories="categories"></Category>

						<div class="price-range"><!--price-range-->
							<h2>Price Range</h2>
							<div class="well text-center">
								<input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" ><br />
								<b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
							</div>
						</div><!--/price-range-->
						
						<div class="shipping text-center"><!--shipping-->
							<img src="images/home/shipping.jpg" alt="" />
						</div><!--/shipping-->
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right" >
					<div class="features_items"><!--features_items-->
						<h2 class="title text-center">Features Items</h2>
						<div class="col-sm-4" v-for='(item, index) in products' :key='index' >
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
											<img :src="getImageUrl(item.image)" alt="" />
											<h2>{{ item.money }} {{ item.price }}  {{ item.moneySymbol }}</h2>
											<p>{{item.name}}</p>
											<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{{ item.money }} {{ item.price }}  {{ item.moneySymbol }}</h2>
												<p>{{item.name}}</p>
												<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
										</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
										<li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
									</ul>
								</div>
							</div>
						</div>
						
					</div><!--features_items-->
					
					<div class="category-tab">
						
                       <FeaturesItems></FeaturesItems>

					</div><!--/category-tab-->
					
					<div class="recommended_items"><!--recommended_items-->
						<h2 class="title text-center">recommended items</h2>
						
						<RecItem></RecItem>
						
					</div><!--/recommended_items-->
					
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {getCategories} from "@/common/product.service";
import Category from './Category.vue';
import RecItem from './RecItem.vue'
import FeaturesItems from './FeaturesItems.vue'
import {getAllProducts} from "@/common/product.service";
import {PRODUCT_URL} from "@/common/config";
export default {
  components: { Category, RecItem,FeaturesItems},
    name: 'Section',

 data() {
    return {
    categories: {},
    products: {}
    }
  },
  created() {
    this.getCategories();
	this.getAllProducts();
  },

  mounted() {
      getAllProducts(this.$route.params.id).then(response=>{
		this.products = response.data;
	})
  },

  methods: {

    getAllProducts(){
    getAllProducts().then(response=>{
		this.products = response.data;
	})},

    getImageUrl(id) {
      return PRODUCT_URL + 'filestore/' + id;
    },

    getCategories() {
    getCategories().then(response => {
        this.categories = response.data;
      });
    }
  }
}
</script>


