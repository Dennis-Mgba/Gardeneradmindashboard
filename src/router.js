import vue from 'vue'
import Router from 'vue-router'
import Empty from './views/Empty.vue'
import Garderners from './views/Gardeners.vue'
import GardernersCustom from './views/GardenersCustom.vue'

vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "empty",            // ie  /name of the page to be directed to
      component: Empty          // name of the component to be displayed when that path is visited
    },
    {
      path: "/gardeners",
      name: "gardenners",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Gardeners.vue")
    },
    {
      path: "/gardenerscustom",
      name: "gardenercustom",
      component: () => import("./views/GardenersCustom.vue")
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("./views/Customers.vue")
    },
    {
      path: "/customersprofile",
      name: "customersprofile",
      component: () => import("./views/CustomersProfile.vue")
    },
    {
      path: "/customersorder",
      name: "customersorder",
      component: () => import("./views/CustomersOrder.vue")
    },
    {
      path: "/servicepartners",
      name: "servicepartners",
      component: () => import("./views/ServicePartners.vue")
    }
  ]
});
