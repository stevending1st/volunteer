<template>
  <el-container id="layout">
    <el-drawer
      :model-value="isMenuOpen"
      direction="ltr"
      size="210px"
      :modal="true"
      :withHeader="false"
      :show-close="false"
      :close-on-press-escape="true"
      :append-to-body="false"
      v-if="!isMenuDisplay"
      @close="changeCollapse"
    >
      <LeftMenu
        :defaultActive="defaultActive"
        :myMenuLists="myMenuLists"
        @leftMenuSelectTF="leftMenuSelect"
      />
    </el-drawer>
    <el-aside
      class="leftmenubackground"
      :width="isMenuOpen === true ? '210px' : '54px'"
      v-if="isMenuDisplay"
    >
      <LeftMenu
        :isCollapse="!isMenuOpen"
        :defaultActive="defaultActive"
        :myMenuLists="myMenuLists"
        @leftMenuSelectTF="leftMenuSelect"
      />
    </el-aside>
    <el-container>
      <!-- <el-header height="85px"> -->
      <el-header height="50px">
        <AdminHeader
          :isCollapse="isMenuOpen"
          :userInfo="userInfoSimple"
          @changeCollapse="changeCollapse"
        ></AdminHeader>
        <!-- <NavTabs
          :editableTabs="editableTabs"
          @clicktabs="clicktabsFn"
          @closetab="closetabFn"
        ></NavTabs> -->
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
// import NavTabs from "@/views/layout/NavTabs/NavTabs.vue";
// import AllFormTest from "@/components/Form/ALLFormTest/ALLFormTest.vue";
// import TableTest from "@/components/Table/TableTest/TableTest.vue";
import { routeArrayGetIndex, routeArrayGetRoutePath } from "@/utils/routetool";
import { getMenu, getUerInfoSimple } from "@/api/user/user";

export default defineComponent({
  name: "Layout",
  components: {
    LeftMenu,
    AdminHeader //,
    // NavTabs
  },
  data() {
    return {
      isMenuOpen: document.body.clientWidth > 1000,
      isMenuDisplay: document.body.clientWidth > 1000,
      screenWidth: document.body.clientWidth,
      defaultActive: "",
      myMenuLists: [],
      userInfoSimple: {
        // userName: "张悠悠",
        // circleUrl: "https://empty"
      }
      // editableTabs: [
      //   {
      //     title: "Tab 1",
      //     name: "1",
      //     content: "Tab 1 content",
      //     closable: false,
      //     route: "/Home"
      //   }
      // ]
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
    },
    // clicktabsFn(name: string) {
    //   this.$data.editableTabs.map(item => {
    //     if (item.name === name) {
    //       item.route
    //         ? this.$router.push(item.route)
    //         : this.$router.push("/layout/404");
    //       return;
    //     }
    //   });
    // },
    // closetabFn(index: number) {
    //   if (index === -1){
    //     this.$data.editableTabs.splice(0, 1, {
    //       title: "首页",
    //       name: "0",
    //       content: "Tab 9 content",
    //       closable: true
    //     });
    //   } else {
    //     this.$data.editableTabs.splice(index, 1);
    //   }
    // },
    leftMenuSelect(indexPath: Array<string>) {
      // console.log("indexPath:", indexPath);
      // 坑：这里用 indexPath.pop() 会出现 bug!
      const lastindex = indexPath[indexPath.length - 1];
      const routePath = lastindex ? lastindex : "/layout/404";
      // console.log("defaultActive", routePath);
      this.$data.defaultActive = routePath ? routePath : "";
      // console.log("this.$data.defaultActive", this.$data.defaultActive);
      this.$router.push(routeArrayGetRoutePath(lastindex));
    }
  },
  created() {
    const userName =
      window.localStorage
        .getItem("token")
        ?.split(" ")
        .pop() ?? "";
    getMenu({ name: userName }).then(res => {
      // console.log("menu", res.data.menuList);
      this.$data.myMenuLists = res.data.menuList;
    });
    getUerInfoSimple({ name: userName }).then(res => {
      // console.log("menu", res.data.userInfoSimple);
      this.$data.userInfoSimple = res.data.userInfoSimple;
    });
  },
  mounted() {
    window.addEventListener(
      "resize",
      this.listenResizeFn(this.changeMenuDisplay)
    );
    const routePath = this.$route.path;
    // console.log(routePath);
    this.$data.defaultActive = routeArrayGetIndex(routePath);
    // console.log(this.$data.defaultActive);
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
      background-color: #ffffff;
      color: #333;
      padding: 0;
    }
    .el-main {
      background-color: #f0f2f5;
      color: #333;
      height: 160px;
      padding: 0;
    }
  }
}
</style>
