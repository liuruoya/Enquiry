<!--询价单列表-供应商-->
<template>
  <PageModel :icon-src="icon_search" title-name="询价公告" footer="true">
    <FilterInput slot="head-right" @filter="doFilter"></FilterInput>
    <el-container id="el-container">
      <el-main id="el-main">
        <el-row id="item-normal" v-for="item in dataList" :key="item.id">
          <el-col :span="20">
            <el-row class="item-name">
              <el-link href="#" target="_blank" class="link">
                {{ item.name }}
              </el-link>
            </el-row>
            <el-row class="item-date">
              <p>
                <span>发布时间：<span class="time">{{ item.star }}</span></span>
                <span style="margin-left: 20px">截止时间：<span class="time">{{ item.end }}</span></span>
              </p>
            </el-row>
          </el-col>
          <el-col :span="4">
            <div class="count-div">
              <p>报价供应商</p>
              <p>{{ item.count }}</p>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-row slot="footer" id="foot-page">
      <Page :total="pager.total" :limit="pager.limit" @changePage="getPage"></Page>
    </el-row>
  </PageModel>
</template>

<script>
import PageModel from '@/components/PagesModel'
import FilterInput from '@/components/FilterInput'
import Page from '@/components/Page'
// 测试用数据
import dataList from '@/../static/data/InquiryList'

export default {
  name: 'InquiryList',
  components: { PageModel, FilterInput, Page },
  data () {
    return {
      icon_search: '@/../static/img/icon_search.png',
      inputFilter: '',
      dataList: [],
      pager: {
        total: 0,
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    doFilter (input) {
      this.pager.page = 1
      this.inputFilter = input
      this.getData(this.inputFilter, 1, this.pager.limit)
      alert(input)
    },
    getPage (page) {
      this.pager.page = page
      this.getData(this.inputFilter, page, this.pager.limit)
    },
    getData (filter, page, limit) {
      this.dataList = dataList.data
      this.pager.total = dataList.count
      console.log(this.tableData)
    }
  },
  created () {
    this.getData(this.inputFilter, this.pager.page, this.pager.limit)
  }
}
</script>

<style scoped>
  #item-normal {
    border: 1px;
    border-bottom: 1px dashed #dedede;
    overflow: hidden;
    height: 100px;
  }

  #item-normal .item-name {
    margin-top: 30px;
    height: 21px;
    height: 21px;
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 24px;
  }

  #item-normal .item-date p {
    margin: 8px 0;
  }

  #item-normal .item-date {
    height: 16px;
    font-size: 12px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #999999;
    line-height: 24px;
  }

  #item-normal .item-date .time {
    color: #0096c3;
  }

  #item-normal .count-div {
    float: right;
    margin: 20px 0;
    padding: 10px;
    text-align: center;
    width: 92px;
    height: 46px;
    background: #f7f9fc;
    border-radius: 4px;
  }

  #item-normal .count-div p {
    margin: 0;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: center;
    color: #0096c3;
    line-height: 24px;
  }

  #el-container .el-main {
    padding: 0;
  }
</style>
