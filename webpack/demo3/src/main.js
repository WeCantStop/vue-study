/**
 * Created by Will on 2017.5.11.
 */

//引vue包
import Vue from "Vue"
//引入App.vue包
import App from "./App.vue";

//实例化vue对象
new Vue({
    el: "#app",
    render: create=>create(App)
})