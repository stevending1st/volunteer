<template>
  <el-submenu
    v-if="'children' in menuSubList && menuSubList.children.length !== 0"
    :index="menuSubList.id"
    :key="menuSubList.id"
  >
    <template #title>
      <i
        v-if="'menuSubIcon' in menuSubList && menuSubList.menuSubIcon !== ''"
        :class="menuSubList.menuSubIcon"
      ></i>
      <span>{{ menuSubList.menuSubName }}</span>
    </template>
    <!-- 递归 -->
    <LeftSubMenu
      v-for="myMenuListChild in menuSubList.children"
      :key="myMenuListChild.id"
      :menuSubList="myMenuListChild"
    ></LeftSubMenu>
  </el-submenu>
  <el-menu-item v-else :index="menuSubList.id" :key="menuSubList.id">
    <i :class="menuSubList.menuSubIcon"></i>
    <template #title>{{ menuSubList.menuSubName }}</template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftSubMenu",
  props: ["menuSubList"],
  data() {
    return {};
  }
});
</script>

<style>
.el-menu--collapse .el-submenu__title {
  padding: 0 15px !important;
}

.el-menu--collapse > li > div {
  padding: 0 15px !important;
}

.el-scrollbar__view > .el-menu > .el-submenu > .el-submenu__title {
  padding-left: 15px !important;
}

.el-scrollbar__view > .el-menu > .el-menu-item {
  padding-left: 15px !important;
}
</style>

<style lang="scss" scoped>
.el-menu--collapse {
  width: 54px;
}
</style>
