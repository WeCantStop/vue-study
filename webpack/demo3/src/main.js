/**
 * Created by Will on 2017.5.11.
 */

//引vue包
import Vue from "vue";
//引入App.vue包
import App from "./App.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import login from "./components/login.vue";
import register from "./components/register.vue";

var vueRouterObj = new VueRouter({
    routes: [
        {path: "/", redirect: "/login"},
        {path: "/login", component: login},
        {path: "/register", component: register}
    ]
})


//实例化vue对象
new Vue({
    el: "#app",
    router: vueRouterObj,
    render: create=>create(App)
})