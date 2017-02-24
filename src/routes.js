import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './components/auth/login.vue'
import register from './components/auth/register.vue'
// import home from './components/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/login",
            component: login, 
            // meta: {
            //     forVisitors: true
            // }
        },
        {
            path: "/register",
            component: register,
            // meta: {
            //     forVisitors: true
            // }
        },
        // {
        //     path: "/feed",
        //     component: home
        // }
    ]
})

// export default