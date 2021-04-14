<template>
  <TableComp :tableInfo="tableInfoValue" :tableData="tableDataValue">
    <template v-slot:tableFrom="tableRow">
      {{ tableRow.scopeRow }}
    </template>

    <template v-slot:operating="scope">
      <el-button
        size="mini"
        type="danger"
        @click="handleDelete(scope.scopeIndex, scope.scopeRow)"
      >
        删除
      </el-button>
    </template>
  </TableComp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableComp from "@/components/Table/TableComp/TableComp.vue";

export default defineComponent({
  name: "TableTest",
  components: {
    TableComp
  },
  props: ["props"],
  data() {
    return {
      tableInfoValue: {
        border: true,
        indexColumn: {
          disable: false
        },
        selectionColumn: {
          disable: false
        },
        columIntems: [
          {
            columName: "Id",
            columId: "id"
          },
          {
            columName: "分类",
            columId: "category"
          },
          {
            columName: "商品名",
            columId: "name"
          }
        ],
        slots: [
          {
            columId: "operating",
            columName: "操作"
          }
        ]
      },
      tableDataValue: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  },
  methods: {
    handleDelete(scopeIndex: number, scopeRow: object) {
      console.log(scopeIndex, scopeRow, this.$data.tableDataValue);
    }
  }
});
</script>

<style lang="scss" scoped></style>
