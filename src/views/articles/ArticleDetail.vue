<template>
  <div class="article_detail">
    <ArticleHead>
      <template v-slot:title>
        {{ ArticleDetail.title }}
      </template>
      <template v-slot:date>
        {{ ArticleDetail.date }}
      </template>
    </ArticleHead>
    <div class="article_introduction">
      <p>{{ ArticleDetail.info }}</p>
    </div>
    <div class="markdown_compiled" v-html="compiledMarkdown">

    </div>
  </div>
</template>

<script>
import {marked} from 'marked';
import NProgress from "nprogress";
// import {ArticleDetail} from '@/api/articles'
import ArticleHead from "@/views/articles/ArticleHead";
import {mapState} from 'vuex'
export default {
  name: "ArticleDetail",
  data() {
    return {
      // articleDetail: ''
    }
  },
  components: {
    ArticleHead,

  },
  computed: {
    compiledMarkdown: function () {
      return this.ArticleDetail.content ? marked.parse(this.ArticleDetail.content) : ''
    },
    ...mapState(['ArticleDetail'])
  },
  watch: {
    $route: {
      async handler(route) {
        NProgress.start()
       this.$store.dispatch('getArticleDetail',route.params.id).then(()=>{
         NProgress.done()
       })
      },
      immediate: true

    },

  }

}
</script>

<style scoped>

</style>