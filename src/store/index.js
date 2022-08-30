import Vuex from 'vuex'
import Vue from "vue";
import {ArticleList,ArticleDetail} from "@/api/articles";
Vue.use(Vuex)
const  state = {
    AricleList:[],
    ArticleDetail:{}
}
const  mutations  = {
    "SET_LIST":(state,list)=>{
       // 按时间进行降序
       list.sort((a, b) => {
            if (a.date.toUpperCase() > b.date.toUpperCase()) return -1
        })
        state.AricleList.splice(0,state.AricleList.length,...list)
    },
    "SET_DETAIL":(state,detail)=>{
        state.ArticleDetail = detail
    }
}
const  actions = {
    async getArticleList({commit},query){
        let rel = await ArticleList(query)
        console.log(rel)
        commit("SET_LIST",rel.data)
    },
    async getArticleDetail({commit},id){
        let rel = await ArticleDetail(id)
        console.log(rel)
        commit("SET_DETAIL",JSON.parse(JSON.stringify(rel.data)) )
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})