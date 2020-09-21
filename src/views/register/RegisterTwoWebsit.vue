<!--  -->
<template>
  <div id="r-registerTwoWebsit">
    <el-container><el-header class="registerTwoWebsit-websitHeaderTwo"><WebsitHeaderTwo></WebsitHeaderTwo></el-header>
      <el-main class="registerTwoWebsit-main">
        <el-container>
      <el-aside id="registerTwoWebsit-aside-left"></el-aside>
      <el-main class="registerTwoWebsit-container-main">
        <el-row :gutter="20">
          <el-col :span="1" class="content-el-col">
            <div class="grid-content bg-purple" id="registerTwotWebsit-content-image">
              <div class="block">
                <el-image :src="icon_search"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="14" class="content-el-col">
            <div class="grid-content bg-purple" id="registerTwotWebsit-search">注册</div>
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
        <el-row class="registerTwoWebsit-row-divider">
          <el-col :span="4" class="content-el-col">
            <div class="grid-content bg-purple-dark" id="registerTwotWebsit-divider-first">
              <!-- <el-divider ></el-divider> -->
            </div>
          </el-col>
          <el-col :span="20" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              <el-divider id="registerTwotWebsit-divider-two"></el-divider>
            </div>
          </el-col>
        </el-row>
        <el-row id="registerTwotWebsit-row">
          <el-col :span="17" :offset="1" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              <el-form
                :model="ruleForm"
                label-width="130px"
                ref="ruleForm"
                class="demo-ruleForm"
                id="registerTwotWebsit-form"
                size="mini"
              >
                <el-form-item label="营业执照" prop="businessLicense ">
                  <el-input v-model="ruleForm.businessLicense" placeholder="请输入您的营业执照"></el-input>
                </el-form-item>
                <el-form-item label="企业授权委托书" prop="entrustBook">
                  <el-input v-model="ruleForm.entrustBook" placeholder="请输入企业授权委托书" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item label="法人证书" prop="legalPersonCertificate">
                  <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
                </el-form-item>
                <el-form-item id="registerTwoWebsit-button">
                  <el-button type="primary" @click="registerFinish('ruleForm')">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-aside id="registerTwotWebsit-aside-right"></el-aside>
    </el-container>
        </el-main>
      <el-footer class="registerTwoWebsit-footer"><Footer></Footer></el-footer>
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
    return {
      icon_search: '../../static/img/icon_register.png',
      register1: '../../static/img/register3.png',
      register2: '../../static/img/register4.png',
      ruleForm: {
        businessLicense: '',
        entrustBook: '',
        companyname: this.$route.query.companyname,
        username: this.$route.query.username,
        password: this.$route.query.password,
        telephone: this.$route.query.telephone,
        email: this.$route.query.email
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    registerFinish (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this
          this.$axios.post('/user/save', this.ruleForm).then(res => {
            console.log(res)
            _this.$router.push('/RegisterThreeWebsit')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  },
  created () {
  }
}

</script>
<style scoped>
.registerTwoWebsit-websitHeaderTwo {
  height: 80px !important;
  text-align: center;
  background-color: transparent;
}
.registerTwoWebsit-footer {
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }
    .registerTwoWebsit-main {
    background-color: #f7f9fc;
    color: #333;
    text-align: center;
    height: 700px;
  }
#registerTwoWebsit-aside-left {
  width: 535px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
#registerTwotWebsit-aside-right {
  width: 535px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
.registerTwoWebsit-container-main {
  background-color: #ffffff;
  height: 650px;
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
  padding-left: 0px !important;
}
#registerTwotWebsit-content-image {
  padding-left: 10px;
}
#registerTwotWebsit-search {
  padding-left: 15px;
  margin-top: -2px;
  color: #0096c3;
  font-size: 18px;
  font-weight: bold;
}
#registerTwotWebsit-divider-first {
  width: 124px;
  min-height: 2px;
  background-color: #0096c3;
  overflow: hidden;
}
#registerTwotWebsit-divider-two {
  height: 2px;
  margin-top: 0px;
  margin-bottom: 0px;
}
#registerTwotWebsit-row {
  text-align: right;
  margin-top: 50px;
  color: #666666;
}
#registerTwotWebsit-row >>> .el-input__inner:focus{
border-color: #0096c3;
}
#registerTwoWebsit-button {
  margin-top: 200px;
  text-align: center;
}
#registerTwoWebsit-button .el-button{
  background-color: #0096c3;
  width: 104px;
  height: 38px;
}
#registerTwotWebsit-form .el-form-item >>> .el-form-item__label{
  font-size: 16px;
}
#registerTwotWebsit-form >>> .el-input__inner{
  height: 35px;
}
#r-registerTwotWebsit .el-form-item{
  margin-bottom: 20px;
}

.registerTwoWebsit-container-main .registerImg1{
  display: inline-block;
  background-image:url('../../../static/img/register3.png');
  background-repeat: no-repeat;
  width: 112px;
  height: 27px;
  color: #999999;
  font-size: 12px;
  margin-right: -15px;
  text-align: center;
  line-height: 27px;
}
.registerTwoWebsit-container-main .registerImg2{
  display: inline-block;
  background-image:url('../../../static/img/register4.png');
  background-repeat: no-repeat;
  width: 99px;
  height: 27px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 27px;
}
.registerTwoWebsit-container-main .registerStepInfo2{
  margin-left: 30px;
}
.registerTwoWebsit-row-divider{
  margin-top: 10px;
}

</style>
