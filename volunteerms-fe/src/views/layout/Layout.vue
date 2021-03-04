<template>
  <div id="layout">
    <LeftTabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftTabs from "@/views/layout/LeftTabs/LeftTabs.vue";

export default defineComponent({
  name: "Layout",
  components: {
    LeftTabs
  }
});
</script>

<style lang="scss" scoped></style>
