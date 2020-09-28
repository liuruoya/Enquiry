<!--询价单详情-->
<template>
  <PageModel :icon-src="icon_help" title-name="询价详情">
    <el-container id="inquiry-container">
      <el-main id="inquiry-head">
        <el-row class="title">
          【{{ filmData.id }}】{{ filmData.name }}
        </el-row>
        <el-row class="date">
          <span>发布时间：{{ filmData.star }}</span>
        </el-row>
      </el-main>
      <el-main id="inquiry-main">
        <el-row id="inquiry-data">
          <el-row>
            <el-col :span="7">交货地点：{{ filmData.place }}</el-col>
            <el-col :span="7" style="margin-left: 25px">截止时间：{{ filmData.end }}</el-col>
            <el-col :span="4" style="margin-left: -15px">联系人：{{ filmData.contacts }}</el-col>
            <el-col :span="4" style="margin-left: 25px">联系方式：{{ filmData.telephone }}</el-col>
          </el-row>
          <el-row>备注：{{ filmData.note }}</el-row>
          <el-row class="el-row-download">上传附件：
            <i class="el-icon-link" style=""></i>
            <span type="primary" @click="handleDownload">
                        {{ filmData.film }}
                      </span>
          </el-row>
        </el-row>
        <div id="table-div">
          <el-table :data="tableData" id="inquiry-table"
                    stripe width="1100px">
            <el-table-column
              type="index" label="序号" align="center" width="65"
            ></el-table-column>
            <el-table-column property="id" label="id" v-if="false"></el-table-column>
            <el-table-column property="name" label="物料名称"  width="260"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column property="type" label="规格型号"  width="185"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column property="factory" label="生产厂家"  width="240"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column property="count" label="数量"  width="100"></el-table-column>
            <el-table-column property="unit" label="单位"  width="50"></el-table-column>
            <el-table-column property="note" label="备注" align="center" width="200"
                             :show-overflow-tooltip='true'></el-table-column>
          </el-table>
        </div>
      </el-main>
      <el-footer id="inquiry-foot">
        <el-button type="primary" @click="handleShow">立即报价</el-button>
        <p>距离结束报价还剩{{ time.day }}天{{ time.hour }}时</p>
      </el-footer>
    </el-container>
  </PageModel>
</template>

<script>
import PageModel from '../../components/PageModel'
// 测试用数据
import filmData from '../../../static/data/InquiryFilm'
import tableData from '../../../static/data/InquiryTable'

export default {
  name: 'InquiryDetails',
  components: { PageModel },
  data () {
    return {
      icon_help: '../../static/img/icon_help.png',
      tableData: [],
      filmData: {},
      time: {
        'day': 0,
        'hour': 0
      }
    }
  },
  computed: {
  },
  methods: {
    handleShow () {
      alert('报价')
    },
    handleDownload () {
      alert('下载')
    }
  },
  created () {
    this.tableData = tableData.data
    this.filmData = filmData
  },
  mounted () {
    var endDate = filmData.end
    if (endDate !== '') {
      var startTime = new Date()
      var endTime = Date.parse(endDate) //将日期时间转换为毫秒值
      var days = Math.floor((endTime - startTime) / 3600000 / 24 + 1)
      var hours = Math.floor((endTime - startTime - (days - 1) * 24 * 3600000) / 3600000)
      if (days > 0) {
        this.time.day = days
        this.time.hour = hours
      }
    }
  }
}
</script>

<style rel="stylesheet/scss">
  #table-div .el-table td, .el-table th{
    padding: 12px 0;
  }
  #inquiry-container .el-main{
    padding: 0;
  }

  #table-div .el-table th>.cell{
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #333333;
  }

  /*#table-div .el-tooltip__popper{
    background: white;
    color: #000;
  }*/
</style>

<style scoped>
  #inquiry-data .el-row {
    margin-top: 20px;
  }

  #inquiry-head {
    text-align: center;
  }

  #inquiry-head .title {
    margin-top: 20px;
    /*width: 1000px;*/
    height: 24px;
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #333333;
    /*line-height: 24px;*/
  }

  #inquiry-head .date {
    margin-top: 12pt;
    height: 19px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #666666;
  }

  #inquiry-data {
    /*width: 323px;*/
    /*height: 19px;*/
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 24px;
  }

  #inquiry-data .el-row-download span {
    /*width: 138px;*/
    /*height: 19px;*/
    border: 1px solid rgba(0, 0, 0, 0);
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #0096c3;
    line-height: 24px;
  }

  #inquiry-table {
    margin-top: 20px;
  }

  #inquiry-foot {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  #inquiry-foot p {
    /*width: 168px;
    height: 19px;*/
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: center;
    color: #f57d03;
  }
</style>
