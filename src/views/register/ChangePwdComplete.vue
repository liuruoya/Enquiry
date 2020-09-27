<template>
  <div class="container" :style="{minHeight :minHeight +'px'}">
    <!--  container容器 -->
    <el-container>
      <!--  头部-->
      <el-header class="header"><WebsitHeaderTwo></WebsitHeaderTwo></el-header>
      <!-- 主内容-->
      <el-main class="main">
        <el-container>
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
            <el-row id="row1">
              <el-col :span="14" :offset="7" class="content-el-col">
                <div class="grid-content bg-purple-dark">
                  <div class="block">
                    <el-image src="../../../static/img/rc.png"></el-image>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row id="row2">
              <el-col :span="14" :offset="8" class="content-el-col">
                <div class="grid-content bg-purple-dark">
                  新密码设置成功，请使用新密码登录
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
  name: 'ChangePwdComplete',
  components: { Footer, WebsitHeaderTwo },
  data () {
    return {
      minHeight: 0
    }
  },
  mounted () {
    this.minHeight = document.documentElement.clientHeight - 0
    const that = this
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight - 0
    }
  }

}
</script>

<style scoped>
  .container{
    position: fixed;
    display: flex;
    width: 100%;
  }
  .header{
    height: 80px !important;
    width: 100%;
    text-align: center;
    background-color: #0096C3;
    color: #ffffff;
  }
  .main{
    flex: 1
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
  .content-main {
    background-color: #ffffff;
    padding-top: 30px;
    border-radius: 8px;
    height: 770px;
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
    width: 124px;
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

  #row1 {
    margin-top: 120px;
  }
  #row2 {
    margin-top: 80px;
    font-size: 16px;
    color: #666666;
    line-height: 24px;
  }
</style>
