<template>
  <div style="margin: 20px 20px 40px">
    <el-card shadow="never">
      <h2 style="text-align: center">创建活动</h2>
      <el-row type="flex" justify="space-around" class="frombody">
        <el-col :xs="20" :sm="14" :md="12" :lg="10">
          <FormComp
            :formInfo="formInfoValue"
            :formdata="form"
            @passingFormdataFn="UpdateFormdataFn"
          ></FormComp>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" class="frombody">
        <el-col :xs="20" :sm="14" :md="12" :lg="10" class="bottonbox">
          <el-button type="primary" icon="el-icon-upload" round>
            提交
          </el-button>
          <el-button type="success" icon="el-icon-upload2" round>
            暂存
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComp from "@/components/Form/FormComp/FormComp.vue";

export default defineComponent({
  name: "CreateActivity",
  components: {
    FormComp
  },
  data() {
    return {
      form: {
        id: "",
        activitynm: "",
        activityTheme: "",
        activityContent: "",
        activityTeam: "",
        activityPublisher: "",
        activityPT: 0,
        activityRecruitST: 0,
        activityRecruitET: 0,
        activityST: 0,
        activityET: 0,
        activityLenT: 0,
        activityCheck: true,
        activityRecruitPN: 0,
        activityRecruitEPN: 0,
        activityClaim: "",
        activityOther: "",
        activityAllowcan: false,
        activityWXLink: ""
      },
      formInfoValue: {
        inline: true,
        position: "left",
        formItemsValue: [
          {
            tagType: "Input",
            labelValue: "活动名称",
            props: "activitynm",
            placeholder: "请输入活动名称",
            disabled: false
          },
          {
            tagType: "Input",
            labelValue: "活动主题",
            props: "activityTheme",
            placeholder: "请输入活动主题",
            disabled: false
          },
          // 活动内容
          // {
          //   tagType: "Input",
          //   labelValue: "活动主题",
          //   props: "activityTheme",
          //   placeholder: "请输入活动主题",
          //   disabled: false,
          //   showPassword: false
          // },
          {
            tagType: "Select",
            labelValue: "负责团队",
            props: "activityTeam",
            placeholder: "请选择负责团队",
            clearable: true,
            options: [
              {
                value: "选择器值1",
                label: "选择器名 1"
              },
              {
                value: "选择器值2",
                label: "选择器名 2"
              }
            ]
          },
          // {
          //   tagType: "DateTimePicker",
          //   labelValue: "发布时间",
          //   props: "activityPT",
          //   type: "datetime",
          //   disabled: false,
          //   placeholder: "选择日期时间"
          // },
          {
            tagType: "Input",
            labelValue: "服务时长",
            props: "activityLenT",
            placeholder: "请输入服务时长",
            disabled: false
          },
          {
            tagType: "Switch",
            labelValue: "招募审核",
            props: "activityCheck",
            disabled: false,
            active: {
              color: "",
              text: "需要审核"
            },
            inactive: {
              color: "",
              text: "无需审核"
            }
          },
          {
            tagType: "Input",
            labelValue: "活动人数",
            props: "activityRecruitPN",
            placeholder: "请输入活动人数",
            disabled: false
          },
          {
            tagType: "Input",
            labelValue: "截至招募人数",
            props: "activityRecruitEPN",
            placeholder: "请输入截至招募人数",
            disabled: false
          },
          {
            tagType: "Switch",
            labelValue: "允许取消",
            props: "activityAllowcan",
            disabled: false,
            active: {
              color: "",
              text: "是"
            },
            inactive: {
              color: "",
              text: "否"
            }
          },
          {
            tagType: "Input",
            labelValue: "文章微信链接",
            props: "activityWXLink",
            placeholder: "请输入文章微信链接",
            disabled: false
          }
        ]
      }
    };
  },
  methods: {
    UpdateFormdataFn(formdata: any) {
      this.form = formdata;
    }
  }
});
</script>

<style lang="scss" scoped>
.frombody {
  margin: 30px 0 20px;
}
.bottonbox {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
