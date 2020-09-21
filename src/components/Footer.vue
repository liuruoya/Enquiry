<!-- 底部友情链接  -->
<template>
  <div class="m-footer" id="f-footer">
    <el-container>
  <el-aside class="footer-aside-left" width="200px"></el-aside>
  <el-main class="footer-main">
    <el-row :gutter="20" class="footer-main-row">
      <el-col :span="2" >
        <div class="grid-content bg-purple" id="footer-friend">友情链接</div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="footer-main-row">
      <el-col :span="1" >
        <div class="grid-content bg-purple" id="footer-shortline"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="footer-main-row">
      <el-col :span="5" >
        <div class="grid-content bg-purple">
          <el-link :underline="false" href="https://jtxny.dlzb.com/" target="_blank">河北建投国融能源服务有限公司</el-link>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">河北建投小额贷款股份有限公司</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">河北翼研能源科学技术研究院</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">河北建投能源投资股份有限公司</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" id="footer-grig-five">新天绿色能源股份有限公司</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="footer-main-row">
      <el-col :span="5" >
        <div class="grid-content bg-purple">河北省天然气有限责任公司</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">河北建投城镇化建设开发有限公司</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">建投通泰投资有限公司</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">河北建投水务投资有限公司</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="footer-main-row">
      <el-col :span="24" >
        <div class="grid-content bg-purple" ><el-divider id="foot-divider"></el-divider></div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="footer-main-row">
      <el-col :span="10" :offset="8">
        <div class="grid-content bg-purple" >Copyright河北建投投资集团有限责任公司版权所有 &nbsp;&nbsp;&nbsp;鲁ICP备88888888号</div>
      </el-col>
    </el-row>
  </el-main>
  <el-aside class="footer-aside-right" width="200px"></el-aside>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}

</script>
<style scoped>
#f-footer {
  margin-top: 30px;
}
.footer-main{
  /* width: 1050px; */
  padding: 0!important;
  margin-top: 10px;
}
.footer-aside-left{
  width: 350px !important;
  height: 160px;
  background-color: #384248;
}
.footer-aside-right{
  width: 320px !important;
  height: 160px;
  background-color: #384248;
}
.footer-main-row{
  width: 1177px;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
#footer-friend {
  font-size: 16px;
  color: #ffffff;
}
#footer-shortline {
  width: 30px;
  margin-top: -3px;
  min-height:2px;
  background-color: #ffffff;
  /* margin-left: -5px; */
  overflow: hidden;
}
#foot-divider{
background-color: #9ba0a3;
margin-top: 10px;
margin-bottom: 0px;
padding: 0 auto;
}
/* #footer-adress {
  color: #9ba0a3;
  margin-top: 15px;
} */
#footer-grig-five{
  text-align: right;
}
.el-row {
  margin-bottom: 10px;
  /* padding-left: 340px; */
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  text-align: left ;
  font-size: 14px;
  padding: 0px !important;
}
.bg-purple-dark {
  background: #99a9bf;
  background: transparent;
}
.bg-purple {
  color: #9ba0a3;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
}
.row-bg {
  padding: 0px;
  background-color: #f9fafc;
}
</style>
