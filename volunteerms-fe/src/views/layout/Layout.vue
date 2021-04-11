<template>
  <div id="layout">
    <el-container>
      <!-- <el-aside v-bind:width="isCollapse ? '55px' : '210px'"> -->
      <!-- </el-aside> -->
      <!-- <LeftMenu :is-collapse="isMenuOpen"></LeftMenu> -->
      <LeftMenuSlider />
      <el-container>
        <el-header height="85px">
          <AdminHeader
            :isCollapse="isMenuOpen"
            @changeCollapse="changeCollapse"
          ></AdminHeader>
          <NavTabs></NavTabs>
        </el-header>
        <el-main @click="menuOpenClose">
          <AllFormTest></AllFormTest>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import LeftMenu from "@/views/layout/LeftMenu/LeftMenu.vue";
// import LeftMenu from "@/views/layout/LeftMenu/LeftMenu.vue";
import AdminHeader from "@/views/layout/AdminHeader/AdminHeader.vue";
import LeftMenuSlider from "@/views/layout/LeftMenu/LeftMenuSlider.vue";
import NavTabs from "@/views/layout/NavTabs/NavTabs.vue";
import AllFormTest from "@/components/Form/ALLFormTest/ALLFormTest.vue";

export default defineComponent({
  name: "Layout",
  components: {
    // LeftMenu,
    LeftMenuSlider,
    // LeftMenu,
    AdminHeader,
    NavTabs,
    AllFormTest
  },
  data() {
    return {
      isMenuOpen: true,
      asideWidth: "210px"
    };
  },
  methods: {
    changeCollapse: function(): void {
      // console.log(document.body.clientWidth);
      // this.isMenuOpen = !this.isMenuOpen;
    }
  }
});
</script>

<style lang="scss">
#layout {
  height: 100%;
  max-height: 100%;
  .el-container {
    height: 100%;
    max-height: 100%;
    .el-menu {
      height: 100vh;
      max-height: 100vh;
    }
  }
}
#layout > .el-container > .el-aside {
  height: 100%;
  max-height: 100%;
  // width: 210px;
  // max-width: 210px;
  border-right: 1px solid #e6e6e6;
}
.el-menu {
  border-right: none;
}
.el-header {
  padding: 0;
}
</style>

<style lang="scss" scoped>
#layout {
  height: 100%;
  max-height: 100%;
}
</style>
