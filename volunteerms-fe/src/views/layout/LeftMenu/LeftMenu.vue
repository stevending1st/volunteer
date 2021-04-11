<template>
  <el-menu
    mode="vertical"
    collapse-transition="false"
    :collapse="isCollapse"
    menu-trigger="hover"
    style="height:100%;"
  >
    <LeftSubMenu
      v-for="myMenuList in myMenuLists"
      :key="myMenuList.id"
      :menuSubList="myMenuList"
    >
    </LeftSubMenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSubMenu from "@/views/layout/LeftMenu/LeftSubMenu.vue";

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
    menuSubIcon: "el-icon-location",
    children: [
      {
        id: "3-1",
        menuSubName: "3-1菜单"
      },
      {
        id: "3-2",
        menuSubName: "3-2菜单"
      }
    ]
  },
  {
    id: "4",
    menuSubName: "导航四",
    menuSubIcon: "el-icon-location"
  }
];

MyMenu.forEach(i => {
  console.log(i.menuSubName, i.menuSubIcon, "menuSubIcon" in i);
});

export default defineComponent({
  name: "LeftMenu",
  props: ["isCollapse"],
  components: {
    LeftSubMenu
  },
  data() {
    return {
      // isCollapse: true,
      myMenuLists: MyMenu
    };
  }
});
</script>

<style>
.el-menu {
  width: 210px !important;
}
.el-menu--collapse {
  width: 54px !important;
}
li {
  background: chartreuse;
}
</style>

<style lang="scss" scoped>
.scrollbarHeight {
  max-height: 100% !important;
}
</style>
