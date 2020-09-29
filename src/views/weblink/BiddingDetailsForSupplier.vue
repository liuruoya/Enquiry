<!--中标详情(供应商)-->
<template>
  <PageModel :icon-src="icon_bidding" title-name="中标通知" footer="true">
    <el-container>
      <el-main id="main-title">
        <el-row class="title">
          【{{ biddingData.id }}】{{ biddingData.name }}——中标通知
        </el-row>
        <el-row class="date">
          <p>发布时间：{{ biddingData.date }}</p>
        </el-row>
      </el-main>
    </el-container>
    <el-container id="main-container">
      <el-main id="main-content">
        <el-row class="content-first">
          <p>致：{{ biddingData.company }}</p>
        </el-row>
        <el-row class="content">
          <p>贵公司在参加{{ biddingData.project }}比价采购中，经综合评定后，确定由贵单位中标</p>
          <p>请中标单位在系统内确定订单，并联系采购单元进行合同签订以及相关手续办理</p>
          <p>联系电话：{{ biddingData.telephone }}</p>
          <p id="el-row-button">
            <el-button type="primary" plain @click="getDetails">
              查看中标明细
            </el-button>
          </p>
        </el-row>
      </el-main>
    </el-container>
    <el-row slot="footer" id="food-button">
      <el-button type="primary" @click="success">确定</el-button>
    </el-row>
  </PageModel>
</template>

<script>
import PageModel from '@/components/PagesModel'
// 测试用数据
import testdata from '@/../static/data/biddingFilm'

export default {
  name: 'BiddingDetailsForSupplier',
  components: { PageModel },
  data () {
    return {
      icon_bidding: '@/../static/img/icon_bidding.png',
      biddingData: {}
    }
  },
  methods: {
    getDetails () {
      alert('查看明细')
    },
    success () {
      alert('确定')
    }
  },
  created () {
    this.biddingData = testdata
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
    margin-top: -20px;
  }

  #main-content {
    padding: 20px 50px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 30px;
  }

  #main-content .content p {
    text-indent: 2em;
  }

  p {
    padding: 0;
    margin: 0;
  }

  #el-row-button {
    margin-top: 10px;
  }

  #el-row-button .el-button {
    padding: 0;
    width: 120px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #0096c3;
    border-radius: 4px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: center;
    color: #0096c3;
  }

  #food-button {
    margin-top: -50px;
  }

  #food-button .el-button {
    padding: 0;
    width: 82px;
    height: 35px;
    background: #0096c3;
    border-radius: 4px;
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    letter-spacing: 3px;
  }
</style>
