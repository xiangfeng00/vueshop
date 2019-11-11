import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(Router)

//暴露所有路由
export default new Router({
    mode: 'history', // 去掉#，需要路由模式改为history
    base: '/', // 这个配置也很重要，否则会出现页面空白情况
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/home',
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        }
    ]
})