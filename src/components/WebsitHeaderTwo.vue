<!--注册等其他页面顶部导航条-->
<template>
  <div class="w-websitHeaderTwo">
    <el-row :gutter="20">
      <el-col :span="1" :offset="4" class="header-el-col" id="websitHeaderTwo-logo-col">
        <div class="grid-content bg-purple" id="websitHeaderTwo-logo-grid">
          <div class="block">
            <el-avatar :size="40" :src="circleUrl" class="websitHeaderTwo-el-avatar"></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="4" class="header-el-col">
        <div class="grid-content bg-purple" id="websitHeaderTwo-logoname">河北建投新能源询比价平台</div>
      </el-col>
      <el-col :span="7" class="header-el-col">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1" id="websitHeaderTwo-el-menu-item-1">
              <a href="https://www.ele.me" target="_blank" id="websitHeaderTwoA-1">首页</a>
            </el-menu-item>
            <el-menu-item index="2">
              <a href="./PurchaserAgentManage" target="_blank" id="websitHeaderTwoA-2">我的询比价</a>
            </el-menu-item>
            <el-menu-item index="3">
              <a href="https://www.ele.me" target="_blank" id="websitHeaderTwoA-3">询价公告</a>
            </el-menu-item>
            <el-menu-item index="4">
              <a href="https://www.ele.me" target="_blank" id="websitHeaderTwoA-4">中标通知</a>
            </el-menu-item>
            <el-menu-item index="5">
              <a href="https://www.ele.me" target="_blank" id="websitHeaderTwoA-5">帮助中心</a>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="2" class="header-el-col">
        <div class="grid-content bg-purple" id="websitHeaderTwo-phone">客服电话：400-800-1000</div>
      </el-col>
      <el-col :span="2" class="header-el-col" v-if="headerLodingfirst">
        <div class="grid-content bg-purple" id="websitHeaderTwo-right-info">
          <el-button type="primary" round size="mini" id="websitHeaderTwo-buttion-login" @click="login()">登陆</el-button>
          <el-button type="primary" round size="mini" id="websitHeaderTwo-buttion-registered" @click="register()">注册</el-button>
        </div>
      </el-col>
      <el-col :span="2" class="header-el-col" v-if="headerLodingtwo">
        <!-- <div class="grid-content bg-purple" id="header-right-info"> -->
        <div class="block" id="websitHeaderTwo-right-info">
          <div id="websitHeaderTwo-col-purchaser-first"><el-avatar :size="30" :src="purchaserAgentUrl" id="websitHeaderTwo-el-avatar-purchaser"></el-avatar></div>
          <div id="websitHeaderTwo-col-purchaser-two">采购商</div>
          <div id="websitHeaderTwo-col-purchaser-three"><el-image :src="headerDown" @click="logout()"></el-image></div>
        </div>
        <!-- </div> -->
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
      circleUrl: '../../static/img/logo2.png',
      purchaserAgentUrl: '../../static/img/purchaserAgentHead.png',
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
.w-websitHeaderTwo {
  margin-top: 15px;
  font-family: "Microsoft YaHei";
}

.websitHeaderTwo-el-avatar {
  /* margin-top: 8px; */
  background-color: #ffffff;
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
#websitHeaderTwo-buttion-login {
  background-color: #0096c3;
  font-size: 14px;
  font-family: Microsoft YaHei;
}
#websitHeaderTwo-buttion-registered {
  background-color: transparent;
  color: #666666;
  border-color: #666666;
  font-size: 14px;
  margin-left: 5px;
  font-family: Microsoft YaHei;
}
#websitHeaderTwo-logo-col {
  text-align: right;
}
#websitHeaderTwo-logo-grid {
  height: 40px;
  line-height: 40px;
  padding-right: 5px;
}
#websitHeaderTwo-logoname {
  text-align: left;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  color: #333333;
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
  color: #333333;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
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
#websitHeaderTwoA-1 {
  width: 50px;
  /* text-align: center;
  font-size: 16px;
  font-weight: bold; */
}
#websitHeaderTwoA-2 {
  width: 80px;
  /* text-align: center;
  font-size: 16px;
  font-weight: bold; */
}
#websitHeaderTwoA-3 {
  width: 80px;
  /* text-align: center;
  font-size: 16px;
  font-weight: bold; */
}
#websitHeaderTwoA-4 {
  width: 80px;
  /* text-align: center;
  font-size: 16px;
  font-weight: bold; */
}
#websitHeaderTwoA-5 {
  width: 80px;
}
#websitHeaderTwo-el-menu-item-1 {
  margin-left: -5px;
}
#websitHeaderTwo-phone {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  text-align: left;
  margin-left: -20px;
  padding-top: 2px;
}
#websitHeaderTwo-right-info {
  margin-top: 8px;
  text-align: center;
  /* line-height: 40px; */
}
#websitHeaderTwo-col-purchaser-first{
  display: inline-block;
  vertical-align:middle;
  padding-right: 5px;
}
#websitHeaderTwo-col-purchaser-two{
  display: inline-block;
  vertical-align:middle;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
}
#websitHeaderTwo-col-purchaser-three{
  display: inline-block;
  vertical-align:middle;
}
</style>
