import server from "@/utils/request";

export  function ArticleList(query){
    return server({
        url:'/articles/article_list',
        method:'get',
        params:query
    })
}
export  function ArticleDetail(id){
    return server({
        url:'/articles/article_detail',
        method:'get',
        params:{id}
    })
}