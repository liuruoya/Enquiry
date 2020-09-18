<template>
  <div id="home">
    <el-container>
      <el-header class="home-websitHeaderFirst"><WebsitHeaderFirst></WebsitHeaderFirst></el-header>
      <el-main class="home-main"><Content></Content></el-main>
      <el-footer class="home-footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import WebsitHeaderFirst from '../components/WebsitHeaderFirst'
import Footer from '../components/Footer'
import Content from '../components/Content'
export default {
  name: 'Home',
  components: { WebsitHeaderFirst, Footer, Content },
  data () {
    return {
    }
  },
  methods: {
    created () {
      console.log(2223)
    }
  },
  created () {
  }
}
</script>
<style scoped>
#home{
}
.home-websitHeaderFirst {
    background-image:url('../../static/img/headtop.png');
    background-repeat: no-repeat;
    color: #ffffff;
    height: 480px !important;
  }
.home-websitHeaderTwo {
  height: 80px;
  background-color: transparent;
  /* color: #ffffff; */
}
.home-footer {
    background-color: #384248;
    text-align: center;
    height: 190px !important;
  }
   .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .home-main {
    background-color: #f7f9fc;
    color: #333;
    text-align: center;
    height: 630px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
