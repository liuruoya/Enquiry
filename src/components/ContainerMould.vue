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
  name: 'ContainerMoudle',
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
  /*整体容器组件*/
  .container{
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
  }
  /*头部*/
  .header{
    height: 80px !important;
    width: 100%;
    text-align: center;
    background-color: #0096C3;
    color: #ffffff;
  }
  /*中间部分*/
  .main{
    flex: 1;
    padding: 0;
    background-color: #f7f9fc;
  }
  /*尾部*/
  .footer{
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }
  /*main中间部分容器子容器*/
  #elcontainer{
    min-height: 100%;
    background-color: #f7f9fc;
  }

</style>
