<!--页面模具-->
<template>
  <div class="container" :style="{minHeight :minHeight +'px'}">
    <!--页面容器 -->
    <el-container>
      <!--头部-->
      <el-header class="header"><WebsitHeaderTwo></WebsitHeaderTwo></el-header>
      <!--内容-->
      <el-main class="main">
        <!--内容容器-->
        <el-container id="container-box">
          <!--内容主体-->
          <el-main id="main-box" :style="{minWidth :width +'px !important' , maxWidth :width + 'px !important'}">
            <slot></slot>
          </el-main>
        </el-container>
      </el-main>
      <!-- 尾部-->
      <el-footer class="footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import WebsitHeaderTwo from '@/components/WebsitHeaderTwo'

export default {
  name: 'ContainerMoudle',
  components: { Footer, WebsitHeaderTwo },
  data () {
    return {
      minHeight: 0,
      width: this.boxWidth
    }
  },
  props: {
    boxWidth: {
      type: Number,
      default: 1180
    }
  },
  mounted () {
    this.minHeight = document.documentElement.clientHeight - 0
    const that = this
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight - 0
    }
  }
}
</script>

<style scoped>
  /*整体容器组件*/
  .container {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
  }

  /*头部*/
  .header {
    height: 80px !important;
    width: 100%;
    text-align: center;
    background-color: #0096C3;
    color: #ffffff;
  }

  /*中间部分*/
  .main {
    flex: 1;
    padding: 0;
    background-color: #f7f9fc;
  }

  /*尾部*/
  .footer {
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }

  /*页面内容主体容器*/
  #container-box {
    background-color: #f7f9fc;
    text-align: center;
    min-height: 100%;
  }

  /*内容主体*/
  #main-box {
    margin: 30px auto;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 17, 59, 0.05);
  }
</style>
