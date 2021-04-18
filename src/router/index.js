import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";

// create an array of routes
// each route is an object with a path
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

// create our router with the createRouter that we brought in
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
