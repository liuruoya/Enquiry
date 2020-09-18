<template>
  <div class="loginBody">
    <div class="content">
      <div class="left">
        <h2>
          河北建投新能源
          <br />询比价平台
        </h2>
        <ul>
          <li>价格一目了然</li>
          <li>订单全程追踪</li>
          <li>网上便携操作</li>
        </ul>
      </div>
      <div class="right">
        <div class="pic">
          <img src='../../static/img/headimg.png' />
          <p>欢迎登录</p>
        </div>
        <!--右侧表单详情-->
        <el-form
          ref="loginForm"
          :model="loginForm"
          class="login-form"
          auto-complete="off"
          label-position="left"
        >
          <el-form-item prop="username" class="username">
            <el-input
              v-model="loginForm.username"
              name="username"
              type="text"
              auto-complete="off"
              placeholder="请输入用户名"
              @blur="checkUsername()"
            >
              <i slot="prefix">
                <img src='../../static/img/user.png' style="margin-top: 5px" />
              </i>
            </el-input>
          </el-form-item>
          <!--输入密码框-->
          <el-form-item prop="password" class="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              name="password"
              auto-complete="off"
              placeholder="请输入密码"
              @keyup.enter.native="handleLogin"
              @blur="checkPwd()"
            >
              <i slot="prefix">
                <img src='../../static/img/pwd.png' style="margin-top: 5px" />
              </i>
              <i slot="suffix">
                <img
                  src='../../static/img/closeeye.png'
                  style="margin-top:14px;margin-right:8px"
                />
              </i>
            </el-input>
          </el-form-item>
          <!-- 忘记密码-->
          <div>
            <div class="find_pwd" @click="forgetPwd">忘记密码?</div>
            <div class="autobox">
              <input type="checkbox" />七天自动登录
            </div>
          </div>
          <!--登录按钮-->
          <el-button
            :loading="loading"
            type="primary"
            class="btn-login"
            @click.native.prevent="submitForm('loginForm')"
          >登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
          <!--注册-->
          <div class="btnreg">
            <div class="box1">还没有账号?</div>
            <div class="box2">
              <el-link :underline="false" href="./RegisterFirstWebsit" id="login-register">立即注册</el-link>
              </div>
          </div>
        </el-form>
      </div>
    </div>

    <div>
      <div class="bottomMes">Copyright©河北建设投资集团有限责任公司版权所有 鲁ICP备88888888号</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        isValidate: false,
        validateInfo: ''
      },
      loading: false
    }
  },

  methods: {
    submitForm (loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          const _this = this
          this.$axios.post('/login', this.loginForm).then(res => {
            console.log(res.headers)
            console.log(res)
            const jwt = res.headers['authorization']
            const userInfo = res.data.data

            // 把数据共享出去
            _this.$store.commit('SET_TOKEN', jwt)
            _this.$store.commit('SET_USERINFO', userInfo)

            // 获取
            console.log(_this.$store.getters.getUser)

            _this.$router.push('/PurchaserAgentWebsit')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    forgetPwd () {},
    checkUsername () {},
    checkPwd () {}
  }
}
</script>
<!--引入此style可以修改elementui中的组件样式-->
<style rel="stylesheet/scss">
/* rel="stylesheet/scss" lang="scss" */
.el-input__inner {
  text-indent: 12px;
  tab-size: 16px;
}
</style>

<style scoped>
.btnreg {
  overflow: hidden;
  margin-top: 12px;
  font-size: 14px;
}
.box1 {
  float: left;
  color: #a4b8d3;
}
.box2 {
  float: left;
  color: #0096c3;
}
#login-register{
  color: #0096C3;
  margin-top: -6px;
}
.btn-login {
  width: 311px;
  height: 45px;
  background: #0096c3;
  border-radius: 4px;
  margin-top: 30px;
}
.find_pwd {
  text-align: left;
  tab-size: 14px;
  color: #666666;
  float: left;
}
.autobox {
  float: right;
  color: #666666;
}

/**
    登录表单页面
     */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 597px;
  background: url('../../static/img/pic_bgform.png');
}
.left {
  width: 390px;
  height: 100%;
  float: left;
  /*1111111background: url("../assets/img/login/loginleft.png");*/
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px 0px 0px 4px;
}
.left h2 {
  margin-top: 72px;
  padding-left: 51px;
  height: 50px;
  font-size: 34px;
  font-family: Microsoft YaHei;
  font-weight: normal;
  color: #ffffff;
  opacity: 1;
}
.left ul {
  padding-top: 39px;
  padding-left: 69px;
}
.left ul li {
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 20px;
  text-align: left;
  margin-top: 32px;
}
.right {
  width: 564px;
  height: 100%;
  float: right;
  /*background-color: #FFFFFF;*/
  text-align: center;
}
.right .pic {
  height: 130px;
}
.right .pic img {
  margin-top: 66px;
  width: 98px;
  height: 98px;
}
.right .pic p {
  margin-top: 10px;
  height: 26px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 26px;
  color: #7da5c9;
  opacity: 1;
}
.login-form {
  width: 311px;
  height: 45px;
  background: #ffffff;
  border-radius: 4px;
  position: relative;
  left: 0;
  right: 0;
  max-width: 100%;
  margin: 20% auto 28%;
}
.el-input__inner {
  margin-left: 12px;
}

/* 背景 */
.loginBody {
  background: url('../../static/img/bg.png') no-repeat top center;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  margin: 0px;
}
.bottomMes {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 19px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 8px;
  text-align: center;
}
</style>
