import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
// import ShopCart from '../views/ShopCart'
const Home = () => import("../views/Home")
const Login = () => import("../views/Login")
const Register = () => import("../views/Register")
const Search = () => import("../views/Search")
const ShopCard = () => import("../views/ShopCard")

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',//命名路由
    path: "/",
    component: Home,
  },
  {
    name: 'Login',//命名路由
    path: "/login",
    component: Login,
  },
  {
    name: 'Register',//命名路由
    path: "/register",
    component: Register,
  },
  {
    name: 'Search',//命名路由
    path: "/search",
    component:Search,
  },

  {
    name: 'ShopCard',//命名路由
    path: "/shopCard",
    component: ShopCard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // 滚动行为
  // 当路由切换时，控制滚动条的行为（位置）
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router;