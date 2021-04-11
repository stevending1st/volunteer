<template>
  <el-row justify="space-between" type="flex" class="navBar">
    <div class="navBarFlexBox">
      <!-- <i v-show="isCollapse" class="el-icon-s-unfold"></i>
      <i v-show="!isCollapse" class="el-icon-s-fold"></i> -->
      <i
        :class="[
          { 'el-icon-s-unfold': isCollapse },
          { 'el-icon-s-fold': !isCollapse }
        ]"
        @click="changeCollapse"
      >
      </i>
    </div>
    <div class="navBarFlexBox">
      <el-tooltip effect="dark" content="全屏" placement="bottom-end">
        <i class="el-icon-full-screen"></i>
      </el-tooltip>
      <!-- <el-tooltip effect="dark" content="消息提示2" placement="bottom-end">
        <i class="el-icon-s-unfold"></i>
      </el-tooltip> -->
      <!-- <svg-icon data_iconName="lang" className="iconclass" /> -->
      <div style="height: 40px; width: 40px;">
        <UserAvatar
          :user-name="userName"
          :user-avatar-url="circleUrl"
        ></UserAvatar>
      </div>
    </div>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserAvatar from "@/components/UserAvatar/UserAvatar.vue";

export default defineComponent({
  name: "AdminHeader",
  components: {
    UserAvatar
  },
  props: {
    isCollapse: Boolean
  },
  data() {
    return {
      userName: "张悠悠",
      circleUrl: "https://empty"
    };
  },
  methods: {
    changeCollapse: function(): void {
      console.log("close");
      this.$emit("changeCollapse");
    }
  }
});
</script>

<style lang="scss" scoped>
.navBar {
  height: 50px;
  padding: 0 6px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 255, 0.2);
  .navBarFlexBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    i {
      font-size: 18px;
      padding: 0 6px;
    }
    i:hover {
      color: rgb(101, 143, 185);
    }
    .iconclass {
      font-size: 18px;
      padding: 0 6px;
    }
  }
}
</style>
