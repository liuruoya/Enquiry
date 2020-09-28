<!--中标详情(供应商)-->
<template>
  <PageModel :icon-src="icon_bidding" title-name="中标通知">
    <el-container style="height: 100%">
      <el-main id="bidding-title">
        <el-row class="title">
          【{{ biddingData.id }}】{{ biddingData.name }}——中标通知
        </el-row>
        <el-row class="date">
          <span>发布时间：{{ biddingData.date }}</span>
        </el-row>
      </el-main>
      <el-container id="bidding-content">
        <el-main id="bidding-main">
          <el-row class="el-row-content1">
            <p>致：{{ biddingData.company }}</p>
          </el-row>
          <el-row class="el-row-content2">
            <p>贵公司在参加{{ biddingData.project }}比价采购中，经综合评定后，确定由贵单位中标</p>
            <p>请中标单位在系统内确定订单，并联系采购单元进行合同签订以及相关手续办理</p>
            <p>联系电话：{{ biddingData.telephone }}</p>
          </el-row>
        </el-main>
      </el-container>
      <el-footer id="bidding-footer">
        <el-button type="primary" @click="refuse">拒绝</el-button>
        <el-button type="primary" @click="success">确定</el-button>
      </el-footer>
    </el-container>
  </PageModel>
</template>

<script>
import PageModel from '../../components/PageModel'
// 测试用数据
import testdata from '../../../static/data/biddingFilm'

export default {
  name: 'BiddingDetailsForSupplier',
  components: { PageModel },
  data () {
    return {
      icon_bidding: '../../static/img/icon_bidding.png',
      biddingData: {}
    }
  },
  methods: {
    refuse () {
      alert('拒绝')
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
  #bidding-title {
    text-align: center;
  }

  #bidding-title .title {
    /*width: 1000px;*/
    height: 24px;
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #333333;
    /*line-height: 24px;*/
  }

  #bidding-title .date {
    margin-top: 12pt;
    height: 19px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #666666;
  }

  #bidding-content {
    height: 270px;
  }
  #bidding-main {
    padding: 20px 50px;
    width: 1000px;
    /*height: 194px;*/
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 30px;
  }

  #bidding-main p {
    margin: 0;
  }

  #bidding-main .el-row-content2 {
    text-indent: 2em;
  }

  #bidding-footer {
    text-align: center;
    /*margin-top: 100px;*/
  }
</style>
