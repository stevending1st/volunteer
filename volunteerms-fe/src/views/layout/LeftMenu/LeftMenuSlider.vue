<template>
  <el-drawer
    model-value="false"
    direction="ltr"
    size="210px"
    modal="true"
    withHeader="false"
    append-to-body="true"
    show-close="false"
    custom-class="leftDrawer"
    id="leftDrawer"
  >
    <LeftMenu />
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftMenu from "@/views/layout/LeftMenu/LeftMenu.vue";

export default defineComponent({
  name: "LeftMenuSlider",
  components: {
    LeftMenu
  },
  data() {
    return {
      isShowDrawer: true
    };
  }
});
</script>

<style>
.el-drawer__body {
  height: 100% !important;
}
</style>

<style lang="scss" scoped>
.leftDrawer {
  max-height: 100%;
}
</style>
