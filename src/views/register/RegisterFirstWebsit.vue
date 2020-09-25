<!--  -->
<template>
  <div id="r-registerFirstWebsit">
        <el-container><el-header class="registerFirstWebsit-websitHeaderTwo"><WebsitHeaderTwo></WebsitHeaderTwo></el-header>
      <el-main class="registerFirstWebsit-main">
        <el-container>
      <el-aside id="registerFirstWebsit-aside-left"></el-aside>
      <el-main class="registerFirstWebsit-container-main">
        <el-row :gutter="20">
          <el-col :span="1" class="content-el-col">
            <div class="grid-content bg-purple" id="registerFirstWebsit-content-image">
              <div class="block">
                <el-image :src="icon_search"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="14" class="content-el-col">
            <div class="grid-content bg-purple" id="registerFirstWebsit-search">注册</div>
          </el-col>
          <el-col :span="9" class="content-el-col-registerImg">
            <div class="grid-content bg-purple">
              <div class="registerImg1">
                <div class="registerStepInfo1">填写信息</div>
              </div>
              <div class="registerImg2">
                <div class="registerStepInfo2">上传资质</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="registerFirstWebsit-row-divider">
          <el-col :span="4" class="content-el-col">
            <div class="grid-content bg-purple-dark" id="registerFirstWebsit-divider-first">
              <!-- <el-divider ></el-divider> -->
            </div>
          </el-col>
          <el-col :span="20" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              <el-divider id="registerFirstWebsit-divider-two"></el-divider>
            </div>
          </el-col>
        </el-row>
        <el-row id="registerFirstWebsit-row">
          <el-col :span="12" :offset="5" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              <el-form
                :model="ruleForm"
                :rules="rules"
                size="mini"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
                id="registerFirstWebsit-form"
              >
                <el-form-item label="单位名称" prop="companyname">
                  <el-input v-model="ruleForm.companyname" placeholder="请输入您的单位名称"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm.username" placeholder="请输入您的用户名" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    placeholder="请输入您的强密码"
                    auto-complete="new-password"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    placeholder="请再次输入您的密码"
                    auto-complete="new-password"
                  ></el-input>
                </el-form-item>
                <el-form-item label="注册联系人" prop="registerLinkman">
                  <el-input v-model="ruleForm.registerLinkman" placeholder="请输入您的注册联系人"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="telephone">
                  <el-input v-model="ruleForm.telephone" placeholder="请输入您的联系方式"></el-input>
                </el-form-item>
                <el-form-item  prop="email" label="邮箱">
                  <el-input v-model="ruleForm.email" placeholder="请输入电子邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="isAgreeDeal" id="registerFirstWebsit-agreeDeal">
                  <el-checkbox label="我已阅读并同意" name="type" class="agreeDeal" v-model="ruleForm.isAgreeDeal"></el-checkbox>
                  <div class="registerDeal">
                    <el-link :underline="false" href="http://www.jtgr.cc/index.html">《注册协议》</el-link>
                    </div>
                </el-form-item>
                <el-form-item id="registerFirstWebsit-button">
                  <el-button type="primary" @click="registerNext('ruleForm')">下一步</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-aside id="registerFirstWebsit-aside-right"></el-aside>
    </el-container>
        </el-main>
      <el-footer class="registerFirstWebsit-footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import WebsitHeaderTwo from '../../components/WebsitHeaderTwo'
import Footer from '../../components/Footer'
export default {
  name: '',
  components: { Footer, WebsitHeaderTwo },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {

      activeName: 'first',
      icon_search: '../../static/img/icon_register.png',
      registerDeal: '《注册协议》',
      ruleForm: {
        companyname: '',
        username: '',
        password: '',
        checkPass: '',
        registerLinkman: '',
        email: '',
        telephone: '',
        isAgreeDeal: ''
      },
      rules: {
        companyname: [
          // { required: true, message: '请输入您的单位名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入您的用户名', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        telephone: [
          // { required: true, message: '请输入您的联系方式', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          // { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    registerNext (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.companyname)
          this.$router.push({path: '/registerTwoWebsit',
            query: {
              companyname: this.ruleForm.companyname,
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              telephone: this.ruleForm.telephone,
              email: this.ruleForm.email
            }})
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>
<style scoped>
.registerFirstWebsit-websitHeaderTwo {
  height: 80px !important;
  text-align: center;
  background-color: #0096C3;
  color: #ffffff;
}
.registerFirstWebsit-footer {
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }
    .registerFirstWebsit-main {
    background-color: #f7f9fc;
    color: #333;
    text-align: center;
    height: 700px;
  }
#registerFirstWebsit-aside-left {
  width: 535px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
#registerFirstWebsit-aside-right {
  width: 530px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
.registerFirstWebsit-container-main {
  background-color: #ffffff;
  height: 650px !important;
  padding-top: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 17, 59, 0.05);
}
.content-el-col {
  text-align: left;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.content-el-col-registerImg{
  text-align: right;
  padding-right: 10px !important;
  padding-left: 0px !important;;
}
#registerFirstWebsit-content-image {
  padding-left: 10px;
}
#registerFirstWebsit-search {
  padding-left: 15px;
  margin-top: -2px;
  color: #0096c3;
  font-size: 18px;
  font-weight: bold;
}
#registerFirstWebsit-divider-first {
  width: 124px;
  min-height: 2px;
  background-color: #0096c3;
  overflow: hidden;
}
#registerFirstWebsit-divider-two {
  height: 2px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.content-container-main-div {
  height: 60px;
}
.content-container-main-div-info {
  font-size: 15px;
}
.content-container-main-div-time {
  display: inline-block;
  color: #83cce2;
  margin-top: 5px;
}
.content-container-main-div-timeinfo {
  display: inline-block;
  color: #b8b8b8;
}
.content-container-main-div-timeinfotwo {
  margin-left: 15px;
  display: inline-block;
  color: #b8b8b8;
}
.content-main-div-divider {
  margin: 8px 0;
  background: 0 0;
  border-top: 1px dashed #e8eaec;
}
.content-main-div-divider-vertical {
  height: 60px;
  background: 0 0;
  border-left: 1px dashed #e8eaec;
}
.content-main-div-vertical {
  text-align: center;
}
#registerFirstWebsit-row {
  text-align: right;
  margin-top: 40px;
  color: #666666;
}
#registerFirstWebsit-row >>> .el-input__inner:focus{
border-color: #0096c3;
}
#registerFirstWebsit-row >>> .el-input__inner{
  height: 40px;
}
#registerFirstWebsit-button {
  margin-top: 30px;
  text-align: center;
}
#registerFirstWebsit-button .el-button{
  background-color: #0096c3;
  width: 104px;
  height: 38px;
}
#r-registerFirstWebsit .registerDeal {
  font-size: 12px;
  display: inline-block;
}
#r-registerFirstWebsit .registerDeal >>> .el-link.el-link--default{
color: #4b8bf2;
}
#registerFirstWebsit-agreeDeal >>> .el-form-item__content{
  text-align: right;
}
#r-registerFirstWebsit .registerDeal >>> .el-link--inner{
  margin-top: -3px;
}
#r-registerFirstWebsit .agreeDeal {
  display: inline-block;
}
#r-registerFirstWebsit .agreeDeal .el-checkbox__label{
  /* font-size: 12px !important; */
}
#registerFirstWebsit-agreeDeal{
  height: 30px !important;
  margin-top: -10px;
}
#registerFirstWebsit-form >>> .el-form-item__label{
  font-size: 16px;
}
#registerFirstWebsit-form >>> .el-checkbox__label{
  font-size: 12px;
}
#r-registerFirstWebsit .el-form-item{
  margin-bottom: 20px;
  height: 38px;
}

.registerFirstWebsit-container-main .registerImg1{
  display: inline-block;
  background-image:url('../../../static/img/register1.png');
  background-repeat: no-repeat;
  width: 112px;
  height: 27px;
  color: #F7F9FC;
  font-size: 12px;
  margin-right: -15px;
  text-align: center;
  line-height: 27px;
}
.registerFirstWebsit-container-main .registerImg2{
  display: inline-block;
  background-image:url('../../../static/img/register2.png');
  background-repeat: no-repeat;
  width: 99px;
  height: 27px;
  color: #999999;
  font-size: 12px;
  text-align: center;
  line-height: 27px;
}
.registerFirstWebsit-container-main .registerStepInfo2{
  margin-left: 30px;
}
.registerFirstWebsit-row-divider{
  margin-top: 10px;
}
</style>
