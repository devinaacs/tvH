import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from '../views/Register.vue'
import Bookmark from '../views/Bookmark.vue'
import MovieDetail from '../views/MovieDetail.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: "/bookmarks",
    name: "Bookmark",
    component: Bookmark,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: "/detail/:id",
    name: "MovieDetail",
    component: MovieDetail,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.name === "Login" && localStorage.getItem("access_token")) {
    next({ name: "Home" })
  } else {
    next()
  }
})
export default router;
