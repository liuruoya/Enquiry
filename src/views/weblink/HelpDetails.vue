<!--帮助详情页面-->
<template>
  <PageModel :icon-src="icon_help" title-name="帮助详情">
    <el-container>
      <el-main id="help-title">
        <el-row class="title">
          {{ helpData.title }}
        </el-row>
        <el-row class="date">
          <span>发布时间：{{ helpData.date }}</span>
        </el-row>
      </el-main>
    </el-container>
    <el-container id="help-content">
      <el-main id="help-main">
        <el-row class="content">
          <p>{{helpData.content}}</p>
        </el-row>
        <el-row class="el-row-download">
          <i class="el-icon-link" style=""></i>
          <span type="primary" @click="handleDownload">
                        {{ helpData.name }}
                      </span>
        </el-row>
      </el-main>
    </el-container>
  </PageModel>
</template>

<script>
import PageModel from '../../components/PageModel'
// 测试用数据
import testdata from '../../../static/data/helpFilm'

export default {
  name: 'HelpDetails',
  components: { PageModel },
  data () {
    return {
      icon_help: '../../static/img/icon_help.png',
      helpData: {}
    }
  },
  methods: {
    handleDownload () {
      alert('下载：' + this.helpData.id + this.helpData.name)
    }
  },
  created () {
    this.helpData = testdata
    console.log(this.tableData)
  }
}
</script>

<style scoped>
  #help-title {
    text-align: center;
  }

  #help-title .title {
    margin-top: 20pt;
    height: 24px;
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #333333;
    /*line-height: 24px;*/
  }

  #help-title .date {
    margin-top: 12pt;
    height: 19px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #666666;
  }

  #help-content {
    /*margin-top: -35px;*/
  }

  #help-main{
    padding: 20px 50px;
    width: 1000px;
    /*height: 1071px;*/
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 30px;
  }

  #help-main .content p{
    margin-bottom: 25px;
    margin-top: 0px;
    text-indent:2em;
  }

  #help-main .el-icon-link{
    /*text-indent:2em;*/
    width: 16px;
    height: 18px;
    color: #0096c3;
    margin-left: 2em;
  }

  #help-main .el-row-download span{
    /*width: 138px;*/
    /*height: 19px;*/
    border: 1px solid rgba(0,0,0,0);
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #0096c3;
    line-height: 24px;
  }
</style>
