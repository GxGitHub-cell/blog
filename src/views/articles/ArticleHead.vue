<template>
  <div class="article-item-header">
    <h3 class="article-item-title">
      <slot name="title" >
      </slot>
    </h3>
    <p class="article-time">
      <i class="el-icon-time"></i>
      Posted on
      <slot name="date">
      </slot>
<!--      {{item.date}}-->
    </p>
  </div>
</template>

<script>
export default {
  name: "ArticleHead",
}
</script>

<style scoped>

</style>