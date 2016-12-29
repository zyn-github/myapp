// 引入vue
import Vue from 'vue'
// 引入页面入口文件
import App from './App'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由配置文件
import routes from './router/router'
//  引入fastclick
import FastClick from 'fastclick';
// 引入VueResouse
import VueResouse from 'vue-resource'

// 安装VueRouter插件
Vue.use(VueRouter);

// 安装VueRouter插件
Vue.use(VueResouse)
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

// 移动端修复点透和延时
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,   // 引入路由，等于router: router
    template: '<App/>',
    components: {
        App
    }
});
