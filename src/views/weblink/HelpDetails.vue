<!--帮助详情页面-->
<template>
  <PageModel :icon-src="icon_help" title-name="帮助详情">
    <el-container>
      <el-main id="main-title">
        <el-row class="title">
          {{ helpData.title }}
        </el-row>
        <el-row class="date">
          <span>发布时间：{{ helpData.date }}</span>
        </el-row>
      </el-main>
    </el-container>
    <el-container id="main-container">
      <el-main id="main-content">
        <el-row class="content">
          <p>{{helpData.content}}</p>
        </el-row>
        <el-row class="download">
          <el-image :src="icon_film" class="icon">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <span @click="handleDownload">
            <el-link>{{ helpData.name }}</el-link>
                      </span>
        </el-row>
      </el-main>
    </el-container>
  </PageModel>
</template>

<script>
import PageModel from '@/components/PagesModel'
// 测试用数据
import testdata from '@/../static/data/helpFilm'

export default {
  name: 'HelpDetails',
  components: { PageModel },
  data () {
    return {
      icon_help: '@/../static/img/icon_help.png',
      icon_film: '@/../static/img/icon_film.png',
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
  #main-title {
    text-align: center;
    margin-top: 10px;
  }

  #main-title .title {
    height: 24px;
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #333333;
    line-height: 24px;
  }

  #main-title .date {
    margin-top: 12pt;
    height: 19px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #666666;
  }

  #main-container {
    /*margin-top: -15px;*/
  }

  #main-content{
    padding: 20px 50px;
    width: 1000px;
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 30px;
  }

  #main-content .content p{
    margin-bottom: 25px;
    margin-top: 0px;
    text-indent:2em;
  }

  #main-content .el-icon-link{
    width: 16px;
    height: 18px;
    color: #0096c3;
    margin-left: 2em;
  }

  #main-content .download .icon {
    margin-left: 2em;
    width: 16px;
    height: 18px;
    display: inline-flex;
  }

  #main-content .download .el-link{
    border: 1px solid rgba(0,0,0,0);
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #0096c3;
    line-height: 24px;
  }
</style>
