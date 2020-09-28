<template>
<div class="container" :style="{minHeight :minHeight +'px'}">
<!--  container容器 -->
  <el-container>
<!--  头部-->
    <el-header class="header"><WebsitHeaderTwo></WebsitHeaderTwo></el-header>
<!-- 主内容-->
    <el-main class="main">
      <el-container id="elcontainer">
<!-- 内容左侧边-->
        <el-aside class="left"></el-aside>
        <el-main class="content-main">
          <el-row :gutter="20">
            <el-col :span="1" class="content-el-col">
              <div class="image">
                <div class="block">
                  <el-image src="../../../static/img/mima.png"></el-image>
                </div>
              </div>
            </el-col>
            <el-col :span="14" class="content-el-col">
              <div class="titleName" >修改密码</div>
            </el-col>
          </el-row>
          <el-row class="row-divider">
            <el-col :span="4" class="content-el-col">
                <div class="divider-first">
                <!-- <el-divider ></el-divider> -->
              </div>
            </el-col>
            <el-col :span="20" class="content-el-col">
              <div class="grid-content bg-purple-dark">
                <el-divider class="divider-two"></el-divider>
              </div>
            </el-col>
          </el-row>
          <el-row class="content-row">
            <el-col :span="12" :offset="5" class="content-el-col">
          <div class="grid-content bg-purple-dark">
            <el-form
              :model="ruleForm"
              :rules="rules"
              size="mini"
              ref="ruleForm"
              class="demo-ruleForm"
              label-width="100px">
              <el-form-item label="新密码" prop="oldpwd">
                <el-input v-model="ruleForm.oldpwd" placeholder="请输入您的强密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newpwd">
                <el-input v-model="ruleForm.newpwd" placeholder="请输入您的强密码"></el-input>
              </el-form-item>
              <el-form-item label="确定密码" prop="querypwd">
                <el-input v-model="ruleForm.querypwd" placeholder="请再次输入您的密码" auto-complete="new-password"></el-input>
              </el-form-item>
              <el-form-item class="btnNext">
                <el-button type="primary" @click="Next('ruleForm')">下一步</el-button>
              </el-form-item>
            </el-form>
          </div>
            </el-col>
          </el-row>
        </el-main>
<!-- 内容右侧边-->
        <el-aside class="right"></el-aside>
      </el-container>
    </el-main>
<!-- 尾部-->
    <el-footer class="footer"><Footer></Footer></el-footer>
  </el-container>
</div>
</template>

<script>
import Footer from '../../components/Footer'
import WebsitHeaderTwo from '../../components/WebsitHeaderTwo'

export default {
  name: 'ChangePwd',
  components: { Footer, WebsitHeaderTwo },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.querypwd !== '') {
          this.$refs.ruleForm.validateField('querypwd')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.newpwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      minHeight: 0,
      ruleForm: {
        oldpwd: '',
        newpwd: '',
        querypwd: '',
        isValidate: false,
        validateInfo: ''
      },
      rules: {
        oldpwd: [
          { required: true, message: '请输入您的强密码', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        newpwd: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        querypwd: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]

      }
    }
  },
  mounted () {
    this.minHeight = document.documentElement.clientHeight - 0
    const that = this
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight - 0
    }
  },
  methods: {
    Next (ruleForm) {
      this.$router.push('/changePwdComplete')
    }
  }
}
</script>

<style scoped>
  .container{
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
  }
  .header{
    height: 80px !important;
    width: 100%;
    text-align: center;
    background-color: #0096C3;
    color: #ffffff;
  }
  .main{
    flex: 1;
    padding: 0;
    background-color: #f7f9fc;
  }
  .footer{
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }
  .left {
    width: 535px !important;
    /* height: 600px !important; */
    background-color: #f7f9fc;
  }
  .right{
    width: 530px !important;
    /* height: 600px !important; */
    background-color: #f7f9fc;
  }
  #elcontainer{
    min-height: 100%;
    background-color: #f7f9fc;
  }
  .content-main {
    background-color: #ffffff;
    border-radius: 8px;
    height: 650px;
    margin-top: 50px;
    padding-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0, 17, 59, 0.05);
  }
  .image {
   margin-left: 15px;
  }
  .titleName{
    padding-left: 15px;
    margin-top: -2px;
    color: #0096c3;
    font-size: 18px;
    font-weight: bold;
  }
  .row-divider{
    margin-top: 10px;
  }
  .divider-first {
    width: 135px;
    min-height: 2px;
    background-color: #0096c3;
    overflow: hidden;
    margin-left: 5px;
  }
  .divider-two {
    height: 2px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .content-el-col {
    text-align: left;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  /*表单信息*/
  .btnNext {
    text-align: center;
    margin-top:280px ;
  }
  .btnNext .el-button{
    background-color: #0096c3;
    width: 104px;
    height: 38px;
  }
  .content-row {
    text-align: right;
    margin-top: 40px;
    color: #666666;
  }
  .content-row >>> .el-input__inner:focus{
    border-color: #0096c3;
  }
  .content-row >>> .el-input__inner{
    height: 40px;
  }
  .demo-ruleForm >>> .el-form-item__label{
    font-size: 16px;
  }
  #demo-ruleForm >>> .el-form-item__label{
    font-size: 16px;
  }
  .container .el-form-item{
    margin-bottom: 20px;
    height: 38px;
  }

</style>
