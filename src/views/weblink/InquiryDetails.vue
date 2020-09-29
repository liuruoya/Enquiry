<!--询价单详情-->
<template>
  <PageModel :icon-src="icon_search" title-name="询价详情">
    <el-container>
      <el-main id="main-title">
        <el-row class="title">
          【{{ filmData.id }}】{{ filmData.name }}
        </el-row>
        <el-row class="date">
          <span>发布时间：{{ filmData.star }}</span>
        </el-row>
      </el-main>
    </el-container>
    <el-container id="main-container">
      <el-main id="inquiry-main">
        <el-row id="inquiry-data">
          <el-row>
            <el-col :span="7">交货地点：{{ filmData.place }}</el-col>
            <el-col :span="7" style="margin-left: 15px">截止时间：{{ filmData.end }}</el-col>
            <el-col :span="5" style="margin-left: 0px">联系人：{{ filmData.contacts }}</el-col>
            <el-col :span="4" style="margin-left: -15px">联系方式：{{ filmData.telephone }}</el-col>
          </el-row>
          <el-row>备<span style="margin-left: 2em">注：</span>{{ filmData.note }}</el-row>
          <el-row class="el-row-download">上传附件：
            <el-image :src="icon_film" class="icon">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <span @click="handleDownload">
            <el-link>{{ filmData.film }}</el-link>
                      </span>
          </el-row>
        </el-row>
        <div id="table-div">
          <el-table :data="tableData" id="inquiry-table"
                    :header-cell-style="{background: '#F2FAFC',padding: '15px 0',height: '18px'}">
            <el-table-column
              type="index" label="序号" align="center" width="70" fixed="left"
            ></el-table-column>
            <el-table-column property="id" label="id" v-if="false"></el-table-column>
            <el-table-column property="name" label="物料名称" width="255"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column property="type" label="规格型号" width="180"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column property="factory" label="生产厂家" width="220"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column property="count" label="数量" align="center" width="105"></el-table-column>
            <el-table-column property="unit" label="单位" align="center" width="70"></el-table-column>
            <el-table-column property="note" label="备注" align="center" width="105"
                             :show-overflow-tooltip='true'></el-table-column>
            <el-table-column label="明细" width="90" fixed="right" align="center">
              <template slot-scope="scope">
                <el-link type="primary"
                         @click="handleShow(scope.$index, scope.row)">查看
                </el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
      <el-footer id="main-foot">
        <el-row id="foot-button">
          <el-button type="primary" @click="handleShow">立即报价</el-button>
          <p>距离结束报价还剩{{ time.day }}天{{ time.hour }}时</p>
        </el-row>
      </el-footer>
    </el-container>
  </PageModel>
</template>

<script>
import PageModel from '@/components/PagesModel'
// 测试用数据
import filmData from '@/../static/data/InquiryFilm'
import tableData from '@/../static/data/InquiryTable'

export default {
  name: 'InquiryDetails',
  components: { PageModel },
  data () {
    return {
      icon_search: '@/../static/img/icon_search.png',
      icon_film: '@/../static/img/icon_film.png',
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
      var endTime = Date.parse(endDate)
      /* 将日期时间转换为毫秒值 */
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
  #main-container .el-main {
    padding: 0;
  }

  #table-div .el-table td {
    padding: 15px 0;
    height: 19px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #666666;
  }

  #table-div .el-table th > .cell {
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #333333;
  }
</style>

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
  }

  #inquiry-main {
    margin-top: -20px;
  }

  #inquiry-data {
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 24px;
  }

  #inquiry-data .el-row {
    margin-top: 20px;
  }

  #inquiry-data .el-row-download {
    margin: 25px 0;
  }

  #inquiry-data .el-row-download .icon {
    width: 16px;
    height: 18px;
    display: inline-flex;
  }

  #inquiry-data .el-row-download .el-link {
    border: 1px solid rgba(0, 0, 0, 0);
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #0096c3;
    line-height: 24px;
  }

  #main-foot {
    margin-top: 40px;
  }

  #foot-button p {
    margin-top: 12px;
    margin-bottom: 0;
    height: 19px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: center;
    color: #f57d03;
  }

  .el-main {
    overflow: visible;
  }
</style>
