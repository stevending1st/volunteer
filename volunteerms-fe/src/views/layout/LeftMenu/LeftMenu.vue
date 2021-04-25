<template>
  <el-scrollbar
    :native="false"
    wrapStyle="height: 100vh; background-color: #304156"
  >
    <el-menu
      mode="vertical"
      :collapse-transition="false"
      background-color="#304156"
      text-color="#bfcbd9"
      :default-active="defaultActive"
      :collapse="isCollapse"
      key="0000000"
      menu-trigger="hover"
      style="height:100%; overflow-y: auto;"
      @select="leftMenuSelect"
    >
      <LeftSubMenu
        v-for="myMenuList in myMenuLists"
        :key="myMenuList.id"
        :menuSubList="myMenuList"
      >
      </LeftSubMenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSubMenu from "@/views/layout/LeftMenu/LeftSubMenu.vue";

// [
//   {
//     id: "1",
//     menuSubName: "首页",
//     menuSubIcon: "el-icon-s-home"
//   },
//   {
//     id: "2",
//     menuSubName: "导航一",
//     menuSubIcon: "el-icon-location",
//     children: [
//       {
//         id: "2-1",
//         menuSubName: "等级1",
//         menuSubIcon: "el-icon-location",
//         children: [
//           {
//             id: "2-1-1",
//             menuSubName: "等级1-1",
//             menuSubIcon: "el-icon-location",
//             children: [
//               {
//                 id: "2-1-1-1",
//                 menuSubName: "等级1-1-1",
//                 menuSubIcon: "el-icon-location"
//               },
//               {
//                 id: "2-1-1-2",
//                 menuSubName: "等级1-1-2"
//               }
//             ]
//           },
//           {
//             id: "2-1-2",
//             menuSubName: "等级1-2"
//           }
//         ]
//       },
//       {
//         id: "2-2",
//         menuSubName: "等级2"
//       }
//     ]
//   },
//   {
//     id: "3",
//     menuSubName: "导航二",
//     menuSubIcon: "el-icon-location",
//     children: [
//       {
//         id: "3-1",
//         menuSubName: "等级1"
//       }
//     ]
//   },
//   {
//     id: "4",
//     menuSubName: "导航三",
//     menuSubIcon: "el-icon-location",
//     children: [
//       {
//         id: "4-1",
//         menuSubName: "3-1菜单"
//       },
//       {
//         id: "4-2",
//         menuSubName: "3-2菜单"
//       }
//     ]
//   },
//   {
//     id: "5",
//     menuSubName: "导航四",
//     menuSubIcon: "el-icon-location"
//   }
// ];

export default defineComponent({
  name: "LeftMenu",
  props: ["isCollapse", "defaultActive", "myMenuLists"],
  components: {
    LeftSubMenu
  },
  data() {
    return {
      // isCollapse: true,
    };
  },
  methods: {
    leftMenuSelect(index: string, indexPath: Array<string>) {
      console.log("1----index:", index, "indexPath", indexPath);
      this.$emit("leftMenuSelectTF", indexPath);
    }
  }
});
</script>

<style>
.el-menu--collapse {
  width: 54px !important;
}
.el-menu {
  border-right: 0 !important;
}
</style>

<style lang="scss" scoped>
.scrollbarHeight {
  max-height: 100% !important;
}
</style>
