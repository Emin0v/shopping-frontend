<template>
  <div class="panel-group category-products" id="accordian">
    <!--category-productsr-->

    <div
      class="panel panel-default"
      v-for="category in categories"
      :key="category"
    >
      <div class="panel-heading">
        <h4 class="panel-title">
          <!-- <a v-bind:href="'/category/'+ category.id">{{category.name}}</a> -->
          <a id="pr" class="active"  @click="$emit('categoryId', category.id)">{{ category.name }} </a>
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
 #pr:hover {
  color: orange;
}
</style>

<script>
export default {
  name: "Category",
  props: ["categories"],
};
</script>