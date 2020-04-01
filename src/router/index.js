import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Product from "@/views/Product";
import Workshop1 from "@/views/Workshop1";
import Workshop2 from "@/views/Workshop2_State";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/product", name: "Product", component: Product },
  { path: "/about", name: "About", component: About },
  { path: "/workshop1", name: "Workshop1", component: Workshop1 },
  { path: "/workshop2", name: "Workshop2", component: Workshop2 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
