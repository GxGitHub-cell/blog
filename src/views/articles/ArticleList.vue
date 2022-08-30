<template>
  <div class="article-list">
    <div class="article-item" v-for="(item) in AricleList" :key="item._id">
      <ArticleHead >
        <template v-slot:title>
          <router-link :to="`/article_detail/${item._id}`">
            {{item.title}}
          </router-link>
        </template>

        <template v-slot:date>
          {{item.date}}
        </template>
      </ArticleHead>
        <div class="article-item-info">
          {{item.info}}
        </div>
        <div class="article-item-more">
          <el-button>
            <router-link :to="`/article_detail/${item._id}`">
              Read more »
            </router-link>
          </el-button>
        </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import ArticleHead from "@/views/articles/ArticleHead";
export default {
  name: "ArticleList",
  components: {
    ArticleHead
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapState(['AricleList'])
  },

}
</script>

<style scoped>

</style>