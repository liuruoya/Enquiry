<!--页面模型-->
<template>
  <div id="r-registerFirstWebsit" :style="{minHeight :minHeight +'px'}">
    <el-container>
      <el-header class="registerFirstWebsit-websitHeaderTwo" >
        <WebsitHeaderTwo></WebsitHeaderTwo>
      </el-header>
      <el-main class="registerFirstWebsit-main">
        <el-container style="height: 100%">
          <el-aside id="registerFirstWebsit-aside-left"></el-aside>
          <el-main class="registerFirstWebsit-container-main">
            <!--内容头部-->
            <el-row :gutter="20">
              <el-col :span="1" class="content-el-col">
                <div class="grid-content bg-purple" id="registerFirstWebsit-content-image">
                  <div class="block">
                    <el-image :src="icon_src"></el-image><!--注入页面图标-->
                  </div>
                </div>
              </el-col>
              <el-col :span="17" class="content-el-col">
                <div class="grid-content bg-purple" id="registerFirstWebsit-search">
                  {{title}}<!--注入页面名称-->
                </div>
              </el-col>
              <el-col :span="5" class="content-el-col-registerImg">
                <div class="grid-content bg-purple">
                  <slot name="head-right"></slot><!--可注入输入框-->
                </div>
              </el-col>
            </el-row>
            <!--分割线-->
            <el-row class="registerFirstWebsit-row-divider">
              <el-col :span="3" class="content-el-col">
                <div class="grid-content bg-purple-dark" id="registerFirstWebsit-divider-first">
                  <!-- <el-divider ></el-divider> -->
                </div>
              </el-col>
              <el-col :span="21" class="content-el-col">
                <div class="grid-content bg-purple-dark">
                  <el-divider id="registerFirstWebsit-divider-two"></el-divider>
                </div>
              </el-col>
            </el-row>
            <!--内容主体-->
            <el-row id="registerFirstWebsit-row">
              <el-col class="content-el-col">
                <div class="grid-content bg-purple-dark">
                  <slot></slot><!--页面主体-->
                </div>
              </el-col>
            </el-row>
          </el-main>
          <el-aside id="registerFirstWebsit-aside-right"></el-aside>
        </el-container>
      </el-main>
      <el-footer class="registerFirstWebsit-footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import WebsitHeaderTwo from './WebsitHeaderTwo'
import Footer from './Footer'

export default {
  name: 'PageModel',
  components: { Footer, WebsitHeaderTwo },
  data () {
    return {
      minHeight: 0,
      icon_src: this.iconSrc,
      title: this.titleName
    }
  },
  props: {
    iconSrc: {
      type: String,
      default: '../../static/img/icon_help.png'
    },
    titleName: {
      type: String,
      default: '请输入页面标题'
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
    min-height: 700px;
    overflow: visible;
  }

  #registerFirstWebsit-aside-left {
    width: 350px !important;
    /* height: 600px !important; */
    background-color: #f7f9fc;
  }

  #registerFirstWebsit-aside-right {
    width: 350px !important;
    /* height: 600px !important; */
    background-color: #f7f9fc;
  }

  .registerFirstWebsit-container-main {
    background-color: #ffffff;
    /*height: 650px !important;*/
    min-height: 650px !important;
    padding: 30px 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 17, 59, 0.05);
    width: 1180px !important;
  }

  .content-el-col {
    text-align: left;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .content-el-col-registerImg {
    text-align: right;
    margin-left: -10px;
    padding-right: 10px !important;
    padding-left: 0px !important;;
  }

  #registerFirstWebsit-content-image {
    padding-left: 10px;
  }

  #registerFirstWebsit-search {
    padding-left: -18px;
    margin-top: -2px;
    color: #0096c3;
    font-size: 18px;
    font-weight: bold;
  }

  #registerFirstWebsit-divider-first {
    width: 114px;
    min-height: 2px;
    background-color: #0096c3;
    overflow: hidden;
  }

  #registerFirstWebsit-divider-two {
    height: 2px;
    width: 986px;
    margin-left: -25px;
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

  #r-registerFirstWebsit .registerDeal {
    font-size: 12px;
    display: inline-block;
  }

  .registerFirstWebsit-container-main .registerStepInfo2 {
    margin-left: 30px;
  }

  .registerFirstWebsit-row-divider {
    margin-top: 10px;
  }

  .el-main{
    overflow: visible;
  }
</style>
