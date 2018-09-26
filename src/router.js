import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/login',
            name:'登录',
            component:()=> import('./views/account/login')
        },
        {
            path:'/register',
            name:'注册',
            component:()=> import('./views/account/register')
        },
        {
            path: '/',
            component: () => import('./views/index'),
            children: [{
                path:'/',
                component:() => import('./views/main/home')
            },{
                path:'/category',
                component:() => import('./views/main/category')
            },{
                path:"/cart",
                component:() => import('./views/main/cart'),
                meta:{
                    requireAuth:true
                }
            },{
                path:'mine',
                component:() => import('./views/main/mine')
            }]
        },{
            path:'/goodsDetail',
            name:'商品详情',
            component:() => import('./views/goodsDetail')
        }
    ]
})
