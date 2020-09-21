<!--首页顶部导航栏组件-->
<template>
  <div class="h-header">
    <el-row :gutter="20">
      <el-col :span="1" :offset="4" class="header-el-col" id="header-logo-col">
        <div class="grid-content bg-purple" id="header-logo-grid">
          <div class="block">
            <el-avatar :size="40" :src="circleUrl" class="header-el-avatar"></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="4" class="header-el-col">
        <div class="grid-content bg-purple" id="header-logoname">河北建投新能源询比价平台</div>
      </el-col>
      <el-col :span="7" class="header-el-col">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#ffffff"
            active-text-color="#ffffff"
          >
            <el-menu-item index="1" id="header-el-menu-item-1">
              <a href="https://www.ele.me" target="_blank" id="header-el-menu-a-1">首页</a>
            </el-menu-item>
            <el-menu-item index="2">
              <a href="./PurchaserAgentManage" target="_blank" id="header-el-menu-a-2">我的询比价</a>
            </el-menu-item>
            <el-menu-item index="3">
              <a href="https://www.ele.me" target="_blank" id="header-el-menu-a-3">询价公告</a>
            </el-menu-item>
            <el-menu-item index="4">
              <a href="./notificationOfAward" target="_blank" id="header-el-menu-a-4">中标通知</a>
            </el-menu-item>
            <el-menu-item index="5">
              <a href="https://www.ele.me" target="_blank" id="header-el-menu-a-5">帮助中心</a>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="2" class="header-el-col">
        <div class="grid-content bg-purple" id="header-phone">客服电话：400-800-1000</div>
      </el-col>
      <el-col :span="2" class="header-el-col" v-show="headerLodingfirst">
        <div class="grid-content bg-purple" id="header-right-info">
          <el-button type="primary" round size="mini" id="header-buttion-login" @click="login()">登陆</el-button>
          <el-button type="primary" round size="mini" id="header-buttion-registered" @click="register()">注册</el-button>
        </div>
      </el-col>
      <el-col :span="2" class="header-el-col" v-show="headerLodingtwo">
        <!-- <div class="grid-content bg-purple" id="header-right-info"> -->
        <div class="block" id="header-right-info1">
          <div id="header-col-purchaser-first"><el-avatar :size="30" :src="purchaserAgentUrl" id="header-el-avatar-purchaser"></el-avatar></div>
          <div id="header-col-purchaser-two"></div>
          <div id="header-col-purchaser-three">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                采购商<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="setting">设置</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu >
            </el-dropdown>
          </div>
        </div>
        <!-- </div> -->
      </el-col>
    </el-row>
    <el-row :gutter="20" id="header-welcome-row">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple" id="header-welcome">新天科创询比价平台欢迎您&nbsp;!</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" id="header-search-row">
      <el-col :span="7" :offset="9">
        <div class="grid-content bg-purple" id="header-grid-input">
          <el-form
            :inline="true"
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="name" id="header-keyword-item">
              <el-input
                id="header-input-keyword"
                v-model="ruleForm.name"
                placeholder="请输入关键字"
                style="width:420px;"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item id="header-search">
              <el-button
                type="warning"
                icon="el-icon-search"
                @click="submitForm('ruleForm')"
                id="header-button-search"
              >搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'WebsitHeaderFirst',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      // activeName: 'second',
      circleUrl: '../../static/img/logo.png',
      purchaserAgentUrl: '../../static/img/purchaserAgentHead3.png',
      headerDown: '../../static/img/icon_down.png',
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入关键字', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      },
      headerLodingtwo: false,
      headerLodingfirst: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/RegisterFirstWebsit')
    },
    handleCommand (command) {
      if (!command) {
        this.$message('click on item ' + command)
        return
      }
      switch (command) {
        case 'logout' :
          this.logout()
          break
      }
    },
    logout () {
      const _this = this
      console.log('22:' + localStorage.getItem('token'))
      _this.$axios.get('/logout', {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }).then(res => {
        _this.$store.commit('REMOVE_INFO')
        _this.$router.push('/login')
      })
    }
  },
  created () {
    if (this.$store.getters.getUser) {
      this.headerLodingfirst = false
      this.headerLodingtwo = true
    } else {
      this.headerLodingfirst = true
      this.headerLodingtwo = false
    }
  }
}

</script>
<style scoped>
.h-header {
  margin-top: 25px;
  font-family: "Microsoft YaHei";
}
.header-el-avatar {
  /* margin-top: 8px; */
  height: 40px;
  width: 40px;
}
.header-el-avatar-purchaser {
  display: inline-block;
}
.header-el-col {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
#header-buttion-login {
  background-color: #0096c3;
}
#header-buttion-registered {
  background-color: transparent;
  margin-left: 5px;
}
#header-el-avatar {
  /* height: 51px !important;
  width: 61px !important; */
}
#header-logo-col {
  text-align: right;
}
#header-logo-grid {
  height: 40px;
  line-height: 40px;
  padding-right: 5px;
}
#header-logoname {
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
}
/* 导航栏背景颜色设置 */
.el-menu-demo {
  background-color: transparent;
  border-bottom: none;
}
.el-menu-item {
  /* margin: 0 auto !important; */
  /* text-align: center; */
  font-size: 17px;
  height: 40px;
  line-height: 40px;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 27px;
  border-bottom-color: transparent !important;
  font-weight: bolder;
}
/* 选择时的背景颜色 */
.el-menu-item.is-active {
  background-color: transparent !important;
}
/* //设置鼠标悬停时el-menu-item的样式 */
.el-menu-item:hover {
  /* border-left:#33A2EF solid 6px !important; */
  background-color: transparent !important;
  color: #38b2ff !important;
  /* //less语法，实现鼠标悬停时icon变色 */
  /* i {
            color: #38B2FF;
        } */
}
/* 去掉a标签下划线 */
a {
  text-decoration: none;
  display: inline-block;
}
#header-el-menu-a-1 {
  width: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
#header-el-menu-a-2 {
  width: 80px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
#header-el-menu-a-3 {
  width: 80px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
#header-el-menu-a-4 {
  width: 80px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
#header-el-menu-a-5 {
  width: 80px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
#header-el-menu-item-1 {
  margin-left: -5px;
}
#header-phone {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  text-align: left;
  margin-left: -20px;
  padding-top: 2px;
}
#header-right-info {
  margin-top: 8px;
  text-align: center;
  /* line-height: 40px; */
}
#header-right-info1 {
  margin-top: 8px;
  text-align: center;
  /* line-height: 40px; */
}
#header-welcome {
  color: #ffffff;
  font-size: 32px;
  font-weight: lighter;
}
#header-welcome-row {
  margin-top: 140px;
}
#header-grid-input {
  margin-left: -40px;
}
#header-search-row {
  margin-top: 20px;
}
#header-keyword-item {
  margin-right: 0px;
  /* font-size: 70%; */
}
#header-input-keyword {
  /* height: 50px !important; */
  /* font-size: 70% !important; */
}
/* >>> .el-input__inner{
    height: 50px;
 } */
#header-search {
  margin-left: -5px;
}
#header-col-purchaser-first{
  display: inline-block;
  vertical-align:middle;
  padding-right: 5px;
}
#header-col-purchaser-two{
  display: inline-block;
  vertical-align:middle;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
}
#header-col-purchaser-three{
  display: inline-block;
  vertical-align:middle;
  margin-top: 5px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
