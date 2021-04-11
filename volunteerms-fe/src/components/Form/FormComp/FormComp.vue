<template>
  <el-form
    :inline="formInfo.inline || false"
    :label-position="formInfo.position"
    :disabled="disabled || false"
    :size="formInfo.size"
  >
    <el-form-item
      v-for="formItem in formInfo.formItemsValue"
      :key="formItem.labelValue"
      :label="formItem.labelValue"
    >
      <!-- 单选框 Radio -->
      <el-radio-group
        v-if="formItem.tagType === 'Radio'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        @change="passingFormdata"
      >
        <el-radio
          v-for="radioItem in formItem.options"
          :key="radioItem.label"
          :label="radioItem.label"
          :disabled="radioItem.disabled"
        >
          {{ radioItem.label + "-" + formItem.props }}
        </el-radio>
      </el-radio-group>

      <!-- 多选框 Checkbox -->
      <el-checkbox-group
        v-if="formItem.tagType === 'Checkbox'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        @change="passingFormdata"
      >
        <el-checkbox
          v-for="checkboxItem in formItem.options"
          :key="checkboxItem.label"
          :label="checkboxItem.label"
          :disabled="checkboxItem.disabled"
        ></el-checkbox>
      </el-checkbox-group>

      <!-- 输入框 Input -->
      <el-input
        v-if="formItem.tagType === 'Input'"
        :disabled="formItem.disabled"
        :placeholder="formItem.placeholder"
        :show-password="formItem.showPassword"
        v-model="form[formItem.props]"
        @change="passingFormdata"
      >
      </el-input>

      <!-- 选择器 Select（单选） -->
      <el-select
        v-if="formItem.tagType === 'Select'"
        v-model="form[formItem.props]"
        :placeholder="formItem.placeholder"
        :clearable="formItem.clearable"
        @change="passingFormdata"
      >
        <el-option
          v-for="optionItem in formItem.options"
          :key="optionItem.value"
          :label="optionItem.label"
          :value="optionItem.value"
          :disabled="optionItem.disabled"
        ></el-option>
      </el-select>

      <!-- 级联选择器 Cascader（单选） -->
      <el-cascader
        v-if="formItem.tagType === 'Cascader'"
        v-model="form[formItem.props]"
        :options="formItem.options"
        @change="passingFormdata"
      ></el-cascader>

      <!-- 开关Switch -->
      <el-switch
        v-if="formItem.tagType === 'Switch'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        :active-color="formItem.active.color"
        :inactive-color="formItem.inactive.color"
        :active-text="formItem.active.text"
        :inactive-text="formItem.inactive.text"
        @change="passingFormdata"
      ></el-switch>

      <!-- 滑块Slider 未完-->
      <!-- <el-slider
        v-if="formItem.tagType === 'Slider'"
        v-model="form[formItem.props]"
        :disabled="formItem.disabled"
      ></el-slider> -->

      <!-- 时间选择器 TimePicker -->
      <el-time-picker
        v-if="formItem.tagType === 'TimePicker'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        :arrow-control="formItem.arrowControl"
        :disabled-hours="formItem.disabledHours"
        :disabled-minutes="formItem.disabledMinutes"
        :disabled-seconds="formItem.disabledSeconds"
        :placeholder="formItem.placeholder"
        @blur="passingFormdata"
      ></el-time-picker>

      <!-- 日期选择器DatePicker -->
      <el-date-picker
        v-if="formItem.tagType === 'DatePicker'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        :type="formItem.datePickerType"
        editable="true"
        clearable="true"
        :format="formItem.format || 'YYYY-MM-DD'"
        :placeholder="formItem.placeholder"
        :disabledDate="formItem.disabledDate"
        @blur="passingFormdata"
      ></el-date-picker>

      <!-- 日期时间选择器DateTimePicker -->
      <el-date-picker
        v-if="formItem.tagType === 'DateTimePicker'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        :type="formItem.type"
        editable="true"
        clearable="true"
        :placeholder="formItem.placeholder"
        @blur="passingFormdata"
      ></el-date-picker>

      <!-- 上传Upload -->
      <!-- <el-upload
        v-if="formItem.tagType === 'Upload'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        :show-file-list="true"
        :action="formItem.action"
        :list-type="formItem.listType"
        :limit="formItem.limit"
      ></el-upload> -->

      <!-- 评分Rate -->
      <el-rate
        v-if="formItem.tagType === 'Rate'"
        :disabled="formItem.disabled"
        v-model="form[formItem.props]"
        :colors="formItem.color"
        :show-text="formItem.showText"
        :texts="formItem.texts"
        @change="passingFormdata"
      ></el-rate>

      <!--Slot-->
      <slot v-if="formItem.tagType === 'Slot'" :name="formItem.slotName">
        插槽备用内容
      </slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import MyFormItem from "@/components/Form/MyFormItem/MyFormItem.vue";
export default defineComponent({
  components: {},
  props: ["formInfo", "formdata"],
  data() {
    return {
      form: this.formdata
      // forma: {
      //   radio01: ""
      // }
    };
  },
  methods: {
    inputItem() {
      console.log(this.form);
    },
    passingFormdata() {
      this.$emit("passingFormdataFn", this.form);
    }
  }
});
</script>

<style>
.el-rate {
  padding: 10px 0;
}
</style>
<style lang="scss" scoped></style>
