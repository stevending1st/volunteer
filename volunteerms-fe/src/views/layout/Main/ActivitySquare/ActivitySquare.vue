<template>
  <div style="margin: 20px 20px 40px">
    <el-card
      shadow="never"
      v-for="activeItem in activeLists"
      :key="activeItem.id"
    >
      <h4 class="cardActiveTitleh4">
        <a href="#" style="" class="cardActiveTitleA">
          {{ activeItem.id }} - {{ activeItem.name }}
        </a>
      </h4>
      <p style="font-size: 14px; color: #aaaaaa; margin-bottom: 8px">
        活动时间：{{ activeItem.activeStartTime }}
      </p>
      <el-tag
        v-for="tag in activeItem.tags"
        :key="tag.content"
        :type="tag.type"
        size="small"
      >
        {{ tag.content }}
      </el-tag>
      <p style="margin: 8px 0;">{{ activeItem.introduction }}</p>
      <p style="font-size: 14px; color: #aaaaaa;">
        <i class="el-icon-location"></i>
        {{ activeItem.activeAddress }}
      </p>
      <p style="font-size: 14px; margin:8px 0;">
        {{ activeItem.status }}
        <el-divider direction="vertical"></el-divider>
        {{
          "计划招募 " +
            activeItem.activePlanPersonNum +
            " 人，已招募 " +
            activeItem.activeActualPersonNum +
            " 人"
        }}
      </p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getActiveLists } from "@/api/activity/activity";

export default defineComponent({
  name: "ActivitySquare",
  data() {
    return {
      activeLists: []
    };
  },
  components: {},
  created() {
    getActiveLists().then(res => {
      console.log("getActiveLists", res.data);
      this.$data.activeLists = res.data.activeLists;
    });
  }
});
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 15px;
}
.cardActiveTitleh4 {
  margin-bottom: 8px;
}
.cardActiveTitleA {
  text-decoration: none;
}
.cardActiveTitleA:hover {
  text-decoration: underline;
}
.el-tag {
  margin-right: 10px;
}
</style>
