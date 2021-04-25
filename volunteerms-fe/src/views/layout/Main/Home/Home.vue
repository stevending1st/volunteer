<template>
  <div style="margin: 20px 20px 40px">
    <el-card shadow="never">
      <p style="font-size: 18px">
        {{ cardInfo.cardTime }}好呀，{{ userInfo.userName }}
      </p>
      <br />
      <p style="font-size: 14px">
        {{
          userInfo.activeTimes === 0
            ? "系统内暂时没有收录您参与志愿活动的相关记录"
            : "您已经参与了 " +
              userInfo.activeTimes +
              " 次活动，" +
              "累计服务时长 " +
              userInfo.activeLengthOfTime +
              " 小时。"
        }}
      </p>
    </el-card>
    <br />
    <el-row type="flex">
      <el-col :sm="16">
        <el-card shadow="never">
          <template #header>
            <div>近期活动列表</div>
          </template>
          <TableComp :tableInfo="tableInfoValue" :tableData="recActLists">
            <template v-slot:timeColumn="scope">
              {{ scope.scopeRow.activityST + "-" + scope.scopeRow.activityET }}
            </template>
            <template v-slot:nameColumn="scope">
              {{
                (scope.scopeRow.activityTheme
                  ? scope.scopeRow.activityTheme + "-"
                  : "") + scope.scopeRow.activitynm
              }}
            </template>
            <template v-slot:initTPColumn="scope">
              {{
                scope.scopeRow.activityTeam ||
                  scope.scopeRow.activityPublisher ||
                  "-"
              }}
            </template>
          </TableComp>
        </el-card>
      </el-col>
      <el-col :sm="8">
        <el-card shadow="never">
          <template #header>
            <div>活动分布</div>
          </template>
          <div id="distributedBox" style="width: 100%; height: 280px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableComp from "@/components/Table/TableComp/TableComp.vue";
import { getUerInfoSimple, getRecActLists } from "@/api/user/user";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  RadarChart,
  CanvasRenderer
]);

export default defineComponent({
  name: "Home",
  components: {
    TableComp
  },
  data() {
    return {
      cardInfo: {
        cardTime: ""
      },
      userInfo: {
        userName: "admin",
        activeTimes: 10,
        activeLengthOfTime: 50
      },
      tableInfoValue: {
        border: false,
        indexColumn: {
          disable: true
        },
        expandColumn: {
          disable: true
        },
        selectionColumn: {
          disable: true
        },
        columIntems: [],
        slots: [
          {
            columId: "timeColumn",
            columName: "时间"
          },
          {
            columId: "nameColumn",
            columName: "活动"
          },
          {
            columId: "initTPColumn",
            columName: "发起团队/人"
          }
        ]
      },
      recActLists: [
        {
          activitynm: "活动名",
          activityTheme: "主题一",
          activityTeam: "",
          activityPublisher: "",
          activityST: 0,
          activityET: 0
        },
        {
          activitynm: "活动名",
          activityTheme: "主题一",
          activityTeam: "",
          activityPublisher: "",
          activityST: 0,
          activityET: 0
        }
      ]
    };
  },
  created() {
    const nowHours: number = new Date().getHours();
    switch (true) {
      case nowHours >= 0 && nowHours <= 5:
        this.$data.cardInfo.cardTime = "凌晨";
        break;
      case nowHours > 5 && nowHours <= 8:
        this.$data.cardInfo.cardTime = "早上";
        break;
      case nowHours > 8 && nowHours <= 11:
        this.$data.cardInfo.cardTime = "上午";
        break;
      case nowHours > 11 && nowHours <= 13:
        this.$data.cardInfo.cardTime = "中午";
        break;
      case nowHours > 13 && nowHours <= 18:
        this.$data.cardInfo.cardTime = "下午";
        break;
      case nowHours > 18 && nowHours <= 23:
        this.$data.cardInfo.cardTime = "晚上";
        break;
    }
    const userName =
      window.localStorage
        .getItem("token")
        ?.split(" ")
        .pop() ?? "";
    getUerInfoSimple({ name: userName }).then(res => {
      // console.log("menu", res.data.userInfoSimple);
      this.$data.userInfo = res.data.userInfoSimple;
    });
    getRecActLists().then(res => {
      // console.log("getRecActLists", res.data);
      this.$data.recActLists = res.data.recActLists;
    });
  },
  methods: {},
  mounted() {
    const distributedBoxEle = document.getElementById("distributedBox");
    if (distributedBoxEle !== null) {
      const myDistributedBox = echarts.init(distributedBoxEle);
      const option = {
        tooltip: {
          show: false
        },
        radar: {
          center: ["50%", "50%"],
          radius: "54%",
          name: {
            textStyle: {
              color: "#999",
              backgroundColor: "#fff"
              // borderRadius: 0,
              // padding: [0, 0]
            }
          },
          nameGap: 5,
          indicator: [
            { name: "便民利民", max: 100 },
            { name: "扶贫帮困", max: 100 },
            { name: "卫生保健", max: 100 },
            { name: "环境维护", max: 100 },
            { name: "宣传教育", max: 100 },
            { name: "文体娱乐", max: 100 },
            { name: "心理咨询", max: 100 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [10, 28, 35, 50, 19, 88, 26, 3] //,
                // name: "预算分配（Allocated Budget）"
              }
            ]
          }
        ]
      };
      option && myDistributedBox.setOption(option);
    }
  }
});
</script>

<style scoped>
.el-tag {
  margin-right: 10px;
}
.cardActiveTitle {
  margin-bottom: 8px;
}
.activeDistributRow {
  flex-direction: column-reverse;
}
</style>
