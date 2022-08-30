<template>
  <div class="side-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >
          <router-link to="/">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-price-tag"></i>
              <span>标签</span>
            </template>
            <el-menu-item-group>
              <router-link to="/articles">
                <el-menu-item index="2-1">全部</el-menu-item>
              </router-link>
              <router-link to="/articles?labels=前端">
                <el-menu-item index="2-2">前端</el-menu-item>
              </router-link>
              <router-link to="/articles?labels=后端">
                <el-menu-item index="2-3">后端</el-menu-item>
              </router-link>
              <router-link to="/articles?labels=其他">
                <el-menu-item index="2-4">其他</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-user"></i>
            <span slot="title">关于</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-search"></i>
            <span slot="title">搜索</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "SideNav",
  methods: {}
}
</script>

<style scoped>

</style>