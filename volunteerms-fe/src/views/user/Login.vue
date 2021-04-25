<!--登录模块-->

<template>
  <div class="bgcolor login">
    <el-row type="flex" justify="space-around">
      <el-col>
        <h3>志愿者服务管理系统</h3>
        <h3>登录</h3>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="8" :md="9" :lg="8" :xl="5">
        <el-card shadow="always" class="card-box">
          <template #header>
            <div class="card-header">
              <span>站外通知</span>
            </div>
          </template>
          管理员账号：<br />账号：admin<br />密码：admin
          <hr />
          用户账号：<br />账号：user<br />密码：user
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="9" :lg="8" :xl="5">
        <el-card shadow="always" class="card-box">
          <el-form v-model="login">
            <el-form-item label="账号">
              <el-input
                placeholder="请输入学号&nbsp;/&nbsp;志愿者编号"
                v-model="login.name"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                placeholder="请输入登录密码"
                v-model="login.password"
                show-password
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginfFn()">登录</el-button>
              <div class="login-otherlink">
                <router-link to="/register">
                  <a>立即注册，成为志愿者</a>
                </router-link>
                &nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">忘记密码</a>
              </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="login-foot">
      <el-col>
        <p>主办：XXXXXXXXXXXXXXX</p>
        <p>技术支持：XXXXXXXXXXXXXX</p>
        <p>地址：XXXXXXXXXXXXXXXXXXXXX 邮编：XXXX</p>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
// import { ref } from "Vue";
import { defineComponent } from "vue";
// import { Vue } from "vue-class-component";
import { postLogin } from "@/api/user/user";

// export default class Login extends Vue {
export default defineComponent({
  data() {
    return {
      login: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    loginfFn(): void {
      if (this.$data.login.name && this.$data.login.password)
        postLogin(this.login)
          .then(res => {
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
          })
          .catch(err => {
            console.log("err", err);
          });
    }
  }
  // mounted() {
  //   postLogin({ name: "admin", password: "admin" })
  //     .then(data => {
  //       console.log("data", data);
  //     })
  //     .catch(err => {
  //       console.log("err", err);
  //     });
  // }
});
</script>

<style lang="scss" scoped>
.login {
  background-color: #2d3a4b;
  width: 100%;
  min-width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: #fff;
    text-align: center;
    font-size: 1.75rem;
    margin: 2rem;
  }
  .card-box {
    margin: 1rem 0;
    form {
      .login-otherlink {
        display: inline;
        padding: 1rem;
        color: rgb(211, 61, 61);
        a {
          color: rgb(163, 54, 54);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .login-foot {
    background-color: #2d3a4b;
    padding: 1rem 0;
    p {
      text-align: center;
      color: #fff;
      font-size: 0.9rem;
    }
  }
}
</style>
