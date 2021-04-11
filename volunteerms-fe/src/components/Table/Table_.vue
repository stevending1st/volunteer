<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      height="250"
      row-class-name="xxxx.xxx"
    >
      <el-table-column type="index" index="indexMethod"></el-table-column>
      <el-table-column type="expand">
        <template #default="props">
          <el-form label-position="left" inline>
            <!-- 展开单项 -->
            <el-form-item label="XXX">
              <span>{{ props }}</span>
            </el-form-item>
            <!-- 展开单项 -->
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="项目名" prop="id"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="mini"
            @click="clicktext(scope.$index, scope.row)"
            type="danger"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="xxx" v-model="dialogFormVisible">
      
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
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
  }
});
</script>

<style lang="scss" scoped></style>
