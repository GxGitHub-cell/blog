import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'hash',
    routes: [
        {
            path: '/articles',
            component:Layout,
            children:[
                {
                    path:'',
                    component: () => import('@/views/articles/ArticleList')
                }
            ]
        },
        {
            path: '/article_detail/:id',
            component:Layout,
            children:[
                {
                    path:'',
                    component: () => import('@/views/articles/ArticleDetail')
                }
            ]
        },
        {
            path: '/',
            redirect: '/articles'
        },
    ]
})
