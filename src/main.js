import './common/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vant from 'vant'
import store from './store'
import 'vant/lib/vant-css/index.css'

Vue.prototype.$http = axios
Vue.use(vant)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.bAuth) {
            next()
        } else {
            // next('/login')
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next()
    }
})
