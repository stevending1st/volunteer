<template>
  <el-avatar v-if="userAvatarUrl === ''"> {{ userName.slice(-2) }} </el-avatar>
  <el-avatar v-else :src="userAvatarUrl" fit="cover" @error="errAvatar">
    <i class="el-icon-user-solid" v-if="!isUserNameEmpty()"></i>
    <span v-else>{{ isUserNameEmpty() || "" }}</span>
  </el-avatar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserAvatar",
  props: {
    userName: String,
    userAvatarUrl: String
  },
  data() {
    return {
      // name: "",
      // avatarURL: ""
    };
  },
  mounted() {
    // this.$data.name = this.$props.userName ?? "";
    // this.$data.avatarURL = this.$props.userAvatarUrl ?? "";
  },
  methods: {
    errAvatar(): boolean {
      return true;
      // this.avatarURL = "";
      // this.name = this.name ? this.name.slice(-2) : "User";
      //console.log("Err A:", this.avatarURL); //.avatarURL = "";
    },
    isUserNameEmpty() {
      const returnVal = this.$props.userName ?? false;
      if (returnVal === false || returnVal === "") {
        return false;
      } else {
        return returnVal.slice(-2);
      }
    }
  }
});
</script>

<style scoped lang="scss"></style>
