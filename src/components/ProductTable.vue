<template>
  <div id="product-table">
    <product-form>
      <input type="text" placeholder="enter product name" />
    </product-form>
  </div>
</template>

<script>
import ProductForm from "./ProductForm";
export default {
  name: "product-table",
  components: {
    ProductForm
  }
};
</script>

<style></style>
