<template>
  <FormComp
    :formInfo="formInfoValue"
    :formdata="form"
    @passingFormdataFn="UpdateFormdataFn"
  >
    <template v-slot:slot123>
      <p>Here's some contact info11111111111</p>
      <el-input v-model="form.slot01"></el-input>
    </template>
  </FormComp>
  <hr />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComp from "@/components/Form/FormComp/FormComp.vue";

export default defineComponent({
  name: "AllFormTest",
  components: {
    FormComp
  },
  data() {
    return {
      form: {
        radio01: "",
        checkbox01: [],
        input01: "",
        select01: "",
        cascader01: "",
        switch01: "",
        slider01: "",
        timePicker01: "",
        DatePicker01: "",
        DateTimePicker01: "",
        upload01: [],
        rate01: "",
        slot01: "ppp"
      },
      formInfoValue: {
        inline: true,
        position: "left",
        formItemsValue: [
          {
            tagType: "Radio",
            labelValue: "单选框",
            props: "radio01",
            disabled: false,
            model: "allfromvalue.Radio1",
            options: [
              {
                label: "选项1",
                labelName: "选项01",
                disabled: false
              },
              {
                label: "选项2",
                labelName: "选项2",
                disabled: false
              }
            ]
          },
          {
            tagType: "Checkbox",
            labelValue: "多选框",
            props: "checkbox01",
            disabled: false,
            model: "allfromvalue.Checkbox1",
            options: [
              {
                label: "多选项1",
                labelName: "多选项名1",
                disabled: false
              },
              {
                label: "多选项2",
                labelName: "多选项名2",
                disabled: false
              },
              {
                label: "多选项3",
                labelName: "多选项名3",
                disabled: false
              },
              {
                label: "多选项4",
                labelName: "多选项名4",
                disabled: true
              },
              {
                label: "多选项5",
                labelName: "多选项名4",
                disabled: true
              },
              {
                label: "多选项6",
                labelName: "多选项名6",
                disabled: true
              },
              {
                label: "多选项7",
                labelName: "多选项名7",
                disabled: true
              }
            ]
          },
          {
            tagType: "Input",
            labelValue: "输入框",
            props: "input01",
            placeholder: "请输入内容",
            disabled: false,
            showPassword: false
          },
          {
            tagType: "Select",
            labelValue: "选择器",
            props: "select01",
            placeholder: "请选择",
            clearable: true,
            options: [
              {
                value: "选择器值1",
                label: "选择器名 1"
              },
              {
                value: "选择器值2",
                label: "选择器名 2",
                disabled: true
              },
              {
                value: "选择器值3",
                label: "选择器名 3"
              },
              {
                value: "选择器值4",
                label: "选择器名 4"
              }
            ]
          },
          {
            tagType: "Cascader",
            labelValue: "级联选择器",
            props: "cascader01",
            options: [
              {
                value: "1",
                label: "联级 1",
                children: [
                  {
                    value: "1-1",
                    label: "联级 1-1",
                    children: [
                      {
                        value: "1-1-1",
                        label: "联级 1-1-1"
                      }
                    ]
                  },
                  {
                    value: "1-2",
                    label: "联级 1-2"
                  }
                ]
              },
              {
                value: "2",
                label: "联级 2"
              },
              {
                value: "3",
                label: "联级 3"
              },
              {
                value: "4",
                label: "联级 4"
              },
              {
                value: "5",
                label: "联级 5"
              },
              {
                value: "6",
                label: "联级 6"
              }
            ]
          },
          {
            tagType: "Switch",
            labelValue: "开关",
            props: "switch01",
            disabled: false,
            active: {
              color: "",
              text: "左"
            },
            inactive: {
              color: "",
              text: "右"
            }
          },
          // {
          //   tagType: "Slider",
          //   labelValue: "滑块",
          //   props: "slider01",
          //   disabled: false
          // },
          {
            tagType: "TimePicker",
            labelValue: "时间选择器",
            props: "timePicker01",
            disabled: false,
            arrowControl: true,
            disabledHours: "",
            disabledMinutes: "",
            disabledSeconds: "",
            placeholder: "任意时间点"
          },
          {
            tagType: "DatePicker",
            labelValue: "日期选择器",
            props: "DatePicker01",
            disabled: false,
            datePickerType: "date",
            placeholder: "选择日期时间"
          },
          {
            tagType: "DateTimePicker",
            labelValue: "日期时间选择器",
            props: "DateTimePicker01",
            type: "datetime",
            disabled: false,
            placeholder: "选择日期时间"
          },
          // {
          //   tagType: "Upload",
          //   labelValue: "上传",
          //   props: "upload01",
          //   disabled: false,
          //   action: "http://localhost:8080/",
          //   listType: "picture-card",
          //   limit: 2
          // },
          {
            tagType: "Rate",
            labelValue: "评分",
            props: "rate01",
            disabled: false,
            color: ["#99A9BF", "#F7BA2A", "#FF9900"],
            showText: true,
            texts: ["1", "2", "3", "4", "5"]
          },
          {
            tagType: "Slot",
            labelValue: "插槽",
            props: "slot01",
            slotName: "slot123"
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

<style lang="scss" scoped></style>
