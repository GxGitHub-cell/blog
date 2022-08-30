<template>
  <div class="layout">
    <div class="main">
      <div class="lay-left">
        <!-- 侧边栏-->
        <Side></Side>
      </div>
      <div class="lay-right">
        <!-- 内容-->
        <Main></Main>
      </div>
    </div>

    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Main from '@/components/main/index'
import Side from '@/components/side/inedx'
import Footer from "@/components/footer";
export default {
  name: "BlogLayout",
  components: {
    Side,
    Main,
    Footer
  }
}
</script>

<style scoped lang="scss">
.layout {
  width: 1100px;
  margin: 0 auto;
  max-height: max-content;
  .main{
    display: flex;
    justify-content: space-between;
  }
  .lay-left{
    width: 250px;
    box-sizing: border-box;
  }
  .lay-right{
    width: 100%;
    box-sizing: border-box;
  }
}

</style>