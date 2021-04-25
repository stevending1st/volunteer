<template>
  <div style="margin: 20px 20px 40px">
    <el-card shadow="never">
      <template #header>
        <div>我参与的志愿活动</div>
      </template>
      <div
        v-for="(activeItem, activeIndex) in myActiveLists"
        :key="activeItem.id"
      >
        <h4 class="cardActiveTitle">
          {{ activeItem.id }} - {{ activeItem.name }}
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
        <el-divider
          v-if="activeIndex !== myActiveLists.length - 1"
        ></el-divider>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMyActiveLists } from "@/api/user/user";

export default defineComponent({
  name: "MyActivity",
  components: {},
  data() {
    return {
      myActiveLists: [
        {
          id: 123123123,
          name: "志愿活动1",
          tags: [
            {
              content: "标签一",
              type: ""
            },
            {
              content: "标签二",
              type: "success"
            },
            {
              content: "标签三",
              type: "info"
            },
            {
              content: "标签四",
              type: "warning"
            },
            {
              content: "标签五",
              type: "danger"
            }
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          status: "报名中",
          activeStartTime: "2021年5月1日 9:00",
          activeAddress: "北京市 朝阳区 XXX街道 XXX小区",
          activePlanPersonNum: 10,
          activeActualPersonNum: 10
        },
        {
          id: 123123123,
          name: "志愿活动1",
          tags: [
            {
              content: "标签一",
              type: ""
            },
            {
              content: "标签二",
              type: "success"
            },
            {
              content: "标签三",
              type: "info"
            },
            {
              content: "标签四",
              type: "warning"
            },
            {
              content: "标签五",
              type: "danger"
            }
          ],
          introduction:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          status: "报名中",
          activeStartTime: "2021年5月1日 9:00",
          activeAddress: "北京市 朝阳区 XXX街道 XXX小区",
          activePlanPersonNum: 10,
          activeActualPersonNum: 10
        }
      ]
    };
  },
  created() {
    getMyActiveLists().then(
      (res: {
        data: {
          myActiveLists: {
            id: number;
            name: string;
            tags: { content: string; type: string }[];
            introduction: string;
            status: string;
            activeStartTime: string;
            activeAddress: string;
            activePlanPersonNum: number;
            activeActualPersonNum: number;
          }[];
        };
      }) => {
        console.log("myActiveLists", res.data);
        this.$data.myActiveLists = res.data.myActiveLists;
      }
    );
  }
});
</script>
