<template>
  <div style="margin: 20px 20px 40px">
    <TableComp :tableInfo="tableInfoValue" :tableData="activityVerifyLists">
      <template v-slot:tableFrom="tableRow">
        <el-form label-position="left">
          <el-row>
            <el-col :sm="12">
              <el-form-item label="活动编号：">
                <span>{{ tableRow.scopeRow.id }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="活动名称：">
                <span>
                  {{
                    tableRow.scopeRow.activityTheme
                      ? tableRow.scopeRow.activityTheme + "-"
                      : ""
                  }}
                  {{ tableRow.scopeRow.activitynm }}
                </span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="12">
              <el-form-item label="活动发起团队/人：">
                <span>
                  {{
                    `${tableRow.scopeRow.activityTeam}（${tableRow.scopeRow.activityPublisher}）`
                  }}
                </span>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="活动时长：">
                <span>
                  {{ tableRow.scopeRow.activityLenT + "（小时）" }}
                </span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="12">
              <el-form-item label="发布时间：">
                <span>{{ tableRow.scopeRow.activityPT }}</span>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="招募起止时间：">
                <span>
                  <!-- {{
                    Date().setTime(tableRow.scopeRow.activityRecruitST || 0)
                      .tostring() +
                      "-" +
                    Date().setTime(tableRow.scopeRow.activityRecruitET || 0)
                        .tostring()
                  }} -->
                  {{
                    tableRow.scopeRow.activityRecruitST +
                      "-" +
                      tableRow.scopeRow.activityRecruitET
                  }}
                </span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="12">
              <el-form-item label="活动起止时间：">
                <span>
                  {{
                    tableRow.scopeRow.activityST +
                      "-" +
                      tableRow.scopeRow.activityET
                  }}
                </span>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="招募人数/报名上限：">
                <span>
                  {{
                    `${tableRow.scopeRow.activityRecruitPN || "-"}/${tableRow
                      .scopeRow.activityRecruitEPN || "-"}`
                  }}
                </span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="活动内容：">
                <span>{{ tableRow.scopeRow.activityContent || "-" }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="活动要求：">
                <span>{{ tableRow.scopeRow.activityClaim || "-" }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="12">
              <el-form-item label="招募审核：">
                <span>{{ tableRow.scopeRow.activityCheck ? "是" : "否" }}</span>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="允许取消：">
                <span>{{
                  tableRow.scopeRow.activityAllowcan ? "是" : "否"
                }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="tableRow.scopeRow.activityOther">
            <el-col>
              <el-form-item label="其他：">
                <span>{{ tableRow.scopeRow.activityOther }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="tableRow.scopeRow.activityWXLink || false">
            <el-col :sm="12">
              <a :href="tableRow.scopeRow.activityWXLink">微信公众号文章链接</a>
            </el-col>
          </el-row>
        </el-form>
      </template>

      <template v-slot:activityhost="scope">
        {{ scope.scopeRow.activityTeam || scope.scopeRow.activityPublisher }}
      </template>

      <template v-slot:operating="scope">
        <el-button
          size="mini"
          type="success"
          @click="
            () => {
              console.log(scope);
            }
          "
        >
          通过
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="
            () => {
              console.log(scope);
            }
          "
        >
          淘汰
        </el-button>
      </template>
    </TableComp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableComp from "@/components/Table/TableComp/TableComp.vue";
import { getActivityVerifyLists } from "@/api/activity/activity";

export default defineComponent({
  name: "ActivityVerify",
  components: {
    TableComp
  },
  data() {
    return {
      tableInfoValue: {
        border: true,
        indexColumn: {
          disable: false
        },
        expandColumn: {
          disable: false
        },
        selectionColumn: {
          disable: false
        },
        columIntems: [
          {
            columName: "ID",
            columId: "id"
          },
          {
            columName: "活动名称",
            columId: "activitynm"
          }
        ],
        slots: [
          {
            columId: "activityhost",
            columName: "发起团队-发起人"
          },
          {
            columId: "operating",
            columName: "操作"
          }
        ]
      },
      activityVerifyLists: []
    };
  },
  created() {
    getActivityVerifyLists().then(res => {
      // console.log("myActiveLists", res.data);
      this.$data.activityVerifyLists = res.data.activityVerifyLists;
    });
  }
});
</script>
