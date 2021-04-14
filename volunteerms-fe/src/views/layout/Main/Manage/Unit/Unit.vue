<template>
  <div>
    <el-button size="mini" type="primary" @click="handleAdd()">新增</el-button>
    <TableComp :tableInfo="tableInfoValue" :tableData="tableDataValue">
      <template v-slot:operating="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.scopeIndex, scope.scopeRow)"
        >
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.scopeIndex, scope.scopeRow)"
        >
          删除
        </el-button>
      </template>
    </TableComp>
    <el-dialog
      :title="dialog.title"
      v-model="dialog.visible"
      :before-close="handleEditOrAddCancel"
    >
      <FormComp
        :formInfo="dialog.formInfoValue"
        :formdata="dialog.formdata"
        @passingFormdataFn="UpdateFormdataFn"
      ></FormComp>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleEditOrAddCancel()">取 消</el-button>
          <el-button type="primary" @click="handleEditOrAddDefine()">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import cloneDeep from "lodash/cloneDeep";
import TableComp from "@/components/Table/TableComp/TableComp.vue";
import FormComp from "@/components/Form/FormComp/FormComp.vue";

export default defineComponent({
  name: "Unit",
  components: {
    TableComp,
    FormComp
  },
  data() {
    return {
      tableInfoValue: {
        border: true,
        selectionColumn: {
          disable: true
        },
        expandColumn: {
          disable: true
        },
        indexColumn: {
          disable: false
        },
        columIntems: [
          {
            columName: "部门/教学院标号",
            columId: "num"
          },
          {
            columName: "部门/教学院名称",
            columId: "nm"
          },
          {
            columName: "单位/学校名称",
            columId: "companyId"
          },
          {
            columName: "部门/教学院类型",
            columId: "type"
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
          id: "01",
          num: "01",
          nm: "文学院",
          companyId: "01",
          type: "1"
        },
        {
          id: "02",
          num: "02",
          nm: "理学院",
          companyId: "01",
          type: "1"
        },
        {
          id: "03",
          num: "04",
          nm: "飞机院",
          companyId: "02",
          type: "1"
        },
        {
          id: "04",
          num: "04",
          nm: "服务院",
          companyId: "02",
          type: "1"
        }
      ],
      dialog: {
        title: "",
        visible: false,
        type: "",
        formdata: {
          id: "",
          num: "",
          nm: "",
          companyId: "",
          type: ""
        },
        rownum: -1,
        formInfoValue: {
          inline: true,
          position: "left",
          formItemsValue: [
            {
              tagType: "Input",
              labelValue: "部门/教学院标号",
              props: "num",
              placeholder: "请输入部门/教学院标号",
              disabled: false,
              showPassword: false
            },
            {
              tagType: "Input",
              labelValue: "部门/教学院名称",
              props: "nm",
              placeholder: "请输入部门/教学院名称",
              disabled: false,
              showPassword: false
            },
            {
              tagType: "Select",
              labelValue: "单位/学校名称",
              props: "companyId",
              placeholder: "请选择单位/学校名称",
              clearable: true,
              disabled: false,
              options: [
                {
                  value: "01",
                  label: "吉林农业大学"
                },
                {
                  value: "02",
                  label: "吉林农业专科学校"
                }
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    // 表单组件数据更新
    UpdateFormdataFn(formdata: {
      id: string;
      num: string;
      nm: string;
      companyId: string;
      type: string;
    }) {
      this.dialog.formdata = formdata;
    },
    // 新增事件
    handleAdd() {
      this.$data.dialog.title = "单位/学校新增";
      this.$data.dialog.type = "Add";
      this.$data.dialog.formdata = {
        id: "",
        num: "",
        nm: "",
        companyId: "",
        type: ""
      };
      this.$data.dialog.visible = true;
    },
    // 编辑事件
    handleEdit(
      scopeIndex: number,
      scopeRow: {
        id: string;
        num: string;
        nm: string;
        companyId: string;
        type: string;
      }
    ) {
      this.$data.dialog.title = "单位/学校编辑";
      this.$data.dialog.type = "Edit";
      this.$data.dialog.rownum = scopeIndex;
      this.$data.dialog.formdata = cloneDeep(scopeRow);
      this.$data.dialog.visible = true;
    },
    // 取消编辑或新增
    handleEditOrAddCancel() {
      ElMessageBox.confirm("此操作将不保留已编辑的数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$data.dialog.visible = false;
        this.$data.dialog.type = "";
        this.$data.dialog.formdata = {
          id: "",
          num: "",
          nm: "",
          companyId: "",
          type: ""
        };
        this.$data.dialog.rownum = -1;
        this.$data.dialog.title = "";
      });
    },
    // 确定编辑或新增
    handleEditOrAddDefine() {
      // 请求失败信息
      let errMessage: string;
      // 编辑 api 请求
      if (this.$data.dialog.type === "Edit") {
        console.log("Edit...");
        errMessage = "编辑失败";
      } else {
        console.log("Add...");
        errMessage = "新增失败";
      }
      const res = true; // 模拟请求结果
      if (res) {
        if (this.$data.dialog.type === "Edit") {
          this.$data.tableDataValue[
            this.$data.dialog.rownum
          ] = this.$data.dialog.formdata;
        } else {
          this.$data.tableDataValue.push(this.$data.dialog.formdata);
        }
        this.$data.dialog.visible = false;
        this.$data.dialog.formdata = {
          id: "",
          num: "",
          nm: "",
          companyId: "",
          type: ""
        };
        this.$data.dialog.title = "";
      } else {
        ElMessage({
          message: errMessage,
          type: "error",
          duration: 5000,
          showClose: true
        });
      }
    },
    // 删除事件
    handleDelete(
      scopeIndex: number,
      scopeRow: {
        id: string;
        num: string;
        nm: string;
        companyId: string;
        type: string;
      }
    ) {
      ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // 删除 api 请求
        console.log(scopeRow);
        const res = true; // 模拟请求结果
        if (res) {
          this.$data.tableDataValue.splice(scopeIndex, 1);
        } else {
          ElMessage({
            message: "删除失败",
            type: "error",
            duration: 5000,
            showClose: true
          });
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped></style>
