<template>
<body id="poster">
 <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="login-container">
    <h2 class="login_title" style="padding-left:22px;" >系统登录</h2>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="loading">登 录</el-button><el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
    </el-form-item>
  </el-form>
</body>
</template>

<script>
// import Cookies from "js-cookie"
import {login} from '../api/api'
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      loginForm: {
        account: '',
        password: '',
        src: ''
      },
      fieldRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login() {
      this.loading = true
      let userInfo = {adminAccount:this.loginForm.account, adminPwd:this.loginForm.password}
      login(userInfo).then((res) => {
          if(res.data.code != 0) {
            this.$message({
              message: res.data.message,
              type: 'error'
            })
          } else {
            // Cookies.set('token', res.data.token) // 放置token到Cookie
            sessionStorage.setItem('user', userInfo.adminAccount) // 保存用户到本地会话
            this.$router.push('/')  // 登录成功，跳转到主页
          }
          this.loading = false
        }).catch((res) => {
          this.$message({
          message: res.data.message,
          type: 'error'
          })
        });
    },

    reset() {
      this.$refs.loginForm.resetFields()
    }

  }
}
</script>

<style scoped>
  #poster {
    background:url('/static/images/login.jpg') no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
    padding: 0;
  }
 
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 270px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
 
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>

