<!--帮助中心页面-->
<template>
  <PageModel :icon-src="icon_help" title-name="帮助中心">
    <FilterInput slot="head-right" @filter="doFilter"></FilterInput>
    <div id="help-table-div">
      <el-table :data="tableData" id="help-table"
                :show-header="false"><!--隐藏表头-->
        <el-table-column prop="date" label="类型" width="40px">
          <template slot-scope="scope">
            <el-image :src="icon_w" v-if="scope.row.type=='word'">
              <div slot="placeholder" class="image-slot" >
                word<span class="dot">...</span>
              </div>
            </el-image>
            <el-image :src="icon_p" v-if="scope.row.type=='pdf'">
              <div slot="placeholder" class="image-slot" >
                pdf<span class="dot">...</span>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" style="margin-left: -5px"></el-table-column>
        <el-table-column label="操作" width="130" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" plain size="mini" class="table-el-button"
                       @click="handleShow(scope.$index, scope.row)">查看
            </el-button>
            <el-button type="primary" plain size="mini" class="table-el-button"
                       @click="handleDownload(scope.$index, scope.row)">下载
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-row style="margin: 30px 0">
      <Page :total="pager.total" :limit="pager.limit" @changePage="getPage"></Page>
    </el-row>
  </PageModel>
</template>

<script>
import PageModel from '../../components/PageModel'
import Page from '../../components/Page'
import FilterInput from '../../components/FilterInput'
// 测试用数据
import datatable from '../../../static/data/helpcenter.json'

export default {
  name: 'HelpCenter',
  components: { PageModel, Page, FilterInput },
  data () {
    return {
      icon_help: '../../static/img/icon_help.png',
      icon_p: '../../static/img/icon_p.png',
      icon_w: '../../static/img/icon_w.png',
      inputFilter: '',
      tableData: [],
      pager: {
        total: 0,
        page: 1,
        limit: 10
      }
    }
  },
  computed: {},
  methods: {
    doFilter (inputFilter) {
      this.pager.page = 1
      this.inputFilter = inputFilter
      this.getTableData(this.inputFilter, 1, this.pager.limit)
    },
    handleShow (index, row) {
      console.log(index, row)
      alert('查看：' + row.id + row.name)
    },
    handleDownload(index, row) {
      console.log(index, row)
      alert('下载：' + row.id + row.name)
    },
    getPage (page) {
      this.pager.page = page
      this.getTableData(this.inputFilter, page, this.pager.limit)
    },
    getTableData (filter, page, limit) {
      this.tableData = datatable.data
      this.pager.total = datatable.count
      console.log(this.tableData)
    }
  },
  created () {
    this.getTableData(this.inputFilter, this.pager.page, this.pager.limit)
  }
}
</script>

<style rel="stylesheet/scss">
  #help-table-div .el-table td, .el-table th{
    padding: 15px 0;
  }
</style>

<style scoped>
  .el-table {
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 16px;
  }

  .el-button {
    width: 45px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #0096c3;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: center;
    color: #0096c3;
    letter-spacing: 3px;
  }

  .el-button--mini {
    padding: 0;
  }

</style>
