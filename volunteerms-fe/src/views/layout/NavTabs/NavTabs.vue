<template>
  <div>
    <el-tabs
      :value="editableTabsValue"
      :closable="editableTabs.closable"
      type="card"
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
    <!-- <div class="navtabs">
      <div v-for="item in editableTabs" :key="item.name" class="tapBox">
        <div class="isLockBox">
          <i v-show="!item.closable" class="el-icon-lock"></i>
          <i v-show="item.closable" class="el-icon-unlock"></i>
        </div>
        <span>{{ item.title }}</span>
        <div class="deleteTag" v-if="item.closable">×</div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavTabs",
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
          closable: false
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
          closable: true
        },
        {
          title: "Tab 3",
          name: "3",
          content: "Tab 3 content",
          closable: true
        },
        {
          title: "Tab 4",
          name: "4",
          content: "Tab 4 content",
          closable: true
        },
        {
          title: "Tab 5",
          name: "5",
          content: "Tab 5 content",
          closable: true
        },
        {
          title: "Tab 6",
          name: "6",
          content: "Tab 6 content",
          closable: false
        },
        {
          title: "Tab 7",
          name: "7",
          content: "Tab 7 content",
          closable: true
        },
        {
          title: "Tab 8",
          name: "8",
          content: "Tab 8 content",
          closable: true
        },
        {
          title: "Tab 9",
          name: "9",
          content: "Tab 9 content",
          closable: true
        },
        {
          title: "Tab 10",
          name: "10",
          content: "Tab 10 content",
          closable: true
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.tapBox {
  border: 1px solid #aaa;
  padding: 3px 5px;
  margin: 2px 2px;
  .isLockBox {
    display: inline-block;
    &:hover {
      background: #ff0000;
    }
    .el-icon-lock {
      color: #ff0000;
    }
  }
  .deleteTag {
    display: inline-block;
    border-radius: 7px;
    border: 0;
    margin-left: 10px;
    padding: 0px;
    width: 14px;
    height: 14px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #aaa;
    background: rgb(180, 79, 79);
  }
  .deleteTag:hover {
    color: white;
    background: rgb(180, 79, 79);
  }
}
</style>
