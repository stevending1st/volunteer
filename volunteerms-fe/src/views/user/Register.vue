<!-- 注册页 -->

<template>
  <div class="register">
    <el-row>
      <el-col>
        <h3>注册</h3>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="18" :md="13" :lg="12" :xl="8">
        <el-card shadow="always">
          <el-form model="register" label-position="right" label-width="8rem">
            <el-form-item label="姓名">
              <el-input
                v-model="register.name"
                class="registerInput"
              ></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio v-model="register.sex" label="1">男</el-radio>
              <el-radio v-model="register.sex" label="0">女</el-radio>
            </el-form-item>
            <el-form-item label="出生年月日">
              <el-date-picker
                v-model="register.birthYMD"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="教学院/专业/班级">
              <el-cascader
                v-model="register.classId"
                :props="allClassId"
                placeholder="请选择"
                clearable
              ></el-cascader>
            </el-form-item>
            <el-form-item label="当前年级">
              <el-select v-model="register.newGrade" placeholder="请选择">
                <el-option
                  v-for="newGradeItem in newGradeList"
                  :key="newGradeItem.value"
                  :label="newGradeItem.label"
                  :value="newGradeItem.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学号">
              <el-input
                v-model="register.studentId"
                class="registerInput"
              ></el-input>
            </el-form-item>
            <el-form-item label="是否是应届生">
              <el-radio-group v-model="register.isGraduates">
                <el-radio label="0">是应届生</el-radio>
                <el-radio label="1">非应届生</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="志愿者编号">
              <el-switch
                v-model="isHavaVolunteerId"
                active-color="#13ce66"
                active-text="已有编号"
                inactive-text="申请编号"
              >
              </el-switch>
              <el-input
                v-model="volunteerId"
                :disabled="!isHavaVolunteerId"
                class="registerInput"
              ></el-input>
            </el-form-item>
            <div class="registerButton">
              <el-button type="primary">立即注册</el-button>
              <el-button @click="onToLogin">返回登录页</el-button>
            </div>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isEmptyObject } from "@/script/ObjectFunction";
import router from "@/router";

// let id = 0;
const allClassList = [
  {
    label: "班级一",
    value: 1,
    child: null,
    leaf: true
  },
  {
    label: "班级二",
    value: 2,
    child: null,
    leaf: true
  },
  {
    label: "班级三",
    value: 3,
    child: null,
    leaf: true
  }
];
const allMajorList = [
  {
    label: "专业一",
    value: 1,
    child: "allClassList",
    leaf: false
  },
  {
    label: "专业二",
    value: 2,
    child: "allClassList",
    leaf: false
  },
  {
    label: "专业三",
    value: 3,
    child: "allClassList",
    leaf: false
  },
  {
    label: "专业四",
    value: 4,
    child: "allClassList",
    leaf: false
  },
  {
    label: "专业五",
    value: 5,
    child: "allClassList",
    leaf: false
  },
  {
    label: "专业六",
    value: 6,
    child: "allClassList",
    leaf: false
  }
];
const allCollegeList = [
  {
    label: "经济学院",
    value: 1,
    child: "allMajorList",
    leaf: false
  },
  {
    label: "历史学院",
    value: 2,
    child: "allMajorList",
    leaf: false
  },
  {
    label: "文学院",
    value: 3,
    child: "allMajorList",
    leaf: false
  },
  {
    label: "医学院",
    value: 4,
    child: "allMajorList",
    leaf: false
  },
  {
    label: "农学院",
    value: 5,
    child: "allMajorList",
    leaf: false
  },
  {
    label: "工学院",
    value: 6,
    child: "allMajorList",
    leaf: false
  }
];

const api: Array<Array<string | object>> = [
  ["allCollegeList", "allMajorList", "allClassList"],
  [allCollegeList, allMajorList, allClassList]
];

export default defineComponent({
  data() {
    return {
      labelPosition: "left",
      newGradeList: [
        {
          value: "1",
          label: "大一"
        },
        {
          value: "2",
          label: "大二"
        },
        {
          value: "3",
          label: "大三"
        },
        {
          value: "4",
          label: "大四"
        }
      ],
      isHaveActivation: true, //false,
      // "left": 注册; "rigit": 激活
      // labelPosition: "right",
      isHavaVolunteerId: true,
      allClassId: {
        lazy: true,
        lazyLoad(node: any, resolve: any) {
          // const { level } = node;
          console.log("begin", node.data, node.data === {}, "end");
          setTimeout(() => {
            if (isEmptyObject(node.data)) {
              // 获取学院
              resolve(allCollegeList);
            } else {
              // 获取下一级
              console.log(node.data.child, api[0].indexOf(node.data.child));
              const nextNode: any = api[1][api[0].indexOf(node.data.child)];
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nextNode);
            }
            // resolve(allClassList);
          }, 1000);
        }
      },
      register: {
        name: "",
        sex: "",
        birthYMD: "",
        classId: [],
        volunteerId: "",
        isGraduates: "",
        newGrade: "",
        studentId: ""
      }
    };
  },
  methods: {
    onToLogin() {
      router.push("/login");
    }
  }
});
</script>

<style lang="scss" scoped>
.register {
  background-color: #2d3a4b;
  width: 100%;
  min-width: 380px;
  // height: 100%;
  padding-bottom: 2rem;
  h3 {
    color: #fff;
    text-align: center;
    font-size: 1.75rem;
    margin: 2rem;
  }
  .registerButton {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
