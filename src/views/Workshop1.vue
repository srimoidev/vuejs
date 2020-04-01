<template>
  <div id="workshop1">
    <h5>Contents</h5>
    <hr />
    <span v-if="isTrue">isTrue</span>
    <span v-else>isFalse</span>
    <hr />
    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ item.data }}
      </li>
    </ul>
    <hr />
    <p>Message : {{ msg }}</p>
    <input type="text" v-model="msg" />
    <hr />
    <input type="text" placeholder="Enter data" v-model="item2.data" />
    <button type="button" @click="addItem">
      AddItem
    </button>
    <ul>
      <li v-for="(item, index) in items2" v-bind:key="index">
        {{ item.data }}
        <button type="button" @click="deleteItem(index)">x</button>
      </li>
    </ul>
    <hr />
    <h6 ref="pEle">test01</h6>
    <input type="text" ref="inputEle" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "workshop1",
  data() {
    return {
      isTrue: true,
      items: [{ data: "Data1" }, { data: "Data2" }, { data: "Data3" }],
      items2: [],
      item2: {
        data: ""
      },
      msg: ""
    };
  },
  methods: {
    submit() {
      this.$refs["pEle"].textContent = "TEST";
    },
    addItem() {
      this.items2.push(this.item2);
      this.item2 = { data: "" };
    },
    deleteItem(index) {
      this.items2.splice(index, 1);
    }
  },
  beforeCreate() {
    console.log("Before Create!");
  },
  created() {
    console.log("Created!");
  },
  beforeMount() {
    console.log("Before Mount!");
  },
  mounted() {
    console.log("Mounted!");
  },
  beforeUpdate() {
    console.log("Before Update!");
  },
  updated() {
    console.log("Updated!");
  },
  beforeDestroy() {
    console.log("Before Destroy!");
  },
  destroyed() {
    console.log("Destroyed!");
  }
};
</script>
<style scoped>
#workshop1 {
  padding: 30px;
}
</style>
