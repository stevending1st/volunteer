<template>
  <el-container id="layout">
    <el-drawer
      :model-value="isMenuOpen"
      direction="ltr"
      size="210px"
      :modal="true"
      :withHeader="false"
      :show-close="false"
      :close-on-press-escape="false"
      :append-to-body="false"
      v-if="!isMenuDisplay"
      @close="changeCollapse"
    >
      <LeftMenu />
    </el-drawer>
    <el-aside
      :width="isMenuOpen === true ? '210px' : '54px'"
      v-if="isMenuDisplay"
    >
      <LeftMenu :isCollapse="!isMenuOpen" />
    </el-aside>
    <el-container>
      <el-header height="85px">
        <AdminHeader
          :isCollapse="isMenuOpen"
          @changeCollapse="changeCollapse"
        ></AdminHeader>
        <NavTabs></NavTabs>
      </el-header>
      <el-main>
        <el-scrollbar :native="false">
          <!-- <AllFormTest></AllFormTest> -->
          <!-- <TableTest></TableTest> -->
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftMenu from "@/views/layout/LeftMenu/LeftMenu.vue";
import AdminHeader from "@/views/layout/AdminHeader/AdminHeader.vue";
import NavTabs from "@/views/layout/NavTabs/NavTabs.vue";
// import AllFormTest from "@/components/Form/ALLFormTest/ALLFormTest.vue";
// import TableTest from "@/components/Table/TableTest/TableTest.vue";

export default defineComponent({
  name: "Layout",
  components: {
    LeftMenu,
    AdminHeader,
    NavTabs
    // AllFormTest
    // TableTest
  },
  data() {
    return {
      isMenuOpen: document.body.clientWidth > 1000,
      isMenuDisplay: document.body.clientWidth > 1000,
      screenWidth: document.body.clientWidth
    };
  },
  methods: {
    listenResizeFn(fn: Function) {
      let timer: any = null;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn();
        }, 300);
      };
    },
    changeMenuDisplay() {
      this.isMenuDisplay = document.body.clientWidth > 1000 ? true : false;
      this.isMenuOpen = this.isMenuDisplay && this.isMenuOpen ? true : false;
      this.screenWidth = document.body.clientWidth;
    },
    changeCollapse() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  mounted() {
    window.addEventListener(
      "resize",
      this.listenResizeFn(this.changeMenuDisplay)
    );
  },
  beforeUnmount() {
    window.removeEventListener(
      "resize",
      this.listenResizeFn(this.changeMenuDisplay)
    );
  }
});
</script>

<style lang="scss">
// #layout {
//   height: 100%;
//   max-height: 100%;
//   .el-container {
//     height: 100%;
//     max-height: 100%;
//     .el-menu {
//       height: 100vh;
//       max-height: 100vh;
//     }
//   }
// }
// #layout > .el-container > .el-aside {
//   height: 100%;
//   max-height: 100%;
//   // width: 210px;
//   // max-width: 210px;
//   border-right: 1px solid #e6e6e6;
// }
// .el-menu {
//   border-right: none;
// }
</style>

<style lang="scss" scoped>
#layout {
  height: 100%;
  max-height: 100%;
  .el-container {
    height: 100vh;
    max-height: 100vh;
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      padding: 0;
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      height: 160px;
    }
  }
}
</style>
