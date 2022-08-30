import router from "@/router";
import store from "@/store";
import NProgress from 'nprogress'
//练习一下导航守卫
router.beforeEach( async (to,from,next)=>{
    if(to.path === '/articles')
    {
        NProgress.start()
        let query = {}
        if(to.query.labels){
            query.labels = to.query.labels
        }
       await store.dispatch('getArticleList',query)
        NProgress.done()
    }
    next()
})