<template>
  <div>
    <el-table :data="tableData" :border="tableInfo.border" style="width: 100%">
      <el-table-column
        type="selection"
        v-if="!tableInfo.selectionColumn.disable"
      ></el-table-column>

      <el-table-column type="expand" v-if="!tableInfo.expandColumn.disable">
        <template #default="scope">
          <slot name="tableFrom" :scopeRow="scope.row"></slot>
        </template>
      </el-table-column>

      <el-table-column
        type="index"
        v-if="!tableInfo.indexColumn.disable"
      ></el-table-column>

      <el-table-column
        v-for="columIntem in tableInfo.columIntems"
        :key="columIntem.columId"
        :label="columIntem.columName"
        :prop="columIntem.columId"
      ></el-table-column>

      <el-table-column
        v-for="slot in tableInfo.slots"
        :key="slot.columId"
        :label="slot.columName"
      >
        <template #default="scope">
          <slot
            :name="slot.columId"
            :scopeRow="scope.row"
            :scopeIndex="scope.$index"
            :scopeColumn="scope.column"
            :scopeStore="scope.store"
          ></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Table",
  props: ["tableInfo", "tableData"],
  data() {
    return {
      dialogFormVisible: false
    };
  }
});
</script>

<style lang="scss" scoped></style>
