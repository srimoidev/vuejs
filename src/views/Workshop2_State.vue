<template>
  <div id="workshop2">
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "workshop2",
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
};
</script>

<style></style>
