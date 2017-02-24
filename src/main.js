import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'

import VueResource from 'vue-resource'
// import Auth from './packages/auth/auth.js'

Vue.use(VueResource)
// Vue.use(Auth)

// Router.beforeEach(
//     (to, from, next) => {
//         if(to.matched.some(record => record.metaforVisitors)){
//             if(Vue.auth.isAuthenticated()){
//                 next({
//                     path: '/feed'
//                 })
//             } else next()
//         } else next()
//     }
// )

new Vue({
   el: '#app',
   render: h => h(App),
   router: Router
})
