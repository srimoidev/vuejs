<template>
  <div id="product">
    <h1>This is a product page</h1>
    <product-table></product-table>
  </div>
</template>
<script>
import ProductTable from "../components/ProductTable";
export default {
  name: "Product",
  components: {
    ProductTable
  }
};
</script>
<style></style>
