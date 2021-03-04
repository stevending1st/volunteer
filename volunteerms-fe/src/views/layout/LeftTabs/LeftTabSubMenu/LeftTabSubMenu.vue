<template>
  <el-submenu
    v-if="'children' in menuSubList && menuSubList.children.length !== 0"
    :index="menuSubList.id"
  >
    <template #title>
      <i
        v-if="'menuSubIcon' in menuSubList && menuSubList.menuSubIcon !== ''"
        :class="menuSubList.menuSubIcon"
      ></i>
      <span>{{ menuSubList.menuSubName }}</span>
    </template>
    <LeftTabSubMenu
      v-for="myMenuListChild in menuSubList.children"
      :key="myMenuListChild.id"
      :menuSubList="myMenuListChild"
    ></LeftTabSubMenu>
  </el-submenu>
  <el-menu-item v-else :index="menuSubList.id">
    <i :class="menuSubList.menuSubIcon"></i>
    <template #title>{{ menuSubList.menuSubName }}</template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftTabSubMenu",
  props: ["menuSubList"],
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped></style>
