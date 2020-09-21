<!--  -->
<template>
  <div id="r-registerThreeWebsit">
    <el-container><el-header class="registerThreeWebsit-websitHeaderTwo"><WebsitHeaderTwo></WebsitHeaderTwo></el-header>
      <el-main class="registerThreeWebsit-main">
        <el-container>
      <el-aside id="registerThreeWebsit-aside-left"></el-aside>
      <el-main class="content-container-main">
        <el-row :gutter="20">
          <el-col :span="1" class="content-el-col">
            <div class="grid-content bg-purple" id="registerThreeWebsit-content-image">
              <div class="block">
                <el-image :src="icon_search"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="14" class="content-el-col">
            <div class="grid-content bg-purple" id="registerThreeWebsit-search">注册</div>
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
        <el-row>
          <el-col :span="4" class="content-el-col">
            <div class="grid-content bg-purple-dark" id="registerThreeWebsit-divider-first">
            </div>
          </el-col>
          <el-col :span="20" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              <el-divider id="registerThreeWebsit-divider-two"></el-divider>
            </div>
          </el-col>
        </el-row>
        <el-row id="registerThreeWebsit-row-first">
          <el-col :span="14" :offset="6" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              <div class="block">
                <el-image :src="register5"></el-image>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row id="registerThreeWebsit-row-two">
          <el-col :span="8" :offset="9" class="content-el-col">
            <div class="grid-content bg-purple-dark">
              注册完成，请登录<br>资质信息审核中......
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-aside id="registerThreeWebsit-aside-right"></el-aside>
    </el-container>
        </el-main>
      <el-footer class="registerThreeWebsit-footer"><Footer></Footer></el-footer>
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
      register5: '../../static/img/register5.png'
    }
  },
  methods: {
    goLoding () {
      this.$router.push('/Login')
    }
  }
}

</script>
<style scoped>
.registerThreeWebsit-websitHeaderTwo {
  height: 80px !important;
  text-align: center;
  background-color: transparent;
}
.registerThreeWebsit-footer {
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }
    .registerThreeWebsit-main {
    background-color: #f7f9fc;
    color: #333;
    text-align: center;
    height: 700px;
  }
#registerThreeWebsit-aside-left {
  width: 535px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
#registerThreeWebsit-aside-right {
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
.content-el-col-registerImg{
  text-align: right;
  padding-right: 10px !important;
  padding-left: 0px !important;
}
#registerThreeWebsit-content-image {
  padding-left: 10px;
}
#registerThreeWebsit-search {
  padding-left: 15px;
  margin-top: -2px;
  color: #0096c3;
  font-size: 18px;
  font-weight: bold;
}
#registerThreeWebsit-divider-first {
  width: 124px;
  min-height: 2px;
  background-color: #0096c3;
  overflow: hidden;
}
#registerThreeWebsit-divider-two {
  height: 2px;
  margin-top: 0px;
  margin-bottom: 0px;
}
#registerThreeWebsit-row-first {
  margin-top: 120px;
}
#registerThreeWebsit-row-two {
  margin-top: 80px;
  color: #666666;
  font-size: 18px;
}

.content-container-main .registerImg1{
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
.content-container-main .registerImg2{
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
.content-container-main .registerStepInfo2{
  margin-left: 30px;
}
.content-row-divider{
  margin-top: 10px;
}
</style>
