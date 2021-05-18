import vue from "vue"
import vueRouter from "vue-router"

vue.use(vueRouter)

import Home from "../pages/Home/idnex.vue"
import About from "../pages/About/index.vue"

import News from "../pages/news/news.vue"
import Message from "../pages/message/index.vue"

import  MessageDetail from "../pages/MessageDetail/index.vue"
export default new vueRouter({
    mode:'history',
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news',//path左边的/代表的是根路径，所以子路由不能直接/news
                    component:News
                },
                {
                    path:'message',//  /home/news  或者  直接 'news'
                    component:Message,
                    children:[
                        {
                            path:'/home/message/detail/:id', //动态路由
                            component:MessageDetail
                        }
                    ]
                }
            ]
        },
        {
            path:'/',
            redirect:'/about'
        }
    ]
})