import {createRouter,createWebHashHistory} from 'vue-router'

const Layout=()=>import('../views/Layout/index.vue')
const Home=()=>import('../views/home/index.vue')

//路由规则
const routes=[
    //一级路由
    {
        path:'/',
        component:Layout,
        children:[
            {path:'/',component:Home}
        ]
    }

]
//vue3 函数声明
//vue2 new vueRouter({})
const router=createRouter({
    //hash 路由
    history:createWebHashHistory(),
    routes
})

export default router
