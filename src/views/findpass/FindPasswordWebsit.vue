<!--  -->
<template>
  <div id="FindPasswordWebsit">
    <el-container>
      <el-header class="FindPasswordWebsit-websitHeaderTwo">
        <WebsitHeaderTwo></WebsitHeaderTwo>
      </el-header>
      <el-main class="FindPasswordWebsit-main">
        <el-container>
          <el-aside id="FindPasswordWebsit-aside-left"></el-aside>
          <el-main class="content-container-main">
            <el-row :gutter="20">
              <el-col :span="1"
                      class="content-el-col">
                <div class="grid-content bg-purple"
                     id="FindPasswordWebsit-content-image">
                  <div class="block">
                    <el-image :src="icon_findPaas"></el-image>
                  </div>
                </div>
              </el-col>
              <el-col :span="14"
                      class="content-el-col">
                <div class="grid-content bg-purple"
                     id="FindPasswordWebsit-search">找回密码</div>
              </el-col>
              <el-col :span="9"
                      class="content-el-col-registerImg">
                <div class="grid-content bg-purple">
                  <div class="registerImg1">
                    <div class="registerStepInfo1">填写信息</div>
                  </div>
                  <div class="registerImg2">
                    <div class="registerStepInfo2">重置密码</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4"
                      class="content-el-col">
                <div class="grid-content bg-purple-dark"
                     id="FindPasswordWebsit-divider-first"></div>
              </el-col>
              <el-col :span="20"
                      class="content-el-col">
                <div class="grid-content bg-purple-dark">
                  <el-divider id="FindPasswordWebsit-divider-two"></el-divider>
                </div>
              </el-col>
            </el-row>
            <el-row id="FindPasswordWebsit-row-first">
              <el-col :span="14"
                      :offset="4"
                      class="content-el-col">
                <el-form :model="ruleForm"
                         :rules="rules"
                         ref="ruleForm"
                         label-width="110px"
                         class="demo-ruleForm">
                  <el-form-item label="验证方式"
                                prop="standby1">
                    <el-radio-group v-model="standby1"
                                    @change="agreeChange">
                      <el-radio label="1">手机验证</el-radio>
                      <el-radio label="2">邮箱验证</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="用户名"
                                prop="userName">
                    <el-input v-model="ruleForm.userName"
                              placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号"
                                prop="telephone"
                                v-show="showPhone">
                    <el-input v-model="ruleForm.telephone"
                              placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱"
                                prop="eMail"
                                v-show="showEmail">
                    <el-input v-model="ruleForm.eMail"
                              placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码"
                                prop="verificationCode"
                                id="verificationCodeId">
                    <el-row :gutter="20">
                      <el-col :span="11">
                        <el-input v-model="ruleForm.verificationCode"
                                  placeholder="请输入验证码"></el-input>
                      </el-col>
                      <el-col :span="8"
                              :offset="3"
                              class="identify">
                        <s-identify :identifyCode="identifyCode"
                                    @click="refreshCode()"></s-identify>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item label="短信验证码"
                                prop="noteVerificationCode"
                                id="noteVerificationCodeId">
                    <el-input v-model="ruleForm.noteVerificationCode"
                              placeholder="请输入短信验证码"></el-input>
                    <el-button plain
                               @click="getVerifyCode">获取验证码</el-button>
                  </el-form-item>
                  <el-form-item id="FindPasswordWebsit-button">
                    <el-button type="primary"
                               @click="submitForm('ruleForm')">下一步</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-main>
          <el-aside id="FindPasswordWebsit-aside-right"></el-aside>
        </el-container>
      </el-main>
      <el-footer class="FindPasswordWebsit-footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import WebsitHeaderTwo from '../../components/WebsitHeaderTwo'
import Footer from '../../components/Footer'
import SIdentify from '../../components/SIdentify.vue'
export default {
  name: '',
  components: { Footer, WebsitHeaderTwo, SIdentify },
  data () {
    var validatePhone = (rule, value, callback) => {
      const regMobile = /^1[34578]\d{9}$/
      if (value === '') {
        callback(new Error('请输入手机号'))
      }
      if (!regMobile.test(value)) {
        callback(new Error('请输入合法的手机号码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      const regMobile = /^\w+@\w+(\.\w+)+$/
      if (value === '') {
        callback(new Error('请输入邮箱'))
      }
      if (!regMobile.test(value)) {
        callback(new Error('请输入合法的邮箱'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateVerificationCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      }
      if (value.toLowerCase() !== this.identifyCode.toLowerCase()) {
        callback(new Error('请输入正确验证码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
          console.log('qqq: ' + this.validatePhone)
        }
        callback()
      }
    }

    return {
      standby1: '1',
      radioTreaty: '1',
      icon_findPaas: '../../static/img/mima.png',
      register1: '../../static/img/register3.png',
      register2: '../../static/img/register4.png',
      showPhone: true,
      showEmail: false,
      identifyCode: '',
      identifyCodes: '0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ',
      ruleForm: {
        userName: '',
        telephone: '',
        eMail: '',
        verificationCode: '',
        noteVerificationCode: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 20, message: '用户名在20字以内', trigger: 'blur' }
        ],
        telephone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        eMail: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        standby1: [
          { trigger: 'change' }
        ],
        verificationCode: [
          { validator: validateVerificationCode, trigger: 'blur' }
        ],
        noteVerificationCode: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this
          this.$axios.post('/xbj-user/checkFindPass', this.loginForm).then(res => {
            console.log(res)

            _this.$router.push('/PurchaserAgentWebsit')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    refreshCode () { //
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 5)
    },
    randomNum (min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode (data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)]
      }
    },
    agreeChange1: function (val) {
      let that = this
      that.btnstatus = (val === '1')
    },
    agreeChange: function (value) {
      if (value === '1') {
        console.log('this.ruleForm.standby111: ' + value)
        this.showPhone = true
        this.showEmail = false
        this.ruleForm.userName = ''
        this.ruleForm.telephone = ''
        this.ruleForm.verificationCode = ''
        this.ruleForm.noteVerificationCode = ''
        // this.$refs.ruleForm.clearValidate()
        this.$refs.ruleForm.resetFields()
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 5)
      } else {
        console.log('this.ruleForm.standby122: ' + value)
        this.showPhone = false
        this.showEmail = true
        this.ruleForm.userName = ''
        this.ruleForm.eMail = ''
        this.ruleForm.verificationCode = ''
        this.ruleForm.noteVerificationCode = ''
        this.$refs.ruleForm.resetFields()
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 5)
      }
    },
    // 倒计时
    getAuthCode () {
      if (this.authTimeTimer) {
        clearTimeout(this.authTimeTimer)
      }
      this.authTimeTimer = setTimeout(() => {
        this.auth_time -= 1
        if (this.auth_time < 0) {
          this.sendAuthCode = true
          clearTimeout(this.authTimeTimer)
        } else {
          this.getAuthCode()
        }
      }, 1000)
    },

    getVerifyCode () {
      this.$refs.ruleForm.validateField('telephone', (phoneError) => {
        console.log(`${phoneError}***************************`)

        if (!phoneError) {
          this.auth_time = 120
          this.sendAuthCode = false
          this.$axios.post('/xbj-user/createVerificationCode', this.ruleForm).then(res => {
            console.log(res)
            this.getAuthCode()
          }, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          }).catch((err) => {
            this.sendAuthCode = true
            this.$message({
              message: err.response.message,
              type: 'error'
            })
          })
        }
      })
    },

    getVerifyCode11 () {
      var promise1 = new Promise(function (resolve, reject) {
        this.$refs['ruleForm'].validateField('userName', error => {
          if (!error) {
            resolve()
          } else {
            reject(error)
          }
        })
      })
      var promise2 = new Promise(function (resolve, reject) {
        this.$refs['ruleForm'].validateField('telephone', error => {
          if (!error) {
            resolve()
          } else {
            reject(error)
          }
        })
      })
      Promise.all([promise1, promise2]).then(
        () => {
          console.log('qq')
          this.$axios
            .post('/sms_codes/', {
              userName: this.ruleForm.userName,
              telephone: this.ruleForm.telephone
            })
            .then(res => {
              res = res.data
              if (res.code === 1) {
                this.$message.success(res.data.message)
              }
            })
        },
        err => {
          this.$message.error(err)
        }
      )
      //   let This = this
      //   let data = {
      //     telephone: This.ruleForm.telephone,
      //     userName: This.ruleForm.userName
      //   }
      //   if (data.telephone === '' || data.userName === '') {
      //     this.$refs['ruleForm'].validateField('telephone')
      //     this.$refs['ruleForm'].validateField('userName')
      //   } else {
      //     console.log('111')
      //     // this.$axios.post(regcode, data).then((res) => {
      //     // })
      //   }

      // 获取验证码
      if (this.validateValue()) {
        this.validateBtn()
        // this.$axios.defaults.withCrkkedentials = true
        // this.$axios.post('/xbj-user/createVerificationCode', this.ruleForm).then(res => {
        //   console.log(res)
        // }, {
        //   headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        //   }
        // })
      }
    },
    validateValue () {
      return true
    },
    validateBtn () {
      // 倒计时
      let time = 60
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.disabled = false
          this.btnTitle = '获取验证码'
        } else {
          this.btnTitle = time + '秒后重试'
          this.disabled = true
          time--
        }
      }, 1000)
    }
  },
  created () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 5)
  }
}

</script>
<style scoped>
.FindPasswordWebsit-websitHeaderTwo {
  height: 80px !important;
  text-align: center;
  background-color: #0096c3;
  color: #ffffff;
}
.FindPasswordWebsit-footer {
  background-color: #384248;
  text-align: center;
  height: 190px !important;
}
.FindPasswordWebsit-main {
  background-color: #f7f9fc;
  color: #333;
  text-align: center;
  height: 700px;
}
#FindPasswordWebsit-aside-left {
  width: 535px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
#FindPasswordWebsit-aside-right {
  width: 535px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
.content-container-main {
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
.content-el-col-registerImg {
  text-align: right;
  padding-right: 10px !important;
  padding-left: 0px !important;
}
#FindPasswordWebsit-content-image {
  padding-left: 10px;
}
#FindPasswordWebsit-search {
  padding-left: 15px;
  margin-top: -2px;
  color: #0096c3;
  font-size: 18px;
  font-weight: bold;
}
#FindPasswordWebsit-divider-first {
  width: 124px;
  min-height: 2px;
  background-color: #0096c3;
  overflow: hidden;
}
#FindPasswordWebsit-divider-two {
  height: 2px;
  margin-top: 0px;
  margin-bottom: 0px;
}
#FindPasswordWebsit-row-first {
  margin-top: 40px;
}
#FindPasswordWebsit-row-two {
  margin-top: 80px;
  color: #666666;
  font-size: 18px;
}

.content-container-main .registerImg1 {
  display: inline-block;
  background-image: url('../../../static/img/register3.png');
  background-repeat: no-repeat;
  width: 112px;
  height: 27px;
  color: #999999;
  font-size: 12px;
  margin-right: -15px;
  text-align: center;
  line-height: 27px;
}
.content-container-main .registerImg2 {
  display: inline-block;
  background-image: url('../../../static/img/register4.png');
  background-repeat: no-repeat;
  width: 99px;
  height: 27px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 27px;
}
.content-container-main .registerStepInfo2 {
  margin-left: 30px;
}
.content-row-divider {
  margin-top: 10px;
}
#FindPasswordWebsit-button {
  margin-top: 150px;
}
#FindPasswordWebsit-button .el-button {
  margin-left: 80px;
}
#FindPasswordWebsit-button .el-button {
  background: #c1c1c1;
  border-color: #c1c1c1;
  width: 104px;
  height: 38px;
}
#FindPasswordWebsit-row-first .el-form-item >>> .el-form-item__label {
  font-size: 16px;
  font-weight: bold;
  color: #666666;
}

#FindPasswordWebsit-row-first .el-form-item >>> .el-radio {
  font-size: 14px;
  font-weight: 400;
  color: #999999;
}

#verificationCodeId .el-row .el-col {
  padding-left: 0px !important;
  padding-right: 0px !important;
  /* text-align: top; */
}
#verificationCodeId .el-row .s-identify {
  text-align: right !important;
}
/* #verificationCodeId .get-code .s-canvas {
  display: inline-block;
  height: 40px;
}
#verificationCodeId .get-code #s-canvas {
  display: inline-block;
  height: 40px;
} */

#noteVerificationCodeId .el-input {
  display: inline-block;
  width: 180px;
  /* padding-top: -35px; */
}
#noteVerificationCodeId .el-button {
  display: inline-block;
  /* height: 40px; */
  margin-left: 20px;
}

.el-radio__input {
  display: none;
}

.show-radio {
  display: inline-block;
  width: 34px;
  height: 35px;
  background: url('../../../static/img/icon_register.png') no-repeat;
  background-position: -529px -180px;
  vertical-align: middle;
  position: relative;
}
.show-radio:before {
  content: '';
  display: none;
  width: 34px;
  height: 35px;
  background: url('../../../static/img/icon_search.png') no-repeat;
  background-position: -474px -180px;
  vertical-align: middle;
  position: absolute;
  left: 0;
  top: 0;
}
input:checked ~ show-radio:before {
  display: block;
}
</style>
