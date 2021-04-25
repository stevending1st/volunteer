<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      :closable="editableTabs.closable"
      type="card"
      @tab-click="clicktabsToFather"
      @tab-remove="closetabToFather"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="item.closable"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavTabs",
  props: ["editableTabs"],
  data() {
    return {
      editableTabsValue: "2"
    };
  },
  methods: {
    clicktabsToFather(Tab: any) {
      console.log("Tab:", Tab.props.name);
      this.$data.editableTabsValue = Tab.props.name;
      this.$emit("clicktabs", Tab.props.name);
    },
    closetabToFather(name: string){
      if (this.$props.editableTabs.length === 1){
        this.$emit("closetab", 1);
      } else {
        this.$props.editableTabs.map((item: any, index: number) => {
          if (item.name === name) {
            console.log(index, this.$props.editableTabs.length);
            if (this.$props.editableTabs.length === 1) {
              this.$emit("closetab", -1);
              return;
            } else if (index === this.$props.editableTabs.length - 1) {
              this.$data.editableTabsValue = this.$props.editableTabs[
                index - 1
              ].name;
              this.$emit("closetab", index);
              return;
            } else {
              this.$data.editableTabsValue = this.$props.editableTabs[
                index + 1
              ].name;
              this.$emit("closetab", index);
              return;
            }
          }
        });
      }
    }
  }
});
</script>

<style lang="scss" scoped></style>
