<template>
  <div id="pages-model">
    <ContainerMould>
      <el-container id="container">
        <el-header id="header">
          <!--内容头部-->
          <el-row :gutter="20" id="el-row-head">
            <el-col :span="1">
              <div class="block" id="head-icon-img">
                  <el-image :src="icon_src"><!--注入页面图标-->
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
              </div>
            </el-col>
            <el-col :span="16">
              <div id="head-title">
                {{title}}<!--注入页面名称-->
              </div>
            </el-col>
            <el-col :span="7" >
              <div id="head-right">
                <slot name="head-right"></slot><!--可注入输入框-->
              </div>
            </el-col>
          </el-row>
          <!--分割线-->
          <el-row id="head-divider">
            <el-col :span="3">
              <div id="head-divider-first">
                <!-- <el-divider ></el-divider> -->
              </div>
            </el-col>
            <el-col :span="21">
              <div>
                <el-divider id="head-divider-second"></el-divider>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!--内容主体-->
        <el-main id="main">
          <slot></slot><!--注入页面主体-->
        </el-main>
        <el-footer id="footer" v-if="flag">
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
    </ContainerMould>
  </div>
</template>

<script>
import ContainerMould from '@/components/ContainerMouldTest'

export default {
  name: 'PagesModel',
  components: { ContainerMould },
  data () {
    return {
      icon_src: this.iconSrc,
      title: this.titleName,
      flag: this.footer
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
    },
    footer: {
      type: Boolean,
      default: false
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
  #container {
    width: 100%;
    min-height: 100%;
  }

  #container .el-col {
    text-align: left;
    padding: 0 !important;
  }

  #header {
    padding: 10px 20px;
  }

  #el-row-head{
    margin-top: 5px;
  }

  #head-icon-img {
    padding-left: 10px;
  }

  #head-title {
    padding-left: -18px;
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #0096c3;
    line-height: 24px;
  }

  #head-right {
    margin-left: 35px;
  }

  #head-divider {
    margin-top: 10px;
  }

  #head-divider-first {
    width: 114px;
    height: 2px;
    background: #0096c3;
    overflow: hidden;
  }

  #head-divider-second {
    height: 1px;
    width: 986px;
    margin-left: -25px;
    margin-top: 0;
    margin-bottom: 0;
    /*width: 1100px;
    height: 1px;
    background: #dfe1e6;*/
  }

  #main {
    margin-top: -10px;
  }

  #footer {
    margin-top: 20px;
    text-align: center;
  }

  .el-main {
    overflow: visible;
  }
</style>
