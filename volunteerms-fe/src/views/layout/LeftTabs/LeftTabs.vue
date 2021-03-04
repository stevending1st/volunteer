<template>
  <el-menu
    mode="vertical"
    collapse-transition="false"
    collapse="true"
    menu-trigger="hover"
    unique-opened="false"
  >
    <LeftTabSubMenu
      v-for="myMenuList in myMenuLists"
      :key="myMenuList.id"
      :menuSubList="myMenuList"
    >
    </LeftTabSubMenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftTabSubMenu from "./LeftTabSubMenu/LeftTabSubMenu.vue";

const MyMenu = [
  {
    id: "1",
    menuSubName: "导航一",
    menuSubIcon: "el-icon-location",
    children: [
      {
        id: "1-1",
        menuSubName: "等级1",
        menuSubIcon: "el-icon-location",
        children: [
          {
            id: "1-1-1",
            menuSubName: "等级1-1",
            menuSubIcon: "el-icon-location",
            children: [
              {
                id: "1-1-1-1",
                menuSubName: "等级1-1-1",
                menuSubIcon: "el-icon-location"
              },
              {
                id: "1-1-1-2",
                menuSubName: "等级1-1-2"
              }
            ]
          },
          {
            id: "1-1-2",
            menuSubName: "等级1-2"
          }
        ]
      },
      {
        id: "1-2",
        menuSubName: "等级2"
      }
    ]
  },
  {
    id: "2",
    menuSubName: "导航二",
    menuSubIcon: "el-icon-location",
    children: [
      {
        id: "2-1",
        menuSubName: "等级1"
      }
    ]
  },
  {
    id: "3",
    menuSubName: "导航三",
    menuSubIcon: "el-icon-location"
  }
];

MyMenu.forEach(i => {
  console.log(i.menuSubName, i.menuSubIcon, "menuSubIcon" in i);
});

export default defineComponent({
  name: "LeftTabs",
  components: {
    LeftTabSubMenu
  },
  data() {
    return {
      // isCollapse: true
      myMenuLists: MyMenu
    };
  }
});
</script>

<style lang="scss" scoped></style>
