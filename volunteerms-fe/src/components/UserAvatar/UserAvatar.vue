<template>
  <el-avatar v-if="avatarURL === ''"> {{ name }} </el-avatar>
  <el-avatar v-else :src="avatarURL" fit="cover" @error="errAvatar"></el-avatar>
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
      name: this.userName,
      avatarURL: this.userAvatarUrl
    };
  },
  methods: {
    errAvatar(): void {
      this.avatarURL = "";
      this.name = this.name ? this.name.slice(-2) : "User";
      //console.log("Err A:", this.avatarURL); //.avatarURL = "";
    }
  }
});
</script>

<style scoped lang="scss"></style>
