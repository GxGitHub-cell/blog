<template>
  <div class="side">
    <SideBrand></SideBrand>
    <SideNav></SideNav>
    <SideConnect></SideConnect>
  </div>
</template>

<script>
import SideBrand from '@/components/side/SideBrand/index'
import SideNav from "@/components/side/SideNav";
import SideConnect from "@/components/side/SideConnect";

export default {
  name: "Side",
  components: {
    SideBrand,
    SideNav,
    SideConnect
  }

}
</script>

<style scoped lang="scss">

</style>